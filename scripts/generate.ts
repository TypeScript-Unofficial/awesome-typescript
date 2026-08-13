import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

import { ENTRIES } from "../src/data/index.js";
import { validateEntries, summarize } from "../src/validators/validate.js";
import { generateContent, spliceGenerated } from "../src/generators/generate.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const readmePath = resolve(repoRoot, "README.md");

// Validate before generating so we never emit output from invalid data.
const findings = validateEntries(ENTRIES);
const { errors } = summarize(findings);
if (errors.length > 0) {
  for (const e of errors) {
    console.error(`error: ${e.ref ? `[${e.ref}] ` : ""}${e.message}`);
  }
  console.error(`\nRefusing to generate README: ${errors.length} validation error(s).`);
  process.exit(1);
}

const readme = readFileSync(readmePath, "utf8");
const generated = generateContent(ENTRIES);
const next = spliceGenerated(readme, generated);
writeFileSync(readmePath, next);

console.log(`Generated README.md from ${ENTRIES.length} entries.`);
