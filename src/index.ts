/**
 * Programmatic entry point for the awesome-typescript tooling.
 *
 * The CLI commands live in `scripts/`; this module exposes the core building
 * blocks (data, validation, generation) for reuse and testing.
 */

export { ENTRIES } from "./data/index.js";
export { CATEGORIES, CATEGORY_MAP, TOP_LEVEL_IDS } from "./categories.js";
export type { Entry, Category, EntryStatus } from "./types.js";
export { validateEntries, validateEntry, summarize, compareNames } from "./validators/validate.js";
export type { Finding } from "./validators/validate.js";
export {
  generateContent,
  renderEntry,
  spliceGenerated,
  groupByCategory,
  GENERATED_START,
  GENERATED_END,
} from "./generators/generate.js";
