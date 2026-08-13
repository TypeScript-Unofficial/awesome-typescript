import type { Category } from "./types.js";

/**
 * Category hierarchy.
 *
 * The order of this array defines the order in which sections appear in the
 * generated README. Top-level categories have no `parent`; subcategories point
 * at their parent's id. Every entry's `category` must reference one of these
 * ids.
 *
 * Keep the hierarchy broad enough for long-term growth but not overly
 * fragmented. Each project should have one clear canonical category.
 */
export const CATEGORIES: Category[] = [
  // ---------------------------------------------------------------------------
  // Applications
  // ---------------------------------------------------------------------------
  {
    id: "applications",
    title: "Applications",
    description: "End-user applications written in or powered by TypeScript.",
  },
  { id: "applications/cli", title: "CLI Applications", parent: "applications" },
  { id: "applications/desktop", title: "Desktop Applications", parent: "applications" },
  { id: "applications/developer", title: "Developer Applications", parent: "applications" },
  { id: "applications/web", title: "Web Applications", parent: "applications" },
  { id: "applications/games", title: "Games", parent: "applications" },

  // ---------------------------------------------------------------------------
  // Development Tools
  // ---------------------------------------------------------------------------
  {
    id: "development-tools",
    title: "Development Tools",
    description: "Tools that help you build, ship, and maintain TypeScript projects.",
  },
  { id: "development-tools/build-tools", title: "Build Tools", parent: "development-tools" },
  { id: "development-tools/bundlers", title: "Bundlers", parent: "development-tools" },
  { id: "development-tools/compilers", title: "Compilers", parent: "development-tools" },
  {
    id: "development-tools/code-generation",
    title: "Code Generation",
    parent: "development-tools",
  },
  { id: "development-tools/documentation", title: "Documentation", parent: "development-tools" },
  { id: "development-tools/linting", title: "Linting", parent: "development-tools" },
  { id: "development-tools/formatting", title: "Formatting", parent: "development-tools" },
  {
    id: "development-tools/package-management",
    title: "Package Management",
    parent: "development-tools",
  },
  { id: "development-tools/monorepos", title: "Monorepos", parent: "development-tools" },
  {
    id: "development-tools/scaffolding",
    title: "Project Scaffolding",
    parent: "development-tools",
  },

  // ---------------------------------------------------------------------------
  // Libraries
  // ---------------------------------------------------------------------------
  {
    id: "libraries",
    title: "Libraries",
    description: "Reusable libraries and frameworks for building TypeScript applications.",
  },
  { id: "libraries/ai", title: "AI and LLM", parent: "libraries" },
  { id: "libraries/authentication", title: "Authentication", parent: "libraries" },
  { id: "libraries/authorization", title: "Authorization", parent: "libraries" },
  { id: "libraries/backend", title: "Backend Frameworks", parent: "libraries" },
  { id: "libraries/cli", title: "CLI", parent: "libraries" },
  { id: "libraries/configuration", title: "Configuration", parent: "libraries" },
  { id: "libraries/date-time", title: "Date and Time", parent: "libraries" },
  { id: "libraries/database", title: "Database", parent: "libraries" },
  { id: "libraries/http", title: "HTTP", parent: "libraries" },
  { id: "libraries/logging", title: "Logging", parent: "libraries" },
  { id: "libraries/messaging", title: "Messaging", parent: "libraries" },
  { id: "libraries/orm", title: "ORM and Query Builders", parent: "libraries" },
  { id: "libraries/parsing", title: "Parsing", parent: "libraries" },
  { id: "libraries/serialization", title: "Serialization", parent: "libraries" },
  { id: "libraries/validation", title: "Validation", parent: "libraries" },
  { id: "libraries/testing", title: "Testing", parent: "libraries" },
  { id: "libraries/observability", title: "Observability", parent: "libraries" },
  { id: "libraries/websockets", title: "WebSockets", parent: "libraries" },
  { id: "libraries/utilities", title: "Utilities", parent: "libraries" },

  // ---------------------------------------------------------------------------
  // Frontend
  // ---------------------------------------------------------------------------
  {
    id: "frontend",
    title: "Frontend",
    description: "Libraries and frameworks for building user interfaces.",
  },
  { id: "frontend/frameworks", title: "Frameworks", parent: "frontend" },
  { id: "frontend/ui-libraries", title: "UI Libraries", parent: "frontend" },
  { id: "frontend/routing", title: "Routing", parent: "frontend" },
  { id: "frontend/state-management", title: "State Management", parent: "frontend" },
  { id: "frontend/forms", title: "Forms", parent: "frontend" },
  { id: "frontend/styling", title: "Styling", parent: "frontend" },
  { id: "frontend/animation", title: "Animation", parent: "frontend" },
  { id: "frontend/data-fetching", title: "Data Fetching", parent: "frontend" },
  { id: "frontend/charts", title: "Charts and Visualization", parent: "frontend" },

  // ---------------------------------------------------------------------------
  // Node.js
  // ---------------------------------------------------------------------------
  { id: "nodejs", title: "Node.js", description: "Libraries and tools for the Node.js runtime." },
  { id: "nodejs/frameworks", title: "Frameworks", parent: "nodejs" },
  { id: "nodejs/process-management", title: "Process Management", parent: "nodejs" },
  { id: "nodejs/filesystem", title: "File System", parent: "nodejs" },
  { id: "nodejs/streams", title: "Streams", parent: "nodejs" },
  { id: "nodejs/workers", title: "Workers", parent: "nodejs" },

  // ---------------------------------------------------------------------------
  // Infrastructure
  // ---------------------------------------------------------------------------
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "Tools for deploying and operating TypeScript services.",
  },
  { id: "infrastructure/cloud", title: "Cloud", parent: "infrastructure" },
  { id: "infrastructure/serverless", title: "Serverless", parent: "infrastructure" },
  { id: "infrastructure/containers", title: "Containers", parent: "infrastructure" },
  { id: "infrastructure/iac", title: "Infrastructure as Code", parent: "infrastructure" },

  // ---------------------------------------------------------------------------
  // Security
  // ---------------------------------------------------------------------------
  {
    id: "security",
    title: "Security",
    description: "Libraries and tools for securing TypeScript applications.",
  },
  { id: "security/cryptography", title: "Cryptography", parent: "security" },
  { id: "security/testing", title: "Security Testing", parent: "security" },

  // ---------------------------------------------------------------------------
  // Learning
  // ---------------------------------------------------------------------------
  { id: "learning", title: "Learning", description: "Resources for learning TypeScript." },
  { id: "learning/official-resources", title: "Official Resources", parent: "learning" },
  { id: "learning/tutorials", title: "Tutorials", parent: "learning" },
  { id: "learning/courses", title: "Courses", parent: "learning" },
  { id: "learning/books", title: "Books", parent: "learning" },
  { id: "learning/articles", title: "Articles", parent: "learning" },
  { id: "learning/videos", title: "Videos", parent: "learning" },
  { id: "learning/podcasts", title: "Podcasts", parent: "learning" },
  { id: "learning/examples", title: "Example Projects", parent: "learning" },

  // ---------------------------------------------------------------------------
  // Community
  // ---------------------------------------------------------------------------
  {
    id: "community",
    title: "Community",
    description: "Community resources for TypeScript developers.",
  },
  { id: "community/newsletters", title: "Newsletters", parent: "community" },
  { id: "community/communities", title: "Communities", parent: "community" },
  { id: "community/conferences", title: "Conferences", parent: "community" },
];

/** Map of category id -> Category for fast lookup. */
export const CATEGORY_MAP: ReadonlyMap<string, Category> = new Map(
  CATEGORIES.map((c) => [c.id, c]),
);

/** Top-level category ids, in display order. */
export const TOP_LEVEL_IDS: readonly string[] = CATEGORIES.filter((c) => !c.parent).map(
  (c) => c.id,
);
