import type { Entry } from "../types.js";
import { CATEGORY_MAP } from "../categories.js";

/** A single validation finding. */
export interface Finding {
  /** Severity. `error` fails validation; `warning` is informational. */
  severity: "error" | "warning";
  /** Human-readable message. */
  message: string;
  /** The entry (or category) the finding refers to, when applicable. */
  ref?: string;
}

const GITHUB_REPO_RE = /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/;
const NPM_URL_RE = /^https:\/\/www\.npmjs\.com\/package\/(@[^/]+\/)?[^/]+$/;
const NPM_NAME_RE = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
const HTTPS_RE = /^https:\/\//;

/** Words that indicate promotional, non-objective descriptions. */
const PROMOTIONAL_WORDS = [
  "best",
  "amazing",
  "revolutionary",
  "fastest",
  "ultimate",
  "blazing",
  "incredible",
  "awesome",
  "powerful",
  "lightning",
  "super",
];

/** Maximum allowed description length. */
export const MAX_DESCRIPTION_LENGTH = 200;

/** Maximum allowed name length. */
export const MAX_NAME_LENGTH = 100;

function isError(f: Finding): boolean {
  return f.severity === "error";
}

/**
 * Validate a single entry against the schema and category registry.
 * Returns a list of findings (empty when the entry is valid).
 */
export function validateEntry(entry: Entry): Finding[] {
  const findings: Finding[] = [];
  const ref = entry.name;

  if (!entry.category) {
    findings.push({ severity: "error", message: "Missing category.", ref });
  } else if (!CATEGORY_MAP.has(entry.category)) {
    findings.push({
      severity: "error",
      message: `Unknown category "${entry.category}".`,
      ref,
    });
  }

  if (!entry.name) {
    findings.push({ severity: "error", message: "Missing name.", ref });
  } else if (entry.name.length > MAX_NAME_LENGTH) {
    findings.push({
      severity: "error",
      message: `Name exceeds ${MAX_NAME_LENGTH} characters.`,
      ref,
    });
  }

  if (!entry.repository) {
    findings.push({ severity: "error", message: "Missing repository URL.", ref });
  } else if (!HTTPS_RE.test(entry.repository)) {
    findings.push({
      severity: "error",
      message: `Repository URL must use HTTPS: ${entry.repository}`,
      ref,
    });
  } else if (!GITHUB_REPO_RE.test(entry.repository)) {
    findings.push({
      severity: "error",
      message: `Repository URL does not look like a GitHub repository: ${entry.repository}`,
      ref,
    });
  }

  if (entry.package && !NPM_NAME_RE.test(entry.package)) {
    findings.push({
      severity: "error",
      message: `Invalid npm package name "${entry.package}".`,
      ref,
    });
  }

  if (entry.packageUrl) {
    if (!HTTPS_RE.test(entry.packageUrl)) {
      findings.push({
        severity: "error",
        message: `Package URL must use HTTPS: ${entry.packageUrl}`,
        ref,
      });
    } else if (!NPM_URL_RE.test(entry.packageUrl)) {
      findings.push({
        severity: "error",
        message: `Package URL does not look like an npm URL: ${entry.packageUrl}`,
        ref,
      });
    }
  }

  if (entry.package && !entry.packageUrl) {
    findings.push({
      severity: "warning",
      message: `Package "${entry.package}" is set but packageUrl is missing.`,
      ref,
    });
  }

  if (!entry.description) {
    findings.push({ severity: "error", message: "Missing description.", ref });
  } else if (entry.description.length > MAX_DESCRIPTION_LENGTH) {
    findings.push({
      severity: "error",
      message: `Description exceeds ${MAX_DESCRIPTION_LENGTH} characters.`,
      ref,
    });
  } else {
    const lower = entry.description.toLowerCase();
    for (const word of PROMOTIONAL_WORDS) {
      if (lower.includes(word)) {
        findings.push({
          severity: "warning",
          message: `Description contains promotional word "${word}".`,
          ref,
        });
        break;
      }
    }
  }

  if (entry.website && !HTTPS_RE.test(entry.website)) {
    findings.push({
      severity: "error",
      message: `Website URL must use HTTPS: ${entry.website}`,
      ref,
    });
  }

  if (entry.status && entry.status !== "active" && entry.status !== "deprecated") {
    findings.push({
      severity: "error",
      message: `Invalid status "${entry.status}".`,
      ref,
    });
  }

  return findings;
}

/**
 * Validate a full list of entries, including cross-entry checks such as
 * duplicate URLs, duplicate package names, and alphabetical ordering.
 */
export function validateEntries(entries: Entry[]): Finding[] {
  const findings: Finding[] = [];

  for (const entry of entries) {
    findings.push(...validateEntry(entry));
  }

  // Duplicate repository URLs.
  const repoSeen = new Map<string, string>();
  for (const entry of entries) {
    const key = entry.repository.replace(/\/$/, "").toLowerCase();
    const prev = repoSeen.get(key);
    if (prev) {
      findings.push({
        severity: "error",
        message: `Duplicate repository URL "${entry.repository}" (also used by "${prev}").`,
        ref: entry.name,
      });
    } else {
      repoSeen.set(key, entry.name);
    }
  }

  // Duplicate package names.
  const pkgSeen = new Map<string, string>();
  for (const entry of entries) {
    if (!entry.package) continue;
    const key = entry.package.toLowerCase();
    const prev = pkgSeen.get(key);
    if (prev) {
      findings.push({
        severity: "error",
        message: `Duplicate package name "${entry.package}" (also used by "${prev}").`,
        ref: entry.name,
      });
    } else {
      pkgSeen.set(key, entry.name);
    }
  }

  // Duplicate names within the same category.
  const nameSeen = new Map<string, string>();
  for (const entry of entries) {
    const key = `${entry.category}::${entry.name.toLowerCase()}`;
    const prev = nameSeen.get(key);
    if (prev) {
      findings.push({
        severity: "error",
        message: `Duplicate entry name "${entry.name}" in category "${entry.category}" (also used by "${prev}").`,
        ref: entry.name,
      });
    } else {
      nameSeen.set(key, entry.name);
    }
  }

  // Alphabetical ordering within each category.
  const byCategory = new Map<string, Entry[]>();
  for (const entry of entries) {
    const list = byCategory.get(entry.category) ?? [];
    list.push(entry);
    byCategory.set(entry.category, list);
  }
  for (const [category, list] of byCategory) {
    for (let i = 1; i < list.length; i++) {
      const prev = list[i - 1]!;
      const curr = list[i]!;
      if (compareNames(prev.name, curr.name) > 0) {
        findings.push({
          severity: "error",
          message: `Entries in category "${category}" are not alphabetically sorted: "${curr.name}" should come before "${prev.name}".`,
          ref: curr.name,
        });
      }
    }
  }

  return findings;
}

/** Case-insensitive, locale-aware name comparison for deterministic sorting. */
export function compareNames(a: string, b: string): number {
  return a.localeCompare(b, "en", { sensitivity: "base", numeric: true });
}

/** Group findings by severity. */
export function summarize(findings: Finding[]): {
  errors: Finding[];
  warnings: Finding[];
} {
  return {
    errors: findings.filter(isError),
    warnings: findings.filter((f) => !isError(f)),
  };
}
