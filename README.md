# Awesome TypeScript

[![CI](https://github.com/TypeScript-Unofficial/awesome-typescript/actions/workflows/ci.yml/badge.svg)](https://github.com/TypeScript-Unofficial/awesome-typescript/actions/workflows/ci.yml)
[![Link Check](https://github.com/TypeScript-Unofficial/awesome-typescript/actions/workflows/link-check.yml/badge.svg)](https://github.com/TypeScript-Unofficial/awesome-typescript/actions/workflows/link-check.yml)
[![License](https://img.shields.io/github/license/TypeScript-Unofficial/awesome-typescript)](LICENSE.txt)
[![Stars](https://img.shields.io/github/stars/TypeScript-Unofficial/awesome-typescript)](https://github.com/TypeScript-Unofficial/awesome-typescript/stargazers)
[![Forks](https://img.shields.io/github/forks/TypeScript-Unofficial/awesome-typescript)](https://github.com/TypeScript-Unofficial/awesome-typescript/network)
[![Contributors](https://img.shields.io/github/contributors/TypeScript-Unofficial/awesome-typescript)](https://github.com/TypeScript-Unofficial/awesome-typescript/graphs/contributors)
[![Last Commit](https://img.shields.io/github/last-commit/TypeScript-Unofficial/awesome-typescript)](https://github.com/TypeScript-Unofficial/awesome-typescript/commits/main)
[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/TypeScript-Unofficial/awesome-typescript/)

A curated list of TypeScript code and resources.

If you want to contribute, please read [this](CONTRIBUTING.md).

<!-- START GENERATED CONTENT -->

## Table of Contents

- [Applications](#applications)
  - [CLI Applications](#cli-applications)
  - [Desktop Applications](#desktop-applications)
  - [Developer Applications](#developer-applications)
  - [Web Applications](#web-applications)
  - [Games](#games)
- [Development Tools](#development-tools)
  - [Build Tools](#build-tools)
  - [Bundlers](#bundlers)
  - [Compilers](#compilers)
  - [Code Generation](#code-generation)
  - [Documentation](#documentation)
  - [Linting](#linting)
  - [Formatting](#formatting)
  - [Package Management](#package-management)
  - [Monorepos](#monorepos)
  - [Project Scaffolding](#project-scaffolding)
- [Libraries](#libraries)
  - [AI and LLM](#ai-and-llm)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Backend Frameworks](#backend-frameworks)
  - [CLI](#cli)
  - [Configuration](#configuration)
  - [Date and Time](#date-and-time)
  - [Database](#database)
  - [HTTP](#http)
  - [Logging](#logging)
  - [Messaging](#messaging)
  - [ORM and Query Builders](#orm-and-query-builders)
  - [Parsing](#parsing)
  - [Serialization](#serialization)
  - [Validation](#validation)
  - [Testing](#testing)
  - [Observability](#observability)
  - [WebSockets](#websockets)
  - [Utilities](#utilities)
- [Frontend](#frontend)
  - [Frameworks](#frameworks)
  - [UI Libraries](#ui-libraries)
  - [Routing](#routing)
  - [State Management](#state-management)
  - [Forms](#forms)
  - [Styling](#styling)
  - [Animation](#animation)
  - [Data Fetching](#data-fetching)
  - [Charts and Visualization](#charts-and-visualization)
- [Node.js](#nodejs)
  - [Frameworks](#frameworks)
  - [Process Management](#process-management)
  - [File System](#file-system)
  - [Streams](#streams)
  - [Workers](#workers)
- [Infrastructure](#infrastructure)
  - [Cloud](#cloud)
  - [Serverless](#serverless)
  - [Containers](#containers)
  - [Infrastructure as Code](#infrastructure-as-code)
- [Security](#security)
  - [Cryptography](#cryptography)
  - [Security Testing](#security-testing)
- [Learning](#learning)
  - [Official Resources](#official-resources)
  - [Tutorials](#tutorials)
  - [Courses](#courses)
  - [Books](#books)
  - [Articles](#articles)
  - [Example Projects](#example-projects)
- [Community](#community)
  - [Communities](#communities)

## Applications

End-user applications written in or powered by TypeScript.

### CLI Applications

- [sindresorhus/trash](https://github.com/sindresorhus/trash) [[trash](https://www.npmjs.com/package/trash)] - Move files and folders to the trash.
- [typicode/husky](https://github.com/typicode/husky) [[husky](https://www.npmjs.com/package/husky)] - Git hooks made easy.
- [vercel/serve](https://github.com/vercel/serve) [[serve](https://www.npmjs.com/package/serve)] - Static file serving and directory listing.
- [vercel/vercel](https://github.com/vercel/vercel) [[vercel](https://www.npmjs.com/package/vercel)] - Command-line interface for deploying to Vercel.

### Desktop Applications

- [electron/electron](https://github.com/electron/electron) [[electron](https://www.npmjs.com/package/electron)] - Build cross-platform desktop apps with JavaScript, HTML, and CSS.
- [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - Build smaller, faster, and more secure desktop applications with a web frontend.
- [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) - Local-first knowledge base with a collaborative canvas.

### Developer Applications

- [coder/code-server](https://github.com/coder/code-server) - Run VS Code on a remote server and access it in the browser.
- [microsoft/vscode](https://github.com/microsoft/vscode) - Visual Studio Code, a source-code editor built on web technologies.
- [onivim/oni2](https://github.com/onivim/oni2) - Native, lightweight modal code editor with a modern UI.
- [stoplightio/studio](https://github.com/stoplightio/studio) - API design and documentation tooling with a visual editor.

### Web Applications

- [appwrite/appwrite](https://github.com/appwrite/appwrite) - Backend server for web and mobile applications.
- [calcom/cal.com](https://github.com/calcom/cal.com) - Open-source scheduling infrastructure for everyone.
- [directus/directus](https://github.com/directus/directus) - Real-time headless CMS with a data platform.
- [n8n-io/n8n](https://github.com/n8n-io/n8n) - Workflow automation platform with a visual editor.
- [nocodb/nocodb](https://github.com/nocodb/nocodb) - Open-source Airtable alternative built on a database.
- [outline/outline](https://github.com/outline/outline) - Team knowledge base and wiki for modern teams.
- [supabase/supabase](https://github.com/supabase/supabase) - Open-source Firebase alternative with a Postgres backend.

### Games

- [colyseus/colyseus](https://github.com/colyseus/colyseus) [[colyseus](https://www.npmjs.com/package/colyseus)] - Multiplayer game server framework with a realtime API.
- [melonjs/melonJS](https://github.com/melonjs/melonJS) [[melonjs](https://www.npmjs.com/package/melonjs)] - HTML5 game engine for building 2D games.
- [phaserjs/phaser](https://github.com/phaserjs/phaser) [[phaser](https://www.npmjs.com/package/phaser)] - Fast, free, and fun open-source HTML5 game framework.

## Development Tools

Tools that help you build, ship, and maintain TypeScript projects.

### Build Tools

- [esbuild/esbuild](https://github.com/evanw/esbuild) [[esbuild](https://www.npmjs.com/package/esbuild)] - An extremely fast JavaScript and TypeScript bundler and minifier.
- [gulpjs/gulp](https://github.com/gulpjs/gulp) [[gulp](https://www.npmjs.com/package/gulp)] - Streaming build system for automating tasks.
- [microsoft/rushstack](https://github.com/microsoft/rushstack) - Scalable monorepo tooling for the web.
- [rollup/rollup](https://github.com/rollup/rollup) [[rollup](https://www.npmjs.com/package/rollup)] - Module bundler for JavaScript and TypeScript libraries.
- [webpack/webpack](https://github.com/webpack/webpack) [[webpack](https://www.npmjs.com/package/webpack)] - A bundler for JavaScript, TypeScript, and other web assets.

### Bundlers

- [parcel-bundler/parcel](https://github.com/parcel-bundler/parcel) [[parcel](https://www.npmjs.com/package/parcel)] - Zero-configuration web application bundler.
- [preactjs/wmr](https://github.com/preactjs/wmr) [[wmr](https://www.npmjs.com/package/wmr)] - Tiny all-in-one development tool for modern web apps.
- [rolldown/rolldown](https://github.com/rolldown/rolldown) [[rolldown](https://www.npmjs.com/package/rolldown)] - Fast Rust-based bundler with a Rollup-compatible API.
- [vitejs/vite](https://github.com/vitejs/vite) [[vite](https://www.npmjs.com/package/vite)] - Next-generation frontend tooling with a fast dev server.

### Compilers

- [babel/babel](https://github.com/babel/babel) [[@babel/core](https://www.npmjs.com/package/@babel/core)] - A compiler for writing next-generation JavaScript and TypeScript.
- [microsoft/TypeScript](https://github.com/microsoft/TypeScript) [[typescript](https://www.npmjs.com/package/typescript)] - The official TypeScript compiler and language service.
- [oxc-project/oxc](https://github.com/oxc-project/oxc) - A suite of high-performance tools written in Rust for JavaScript and TypeScript.
- [swc-project/swc](https://github.com/swc-project/swc) [[@swc/core](https://www.npmjs.com/package/@swc/core)] - A TypeScript and JavaScript compiler written in Rust.

### Code Generation

- [graphql/codegen](https://github.com/dotansimha/graphql-code-generator) [[@graphql-codegen/cli](https://www.npmjs.com/package/@graphql-codegen/cli)] - Generate code from your GraphQL schema and operations.
- [openapi-ts/openapi-typescript](https://github.com/openapi-ts/openapi-typescript) [[openapi-typescript](https://www.npmjs.com/package/openapi-typescript)] - Generate TypeScript types from OpenAPI schemas.

### Documentation

- [facebook/docusaurus](https://github.com/facebook/docusaurus) [[@docusaurus/core](https://www.npmjs.com/package/@docusaurus/core)] - Easy-to-maintain open-source documentation websites.
- [microsoft/typedoc](https://github.com/TypeStrong/typedoc) [[typedoc](https://www.npmjs.com/package/typedoc)] - Documentation generator for TypeScript projects.
- [storybookjs/storybook](https://github.com/storybookjs/storybook) [[storybook](https://www.npmjs.com/package/storybook)] - Frontend workshop for building UI components in isolation.
- [vitepress/vitepress](https://github.com/vuejs/vitepress) [[vitepress](https://www.npmjs.com/package/vitepress)] - Vite-powered static site generator for documentation.

### Linting

- [biomejs/biome](https://github.com/biomejs/biome) [[@biomejs/biome](https://www.npmjs.com/package/@biomejs/biome)] - Fast formatter and linter for JavaScript and TypeScript.
- [eslint/eslint](https://github.com/eslint/eslint) [[eslint](https://www.npmjs.com/package/eslint)] - Find and fix problems in your JavaScript and TypeScript code.
- [typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) [[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)] - Tooling that enables ESLint to lint TypeScript code.

### Formatting

- [prettier/prettier](https://github.com/prettier/prettier) [[prettier](https://www.npmjs.com/package/prettier)] - An opinionated code formatter supporting TypeScript.

### Package Management

- [npm/cli](https://github.com/npm/cli) [[npm](https://www.npmjs.com/package/npm)] - The package manager for the JavaScript and TypeScript ecosystem.
- [pnpm/pnpm](https://github.com/pnpm/pnpm) [[pnpm](https://www.npmjs.com/package/pnpm)] - Fast, disk-space-efficient package manager.
- [yarnpkg/berry](https://github.com/yarnpkg/berry) [[yarn](https://www.npmjs.com/package/yarn)] - Modern, reliable package management with workspaces.

### Monorepos

- [changesets/changesets](https://github.com/changesets/changesets) [[@changesets/cli](https://www.npmjs.com/package/@changesets/cli)] - A way to manage your versioning and changelogs.
- [lerna/lerna](https://github.com/lerna/lerna) [[lerna](https://www.npmjs.com/package/lerna)] - Tool for managing JavaScript and TypeScript projects with multiple packages.
- [nx/nx](https://github.com/nrwl/nx) [[nx](https://www.npmjs.com/package/nx)] - Smart, fast, and extensible build system for monorepos.
- [turborepo/turborepo](https://github.com/vercel/turbo) [[turbo](https://www.npmjs.com/package/turbo)] - Incremental bundler and build system for monorepos.

### Project Scaffolding

- [create-t3-app/create-t3-app](https://github.com/t3-oss/create-t3-app) [[create-t3-app](https://www.npmjs.com/package/create-t3-app)] - Interactive CLI for scaffolding a full-stack TypeScript app.
- [yeoman/yo](https://github.com/yeoman/yo) [[yo](https://www.npmjs.com/package/yo)] - Scaffolding tool for running Yeoman generators.

## Libraries

Reusable libraries and frameworks for building TypeScript applications.

### AI and LLM

- [huggingface/transformers.js](https://github.com/huggingface/transformers.js) [[@huggingface/transformers](https://www.npmjs.com/package/@huggingface/transformers)] - Run machine learning models in the browser and Node.js.
- [langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs) [[langchain](https://www.npmjs.com/package/langchain)] - Framework for building applications with large language models.
- [openai/openai-node](https://github.com/openai/openai-node) [[openai](https://www.npmjs.com/package/openai)] - Official Node.js client for the OpenAI API.
- [vercel/ai](https://github.com/vercel/ai) [[ai](https://www.npmjs.com/package/ai)] - TypeScript toolkit for building AI-powered applications.

### Authentication

- [auth0/express-jwt](https://github.com/auth0/express-jwt) [[express-jwt](https://www.npmjs.com/package/express-jwt)] - Middleware that validates JSON Web Tokens in Express.
- [auth0/node-jws](https://github.com/auth0/node-jws) [[jws](https://www.npmjs.com/package/jws)] - JSON Web Signature implementation for Node.js.
- [nextauthjs/next-auth](https://github.com/nextauthjs/next-auth) [[next-auth](https://www.npmjs.com/package/next-auth)] - Authentication for Next.js applications.
- [panva/jose](https://github.com/panva/jose) [[jose](https://www.npmjs.com/package/jose)] - JWA, JWS, JWE, JWT, JWK, and JWKS implementations for the web.

### Authorization

- [casbin/node-casbin](https://github.com/casbin/node-casbin) [[casbin](https://www.npmjs.com/package/casbin)] - Authorization library that supports access control models.
- [osohq/oso](https://github.com/osohq/oso) [[oso](https://www.npmjs.com/package/oso)] - Policy engine for expressing authorization logic.

### Backend Frameworks

- [expressjs/express](https://github.com/expressjs/express) [[express](https://www.npmjs.com/package/express)] - Fast, unopinionated, minimalist web framework for Node.js.
- [fastify/fastify](https://github.com/fastify/fastify) [[fastify](https://www.npmjs.com/package/fastify)] - Fast and low-overhead web framework for Node.js.
- [hapi/hapi](https://github.com/hapijs/hapi) [[@hapi/hapi](https://www.npmjs.com/package/@hapi/hapi)] - Rich framework for building applications and services.
- [koajs/koa](https://github.com/koajs/koa) [[koa](https://www.npmjs.com/package/koa)] - Expressive HTTP middleware framework for Node.js.
- [nestjs/nest](https://github.com/nestjs/nest) [[@nestjs/core](https://www.npmjs.com/package/@nestjs/core)] - Progressive Node.js framework for building efficient and scalable server-side applications.
- [trpc/trpc](https://github.com/trpc/trpc) [[@trpc/server](https://www.npmjs.com/package/@trpc/server)] - End-to-end typesafe APIs made easy.

### CLI

- [chalk/chalk](https://github.com/chalk/chalk) [[chalk](https://www.npmjs.com/package/chalk)] - Terminal string styling for the terminal.
- [oclif/oclif](https://github.com/oclif/oclif) [[oclif](https://www.npmjs.com/package/oclif)] - Framework for building command-line interfaces.
- [sindresorhus/ink](https://github.com/vadimdemedes/ink) [[ink](https://www.npmjs.com/package/ink)] - React for interactive command-line applications.
- [sindresorhus/meow](https://github.com/sindresorhus/meow) [[meow](https://www.npmjs.com/package/meow)] - CLI app helper with argument parsing and help text.
- [tj/commander.js](https://github.com/tj/commander.js) [[commander](https://www.npmjs.com/package/commander)] - Complete solution for Node.js command-line interfaces.
- [yargs/yargs](https://github.com/yargs/yargs) [[yargs](https://www.npmjs.com/package/yargs)] - Interactive command-line tools with argument parsing.

### Configuration

- [cosmiconfig/cosmiconfig](https://github.com/cosmiconfig/cosmiconfig) [[cosmiconfig](https://www.npmjs.com/package/cosmiconfig)] - Find and load configuration from different locations.
- [dotenvx/dotenvx](https://github.com/dotenvx/dotenvx) [[@dotenvx/dotenvx](https://www.npmjs.com/package/@dotenvx/dotenvx)] - Load environment variables from .env files.
- [lorenwest/node-config](https://github.com/node-config/node-config) [[config](https://www.npmjs.com/package/config)] - Node.js application configuration management.

### Date and Time

- [chrono-node/chrono](https://github.com/wanasit/chrono) [[chrono-node](https://www.npmjs.com/package/chrono-node)] - Natural language date and time parser.
- [date-fns/date-fns](https://github.com/date-fns/date-fns) [[date-fns](https://www.npmjs.com/package/date-fns)] - Modern JavaScript date utility library.
- [iamkun/dayjs](https://github.com/iamkun/dayjs) [[dayjs](https://www.npmjs.com/package/dayjs)] - Fast, lightweight date library compatible with Moment.js.
- [moment/moment](https://github.com/moment/moment) [[moment](https://www.npmjs.com/package/moment)] - Parse, validate, manipulate, and display dates and times.

### Database

- [better-sqlite3/better-sqlite3](https://github.com/WiseLibs/better-sqlite3) [[better-sqlite3](https://www.npmjs.com/package/better-sqlite3)] - A simple library for SQLite3 in Node.js.
- [mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native) [[mongodb](https://www.npmjs.com/package/mongodb)] - Official MongoDB driver for Node.js.
- [redis/node-redis](https://github.com/redis/node-redis) [[redis](https://www.npmjs.com/package/redis)] - Redis client for Node.js.
- [sql.js/sql.js](https://github.com/sql-js/sql.js) [[sql.js](https://www.npmjs.com/package/sql.js)] - SQLite compiled to WebAssembly for the browser.
- [typeorm/typeorm](https://github.com/typeorm/typeorm) [[typeorm](https://www.npmjs.com/package/typeorm)] - ORM for TypeScript and JavaScript that supports many databases.

### HTTP

- [axios/axios](https://github.com/axios/axios) [[axios](https://www.npmjs.com/package/axios)] - Promise-based HTTP client for the browser and Node.js.
- [node-fetch/node-fetch](https://github.com/node-fetch/node-fetch) [[node-fetch](https://www.npmjs.com/package/node-fetch)] - A light-weight module that brings fetch to Node.js.
- [octokit/rest.js](https://github.com/octokit/rest.js) [[@octokit/rest](https://www.npmjs.com/package/@octokit/rest)] - GitHub REST API client for JavaScript and TypeScript.
- [undici/undici](https://github.com/nodejs/undici) [[undici](https://www.npmjs.com/package/undici)] - An HTTP/1.1 client for Node.js.

### Logging

- [pinojs/pino](https://github.com/pinojs/pino) [[pino](https://www.npmjs.com/package/pino)] - An all-natural JSON logger for Node.js.
- [winstonjs/winston](https://github.com/winstonjs/winston) [[winston](https://www.npmjs.com/package/winston)] - A logger for just about everything.

### Messaging

- [amqp-node/amqplib](https://github.com/amqp-node/amqplib) [[amqplib](https://www.npmjs.com/package/amqplib)] - An AMQP 0-9-1 client for Node.js.
- [confluentinc/confluent-kafka-javascript](https://github.com/confluentinc/confluent-kafka-javascript) [[@confluentinc/kafka-javascript](https://www.npmjs.com/package/@confluentinc/kafka-javascript)] - Kafka client for Node.js backed by librdkafka.
- [kafkajs/kafkajs](https://github.com/tulios/kafkajs) [[kafkajs](https://www.npmjs.com/package/kafkajs)] - A modern Apache Kafka client for Node.js.

### ORM and Query Builders

- [drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm) [[drizzle-orm](https://www.npmjs.com/package/drizzle-orm)] - Headless TypeScript ORM with a SQL-like query builder.
- [knex/knex](https://github.com/knex/knex) [[knex](https://www.npmjs.com/package/knex)] - SQL query builder for Postgres, MySQL, and SQLite.
- [mikro-orm/mikro-orm](https://github.com/mikro-orm/mikro-orm) [[@mikro-orm/core](https://www.npmjs.com/package/@mikro-orm/core)] - TypeScript ORM for SQL and NoSQL databases.
- [prisma/prisma](https://github.com/prisma/prisma) [[@prisma/client](https://www.npmjs.com/package/@prisma/client)] - Type-safe database client and ORM.
- [sequelize/sequelize](https://github.com/sequelize/sequelize) [[sequelize](https://www.npmjs.com/package/sequelize)] - Promise-based ORM for Node.js supporting multiple SQL dialects.

### Parsing

- [acornjs/acorn](https://github.com/acornjs/acorn) [[acorn](https://www.npmjs.com/package/acorn)] - A small, fast JavaScript parser.
- [cheeriojs/cheerio](https://github.com/cheeriojs/cheerio) [[cheerio](https://www.npmjs.com/package/cheerio)] - Fast, flexible, and lean implementation of core jQuery for the server.
- [mathiasbynens/he](https://github.com/mathiasbynens/he) [[he](https://www.npmjs.com/package/he)] - A robust HTML entity encoder and decoder.
- [sindresorhus/parse-json](https://github.com/sindresorhus/parse-json) [[parse-json](https://www.npmjs.com/package/parse-json)] - Parse JSON with more helpful errors.

### Serialization

- [fastify/fast-json-stringify](https://github.com/fastify/fast-json-stringify) [[fast-json-stringify](https://www.npmjs.com/package/fast-json-stringify)] - Fast JSON stringifier based on a schema.
- [protobufjs/protobuf.js](https://github.com/protobufjs/protobuf.js) [[protobufjs](https://www.npmjs.com/package/protobufjs)] - Protocol Buffers for JavaScript and TypeScript.
- [typestack/class-transformer](https://github.com/typestack/class-transformer) [[class-transformer](https://www.npmjs.com/package/class-transformer)] - Transform plain objects into class instances and back.

### Validation

- [ajv-validator/ajv](https://github.com/ajv-validator/ajv) [[ajv](https://www.npmjs.com/package/ajv)] - A JSON schema validator.
- [colinhacks/zod](https://github.com/colinhacks/zod) [[zod](https://www.npmjs.com/package/zod)] - TypeScript-first schema validation with static type inference.
- [sideway/joi](https://github.com/sideway/joi) [[joi](https://www.npmjs.com/package/joi)] - Schema description language and data validator.
- [typestack/class-validator](https://github.com/typestack/class-validator) [[class-validator](https://www.npmjs.com/package/class-validator)] - Decorator-based property validation for classes.

### Testing

- [cypress-io/cypress](https://github.com/cypress-io/cypress) [[cypress](https://www.npmjs.com/package/cypress)] - Fast, easy, and reliable testing for anything that runs in a browser.
- [jestjs/jest](https://github.com/jestjs/jest) [[jest](https://www.npmjs.com/package/jest)] - Delightful JavaScript and TypeScript testing framework.
- [mochajs/mocha](https://github.com/mochajs/mocha) [[mocha](https://www.npmjs.com/package/mocha)] - Simple, flexible, fun JavaScript test framework.
- [playwright/playwright](https://github.com/microsoft/playwright) [[playwright](https://www.npmjs.com/package/playwright)] - Cross-browser automation and testing framework.
- [testing-library/react-testing-library](https://github.com/testing-library/react-testing-library) [[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)] - Simple and complete DOM testing utilities for React.
- [vitest-dev/vitest](https://github.com/vitest-dev/vitest) [[vitest](https://www.npmjs.com/package/vitest)] - A unit test framework powered by Vite.

### Observability

- [open-telemetry/opentelemetry-js](https://github.com/open-telemetry/opentelemetry-js) [[@opentelemetry/api](https://www.npmjs.com/package/@opentelemetry/api)] - OpenTelemetry JavaScript API and SDK for observability.
- [sentry/sentry-javascript](https://github.com/getsentry/sentry-javascript) [[@sentry/node](https://www.npmjs.com/package/@sentry/node)] - Official Sentry SDK for JavaScript and TypeScript.

### WebSockets

- [socketio/socket.io](https://github.com/socketio/socket.io) [[socket.io](https://www.npmjs.com/package/socket.io)] - Realtime application framework with WebSocket support.
- [websockets/ws](https://github.com/websockets/ws) [[ws](https://www.npmjs.com/package/ws)] - A simple and thoroughly tested WebSocket client and server.

### Utilities

- [effect-ts/effect](https://github.com/Effect-TS/effect) [[effect](https://www.npmjs.com/package/effect)] - A TypeScript library for building robust applications.
- [fp-ts/fp-ts](https://github.com/gcanti/fp-ts) [[fp-ts](https://www.npmjs.com/package/fp-ts)] - Functional programming in TypeScript.
- [immutable-js/immutable-js](https://github.com/immutable-js/immutable-js) [[immutable](https://www.npmjs.com/package/immutable)] - Immutable persistent data collections for JavaScript.
- [lodash/lodash](https://github.com/lodash/lodash) [[lodash](https://www.npmjs.com/package/lodash)] - A modern JavaScript utility library delivering modularity and performance.
- [microsoft/tslib](https://github.com/microsoft/tslib) [[tslib](https://www.npmjs.com/package/tslib)] - Runtime library for TypeScript helper functions.
- [sindresorhus/type-fest](https://github.com/sindresorhus/type-fest) [[type-fest](https://www.npmjs.com/package/type-fest)] - A collection of essential TypeScript types.

## Frontend

Libraries and frameworks for building user interfaces.

### Frameworks

- [angular/angular](https://github.com/angular/angular) [[@angular/core](https://www.npmjs.com/package/@angular/core)] - Platform for building mobile and desktop web applications.
- [facebook/react](https://github.com/facebook/react) [[react](https://www.npmjs.com/package/react)] - A JavaScript library for building user interfaces.
- [nuxt/nuxt](https://github.com/nuxt/nuxt) [[nuxt](https://www.npmjs.com/package/nuxt)] - Intuitive Vue framework for building full-stack applications.
- [preactjs/preact](https://github.com/preactjs/preact) [[preact](https://www.npmjs.com/package/preact)] - Fast 3kB alternative to React with the same modern API.
- [remix-run/remix](https://github.com/remix-run/remix) [[@remix-run/react](https://www.npmjs.com/package/@remix-run/react)] - Full-stack web framework for building better user experiences.
- [solidjs/solid](https://github.com/solidjs/solid) [[solid-js](https://www.npmjs.com/package/solid-js)] - A declarative JavaScript library for building user interfaces.
- [sveltejs/svelte](https://github.com/sveltejs/svelte) [[svelte](https://www.npmjs.com/package/svelte)] - Cybernetically enhanced web apps with a compiler.
- [vercel/next.js](https://github.com/vercel/next.js) [[next](https://www.npmjs.com/package/next)] - The React framework for the web.
- [vuejs/core](https://github.com/vuejs/core) [[vue](https://www.npmjs.com/package/vue)] - The progressive JavaScript framework for building user interfaces.

### UI Libraries

- [ant-design/ant-design](https://github.com/ant-design/ant-design) [[antd](https://www.npmjs.com/package/antd)] - An enterprise-class UI design language and React components.
- [chakra-ui/chakra-ui](https://github.com/chakra-ui/chakra-ui) [[@chakra-ui/react](https://www.npmjs.com/package/@chakra-ui/react)] - Simple, modular, and accessible UI components for React.
- [mantinedev/mantine](https://github.com/mantinedev/mantine) [[@mantine/core](https://www.npmjs.com/package/@mantine/core)] - A fully featured React components library.
- [mui/material-ui](https://github.com/mui/material-ui) [[@mui/material](https://www.npmjs.com/package/@mui/material)] - Ready-to-use React components implementing Material Design.
- [radix-ui/primitives](https://github.com/radix-ui/primitives) [[@radix-ui/react-primitive](https://www.npmjs.com/package/@radix-ui/react-primitive)] - Unstyled, accessible components for building high-quality design systems.
- [shadcn-ui/ui](https://github.com/shadcn-ui/ui) - Beautifully designed components built with Radix UI and Tailwind CSS.
- [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui) [[@headlessui/react](https://www.npmjs.com/package/@headlessui/react)] - Completely unstyled, fully accessible UI components.

### Routing

- [remix-run/react-router](https://github.com/remix-run/react-router) [[react-router](https://www.npmjs.com/package/react-router)] - Declarative routing for React applications.
- [tanstack/router](https://github.com/TanStack/router) [[@tanstack/react-router](https://www.npmjs.com/package/@tanstack/react-router)] - Type-safe routing with built-in data fetching for React.

### State Management

- [pmndrs/jotai](https://github.com/pmndrs/jotai) [[jotai](https://www.npmjs.com/package/jotai)] - Primitive and flexible state management for React.
- [pmndrs/zustand](https://github.com/pmndrs/zustand) [[zustand](https://www.npmjs.com/package/zustand)] - A small, fast, and scalable state management solution for React.
- [reduxjs/redux](https://github.com/reduxjs/redux) [[redux](https://www.npmjs.com/package/redux)] - A predictable state container for JavaScript apps.
- [reduxjs/redux-toolkit](https://github.com/reduxjs/redux-toolkit) [[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)] - The official, opinionated toolset for efficient Redux development.
- [tanstack/query](https://github.com/TanStack/query) [[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)] - Asynchronous state management for server state.

### Forms

- [formik/formik](https://github.com/jaredpalmer/formik) [[formik](https://www.npmjs.com/package/formik)] - Build forms in React without the tears.
- [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form) [[react-hook-form](https://www.npmjs.com/package/react-hook-form)] - Performant, flexible, and extensible forms for React.
- [tanstack/form](https://github.com/TanStack/form) [[@tanstack/react-form](https://www.npmjs.com/package/@tanstack/react-form)] - Headless, performant, and type-safe form state management.

### Styling

- [emotion-js/emotion](https://github.com/emotion-js/emotion) [[@emotion/react](https://www.npmjs.com/package/@emotion/react)] - CSS-in-JS library designed for high-performance style composition.
- [styled-components/styled-components](https://github.com/styled-components/styled-components) [[styled-components](https://www.npmjs.com/package/styled-components)] - Visual primitives for component-based styling.
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) [[tailwindcss](https://www.npmjs.com/package/tailwindcss)] - A utility-first CSS framework for rapidly building custom designs.
- [vanilla-extract-css/vanilla-extract](https://github.com/vanilla-extract-css/vanilla-extract) [[@vanilla-extract/css](https://www.npmjs.com/package/@vanilla-extract/css)] - Zero-runtime CSS-in-TypeScript with type-safe styles.

### Animation

- [motiondivision/motion](https://github.com/motiondivision/motion) [[motion](https://www.npmjs.com/package/motion)] - A modern animation library for React and the web.
- [pmndrs/react-spring](https://github.com/pmndrs/react-spring) [[@react-spring/web](https://www.npmjs.com/package/@react-spring/web)] - A spring-physics-based animation library for React.
- [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) [[@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)] - A React renderer for Three.js.

### Data Fetching

- [apollographql/apollo-client](https://github.com/apollographql/apollo-client) [[@apollo/client](https://www.npmjs.com/package/@apollo/client)] - A fully-featured GraphQL client for the web.
- [swr/swr](https://github.com/vercel/swr) [[swr](https://www.npmjs.com/package/swr)] - React Hooks for data fetching with caching and revalidation.

### Charts and Visualization

- [chartjs/Chart.js](https://github.com/chartjs/Chart.js) [[chart.js](https://www.npmjs.com/package/chart.js)] - Simple yet flexible JavaScript charting for designers and developers.
- [d3/d3](https://github.com/d3/d3) [[d3](https://www.npmjs.com/package/d3)] - Data-driven documents for manipulating documents based on data.
- [plouc/nivo](https://github.com/plouc/nivo) [[@nivo/core](https://www.npmjs.com/package/@nivo/core)] - Rich set of data visualization components for React.
- [recharts/recharts](https://github.com/recharts/recharts) [[recharts](https://www.npmjs.com/package/recharts)] - Redefined chart library built with React and D3.
- [visjs/vis-timeline](https://github.com/visjs/vis-timeline) [[vis-timeline](https://www.npmjs.com/package/vis-timeline)] - Interactive timeline and network visualization components.

## Node.js

Libraries and tools for the Node.js runtime.

### Frameworks

- [adonisjs/core](https://github.com/adonisjs/core) [[@adonisjs/core](https://www.npmjs.com/package/@adonisjs/core)] - A fully featured web framework for Node.js.
- [honojs/hono](https://github.com/honojs/hono) [[hono](https://www.npmjs.com/package/hono)] - Small, fast, and light web framework that runs on many runtimes.
- [loopbackio/loopback-next](https://github.com/loopbackio/loopback-next) [[@loopback/core](https://www.npmjs.com/package/@loopback/core)] - Highly extensible Node.js and TypeScript framework for building APIs.
- [moleculerjs/moleculer](https://github.com/moleculerjs/moleculer) [[moleculer](https://www.npmjs.com/package/moleculer)] - Progressive microservices framework for Node.js.
- [sveltejs/kit](https://github.com/sveltejs/kit) [[@sveltejs/kit](https://www.npmjs.com/package/@sveltejs/kit)] - Web development framework for building fast applications with Svelte.

### Process Management

- [pm2/pm2](https://github.com/Unitech/pm2) [[pm2](https://www.npmjs.com/package/pm2)] - Production process manager for Node.js applications.
- [remy/nodemon](https://github.com/remy/nodemon) [[nodemon](https://www.npmjs.com/package/nodemon)] - Monitor for any changes in your source and restart your server.
- [sindresorhus/execa](https://github.com/sindresorhus/execa) [[execa](https://www.npmjs.com/package/execa)] - Process execution for humans with a modern API.

### File System

- [isaacs/node-graceful-fs](https://github.com/isaacs/node-graceful-fs) [[graceful-fs](https://www.npmjs.com/package/graceful-fs)] - Drop-in replacement for fs with improvements.
- [jprichardson/node-fs-extra](https://github.com/jprichardson/node-fs-extra) [[fs-extra](https://www.npmjs.com/package/fs-extra)] - Extra methods for the fs module.
- [sindresorhus/globby](https://github.com/sindresorhus/globby) [[globby](https://www.npmjs.com/package/globby)] - User-friendly glob matching with a Promise API.

### Streams

- [caolan/highland](https://github.com/caolan/highland) [[highland](https://www.npmjs.com/package/highland)] - High-level streams library for Node.js.
- [mafintosh/through2](https://github.com/rvagg/through2) [[through2](https://www.npmjs.com/package/through2)] - Tiny wrapper around Node.js streams for transform streams.
- [nodejs/readable-stream](https://github.com/nodejs/readable-stream) [[readable-stream](https://www.npmjs.com/package/readable-stream)] - Streams3, a user-land copy of the stream library from Node.js.

### Workers

- [piscinajs/piscina](https://github.com/piscinajs/piscina) [[piscina](https://www.npmjs.com/package/piscina)] - A fast, efficient Node.js Worker Thread Pool implementation.

## Infrastructure

Tools for deploying and operating TypeScript services.

### Cloud

- [aws/aws-cdk](https://github.com/aws/aws-cdk) [[aws-cdk](https://www.npmjs.com/package/aws-cdk)] - Define cloud infrastructure using familiar programming languages.
- [aws/aws-sdk-js-v3](https://github.com/aws/aws-sdk-js-v3) [[@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3)] - AWS SDK for JavaScript, version 3.
- [azure/azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js) [[@azure/storage-blob](https://www.npmjs.com/package/@azure/storage-blob)] - Azure SDK for JavaScript and TypeScript.
- [googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node) [[@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage)] - Google Cloud client libraries for Node.js.

### Serverless

- [aws/aws-lambda-nodejs-runtime-interface-client](https://github.com/aws/aws-lambda-nodejs-runtime-interface-client) - AWS Lambda runtime interface client for Node.js.
- [serverless/serverless](https://github.com/serverless/serverless) [[serverless](https://www.npmjs.com/package/serverless)] - Serverless application framework for building and deploying functions.
- [sst/sst](https://github.com/sst/sst) [[sst](https://www.npmjs.com/package/sst)] - Build full-stack serverless applications on AWS.

### Containers

- [balena-io/etcher](https://github.com/balena-io/etcher) - Flash OS images to SD cards and USB drives.
- [docker/compose](https://github.com/docker/compose) - Define and run multi-container applications with Docker.

### Infrastructure as Code

- [pulumi/pulumi](https://github.com/pulumi/pulumi) [[@pulumi/pulumi](https://www.npmjs.com/package/@pulumi/pulumi)] - Infrastructure as code using familiar programming languages.

## Security

Libraries and tools for securing TypeScript applications.

### Cryptography

- [dchest/tweetnacl-js](https://github.com/dchest/tweetnacl-js) [[tweetnacl](https://www.npmjs.com/package/tweetnacl)] - Cryptographic library implementing the TweetNaCl crypto.
- [dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js) [[bcryptjs](https://www.npmjs.com/package/bcryptjs)] - Optimized bcrypt implementation in JavaScript with zero dependencies.
- [node-forge/node-forge](https://github.com/digitalbazaar/forge) [[node-forge](https://www.npmjs.com/package/node-forge)] - Native implementations of TLS and cryptographic tools in JavaScript.

### Security Testing

- [returntocorp/semgrep](https://github.com/semgrep/semgrep) - Lightweight static analysis for finding bugs and vulnerabilities.
- [snyk/snyk](https://github.com/snyk/snyk) [[snyk](https://www.npmjs.com/package/snyk)] - Find and fix vulnerabilities in dependencies.
- [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) - The OWASP ZAP web application security scanner.

## Learning

Resources for learning TypeScript.

### Official Resources

- [microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook) - The official TypeScript handbook and reference documentation.
- [microsoft/TypeScript-Website](https://github.com/microsoft/TypeScript-Website) - The official TypeScript website and documentation source.

### Tutorials

- [nodejsapps/TypeScript-Node-Starter](https://github.com/nodejsapps/TypeScript-Node-Starter) - A reference example for TypeScript and Node.js.
- [total-typescript/beginners-typescript-tutorial](https://github.com/total-typescript/beginners-typescript-tutorial) - An interactive TypeScript tutorial for beginners.
- [type-challenges/type-challenges](https://github.com/type-challenges/type-challenges) - Collection of TypeScript type challenges with online judge.

### Courses

- [microsoft/TypeScript-React-Conversion-Guide](https://github.com/microsoft/TypeScript-React-Conversion-Guide) - A guide for migrating React projects to TypeScript.

### Books

- [basarat/typescript-book](https://github.com/basarat/typescript-book) - The definitive guide to TypeScript, written in the open.
- [mike-north/effective-typescript](https://github.com/danvk/effective-typescript) - Source code and errata for the book Effective TypeScript.

### Articles

- [microsoft/TypeScript-New-Handbook](https://github.com/microsoft/TypeScript-New-Handbook) - The new TypeScript handbook, written in the open.

### Example Projects

- [microsoft/TypeScriptSamples](https://github.com/microsoft/TypeScriptSamples) - Community-driven examples of TypeScript usage.
- [sindresorhus/awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) - Curated list of delightful Node.js packages and resources.
- [typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react) - Cheatsheets for experienced React developers getting started with TypeScript.

## Community

Community resources for TypeScript developers.

### Communities

- [typescript-community/community-bot](https://github.com/typescript-community/community-bot) - The bot used on the TypeScript Community Discord server.
- [typescript-community/resources](https://github.com/typescript-community/resources) - Useful resources found and made by members of the TypeScript community.

<!-- END GENERATED CONTENT -->

## License

Licensed under [CC0-1.0](LICENSE.txt).
