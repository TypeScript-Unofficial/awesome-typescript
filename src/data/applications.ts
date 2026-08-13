import type { Entry } from "../types.js";

/** Applications written in or powered by TypeScript. */
export const applications: Entry[] = [
  // ---------------------------------------------------------------------------
  // CLI Applications
  // ---------------------------------------------------------------------------
  {
    category: "applications/cli",
    name: "sindresorhus/trash",
    repository: "https://github.com/sindresorhus/trash",
    package: "trash",
    packageUrl: "https://www.npmjs.com/package/trash",
    description: "Move files and folders to the trash.",
  },
  {
    category: "applications/cli",
    name: "typicode/husky",
    repository: "https://github.com/typicode/husky",
    package: "husky",
    packageUrl: "https://www.npmjs.com/package/husky",
    description: "Git hooks made easy.",
  },
  {
    category: "applications/cli",
    name: "vercel/serve",
    repository: "https://github.com/vercel/serve",
    package: "serve",
    packageUrl: "https://www.npmjs.com/package/serve",
    description: "Static file serving and directory listing.",
  },

  // ---------------------------------------------------------------------------
  // Desktop Applications
  // ---------------------------------------------------------------------------
  {
    category: "applications/desktop",
    name: "electron/electron",
    repository: "https://github.com/electron/electron",
    package: "electron",
    packageUrl: "https://www.npmjs.com/package/electron",
    description: "Build cross-platform desktop apps with JavaScript, HTML, and CSS.",
  },
  {
    category: "applications/desktop",
    name: "tauri-apps/tauri",
    repository: "https://github.com/tauri-apps/tauri",
    description: "Build smaller, faster, and more secure desktop applications with a web frontend.",
  },

  // ---------------------------------------------------------------------------
  // Developer Applications
  // ---------------------------------------------------------------------------
  {
    category: "applications/developer",
    name: "microsoft/vscode",
    repository: "https://github.com/microsoft/vscode",
    description: "Visual Studio Code, a source-code editor built on web technologies.",
  },
  {
    category: "applications/developer",
    name: "onivim/oni2",
    repository: "https://github.com/onivim/oni2",
    description: "Native, lightweight modal code editor with a modern UI.",
  },
  {
    category: "applications/developer",
    name: "stoplightio/studio",
    repository: "https://github.com/stoplightio/studio",
    description: "API design and documentation tooling with a visual editor.",
  },

  // ---------------------------------------------------------------------------
  // Web Applications
  // ---------------------------------------------------------------------------
  {
    category: "applications/web",
    name: "calcom/cal.com",
    repository: "https://github.com/calcom/cal.com",
    description: "Open-source scheduling infrastructure for everyone.",
  },
  {
    category: "applications/web",
    name: "n8n-io/n8n",
    repository: "https://github.com/n8n-io/n8n",
    description: "Workflow automation platform with a visual editor.",
  },
  {
    category: "applications/web",
    name: "supabase/supabase",
    repository: "https://github.com/supabase/supabase",
    description: "Open-source Firebase alternative with a Postgres backend.",
  },

  // ---------------------------------------------------------------------------
  // Games
  // ---------------------------------------------------------------------------
  {
    category: "applications/games",
    name: "colyseus/colyseus",
    repository: "https://github.com/colyseus/colyseus",
    package: "colyseus",
    packageUrl: "https://www.npmjs.com/package/colyseus",
    description: "Multiplayer game server framework with a realtime API.",
  },
  {
    category: "applications/games",
    name: "phaserjs/phaser",
    repository: "https://github.com/phaserjs/phaser",
    package: "phaser",
    packageUrl: "https://www.npmjs.com/package/phaser",
    description: "Fast, free, and fun open-source HTML5 game framework.",
  },
];
