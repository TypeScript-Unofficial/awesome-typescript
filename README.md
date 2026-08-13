# Awesome TypeScript

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

### Desktop Applications

- [electron/electron](https://github.com/electron/electron) [[electron](https://www.npmjs.com/package/electron)] - Build cross-platform desktop apps with JavaScript, HTML, and CSS.
- [tauri-apps/tauri](https://github.com/tauri-apps/tauri) - Build smaller, faster, and more secure desktop applications with a web frontend.

### Developer Applications

- [microsoft/vscode](https://github.com/microsoft/vscode) - Visual Studio Code, a source-code editor built on web technologies.
- [onivim/oni2](https://github.com/onivim/oni2) - Native, lightweight modal code editor with a modern UI.
- [stoplightio/studio](https://github.com/stoplightio/studio) - API design and documentation tooling with a visual editor.

### Web Applications

- [calcom/cal.com](https://github.com/calcom/cal.com) - Open-source scheduling infrastructure for everyone.
- [n8n-io/n8n](https://github.com/n8n-io/n8n) - Workflow automation platform with a visual editor.
- [supabase/supabase](https://github.com/supabase/supabase) - Open-source Firebase alternative with a Postgres backend.

### Games

- [colyseus/colyseus](https://github.com/colyseus/colyseus) [[colyseus](https://www.npmjs.com/package/colyseus)] - Multiplayer game server framework with a realtime API.
- [phaserjs/phaser](https://github.com/phaserjs/phaser) [[phaser](https://www.npmjs.com/package/phaser)] - Fast, free, and fun open-source HTML5 game framework.

## Development Tools

Tools that help you build, ship, and maintain TypeScript projects.

### Build Tools

- [esbuild/esbuild](https://github.com/evanw/esbuild) [[esbuild](https://www.npmjs.com/package/esbuild)] - An extremely fast JavaScript and TypeScript bundler and minifier.
- [gulpjs/gulp](https://github.com/gulpjs/gulp) [[gulp](https://www.npmjs.com/package/gulp)] - Streaming build system for automating tasks.
- [rollup/rollup](https://github.com/rollup/rollup) [[rollup](https://www.npmjs.com/package/rollup)] - Module bundler for JavaScript and TypeScript libraries.
- [webpack/webpack](https://github.com/webpack/webpack) [[webpack](https://www.npmjs.com/package/webpack)] - A bundler for JavaScript, TypeScript, and other web assets.

### Bundlers

- [parcel-bundler/parcel](https://github.com/parcel-bundler/parcel) [[parcel](https://www.npmjs.com/package/parcel)] - Zero-configuration web application bundler.
- [preactjs/wmr](https://github.com/preactjs/wmr) [[wmr](https://www.npmjs.com/package/wmr)] - Tiny all-in-one development tool for modern web apps.
- [vitejs/vite](https://github.com/vitejs/vite) [[vite](https://www.npmjs.com/package/vite)] - Next-generation frontend tooling with a fast dev server.

### Compilers

- [babel/babel](https://github.com/babel/babel) [[@babel/core](https://www.npmjs.com/package/@babel/core)] - A compiler for writing next-generation JavaScript and TypeScript.
- [microsoft/TypeScript](https://github.com/microsoft/TypeScript) [[typescript](https://www.npmjs.com/package/typescript)] - The official TypeScript compiler and language service.
- [swc-project/swc](https://github.com/swc-project/swc) [[@swc/core](https://www.npmjs.com/package/@swc/core)] - A TypeScript and JavaScript compiler written in Rust.

### Code Generation

- [graphql/codegen](https://github.com/dotansimha/graphql-code-generator) [[@graphql-codegen/cli](https://www.npmjs.com/package/@graphql-codegen/cli)] - Generate code from your GraphQL schema and operations.

### Documentation

- [facebook/docusaurus](https://github.com/facebook/docusaurus) [[@docusaurus/core](https://www.npmjs.com/package/@docusaurus/core)] - Easy-to-maintain open-source documentation websites.
- [microsoft/typedoc](https://github.com/TypeStrong/typedoc) [[typedoc](https://www.npmjs.com/package/typedoc)] - Documentation generator for TypeScript projects.
- [vitepress/vitepress](https://github.com/vuejs/vitepress) [[vitepress](https://www.npmjs.com/package/vitepress)] - Vite-powered static site generator for documentation.

### Linting

- [eslint/eslint](https://github.com/eslint/eslint) [[eslint](https://www.npmjs.com/package/eslint)] - Find and fix problems in your JavaScript and TypeScript code.
- [typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) [[@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)] - Tooling that enables ESLint to lint TypeScript code.

### Formatting

- [prettier/prettier](https://github.com/prettier/prettier) [[prettier](https://www.npmjs.com/package/prettier)] - An opinionated code formatter supporting TypeScript.

### Package Management

- [npm/cli](https://github.com/npm/cli) [[npm](https://www.npmjs.com/package/npm)] - The package manager for the JavaScript and TypeScript ecosystem.
- [pnpm/pnpm](https://github.com/pnpm/pnpm) [[pnpm](https://www.npmjs.com/package/pnpm)] - Fast, disk-space-efficient package manager.
- [yarnpkg/berry](https://github.com/yarnpkg/berry) [[yarn](https://www.npmjs.com/package/yarn)] - Modern, reliable package management with workspaces.

### Monorepos

- [lerna/lerna](https://github.com/lerna/lerna) [[lerna](https://www.npmjs.com/package/lerna)] - Tool for managing JavaScript and TypeScript projects with multiple packages.
- [turborepo/turborepo](https://github.com/vercel/turbo) [[turbo](https://www.npmjs.com/package/turbo)] - Incremental bundler and build system for monorepos.

### Project Scaffolding

- [create-t3-app/create-t3-app](https://github.com/t3-oss/create-t3-app) [[create-t3-app](https://www.npmjs.com/package/create-t3-app)] - Interactive CLI for scaffolding a full-stack TypeScript app.
- [yeoman/yo](https://github.com/yeoman/yo) [[yo](https://www.npmjs.com/package/yo)] - Scaffolding tool for running Yeoman generators.

## Libraries

Reusable libraries and frameworks for building TypeScript applications.

### AI and LLM

- [langchain-ai/langchainjs](https://github.com/langchain-ai/langchainjs) [[langchain](https://www.npmjs.com/package/langchain)] - Framework for building applications with large language models.
- [openai/openai-node](https://github.com/openai/openai-node) [[openai](https://www.npmjs.com/package/openai)] - Official Node.js client for the OpenAI API.
- [vercel/ai](https://github.com/vercel/ai) [[ai](https://www.npmjs.com/package/ai)] - TypeScript toolkit for building AI-powered applications.

### Authentication

- [auth0/express-jwt](https://github.com/auth0/express-jwt) [[express-jwt](https://www.npmjs.com/package/express-jwt)] - Middleware that validates JSON Web Tokens in Express.
- [auth0/node-jws](https://github.com/auth0/node-jws) [[jws](https://www.npmjs.com/package/jws)] - JSON Web Signature implementation for Node.js.
- [panva/jose](https://github.com/panva/jose) [[jose](https://www.npmjs.com/package/jose)] - JWA, JWS, JWE, JWT, JWK, and JWKS implementations for the web.

### Authorization

- [casbin/node-casbin](https://github.com/casbin/node-casbin) [[casbin](https://www.npmjs.com/package/casbin)] - Authorization library that supports access control models.
- [osohq/oso](https://github.com/osohq/oso) [[oso](https://www.npmjs.com/package/oso)] - Policy engine for expressing authorization logic.

### Backend Frameworks

- [expressjs/express](https://github.com/expressjs/express) [[express](https://www.npmjs.com/package/express)] - Fast, unopinionated, minimalist web framework for Node.js.
- [fastify/fastify](https://github.com/fastify/fastify) [[fastify](https://www.npmjs.com/package/fastify)] - Fast and low-overhead web framework for Node.js.
- [koajs/koa](https://github.com/koajs/koa) [[koa](https://www.npmjs.com/package/koa)] - Expressive HTTP middleware framework for Node.js.
- [nestjs/nest](https://github.com/nestjs/nest) [[@nestjs/core](https://www.npmjs.com/package/@nestjs/core)] - Progressive Node.js framework for building efficient and scalable server-side applications.

### CLI

- [oclif/oclif](https://github.com/oclif/oclif) [[oclif](https://www.npmjs.com/package/oclif)] - Framework for building command-line interfaces.
- [sindresorhus/meow](https://github.com/sindresorhus/meow) [[meow](https://www.npmjs.com/package/meow)] - CLI app helper with argument parsing and help text.
- [tj/commander.js](https://github.com/tj/commander.js) [[commander](https://www.npmjs.com/package/commander)] - Complete solution for Node.js command-line interfaces.
- [yargs/yargs](https://github.com/yargs/yargs) [[yargs](https://www.npmjs.com/package/yargs)] - Interactive command-line tools with argument parsing.

### Configuration

- [dotenvx/dotenvx](https://github.com/dotenvx/dotenvx) [[@dotenvx/dotenvx](https://www.npmjs.com/package/@dotenvx/dotenvx)] - Load environment variables from .env files.
- [lorenwest/node-config](https://github.com/node-config/node-config) [[config](https://www.npmjs.com/package/config)] - Node.js application configuration management.

### Date and Time

- [date-fns/date-fns](https://github.com/date-fns/date-fns) [[date-fns](https://www.npmjs.com/package/date-fns)] - Modern JavaScript date utility library.
- [iamkun/dayjs](https://github.com/iamkun/dayjs) [[dayjs](https://www.npmjs.com/package/dayjs)] - Fast, lightweight date library compatible with Moment.js.
- [moment/moment](https://github.com/moment/moment) [[moment](https://www.npmjs.com/package/moment)] - Parse, validate, manipulate, and display dates and times.

### Database

- [better-sqlite3/better-sqlite3](https://github.com/WiseLibs/better-sqlite3) [[better-sqlite3](https://www.npmjs.com/package/better-sqlite3)] - A simple library for SQLite3 in Node.js.
- [mongodb/node-mongodb-native](https://github.com/mongodb/node-mongodb-native) [[mongodb](https://www.npmjs.com/package/mongodb)] - Official MongoDB driver for Node.js.
- [redis/node-redis](https://github.com/redis/node-redis) [[redis](https://www.npmjs.com/package/redis)] - Redis client for Node.js.
- [typeorm/typeorm](https://github.com/typeorm/typeorm) [[typeorm](https://www.npmjs.com/package/typeorm)] - ORM for TypeScript and JavaScript that supports many databases.

### HTTP

- [axios/axios](https://github.com/axios/axios) [[axios](https://www.npmjs.com/package/axios)] - Promise-based HTTP client for the browser and Node.js.
- [node-fetch/node-fetch](https://github.com/node-fetch/node-fetch) [[node-fetch](https://www.npmjs.com/package/node-fetch)] - A light-weight module that brings fetch to Node.js.
- [octokit/rest.js](https://github.com/octokit/rest.js) [[@octokit/rest](https://www.npmjs.com/package/@octokit/rest)] - GitHub REST API client for JavaScript and TypeScript.

### Logging

- [pinojs/pino](https://github.com/pinojs/pino) [[pino](https://www.npmjs.com/package/pino)] - An all-natural JSON logger for Node.js.
- [winstonjs/winston](https://github.com/winstonjs/winston) [[winston](https://www.npmjs.com/package/winston)] - A logger for just about everything.

### Messaging

- [confluentinc/confluent-kafka-javascript](https://github.com/confluentinc/confluent-kafka-javascript) [[@confluentinc/kafka-javascript](https://www.npmjs.com/package/@confluentinc/kafka-javascript)] - Kafka client for Node.js backed by librdkafka.
- [kafkajs/kafkajs](https://github.com/tulios/kafkajs) [[kafkajs](https://www.npmjs.com/package/kafkajs)] - A modern Apache Kafka client for Node.js.

### ORM and Query Builders

- [drizzle-team/drizzle-orm](https://github.com/drizzle-team/drizzle-orm) [[drizzle-orm](https://www.npmjs.com/package/drizzle-orm)] - Headless TypeScript ORM with a SQL-like query builder.
- [knex/knex](https://github.com/knex/knex) [[knex](https://www.npmjs.com/package/knex)] - SQL query builder for Postgres, MySQL, and SQLite.
- [prisma/prisma](https://github.com/prisma/prisma) [[@prisma/client](https://www.npmjs.com/package/@prisma/client)] - Type-safe database client and ORM.
- [sequelize/sequelize](https://github.com/sequelize/sequelize) [[sequelize](https://www.npmjs.com/package/sequelize)] - Promise-based ORM for Node.js supporting multiple SQL dialects.

### Parsing

- [cheeriojs/cheerio](https://github.com/cheeriojs/cheerio) [[cheerio](https://www.npmjs.com/package/cheerio)] - Fast, flexible, and lean implementation of core jQuery for the server.
- [mathiasbynens/he](https://github.com/mathiasbynens/he) [[he](https://www.npmjs.com/package/he)] - A robust HTML entity encoder and decoder.
- [sindresorhus/parse-json](https://github.com/sindresorhus/parse-json) [[parse-json](https://www.npmjs.com/package/parse-json)] - Parse JSON with more helpful errors.

### Serialization

- [protobufjs/protobuf.js](https://github.com/protobufjs/protobuf.js) [[protobufjs](https://www.npmjs.com/package/protobufjs)] - Protocol Buffers for JavaScript and TypeScript.
- [typestack/class-transformer](https://github.com/typestack/class-transformer) [[class-transformer](https://www.npmjs.com/package/class-transformer)] - Transform plain objects into class instances and back.

### Validation

- [colinhacks/zod](https://github.com/colinhacks/zod) [[zod](https://www.npmjs.com/package/zod)] - TypeScript-first schema validation with static type inference.
- [sideway/joi](https://github.com/sideway/joi) [[joi](https://www.npmjs.com/package/joi)] - Schema description language and data validator.
- [typestack/class-validator](https://github.com/typestack/class-validator) [[class-validator](https://www.npmjs.com/package/class-validator)] - Decorator-based property validation for classes.

### Testing

- [jestjs/jest](https://github.com/jestjs/jest) [[jest](https://www.npmjs.com/package/jest)] - Delightful JavaScript and TypeScript testing framework.
- [mochajs/mocha](https://github.com/mochajs/mocha) [[mocha](https://www.npmjs.com/package/mocha)] - Simple, flexible, fun JavaScript test framework.
- [vitest-dev/vitest](https://github.com/vitest-dev/vitest) [[vitest](https://www.npmjs.com/package/vitest)] - A unit test framework powered by Vite.

### Observability

- [open-telemetry/opentelemetry-js](https://github.com/open-telemetry/opentelemetry-js) [[@opentelemetry/api](https://www.npmjs.com/package/@opentelemetry/api)] - OpenTelemetry JavaScript API and SDK for observability.
- [sentry/sentry-javascript](https://github.com/getsentry/sentry-javascript) [[@sentry/node](https://www.npmjs.com/package/@sentry/node)] - Official Sentry SDK for JavaScript and TypeScript.

### WebSockets

- [socketio/socket.io](https://github.com/socketio/socket.io) [[socket.io](https://www.npmjs.com/package/socket.io)] - Realtime application framework with WebSocket support.
- [websockets/ws](https://github.com/websockets/ws) [[ws](https://www.npmjs.com/package/ws)] - A simple and thoroughly tested WebSocket client and server.

### Utilities

- [lodash/lodash](https://github.com/lodash/lodash) [[lodash](https://www.npmjs.com/package/lodash)] - A modern JavaScript utility library delivering modularity and performance.
- [microsoft/tslib](https://github.com/microsoft/tslib) [[tslib](https://www.npmjs.com/package/tslib)] - Runtime library for TypeScript helper functions.
- [sindresorhus/type-fest](https://github.com/sindresorhus/type-fest) [[type-fest](https://www.npmjs.com/package/type-fest)] - A collection of essential TypeScript types.

## Frontend

Libraries and frameworks for building user interfaces.

### Frameworks

- [angular/angular](https://github.com/angular/angular) [[@angular/core](https://www.npmjs.com/package/@angular/core)] - Platform for building mobile and desktop web applications.
- [facebook/react](https://github.com/facebook/react) [[react](https://www.npmjs.com/package/react)] - A JavaScript library for building user interfaces.
- [preactjs/preact](https://github.com/preactjs/preact) [[preact](https://www.npmjs.com/package/preact)] - Fast 3kB alternative to React with the same modern API.
- [solidjs/solid](https://github.com/solidjs/solid) [[solid-js](https://www.npmjs.com/package/solid-js)] - A declarative JavaScript library for building user interfaces.
- [sveltejs/svelte](https://github.com/sveltejs/svelte) [[svelte](https://www.npmjs.com/package/svelte)] - Cybernetically enhanced web apps with a compiler.
- [vuejs/core](https://github.com/vuejs/core) [[vue](https://www.npmjs.com/package/vue)] - The progressive JavaScript framework for building user interfaces.

### UI Libraries

- [mui/material-ui](https://github.com/mui/material-ui) [[@mui/material](https://www.npmjs.com/package/@mui/material)] - Ready-to-use React components implementing Material Design.
- [radix-ui/primitives](https://github.com/radix-ui/primitives) [[@radix-ui/react-primitive](https://www.npmjs.com/package/@radix-ui/react-primitive)] - Unstyled, accessible components for building high-quality design systems.
- [shadcn-ui/ui](https://github.com/shadcn-ui/ui) - Beautifully designed components built with Radix UI and Tailwind CSS.
- [tailwindlabs/headlessui](https://github.com/tailwindlabs/headlessui) [[@headlessui/react](https://www.npmjs.com/package/@headlessui/react)] - Completely unstyled, fully accessible UI components.

### Routing

- [remix-run/react-router](https://github.com/remix-run/react-router) [[react-router](https://www.npmjs.com/package/react-router)] - Declarative routing for React applications.
- [tanstack/router](https://github.com/TanStack/router) [[@tanstack/react-router](https://www.npmjs.com/package/@tanstack/react-router)] - Type-safe routing with built-in data fetching for React.

### State Management

- [pmndrs/zustand](https://github.com/pmndrs/zustand) [[zustand](https://www.npmjs.com/package/zustand)] - A small, fast, and scalable state management solution for React.
- [reduxjs/redux](https://github.com/reduxjs/redux) [[redux](https://www.npmjs.com/package/redux)] - A predictable state container for JavaScript apps.
- [reduxjs/redux-toolkit](https://github.com/reduxjs/redux-toolkit) [[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)] - The official, opinionated toolset for efficient Redux development.
- [tanstack/query](https://github.com/TanStack/query) [[@tanstack/react-query](https://www.npmjs.com/package/@tanstack/react-query)] - Asynchronous state management for server state.

### Forms

- [react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form) [[react-hook-form](https://www.npmjs.com/package/react-hook-form)] - Performant, flexible, and extensible forms for React.
- [tanstack/form](https://github.com/TanStack/form) [[@tanstack/react-form](https://www.npmjs.com/package/@tanstack/react-form)] - Headless, performant, and type-safe form state management.

### Styling

- [emotion-js/emotion](https://github.com/emotion-js/emotion) [[@emotion/react](https://www.npmjs.com/package/@emotion/react)] - CSS-in-JS library designed for high-performance style composition.
- [styled-components/styled-components](https://github.com/styled-components/styled-components) [[styled-components](https://www.npmjs.com/package/styled-components)] - Visual primitives for component-based styling.
- [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) [[tailwindcss](https://www.npmjs.com/package/tailwindcss)] - A utility-first CSS framework for rapidly building custom designs.

### Animation

- [pmndrs/react-spring](https://github.com/pmndrs/react-spring) [[@react-spring/web](https://www.npmjs.com/package/@react-spring/web)] - A spring-physics-based animation library for React.
- [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) [[@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber)] - A React renderer for Three.js.

### Data Fetching

- [apollographql/apollo-client](https://github.com/apollographql/apollo-client) [[@apollo/client](https://www.npmjs.com/package/@apollo/client)] - A fully-featured GraphQL client for the web.
- [swr/swr](https://github.com/vercel/swr) [[swr](https://www.npmjs.com/package/swr)] - React Hooks for data fetching with caching and revalidation.

### Charts and Visualization

- [plouc/nivo](https://github.com/plouc/nivo) [[@nivo/core](https://www.npmjs.com/package/@nivo/core)] - Rich set of data visualization components for React.
- [recharts/recharts](https://github.com/recharts/recharts) [[recharts](https://www.npmjs.com/package/recharts)] - Redefined chart library built with React and D3.
- [visjs/vis-timeline](https://github.com/visjs/vis-timeline) [[vis-timeline](https://www.npmjs.com/package/vis-timeline)] - Interactive timeline and network visualization components.

## Node.js

Libraries and tools for the Node.js runtime.

### Frameworks

- [adonisjs/core](https://github.com/adonisjs/core) [[@adonisjs/core](https://www.npmjs.com/package/@adonisjs/core)] - A fully featured web framework for Node.js.
- [honojs/hono](https://github.com/honojs/hono) [[hono](https://www.npmjs.com/package/hono)] - Small, fast, and light web framework that runs on many runtimes.
- [loopbackio/loopback-next](https://github.com/loopbackio/loopback-next) [[@loopback/core](https://www.npmjs.com/package/@loopback/core)] - Highly extensible Node.js and TypeScript framework for building APIs.
- [sveltejs/kit](https://github.com/sveltejs/kit) [[@sveltejs/kit](https://www.npmjs.com/package/@sveltejs/kit)] - Web development framework for building fast applications with Svelte.

### Process Management

- [pm2/pm2](https://github.com/Unitech/pm2) [[pm2](https://www.npmjs.com/package/pm2)] - Production process manager for Node.js applications.
- [sindresorhus/execa](https://github.com/sindresorhus/execa) [[execa](https://www.npmjs.com/package/execa)] - Process execution for humans with a modern API.

### File System

- [isaacs/node-graceful-fs](https://github.com/isaacs/node-graceful-fs) [[graceful-fs](https://www.npmjs.com/package/graceful-fs)] - Drop-in replacement for fs with improvements.
- [sindresorhus/globby](https://github.com/sindresorhus/globby) [[globby](https://www.npmjs.com/package/globby)] - User-friendly glob matching with a Promise API.

### Streams

- [mafintosh/through2](https://github.com/rvagg/through2) [[through2](https://www.npmjs.com/package/through2)] - Tiny wrapper around Node.js streams for transform streams.
- [nodejs/readable-stream](https://github.com/nodejs/readable-stream) [[readable-stream](https://www.npmjs.com/package/readable-stream)] - Streams3, a user-land copy of the stream library from Node.js.

### Workers

- [piscinajs/piscina](https://github.com/piscinajs/piscina) [[piscina](https://www.npmjs.com/package/piscina)] - A fast, efficient Node.js Worker Thread Pool implementation.

## Infrastructure

Tools for deploying and operating TypeScript services.

### Cloud

- [aws/aws-cdk](https://github.com/aws/aws-cdk) [[aws-cdk](https://www.npmjs.com/package/aws-cdk)] - Define cloud infrastructure using familiar programming languages.
- [aws/aws-sdk-js-v3](https://github.com/aws/aws-sdk-js-v3) [[@aws-sdk/client-s3](https://www.npmjs.com/package/@aws-sdk/client-s3)] - AWS SDK for JavaScript, version 3.
- [googleapis/google-cloud-node](https://github.com/googleapis/google-cloud-node) [[@google-cloud/storage](https://www.npmjs.com/package/@google-cloud/storage)] - Google Cloud client libraries for Node.js.

### Serverless

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

- [dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js) [[bcryptjs](https://www.npmjs.com/package/bcryptjs)] - Optimized bcrypt implementation in JavaScript with zero dependencies.
- [node-forge/node-forge](https://github.com/digitalbazaar/forge) [[node-forge](https://www.npmjs.com/package/node-forge)] - Native implementations of TLS and cryptographic tools in JavaScript.

### Security Testing

- [snyk/snyk](https://github.com/snyk/snyk) [[snyk](https://www.npmjs.com/package/snyk)] - Find and fix vulnerabilities in dependencies.
- [zaproxy/zaproxy](https://github.com/zaproxy/zaproxy) - The OWASP ZAP web application security scanner.

## Learning

Resources for learning TypeScript.

### Official Resources

- [microsoft/TypeScript-Handbook](https://github.com/microsoft/TypeScript-Handbook) - The official TypeScript handbook and reference documentation.
- [microsoft/TypeScript-Website](https://github.com/microsoft/TypeScript-Website) - The official TypeScript website and documentation source.

### Tutorials

- [total-typescript/beginners-typescript-tutorial](https://github.com/total-typescript/beginners-typescript-tutorial) - An interactive TypeScript tutorial for beginners.
- [type-challenges/type-challenges](https://github.com/type-challenges/type-challenges) - Collection of TypeScript type challenges with online judge.

### Courses

- [microsoft/TypeScript-React-Conversion-Guide](https://github.com/microsoft/TypeScript-React-Conversion-Guide) - A guide for migrating React projects to TypeScript.

### Books

- [mike-north/effective-typescript](https://github.com/danvk/effective-typescript) - Source code and errata for the book Effective TypeScript.

### Articles

- [microsoft/TypeScript-New-Handbook](https://github.com/microsoft/TypeScript-New-Handbook) - The new TypeScript handbook, written in the open.

### Example Projects

- [microsoft/TypeScriptSamples](https://github.com/microsoft/TypeScriptSamples) - Community-driven examples of TypeScript usage.
- [sindresorhus/awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) - Curated list of delightful Node.js packages and resources.

## Community

Community resources for TypeScript developers.

### Communities

- [typescript-community/community-bot](https://github.com/typescript-community/community-bot) - The bot used on the TypeScript Community Discord server.
- [typescript-community/resources](https://github.com/typescript-community/resources) - Useful resources found and made by members of the TypeScript community.

<!-- END GENERATED CONTENT -->

## License

Licensed under [CC0-1.0](LICENSE.txt).
