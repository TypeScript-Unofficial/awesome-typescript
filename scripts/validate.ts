import { ENTRIES } from "../src/data/index.js";
import { validateEntries, summarize } from "../src/validators/validate.js";

const findings = validateEntries(ENTRIES);
const { errors, warnings } = summarize(findings);

for (const w of warnings) {
  console.warn(`warning: ${w.ref ? `[${w.ref}] ` : ""}${w.message}`);
}
for (const e of errors) {
  console.error(`error: ${e.ref ? `[${e.ref}] ` : ""}${e.message}`);
}

console.log(
  `\nValidated ${ENTRIES.length} entries: ${errors.length} error(s), ${warnings.length} warning(s).`,
);

if (errors.length > 0) {
  process.exitCode = 1;
}
