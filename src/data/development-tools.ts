import type { Entry } from "../types.js";

/** Development tools for building, shipping, and maintaining TypeScript projects. */
export const developmentTools: Entry[] = [
  // ---------------------------------------------------------------------------
  // Bundlers
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/build-tools",
    name: "esbuild/esbuild",
    repository: "https://github.com/evanw/esbuild",
    package: "esbuild",
    packageUrl: "https://www.npmjs.com/package/esbuild",
    description: "An extremely fast JavaScript and TypeScript bundler and minifier.",
  },
  {
    category: "development-tools/build-tools",
    name: "gulpjs/gulp",
    repository: "https://github.com/gulpjs/gulp",
    package: "gulp",
    packageUrl: "https://www.npmjs.com/package/gulp",
    description: "Streaming build system for automating tasks.",
  },
  {
    category: "development-tools/build-tools",
    name: "microsoft/rushstack",
    repository: "https://github.com/microsoft/rushstack",
    description: "Scalable monorepo tooling for the web.",
  },
  {
    category: "development-tools/build-tools",
    name: "rollup/rollup",
    repository: "https://github.com/rollup/rollup",
    package: "rollup",
    packageUrl: "https://www.npmjs.com/package/rollup",
    description: "Module bundler for JavaScript and TypeScript libraries.",
  },
  {
    category: "development-tools/build-tools",
    name: "webpack/webpack",
    repository: "https://github.com/webpack/webpack",
    package: "webpack",
    packageUrl: "https://www.npmjs.com/package/webpack",
    description: "A bundler for JavaScript, TypeScript, and other web assets.",
  },
  // ---------------------------------------------------------------------------
  // Compilers
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/bundlers",
    name: "parcel-bundler/parcel",
    repository: "https://github.com/parcel-bundler/parcel",
    package: "parcel",
    packageUrl: "https://www.npmjs.com/package/parcel",
    description: "Zero-configuration web application bundler.",
  },
  {
    category: "development-tools/bundlers",
    name: "preactjs/wmr",
    repository: "https://github.com/preactjs/wmr",
    package: "wmr",
    packageUrl: "https://www.npmjs.com/package/wmr",
    description: "Tiny all-in-one development tool for modern web apps.",
  },
  {
    category: "development-tools/bundlers",
    name: "rolldown/rolldown",
    repository: "https://github.com/rolldown/rolldown",
    package: "rolldown",
    packageUrl: "https://www.npmjs.com/package/rolldown",
    description: "Fast Rust-based bundler with a Rollup-compatible API.",
  },
  {
    category: "development-tools/bundlers",
    name: "vitejs/vite",
    repository: "https://github.com/vitejs/vite",
    package: "vite",
    packageUrl: "https://www.npmjs.com/package/vite",
    description: "Next-generation frontend tooling with a fast dev server.",
  },
  // ---------------------------------------------------------------------------
  // Code Generation
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/compilers",
    name: "babel/babel",
    repository: "https://github.com/babel/babel",
    package: "@babel/core",
    packageUrl: "https://www.npmjs.com/package/@babel/core",
    description: "A compiler for writing next-generation JavaScript and TypeScript.",
  },
  {
    category: "development-tools/compilers",
    name: "microsoft/TypeScript",
    repository: "https://github.com/microsoft/TypeScript",
    package: "typescript",
    packageUrl: "https://www.npmjs.com/package/typescript",
    description: "The official TypeScript compiler and language service.",
  },
  {
    category: "development-tools/compilers",
    name: "oxc-project/oxc",
    repository: "https://github.com/oxc-project/oxc",
    description: "A suite of high-performance tools written in Rust for JavaScript and TypeScript.",
  },
  {
    category: "development-tools/compilers",
    name: "swc-project/swc",
    repository: "https://github.com/swc-project/swc",
    package: "@swc/core",
    packageUrl: "https://www.npmjs.com/package/@swc/core",
    description: "A TypeScript and JavaScript compiler written in Rust.",
  },
  // ---------------------------------------------------------------------------
  // Documentation
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/code-generation",
    name: "graphql/codegen",
    repository: "https://github.com/dotansimha/graphql-code-generator",
    package: "@graphql-codegen/cli",
    packageUrl: "https://www.npmjs.com/package/@graphql-codegen/cli",
    description: "Generate code from your GraphQL schema and operations.",
  },
  {
    category: "development-tools/code-generation",
    name: "openapi-ts/openapi-typescript",
    repository: "https://github.com/openapi-ts/openapi-typescript",
    package: "openapi-typescript",
    packageUrl: "https://www.npmjs.com/package/openapi-typescript",
    description: "Generate TypeScript types from OpenAPI schemas.",
  },
  // ---------------------------------------------------------------------------
  // Linting
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/documentation",
    name: "facebook/docusaurus",
    repository: "https://github.com/facebook/docusaurus",
    package: "@docusaurus/core",
    packageUrl: "https://www.npmjs.com/package/@docusaurus/core",
    description: "Easy-to-maintain open-source documentation websites.",
  },
  {
    category: "development-tools/documentation",
    name: "microsoft/typedoc",
    repository: "https://github.com/TypeStrong/typedoc",
    package: "typedoc",
    packageUrl: "https://www.npmjs.com/package/typedoc",
    description: "Documentation generator for TypeScript projects.",
  },
  {
    category: "development-tools/documentation",
    name: "storybookjs/storybook",
    repository: "https://github.com/storybookjs/storybook",
    package: "storybook",
    packageUrl: "https://www.npmjs.com/package/storybook",
    description: "Frontend workshop for building UI components in isolation.",
  },
  {
    category: "development-tools/documentation",
    name: "vitepress/vitepress",
    repository: "https://github.com/vuejs/vitepress",
    package: "vitepress",
    packageUrl: "https://www.npmjs.com/package/vitepress",
    description: "Vite-powered static site generator for documentation.",
  },
  // ---------------------------------------------------------------------------
  // Formatting
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/linting",
    name: "biomejs/biome",
    repository: "https://github.com/biomejs/biome",
    package: "@biomejs/biome",
    packageUrl: "https://www.npmjs.com/package/@biomejs/biome",
    description: "Fast formatter and linter for JavaScript and TypeScript.",
  },
  {
    category: "development-tools/linting",
    name: "eslint/eslint",
    repository: "https://github.com/eslint/eslint",
    package: "eslint",
    packageUrl: "https://www.npmjs.com/package/eslint",
    description: "Find and fix problems in your JavaScript and TypeScript code.",
  },
  {
    category: "development-tools/linting",
    name: "typescript-eslint/typescript-eslint",
    repository: "https://github.com/typescript-eslint/typescript-eslint",
    package: "@typescript-eslint/parser",
    packageUrl: "https://www.npmjs.com/package/@typescript-eslint/parser",
    description: "Tooling that enables ESLint to lint TypeScript code.",
  },
  // ---------------------------------------------------------------------------
  // Package Management
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/formatting",
    name: "prettier/prettier",
    repository: "https://github.com/prettier/prettier",
    package: "prettier",
    packageUrl: "https://www.npmjs.com/package/prettier",
    description: "An opinionated code formatter supporting TypeScript.",
  },
  // ---------------------------------------------------------------------------
  // Monorepos
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/package-management",
    name: "npm/cli",
    repository: "https://github.com/npm/cli",
    package: "npm",
    packageUrl: "https://www.npmjs.com/package/npm",
    description: "The package manager for the JavaScript and TypeScript ecosystem.",
  },
  {
    category: "development-tools/package-management",
    name: "pnpm/pnpm",
    repository: "https://github.com/pnpm/pnpm",
    package: "pnpm",
    packageUrl: "https://www.npmjs.com/package/pnpm",
    description: "Fast, disk-space-efficient package manager.",
  },
  {
    category: "development-tools/package-management",
    name: "yarnpkg/berry",
    repository: "https://github.com/yarnpkg/berry",
    package: "yarn",
    packageUrl: "https://www.npmjs.com/package/yarn",
    description: "Modern, reliable package management with workspaces.",
  },
  // ---------------------------------------------------------------------------
  // Project Scaffolding
  // ---------------------------------------------------------------------------
  {
    category: "development-tools/monorepos",
    name: "changesets/changesets",
    repository: "https://github.com/changesets/changesets",
    package: "@changesets/cli",
    packageUrl: "https://www.npmjs.com/package/@changesets/cli",
    description: "A way to manage your versioning and changelogs.",
  },
  {
    category: "development-tools/monorepos",
    name: "lerna/lerna",
    repository: "https://github.com/lerna/lerna",
    package: "lerna",
    packageUrl: "https://www.npmjs.com/package/lerna",
    description: "Tool for managing JavaScript and TypeScript projects with multiple packages.",
  },
  {
    category: "development-tools/monorepos",
    name: "nx/nx",
    repository: "https://github.com/nrwl/nx",
    package: "nx",
    packageUrl: "https://www.npmjs.com/package/nx",
    description: "Smart, fast, and extensible build system for monorepos.",
  },
  {
    category: "development-tools/monorepos",
    name: "turborepo/turborepo",
    repository: "https://github.com/vercel/turbo",
    package: "turbo",
    packageUrl: "https://www.npmjs.com/package/turbo",
    description: "Incremental bundler and build system for monorepos.",
  },
  {
    category: "development-tools/scaffolding",
    name: "create-t3-app/create-t3-app",
    repository: "https://github.com/t3-oss/create-t3-app",
    package: "create-t3-app",
    packageUrl: "https://www.npmjs.com/package/create-t3-app",
    description: "Interactive CLI for scaffolding a full-stack TypeScript app.",
  },
  {
    category: "development-tools/scaffolding",
    name: "yeoman/yo",
    repository: "https://github.com/yeoman/yo",
    package: "yo",
    packageUrl: "https://www.npmjs.com/package/yo",
    description: "Scaffolding tool for running Yeoman generators.",
  },
];
