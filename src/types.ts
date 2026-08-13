/**
 * Core data model for the curated list.
 *
 * The source of truth is a set of structured TypeScript data files under
 * `src/data/`. Each entry describes a single project. The README is generated
 * deterministically from this data and must never be edited by hand.
 */

/** Lifecycle status of a listed project. */
export type EntryStatus = "active" | "deprecated";

/**
 * A single curated project entry.
 *
 * `category` is the canonical category id (see `src/categories.ts`). Every
 * project belongs to exactly one primary category.
 */
export interface Entry {
  /** Canonical category id, e.g. "libraries/http". */
  category: string;
  /**
   * Display name. For GitHub-hosted projects this is conventionally
   * "account/repository", e.g. "microsoft/TypeScript".
   */
  name: string;
  /** Primary repository URL. Must be HTTPS. */
  repository: string;
  /** npm package name, if the project publishes one. */
  package?: string;
  /** npm package URL. Must be HTTPS. */
  packageUrl?: string;
  /** Short, objective, single-sentence description. */
  description: string;
  /** Optional project website. Must be HTTPS. */
  website?: string;
  /** Optional free-form tags for future filtering. */
  tags?: string[];
  /** Lifecycle status. Defaults to "active". */
  status?: EntryStatus;
}

/** A category in the hierarchy. */
export interface Category {
  /** Unique category id, e.g. "libraries/http". */
  id: string;
  /** Human-readable heading, e.g. "HTTP". */
  title: string;
  /** Parent category id, if this is a subcategory. */
  parent?: string;
  /** Optional short description shown under the heading. */
  description?: string;
}
