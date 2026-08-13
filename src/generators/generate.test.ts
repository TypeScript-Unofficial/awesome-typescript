import { describe, it } from "node:test";
import assert from "node:assert/strict";

import {
  generateContent,
  renderEntry,
  spliceGenerated,
  GENERATED_START,
  GENERATED_END,
} from "./generate.js";
import type { Entry } from "../types.js";

const entry: Entry = {
  category: "libraries/http",
  name: "example/library",
  repository: "https://github.com/example/library",
  package: "example-library",
  packageUrl: "https://www.npmjs.com/package/example-library",
  description: "A short and objective description.",
};

describe("renderEntry", () => {
  it("renders the canonical format with package link", () => {
    assert.equal(
      renderEntry(entry),
      "- [example/library](https://github.com/example/library) [[example-library](https://www.npmjs.com/package/example-library)] - A short and objective description.",
    );
  });

  it("omits the package link when absent", () => {
    const { package: _p, packageUrl: _u, ...rest } = entry;
    assert.equal(
      renderEntry(rest),
      "- [example/library](https://github.com/example/library) - A short and objective description.",
    );
  });
});

describe("generateContent", () => {
  it("is deterministic", () => {
    const a = generateContent([entry, { ...entry, name: "zzz/other" }]);
    const b = generateContent([{ ...entry, name: "zzz/other" }, entry]);
    assert.equal(a, b);
  });

  it("sorts entries alphabetically within a category", () => {
    const out = generateContent([
      { ...entry, name: "zeta/project" },
      { ...entry, name: "alpha/project" },
    ]);
    const alphaIdx = out.indexOf("alpha/project");
    const zetaIdx = out.indexOf("zeta/project");
    assert.ok(alphaIdx !== -1 && zetaIdx !== -1 && alphaIdx < zetaIdx);
  });

  it("includes the table of contents and a category heading", () => {
    const out = generateContent([entry]);
    assert.ok(out.includes("## Table of Contents"));
    assert.ok(out.includes("### HTTP"));
  });
});

describe("spliceGenerated", () => {
  it("preserves hand-authored content outside the markers", () => {
    const readme = `# Awesome TypeScript\n\n${GENERATED_START}\nOLD\n${GENERATED_END}\n\n## License\n`;
    const next = spliceGenerated(readme, `${GENERATED_START}\nNEW\n${GENERATED_END}`);
    assert.ok(next.startsWith("# Awesome TypeScript"));
    assert.ok(next.includes("NEW"));
    assert.ok(!next.includes("OLD"));
    assert.ok(next.trimEnd().endsWith("## License"));
  });

  it("throws when markers are missing", () => {
    assert.throws(() => spliceGenerated("# no markers", "x"));
  });
});
