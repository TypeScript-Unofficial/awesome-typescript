import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { validateEntry, validateEntries, compareNames } from "./validate.js";
import type { Entry } from "../types.js";

const base: Entry = {
  category: "libraries/http",
  name: "example/library",
  repository: "https://github.com/example/library",
  package: "example-library",
  packageUrl: "https://www.npmjs.com/package/example-library",
  description: "A short and objective description.",
};

describe("validateEntry", () => {
  it("accepts a valid entry", () => {
    assert.deepEqual(validateEntry(base), []);
  });

  it("rejects an unknown category", () => {
    const findings = validateEntry({ ...base, category: "does/not/exist" });
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("Unknown category")),
    );
  });

  it("rejects a missing description", () => {
    const findings = validateEntry({ ...base, description: "" });
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("Missing description")),
    );
  });

  it("rejects an overlong description", () => {
    const findings = validateEntry({ ...base, description: "x".repeat(201) });
    assert.ok(findings.some((f) => f.severity === "error" && f.message.includes("exceeds")));
  });

  it("rejects a non-HTTPS repository URL", () => {
    const findings = validateEntry({ ...base, repository: "http://github.com/example/library" });
    assert.ok(findings.some((f) => f.severity === "error" && f.message.includes("HTTPS")));
  });

  it("rejects a malformed npm package name", () => {
    const findings = validateEntry({ ...base, package: "Not A Valid Name" });
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("Invalid npm package")),
    );
  });

  it("warns on promotional description words", () => {
    const findings = validateEntry({ ...base, description: "The best library ever." });
    assert.ok(findings.some((f) => f.severity === "warning" && f.message.includes("promotional")));
  });
});

describe("validateEntries", () => {
  it("rejects duplicate repository URLs", () => {
    const findings = validateEntries([base, { ...base, name: "other/library" }]);
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("Duplicate repository")),
    );
  });

  it("rejects duplicate package names", () => {
    const findings = validateEntries([
      base,
      { ...base, name: "other/library", repository: "https://github.com/other/library" },
    ]);
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("Duplicate package")),
    );
  });

  it("rejects out-of-order entries within a category", () => {
    const findings = validateEntries([
      { ...base, name: "zeta/project" },
      { ...base, name: "alpha/project" },
    ]);
    assert.ok(
      findings.some((f) => f.severity === "error" && f.message.includes("not alphabetically")),
    );
  });
});

describe("compareNames", () => {
  it("sorts case-insensitively", () => {
    assert.ok(compareNames("Alpha", "beta") < 0);
    assert.ok(compareNames("beta", "Alpha") > 0);
  });

  it("is deterministic", () => {
    assert.equal(compareNames("a", "b"), compareNames("a", "b"));
  });
});
