import type { Entry } from "../types.js";

/** Libraries and tools for securing TypeScript applications. */
export const security: Entry[] = [
  // ---------------------------------------------------------------------------
  // Security Testing
  // ---------------------------------------------------------------------------
  {
    category: "security/cryptography",
    name: "dchest/tweetnacl-js",
    repository: "https://github.com/dchest/tweetnacl-js",
    package: "tweetnacl",
    packageUrl: "https://www.npmjs.com/package/tweetnacl",
    description: "Cryptographic library implementing the TweetNaCl crypto.",
  },
  {
    category: "security/cryptography",
    name: "dcodeIO/bcrypt.js",
    repository: "https://github.com/dcodeIO/bcrypt.js",
    package: "bcryptjs",
    packageUrl: "https://www.npmjs.com/package/bcryptjs",
    description: "Optimized bcrypt implementation in JavaScript with zero dependencies.",
  },
  {
    category: "security/cryptography",
    name: "node-forge/node-forge",
    repository: "https://github.com/digitalbazaar/forge",
    package: "node-forge",
    packageUrl: "https://www.npmjs.com/package/node-forge",
    description: "Native implementations of TLS and cryptographic tools in JavaScript.",
  },
  {
    category: "security/testing",
    name: "returntocorp/semgrep",
    repository: "https://github.com/semgrep/semgrep",
    description: "Lightweight static analysis for finding bugs and vulnerabilities.",
  },
  {
    category: "security/testing",
    name: "snyk/snyk",
    repository: "https://github.com/snyk/snyk",
    package: "snyk",
    packageUrl: "https://www.npmjs.com/package/snyk",
    description: "Find and fix vulnerabilities in dependencies.",
  },
  {
    category: "security/testing",
    name: "zaproxy/zaproxy",
    repository: "https://github.com/zaproxy/zaproxy",
    description: "The OWASP ZAP web application security scanner.",
  },
];
