import type { Entry } from "../types.js";

/** Reusable libraries and frameworks for building TypeScript applications. */
export const libraries: Entry[] = [
  // ---------------------------------------------------------------------------
  // AI and LLM
  // ---------------------------------------------------------------------------
  {
    category: "libraries/ai",
    name: "langchain-ai/langchainjs",
    repository: "https://github.com/langchain-ai/langchainjs",
    package: "langchain",
    packageUrl: "https://www.npmjs.com/package/langchain",
    description: "Framework for building applications with large language models.",
  },
  {
    category: "libraries/ai",
    name: "openai/openai-node",
    repository: "https://github.com/openai/openai-node",
    package: "openai",
    packageUrl: "https://www.npmjs.com/package/openai",
    description: "Official Node.js client for the OpenAI API.",
  },
  {
    category: "libraries/ai",
    name: "vercel/ai",
    repository: "https://github.com/vercel/ai",
    package: "ai",
    packageUrl: "https://www.npmjs.com/package/ai",
    description: "TypeScript toolkit for building AI-powered applications.",
  },

  // ---------------------------------------------------------------------------
  // Authentication
  // ---------------------------------------------------------------------------
  {
    category: "libraries/authentication",
    name: "auth0/express-jwt",
    repository: "https://github.com/auth0/express-jwt",
    package: "express-jwt",
    packageUrl: "https://www.npmjs.com/package/express-jwt",
    description: "Middleware that validates JSON Web Tokens in Express.",
  },
  {
    category: "libraries/authentication",
    name: "auth0/node-jws",
    repository: "https://github.com/auth0/node-jws",
    package: "jws",
    packageUrl: "https://www.npmjs.com/package/jws",
    description: "JSON Web Signature implementation for Node.js.",
  },
  {
    category: "libraries/authentication",
    name: "panva/jose",
    repository: "https://github.com/panva/jose",
    package: "jose",
    packageUrl: "https://www.npmjs.com/package/jose",
    description: "JWA, JWS, JWE, JWT, JWK, and JWKS implementations for the web.",
  },

  // ---------------------------------------------------------------------------
  // Authorization
  // ---------------------------------------------------------------------------
  {
    category: "libraries/authorization",
    name: "casbin/node-casbin",
    repository: "https://github.com/casbin/node-casbin",
    package: "casbin",
    packageUrl: "https://www.npmjs.com/package/casbin",
    description: "Authorization library that supports access control models.",
  },
  {
    category: "libraries/authorization",
    name: "osohq/oso",
    repository: "https://github.com/osohq/oso",
    package: "oso",
    packageUrl: "https://www.npmjs.com/package/oso",
    description: "Policy engine for expressing authorization logic.",
  },

  // ---------------------------------------------------------------------------
  // Backend Frameworks
  // ---------------------------------------------------------------------------
  {
    category: "libraries/backend",
    name: "expressjs/express",
    repository: "https://github.com/expressjs/express",
    package: "express",
    packageUrl: "https://www.npmjs.com/package/express",
    description: "Fast, unopinionated, minimalist web framework for Node.js.",
  },
  {
    category: "libraries/backend",
    name: "fastify/fastify",
    repository: "https://github.com/fastify/fastify",
    package: "fastify",
    packageUrl: "https://www.npmjs.com/package/fastify",
    description: "Fast and low-overhead web framework for Node.js.",
  },
  {
    category: "libraries/backend",
    name: "koajs/koa",
    repository: "https://github.com/koajs/koa",
    package: "koa",
    packageUrl: "https://www.npmjs.com/package/koa",
    description: "Expressive HTTP middleware framework for Node.js.",
  },
  {
    category: "libraries/backend",
    name: "nestjs/nest",
    repository: "https://github.com/nestjs/nest",
    package: "@nestjs/core",
    packageUrl: "https://www.npmjs.com/package/@nestjs/core",
    description:
      "Progressive Node.js framework for building efficient and scalable server-side applications.",
  },

  // ---------------------------------------------------------------------------
  // CLI
  // ---------------------------------------------------------------------------
  {
    category: "libraries/cli",
    name: "oclif/oclif",
    repository: "https://github.com/oclif/oclif",
    package: "oclif",
    packageUrl: "https://www.npmjs.com/package/oclif",
    description: "Framework for building command-line interfaces.",
  },
  {
    category: "libraries/cli",
    name: "sindresorhus/meow",
    repository: "https://github.com/sindresorhus/meow",
    package: "meow",
    packageUrl: "https://www.npmjs.com/package/meow",
    description: "CLI app helper with argument parsing and help text.",
  },
  {
    category: "libraries/cli",
    name: "tj/commander.js",
    repository: "https://github.com/tj/commander.js",
    package: "commander",
    packageUrl: "https://www.npmjs.com/package/commander",
    description: "Complete solution for Node.js command-line interfaces.",
  },
  {
    category: "libraries/cli",
    name: "yargs/yargs",
    repository: "https://github.com/yargs/yargs",
    package: "yargs",
    packageUrl: "https://www.npmjs.com/package/yargs",
    description: "Interactive command-line tools with argument parsing.",
  },

  // ---------------------------------------------------------------------------
  // Configuration
  // ---------------------------------------------------------------------------
  {
    category: "libraries/configuration",
    name: "dotenvx/dotenvx",
    repository: "https://github.com/dotenvx/dotenvx",
    package: "@dotenvx/dotenvx",
    packageUrl: "https://www.npmjs.com/package/@dotenvx/dotenvx",
    description: "Load environment variables from .env files.",
  },
  {
    category: "libraries/configuration",
    name: "lorenwest/node-config",
    repository: "https://github.com/node-config/node-config",
    package: "config",
    packageUrl: "https://www.npmjs.com/package/config",
    description: "Node.js application configuration management.",
  },

  // ---------------------------------------------------------------------------
  // Date and Time
  // ---------------------------------------------------------------------------
  {
    category: "libraries/date-time",
    name: "date-fns/date-fns",
    repository: "https://github.com/date-fns/date-fns",
    package: "date-fns",
    packageUrl: "https://www.npmjs.com/package/date-fns",
    description: "Modern JavaScript date utility library.",
  },
  {
    category: "libraries/date-time",
    name: "iamkun/dayjs",
    repository: "https://github.com/iamkun/dayjs",
    package: "dayjs",
    packageUrl: "https://www.npmjs.com/package/dayjs",
    description: "Fast, lightweight date library compatible with Moment.js.",
  },
  {
    category: "libraries/date-time",
    name: "moment/moment",
    repository: "https://github.com/moment/moment",
    package: "moment",
    packageUrl: "https://www.npmjs.com/package/moment",
    description: "Parse, validate, manipulate, and display dates and times.",
  },

  // ---------------------------------------------------------------------------
  // Database
  // ---------------------------------------------------------------------------
  {
    category: "libraries/database",
    name: "better-sqlite3/better-sqlite3",
    repository: "https://github.com/WiseLibs/better-sqlite3",
    package: "better-sqlite3",
    packageUrl: "https://www.npmjs.com/package/better-sqlite3",
    description: "A simple library for SQLite3 in Node.js.",
  },
  {
    category: "libraries/database",
    name: "mongodb/node-mongodb-native",
    repository: "https://github.com/mongodb/node-mongodb-native",
    package: "mongodb",
    packageUrl: "https://www.npmjs.com/package/mongodb",
    description: "Official MongoDB driver for Node.js.",
  },
  {
    category: "libraries/database",
    name: "redis/node-redis",
    repository: "https://github.com/redis/node-redis",
    package: "redis",
    packageUrl: "https://www.npmjs.com/package/redis",
    description: "Redis client for Node.js.",
  },
  {
    category: "libraries/database",
    name: "typeorm/typeorm",
    repository: "https://github.com/typeorm/typeorm",
    package: "typeorm",
    packageUrl: "https://www.npmjs.com/package/typeorm",
    description: "ORM for TypeScript and JavaScript that supports many databases.",
  },

  // ---------------------------------------------------------------------------
  // HTTP
  // ---------------------------------------------------------------------------
  {
    category: "libraries/http",
    name: "axios/axios",
    repository: "https://github.com/axios/axios",
    package: "axios",
    packageUrl: "https://www.npmjs.com/package/axios",
    description: "Promise-based HTTP client for the browser and Node.js.",
  },
  {
    category: "libraries/http",
    name: "node-fetch/node-fetch",
    repository: "https://github.com/node-fetch/node-fetch",
    package: "node-fetch",
    packageUrl: "https://www.npmjs.com/package/node-fetch",
    description: "A light-weight module that brings fetch to Node.js.",
  },
  {
    category: "libraries/http",
    name: "octokit/rest.js",
    repository: "https://github.com/octokit/rest.js",
    package: "@octokit/rest",
    packageUrl: "https://www.npmjs.com/package/@octokit/rest",
    description: "GitHub REST API client for JavaScript and TypeScript.",
  },

  // ---------------------------------------------------------------------------
  // Logging
  // ---------------------------------------------------------------------------
  {
    category: "libraries/logging",
    name: "pinojs/pino",
    repository: "https://github.com/pinojs/pino",
    package: "pino",
    packageUrl: "https://www.npmjs.com/package/pino",
    description: "An all-natural JSON logger for Node.js.",
  },
  {
    category: "libraries/logging",
    name: "winstonjs/winston",
    repository: "https://github.com/winstonjs/winston",
    package: "winston",
    packageUrl: "https://www.npmjs.com/package/winston",
    description: "A logger for just about everything.",
  },

  // ---------------------------------------------------------------------------
  // Messaging
  // ---------------------------------------------------------------------------
  {
    category: "libraries/messaging",
    name: "confluentinc/confluent-kafka-javascript",
    repository: "https://github.com/confluentinc/confluent-kafka-javascript",
    package: "@confluentinc/kafka-javascript",
    packageUrl: "https://www.npmjs.com/package/@confluentinc/kafka-javascript",
    description: "Kafka client for Node.js backed by librdkafka.",
  },
  {
    category: "libraries/messaging",
    name: "kafkajs/kafkajs",
    repository: "https://github.com/tulios/kafkajs",
    package: "kafkajs",
    packageUrl: "https://www.npmjs.com/package/kafkajs",
    description: "A modern Apache Kafka client for Node.js.",
  },

  // ---------------------------------------------------------------------------
  // ORM and Query Builders
  // ---------------------------------------------------------------------------
  {
    category: "libraries/orm",
    name: "drizzle-team/drizzle-orm",
    repository: "https://github.com/drizzle-team/drizzle-orm",
    package: "drizzle-orm",
    packageUrl: "https://www.npmjs.com/package/drizzle-orm",
    description: "Headless TypeScript ORM with a SQL-like query builder.",
  },
  {
    category: "libraries/orm",
    name: "knex/knex",
    repository: "https://github.com/knex/knex",
    package: "knex",
    packageUrl: "https://www.npmjs.com/package/knex",
    description: "SQL query builder for Postgres, MySQL, and SQLite.",
  },
  {
    category: "libraries/orm",
    name: "prisma/prisma",
    repository: "https://github.com/prisma/prisma",
    package: "@prisma/client",
    packageUrl: "https://www.npmjs.com/package/@prisma/client",
    description: "Type-safe database client and ORM.",
  },
  {
    category: "libraries/orm",
    name: "sequelize/sequelize",
    repository: "https://github.com/sequelize/sequelize",
    package: "sequelize",
    packageUrl: "https://www.npmjs.com/package/sequelize",
    description: "Promise-based ORM for Node.js supporting multiple SQL dialects.",
  },

  // ---------------------------------------------------------------------------
  // Parsing
  // ---------------------------------------------------------------------------
  {
    category: "libraries/parsing",
    name: "cheeriojs/cheerio",
    repository: "https://github.com/cheeriojs/cheerio",
    package: "cheerio",
    packageUrl: "https://www.npmjs.com/package/cheerio",
    description: "Fast, flexible, and lean implementation of core jQuery for the server.",
  },
  {
    category: "libraries/parsing",
    name: "mathiasbynens/he",
    repository: "https://github.com/mathiasbynens/he",
    package: "he",
    packageUrl: "https://www.npmjs.com/package/he",
    description: "A robust HTML entity encoder and decoder.",
  },
  {
    category: "libraries/parsing",
    name: "sindresorhus/parse-json",
    repository: "https://github.com/sindresorhus/parse-json",
    package: "parse-json",
    packageUrl: "https://www.npmjs.com/package/parse-json",
    description: "Parse JSON with more helpful errors.",
  },

  // ---------------------------------------------------------------------------
  // Serialization
  // ---------------------------------------------------------------------------
  {
    category: "libraries/serialization",
    name: "protobufjs/protobuf.js",
    repository: "https://github.com/protobufjs/protobuf.js",
    package: "protobufjs",
    packageUrl: "https://www.npmjs.com/package/protobufjs",
    description: "Protocol Buffers for JavaScript and TypeScript.",
  },
  {
    category: "libraries/serialization",
    name: "typestack/class-transformer",
    repository: "https://github.com/typestack/class-transformer",
    package: "class-transformer",
    packageUrl: "https://www.npmjs.com/package/class-transformer",
    description: "Transform plain objects into class instances and back.",
  },

  // ---------------------------------------------------------------------------
  // Validation
  // ---------------------------------------------------------------------------
  {
    category: "libraries/validation",
    name: "colinhacks/zod",
    repository: "https://github.com/colinhacks/zod",
    package: "zod",
    packageUrl: "https://www.npmjs.com/package/zod",
    description: "TypeScript-first schema validation with static type inference.",
  },
  {
    category: "libraries/validation",
    name: "sideway/joi",
    repository: "https://github.com/sideway/joi",
    package: "joi",
    packageUrl: "https://www.npmjs.com/package/joi",
    description: "Schema description language and data validator.",
  },
  {
    category: "libraries/validation",
    name: "typestack/class-validator",
    repository: "https://github.com/typestack/class-validator",
    package: "class-validator",
    packageUrl: "https://www.npmjs.com/package/class-validator",
    description: "Decorator-based property validation for classes.",
  },

  // ---------------------------------------------------------------------------
  // Testing
  // ---------------------------------------------------------------------------
  {
    category: "libraries/testing",
    name: "jestjs/jest",
    repository: "https://github.com/jestjs/jest",
    package: "jest",
    packageUrl: "https://www.npmjs.com/package/jest",
    description: "Delightful JavaScript and TypeScript testing framework.",
  },
  {
    category: "libraries/testing",
    name: "mochajs/mocha",
    repository: "https://github.com/mochajs/mocha",
    package: "mocha",
    packageUrl: "https://www.npmjs.com/package/mocha",
    description: "Simple, flexible, fun JavaScript test framework.",
  },
  {
    category: "libraries/testing",
    name: "vitest-dev/vitest",
    repository: "https://github.com/vitest-dev/vitest",
    package: "vitest",
    packageUrl: "https://www.npmjs.com/package/vitest",
    description: "A unit test framework powered by Vite.",
  },

  // ---------------------------------------------------------------------------
  // Observability
  // ---------------------------------------------------------------------------
  {
    category: "libraries/observability",
    name: "open-telemetry/opentelemetry-js",
    repository: "https://github.com/open-telemetry/opentelemetry-js",
    package: "@opentelemetry/api",
    packageUrl: "https://www.npmjs.com/package/@opentelemetry/api",
    description: "OpenTelemetry JavaScript API and SDK for observability.",
  },
  {
    category: "libraries/observability",
    name: "sentry/sentry-javascript",
    repository: "https://github.com/getsentry/sentry-javascript",
    package: "@sentry/node",
    packageUrl: "https://www.npmjs.com/package/@sentry/node",
    description: "Official Sentry SDK for JavaScript and TypeScript.",
  },

  // ---------------------------------------------------------------------------
  // WebSockets
  // ---------------------------------------------------------------------------
  {
    category: "libraries/websockets",
    name: "socketio/socket.io",
    repository: "https://github.com/socketio/socket.io",
    package: "socket.io",
    packageUrl: "https://www.npmjs.com/package/socket.io",
    description: "Realtime application framework with WebSocket support.",
  },
  {
    category: "libraries/websockets",
    name: "websockets/ws",
    repository: "https://github.com/websockets/ws",
    package: "ws",
    packageUrl: "https://www.npmjs.com/package/ws",
    description: "A simple and thoroughly tested WebSocket client and server.",
  },

  // ---------------------------------------------------------------------------
  // Utilities
  // ---------------------------------------------------------------------------
  {
    category: "libraries/utilities",
    name: "lodash/lodash",
    repository: "https://github.com/lodash/lodash",
    package: "lodash",
    packageUrl: "https://www.npmjs.com/package/lodash",
    description: "A modern JavaScript utility library delivering modularity and performance.",
  },
  {
    category: "libraries/utilities",
    name: "microsoft/tslib",
    repository: "https://github.com/microsoft/tslib",
    package: "tslib",
    packageUrl: "https://www.npmjs.com/package/tslib",
    description: "Runtime library for TypeScript helper functions.",
  },
  {
    category: "libraries/utilities",
    name: "sindresorhus/type-fest",
    repository: "https://github.com/sindresorhus/type-fest",
    package: "type-fest",
    packageUrl: "https://www.npmjs.com/package/type-fest",
    description: "A collection of essential TypeScript types.",
  },
];
