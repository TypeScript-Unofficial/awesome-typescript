# Contributing

Do you want to contribute? We'd love that.

Our goal is to have mostly projects that are stable and useful to many TypeScript developers.

## TL;DR

- Accepted: projects that demonstrate meaningful adoption, stability, usefulness, and maintenance.
- Format: `[ACCOUNT/REPO](https://github.com/ACCOUNT/REPO) [[PACKAGE](https://www.npmjs.com/package/PACKAGE)] - DESCRIPTION`
- Sort: alphabetical
- One project: one canonical category
- No duplicates

## How?

The list is generated from structured source data, not edited by hand. To add a project:

1. Read the [entry format](#entry-format) and [acceptance criteria](#acceptance-criteria) below.
2. Add an entry to the appropriate file under `src/data/`.
3. Run `npm run validate` and `npm run generate` locally to confirm everything passes.
4. Open a pull request. CI will re-run validation and generation automatically.

If you prefer not to touch the code, you can also open an issue using the [Add project](.github/ISSUE_TEMPLATE/add-project.yml) template and a maintainer will add it for you.

## Entry format

Every entry lives in the structured data files under `src/data/`. The canonical shape is:

```ts
{
  category: "libraries/http",
  name: "example/library",
  repository: "https://github.com/example/library",
  package: "example-library",
  packageUrl: "https://www.npmjs.com/package/example-library",
  description: "A short and objective description.",
}
```

- `category` is the canonical category id (see `src/categories.ts`).
- `name` is conventionally `account/repository`.
- `repository` and `packageUrl` must use HTTPS.
- `package`/`packageUrl` are optional; omit them when the project has no npm package.
- `description` should be one short, objective sentence that explains what the project does. Do not repeat the project name, and avoid promotional language such as "best", "fastest", "amazing", or "revolutionary".

The generated README renders each entry as:

```text
- [example/library](https://github.com/example/library) [[example-library](https://www.npmjs.com/package/example-library)] - A short and objective description.
```

## Acceptance criteria

We want mostly projects that are stable and useful to many TypeScript developers. A project should generally satisfy **at least one** meaningful adoption signal:

- 100+ GitHub stars, **or**
- 5,000+ weekly npm downloads, **or**
- strong evidence of significant real-world adoption, **or**
- maintained by a recognized organization or ecosystem and clearly important despite lower public metrics.

Newer projects can be accepted if they are strategically important, clearly high quality, or maintained by a major ecosystem organization — but exceptions must be explained in the pull request.

A project should generally be:

- useful to TypeScript developers,
- stable enough for its purpose,
- not obviously abandoned,
- not a trivial personal experiment,
- not a duplicate of an existing entry without meaningful distinction.

### What counts as a TypeScript project

- Projects written primarily in TypeScript.
- Libraries distributed with first-class TypeScript support.
- Frameworks with TypeScript as a major supported development experience.
- Tools built primarily for TypeScript developers.
- Learning resources specifically focused on TypeScript.
- Major JavaScript ecosystem tools when TypeScript support is first-class and highly relevant.

This is not a generic "awesome JavaScript" list. When a project exists in both ecosystems, only include it when its TypeScript relevance is substantial.

## Removing projects

We don't remove projects merely because they have not had a commit recently, their stars stopped growing, or the maintainer is inactive. A project may be removed if it is broken beyond reasonable use, officially deprecated, clearly superseded by its own maintainers, deleted, no longer relevant to TypeScript, or malicious. When a project is replaced, prefer marking it `deprecated` rather than deleting it outright.
