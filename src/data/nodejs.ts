import type { Entry } from "../types.js";

/** Libraries and tools for the Node.js runtime. */
export const nodejs: Entry[] = [
  // ---------------------------------------------------------------------------
  // Frameworks
  // ---------------------------------------------------------------------------
  {
    category: "nodejs/frameworks",
    name: "adonisjs/core",
    repository: "https://github.com/adonisjs/core",
    package: "@adonisjs/core",
    packageUrl: "https://www.npmjs.com/package/@adonisjs/core",
    description: "A fully featured web framework for Node.js.",
  },
  {
    category: "nodejs/frameworks",
    name: "honojs/hono",
    repository: "https://github.com/honojs/hono",
    package: "hono",
    packageUrl: "https://www.npmjs.com/package/hono",
    description: "Small, fast, and light web framework that runs on many runtimes.",
  },
  {
    category: "nodejs/frameworks",
    name: "loopbackio/loopback-next",
    repository: "https://github.com/loopbackio/loopback-next",
    package: "@loopback/core",
    packageUrl: "https://www.npmjs.com/package/@loopback/core",
    description: "Highly extensible Node.js and TypeScript framework for building APIs.",
  },
  {
    category: "nodejs/frameworks",
    name: "sveltejs/kit",
    repository: "https://github.com/sveltejs/kit",
    package: "@sveltejs/kit",
    packageUrl: "https://www.npmjs.com/package/@sveltejs/kit",
    description: "Web development framework for building fast applications with Svelte.",
  },

  // ---------------------------------------------------------------------------
  // Process Management
  // ---------------------------------------------------------------------------
  {
    category: "nodejs/process-management",
    name: "pm2/pm2",
    repository: "https://github.com/Unitech/pm2",
    package: "pm2",
    packageUrl: "https://www.npmjs.com/package/pm2",
    description: "Production process manager for Node.js applications.",
  },
  {
    category: "nodejs/process-management",
    name: "sindresorhus/execa",
    repository: "https://github.com/sindresorhus/execa",
    package: "execa",
    packageUrl: "https://www.npmjs.com/package/execa",
    description: "Process execution for humans with a modern API.",
  },

  // ---------------------------------------------------------------------------
  // File System
  // ---------------------------------------------------------------------------
  {
    category: "nodejs/filesystem",
    name: "isaacs/node-graceful-fs",
    repository: "https://github.com/isaacs/node-graceful-fs",
    package: "graceful-fs",
    packageUrl: "https://www.npmjs.com/package/graceful-fs",
    description: "Drop-in replacement for fs with improvements.",
  },
  {
    category: "nodejs/filesystem",
    name: "sindresorhus/globby",
    repository: "https://github.com/sindresorhus/globby",
    package: "globby",
    packageUrl: "https://www.npmjs.com/package/globby",
    description: "User-friendly glob matching with a Promise API.",
  },

  // ---------------------------------------------------------------------------
  // Streams
  // ---------------------------------------------------------------------------
  {
    category: "nodejs/streams",
    name: "mafintosh/through2",
    repository: "https://github.com/rvagg/through2",
    package: "through2",
    packageUrl: "https://www.npmjs.com/package/through2",
    description: "Tiny wrapper around Node.js streams for transform streams.",
  },
  {
    category: "nodejs/streams",
    name: "nodejs/readable-stream",
    repository: "https://github.com/nodejs/readable-stream",
    package: "readable-stream",
    packageUrl: "https://www.npmjs.com/package/readable-stream",
    description: "Streams3, a user-land copy of the stream library from Node.js.",
  },

  // ---------------------------------------------------------------------------
  // Workers
  // ---------------------------------------------------------------------------
  {
    category: "nodejs/workers",
    name: "piscinajs/piscina",
    repository: "https://github.com/piscinajs/piscina",
    package: "piscina",
    packageUrl: "https://www.npmjs.com/package/piscina",
    description: "A fast, efficient Node.js Worker Thread Pool implementation.",
  },
];
