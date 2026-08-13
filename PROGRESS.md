# Progress

This file tracks the setup and maintenance of the repository. Each task is
marked `[x]` when complete.

## Initial setup

- [x] Research `rust-unofficial/awesome-rust` structure, philosophy, and workflows
- [x] Design category hierarchy and entry schema
- [x] Configure project scaffolding (package.json, tsconfig, editorconfig, gitattributes, gitignore, markdownlint, prettier)
- [x] Implement structured source data under `src/data/`
- [x] Implement validation tooling (`scripts/validate.ts`)
- [x] Implement deterministic README generation (`scripts/generate.ts`)
- [x] Implement link checking (`scripts/check-links.ts`)
- [x] Add validation and generation test suites
- [x] Add GitHub Actions pipelines (CI + link check)
- [x] Add issue templates and pull request template
- [x] Add documentation (README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, LICENSE)
- [x] Curate 153 verified TypeScript projects (284 URLs checked)
- [x] Verify full pipeline: type-check, validate, lint, format, test, generate (idempotent)

## Publishing

- [x] Commit changes in logical groups
- [x] Push to `TypeScript-Unofficial/awesome-typescript`
- [ ] Confirm CI passes on the pushed branch
