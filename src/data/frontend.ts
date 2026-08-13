import type { Entry } from "../types.js";

/** Libraries and frameworks for building user interfaces. */
export const frontend: Entry[] = [
  // ---------------------------------------------------------------------------
  // Frameworks
  // ---------------------------------------------------------------------------
  {
    category: "frontend/frameworks",
    name: "angular/angular",
    repository: "https://github.com/angular/angular",
    package: "@angular/core",
    packageUrl: "https://www.npmjs.com/package/@angular/core",
    description: "Platform for building mobile and desktop web applications.",
  },
  {
    category: "frontend/frameworks",
    name: "facebook/react",
    repository: "https://github.com/facebook/react",
    package: "react",
    packageUrl: "https://www.npmjs.com/package/react",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    category: "frontend/frameworks",
    name: "preactjs/preact",
    repository: "https://github.com/preactjs/preact",
    package: "preact",
    packageUrl: "https://www.npmjs.com/package/preact",
    description: "Fast 3kB alternative to React with the same modern API.",
  },
  {
    category: "frontend/frameworks",
    name: "solidjs/solid",
    repository: "https://github.com/solidjs/solid",
    package: "solid-js",
    packageUrl: "https://www.npmjs.com/package/solid-js",
    description: "A declarative JavaScript library for building user interfaces.",
  },
  {
    category: "frontend/frameworks",
    name: "sveltejs/svelte",
    repository: "https://github.com/sveltejs/svelte",
    package: "svelte",
    packageUrl: "https://www.npmjs.com/package/svelte",
    description: "Cybernetically enhanced web apps with a compiler.",
  },
  {
    category: "frontend/frameworks",
    name: "vuejs/core",
    repository: "https://github.com/vuejs/core",
    package: "vue",
    packageUrl: "https://www.npmjs.com/package/vue",
    description: "The progressive JavaScript framework for building user interfaces.",
  },

  // ---------------------------------------------------------------------------
  // UI Libraries
  // ---------------------------------------------------------------------------
  {
    category: "frontend/ui-libraries",
    name: "mui/material-ui",
    repository: "https://github.com/mui/material-ui",
    package: "@mui/material",
    packageUrl: "https://www.npmjs.com/package/@mui/material",
    description: "Ready-to-use React components implementing Material Design.",
  },
  {
    category: "frontend/ui-libraries",
    name: "radix-ui/primitives",
    repository: "https://github.com/radix-ui/primitives",
    package: "@radix-ui/react-primitive",
    packageUrl: "https://www.npmjs.com/package/@radix-ui/react-primitive",
    description: "Unstyled, accessible components for building high-quality design systems.",
  },
  {
    category: "frontend/ui-libraries",
    name: "shadcn-ui/ui",
    repository: "https://github.com/shadcn-ui/ui",
    description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
  },
  {
    category: "frontend/ui-libraries",
    name: "tailwindlabs/headlessui",
    repository: "https://github.com/tailwindlabs/headlessui",
    package: "@headlessui/react",
    packageUrl: "https://www.npmjs.com/package/@headlessui/react",
    description: "Completely unstyled, fully accessible UI components.",
  },

  // ---------------------------------------------------------------------------
  // Routing
  // ---------------------------------------------------------------------------
  {
    category: "frontend/routing",
    name: "remix-run/react-router",
    repository: "https://github.com/remix-run/react-router",
    package: "react-router",
    packageUrl: "https://www.npmjs.com/package/react-router",
    description: "Declarative routing for React applications.",
  },
  {
    category: "frontend/routing",
    name: "tanstack/router",
    repository: "https://github.com/TanStack/router",
    package: "@tanstack/react-router",
    packageUrl: "https://www.npmjs.com/package/@tanstack/react-router",
    description: "Type-safe routing with built-in data fetching for React.",
  },

  // ---------------------------------------------------------------------------
  // State Management
  // ---------------------------------------------------------------------------
  {
    category: "frontend/state-management",
    name: "pmndrs/zustand",
    repository: "https://github.com/pmndrs/zustand",
    package: "zustand",
    packageUrl: "https://www.npmjs.com/package/zustand",
    description: "A small, fast, and scalable state management solution for React.",
  },
  {
    category: "frontend/state-management",
    name: "reduxjs/redux",
    repository: "https://github.com/reduxjs/redux",
    package: "redux",
    packageUrl: "https://www.npmjs.com/package/redux",
    description: "A predictable state container for JavaScript apps.",
  },
  {
    category: "frontend/state-management",
    name: "reduxjs/redux-toolkit",
    repository: "https://github.com/reduxjs/redux-toolkit",
    package: "@reduxjs/toolkit",
    packageUrl: "https://www.npmjs.com/package/@reduxjs/toolkit",
    description: "The official, opinionated toolset for efficient Redux development.",
  },
  {
    category: "frontend/state-management",
    name: "tanstack/query",
    repository: "https://github.com/TanStack/query",
    package: "@tanstack/react-query",
    packageUrl: "https://www.npmjs.com/package/@tanstack/react-query",
    description: "Asynchronous state management for server state.",
  },

  // ---------------------------------------------------------------------------
  // Forms
  // ---------------------------------------------------------------------------
  {
    category: "frontend/forms",
    name: "react-hook-form/react-hook-form",
    repository: "https://github.com/react-hook-form/react-hook-form",
    package: "react-hook-form",
    packageUrl: "https://www.npmjs.com/package/react-hook-form",
    description: "Performant, flexible, and extensible forms for React.",
  },
  {
    category: "frontend/forms",
    name: "tanstack/form",
    repository: "https://github.com/TanStack/form",
    package: "@tanstack/react-form",
    packageUrl: "https://www.npmjs.com/package/@tanstack/react-form",
    description: "Headless, performant, and type-safe form state management.",
  },

  // ---------------------------------------------------------------------------
  // Styling
  // ---------------------------------------------------------------------------
  {
    category: "frontend/styling",
    name: "emotion-js/emotion",
    repository: "https://github.com/emotion-js/emotion",
    package: "@emotion/react",
    packageUrl: "https://www.npmjs.com/package/@emotion/react",
    description: "CSS-in-JS library designed for high-performance style composition.",
  },
  {
    category: "frontend/styling",
    name: "styled-components/styled-components",
    repository: "https://github.com/styled-components/styled-components",
    package: "styled-components",
    packageUrl: "https://www.npmjs.com/package/styled-components",
    description: "Visual primitives for component-based styling.",
  },
  {
    category: "frontend/styling",
    name: "tailwindlabs/tailwindcss",
    repository: "https://github.com/tailwindlabs/tailwindcss",
    package: "tailwindcss",
    packageUrl: "https://www.npmjs.com/package/tailwindcss",
    description: "A utility-first CSS framework for rapidly building custom designs.",
  },

  // ---------------------------------------------------------------------------
  // Animation
  // ---------------------------------------------------------------------------
  {
    category: "frontend/animation",
    name: "pmndrs/react-spring",
    repository: "https://github.com/pmndrs/react-spring",
    package: "@react-spring/web",
    packageUrl: "https://www.npmjs.com/package/@react-spring/web",
    description: "A spring-physics-based animation library for React.",
  },
  {
    category: "frontend/animation",
    name: "pmndrs/react-three-fiber",
    repository: "https://github.com/pmndrs/react-three-fiber",
    package: "@react-three/fiber",
    packageUrl: "https://www.npmjs.com/package/@react-three/fiber",
    description: "A React renderer for Three.js.",
  },

  // ---------------------------------------------------------------------------
  // Data Fetching
  // ---------------------------------------------------------------------------
  {
    category: "frontend/data-fetching",
    name: "apollographql/apollo-client",
    repository: "https://github.com/apollographql/apollo-client",
    package: "@apollo/client",
    packageUrl: "https://www.npmjs.com/package/@apollo/client",
    description: "A fully-featured GraphQL client for the web.",
  },
  {
    category: "frontend/data-fetching",
    name: "swr/swr",
    repository: "https://github.com/vercel/swr",
    package: "swr",
    packageUrl: "https://www.npmjs.com/package/swr",
    description: "React Hooks for data fetching with caching and revalidation.",
  },

  // ---------------------------------------------------------------------------
  // Charts and Visualization
  // ---------------------------------------------------------------------------
  {
    category: "frontend/charts",
    name: "plouc/nivo",
    repository: "https://github.com/plouc/nivo",
    package: "@nivo/core",
    packageUrl: "https://www.npmjs.com/package/@nivo/core",
    description: "Rich set of data visualization components for React.",
  },
  {
    category: "frontend/charts",
    name: "recharts/recharts",
    repository: "https://github.com/recharts/recharts",
    package: "recharts",
    packageUrl: "https://www.npmjs.com/package/recharts",
    description: "Redefined chart library built with React and D3.",
  },
  {
    category: "frontend/charts",
    name: "visjs/vis-timeline",
    repository: "https://github.com/visjs/vis-timeline",
    package: "vis-timeline",
    packageUrl: "https://www.npmjs.com/package/vis-timeline",
    description: "Interactive timeline and network visualization components.",
  },
];
