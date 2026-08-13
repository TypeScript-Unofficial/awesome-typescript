import { ENTRIES } from "../src/data/index.js";

/**
 * Lightweight link checker for the curated list.
 *
 * It checks every repository, package, and website URL in the source data.
 * To avoid flaky failures, it retries transient responses and treats
 * temporary errors (429, 5xx, network failures) as warnings rather than
 * hard failures. Only permanent 404/410 responses fail the check.
 */

interface CheckResult {
  url: string;
  status: "ok" | "permanent" | "temporary" | "network";
  detail: string;
}

const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 1000;
const TIMEOUT_MS = 15000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * npmjs.com blocks non-browser user agents with HTTP 403, which would make
 * every package link look broken. Instead, verify npm packages against the
 * npm registry API, which returns 200 for existing packages and 404 for
 * missing ones.
 */
function npmRegistryUrl(packageUrl: string): string | null {
  const m = packageUrl.match(/^https:\/\/www\.npmjs\.com\/package\/(.+)$/);
  if (!m) return null;
  return `https://registry.npmjs.org/${m[1]}`;
}

async function checkUrl(url: string): Promise<CheckResult> {
  const target = npmRegistryUrl(url) ?? url;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(target, {
        method: "GET",
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": "awesome-typescript-link-check" },
      });
      clearTimeout(timer);

      if (res.status === 404 || res.status === 410) {
        return { url, status: "permanent", detail: `HTTP ${res.status}` };
      }
      if (res.status === 429 || res.status >= 500) {
        // Transient — retry, then warn.
        if (attempt < MAX_RETRIES) {
          await sleep(RETRY_DELAY_MS * (attempt + 1));
          continue;
        }
        return { url, status: "temporary", detail: `HTTP ${res.status}` };
      }
      if (res.ok) {
        return { url, status: "ok", detail: `HTTP ${res.status}` };
      }
      // Other 4xx (e.g. 403) — treat as temporary to avoid false failures.
      return { url, status: "temporary", detail: `HTTP ${res.status}` };
    } catch (err) {
      clearTimeout(timer);
      if (attempt < MAX_RETRIES) {
        await sleep(RETRY_DELAY_MS * (attempt + 1));
        continue;
      }
      const reason = err instanceof Error ? err.message : String(err);
      return { url, status: "network", detail: reason };
    }
  }
  return { url, status: "network", detail: "unreachable" };
}

const urls = new Set<string>();
for (const entry of ENTRIES) {
  urls.add(entry.repository);
  if (entry.packageUrl) urls.add(entry.packageUrl);
  if (entry.website) urls.add(entry.website);
}

const results = await Promise.all([...urls].map(checkUrl));

let ok = 0;
let permanent = 0;
let temporary = 0;
let network = 0;

for (const r of results) {
  switch (r.status) {
    case "ok":
      ok++;
      break;
    case "permanent":
      permanent++;
      console.error(`error: ${r.url} -> ${r.detail}`);
      break;
    case "temporary":
      temporary++;
      console.warn(`warning: ${r.url} -> ${r.detail}`);
      break;
    case "network":
      network++;
      console.warn(`warning: ${r.url} -> network: ${r.detail}`);
      break;
  }
}

console.log(
  `\nChecked ${results.length} URLs: ${ok} ok, ${permanent} permanent failure(s), ` +
    `${temporary} temporary, ${network} network.`,
);

if (permanent > 0) {
  process.exitCode = 1;
}
