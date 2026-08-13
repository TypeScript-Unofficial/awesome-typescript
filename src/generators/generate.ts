import type { Entry } from "../types.js";
import { CATEGORIES, CATEGORY_MAP, TOP_LEVEL_IDS } from "../categories.js";
import { compareNames } from "../validators/validate.js";

/** Markers delimiting the generated portion of the README. */
export const GENERATED_START = "<!-- START GENERATED CONTENT -->";
export const GENERATED_END = "<!-- END GENERATED CONTENT -->";

/** Slugify a heading for an anchor link. */
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Render a single entry line in the canonical format. */
export function renderEntry(entry: Entry): string {
  const repo = `[${entry.name}](${entry.repository})`;
  const pkg = entry.package && entry.packageUrl ? ` [[${entry.package}](${entry.packageUrl})]` : "";
  const deprecated = entry.status === "deprecated" ? " _(deprecated)_" : "";
  return `- ${repo}${pkg} - ${entry.description}${deprecated}`;
}

/** Build the table of contents as a nested markdown list. */
function buildToc(entriesByCategory: ReadonlyMap<string, Entry[]>): string {
  const lines: string[] = [];
  for (const topId of TOP_LEVEL_IDS) {
    const top = CATEGORY_MAP.get(topId)!;
    const children = CATEGORIES.filter((c) => c.parent === topId);
    const hasTopEntries = (entriesByCategory.get(topId)?.length ?? 0) > 0;
    const hasChildren = children.some((c) => (entriesByCategory.get(c.id)?.length ?? 0) > 0);
    if (!hasTopEntries && !hasChildren) continue;

    const anchor = slugify(top.title);
    lines.push(`- [${top.title}](#${anchor})`);
    for (const child of children) {
      if ((entriesByCategory.get(child.id)?.length ?? 0) === 0) continue;
      const childAnchor = slugify(child.title);
      lines.push(`  - [${child.title}](#${childAnchor})`);
    }
  }
  return lines.join("\n");
}

/** Build all category sections. */
function buildSections(entriesByCategory: ReadonlyMap<string, Entry[]>): string {
  const blocks: string[] = [];

  for (const topId of TOP_LEVEL_IDS) {
    const top = CATEGORY_MAP.get(topId)!;
    blocks.push(`## ${top.title}`);
    if (top.description) {
      blocks.push("");
      blocks.push(top.description);
    }
    blocks.push("");

    const children = CATEGORIES.filter((c) => c.parent === topId);
    const hasChildren = children.some((c) => (entriesByCategory.get(c.id)?.length ?? 0) > 0);

    // Top-level entries (rare; usually entries live in subcategories).
    const topEntries = entriesByCategory.get(topId) ?? [];
    if (topEntries.length > 0) {
      blocks.push(...renderEntryList(topEntries));
    }

    for (const child of children) {
      const entries = entriesByCategory.get(child.id) ?? [];
      if (entries.length === 0) continue;
      blocks.push(`### ${child.title}`);
      if (child.description) {
        blocks.push("");
        blocks.push(child.description);
      }
      blocks.push("");
      blocks.push(...renderEntryList(entries));
      blocks.push("");
    }

    if (!hasChildren && topEntries.length === 0) {
      blocks.push("_No entries yet._");
    }
    blocks.push("");
  }

  return blocks
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function renderEntryList(entries: Entry[]): string[] {
  return entries.map(renderEntry);
}

/** Group entries by category. */
export function groupByCategory(entries: Entry[]): Map<string, Entry[]> {
  const map = new Map<string, Entry[]>();
  for (const entry of entries) {
    const list = map.get(entry.category) ?? [];
    list.push(entry);
    map.set(entry.category, list);
  }
  for (const list of map.values()) {
    list.sort((a, b) => compareNames(a.name, b.name));
  }
  return map;
}

/**
 * Generate the full generated block (TOC + sections) from a list of entries.
 * Entries are grouped and sorted deterministically.
 */
export function generateContent(entries: Entry[]): string {
  const grouped = groupByCategory(entries);
  const toc = buildToc(grouped);
  const sections = buildSections(grouped);
  return `${GENERATED_START}\n\n## Table of Contents\n\n${toc}\n\n${sections}\n\n${GENERATED_END}`;
}

/**
 * Replace the generated portion of a README body between the markers.
 * Hand-authored content outside the markers is preserved.
 */
export function spliceGenerated(readme: string, generated: string): string {
  const startIdx = readme.indexOf(GENERATED_START);
  const endIdx = readme.indexOf(GENERATED_END);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error(
      `README is missing the generated-content markers (${GENERATED_START} / ${GENERATED_END}).`,
    );
  }
  const head = readme.slice(0, startIdx).replace(/\s+$/, "");
  const tail = readme.slice(endIdx + GENERATED_END.length).replace(/^\s+/, "");
  return `${head}\n\n${generated}\n\n${tail}`;
}
