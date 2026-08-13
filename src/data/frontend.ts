import type { Entry } from "../types.js";

/** Libraries and frameworks for building user interfaces. */
export const frontend: Entry[] = [
  // ---------------------------------------------------------------------------
  // UI Libraries
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
    name: "nuxt/nuxt",
    repository: "https://github.com/nuxt/nuxt",
    package: "nuxt",
    packageUrl: "https://www.npmjs.com/package/nuxt",
    description: "Intuitive Vue framework for building full-stack applications.",
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
    name: "remix-run/remix",
    repository: "https://github.com/remix-run/remix",
    package: "@remix-run/react",
    packageUrl: "https://www.npmjs.com/package/@remix-run/react",
    description: "Full-stack web framework for building better user experiences.",
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
    name: "vercel/next.js",
    repository: "https://github.com/vercel/next.js",
    package: "next",
    packageUrl: "https://www.npmjs.com/package/next",
    description: "The React framework for the web.",
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
  // Routing
  // ---------------------------------------------------------------------------
  {
    category: "frontend/ui-libraries",
    name: "ant-design/ant-design",
    repository: "https://github.com/ant-design/ant-design",
    package: "antd",
    packageUrl: "https://www.npmjs.com/package/antd",
    description: "An enterprise-class UI design language and React components.",
  },
  {
    category: "frontend/ui-libraries",
    name: "chakra-ui/chakra-ui",
    repository: "https://github.com/chakra-ui/chakra-ui",
    package: "@chakra-ui/react",
    packageUrl: "https://www.npmjs.com/package/@chakra-ui/react",
    description: "Simple, modular, and accessible UI components for React.",
  },
  {
    category: "frontend/ui-libraries",
    name: "mantinedev/mantine",
    repository: "https://github.com/mantinedev/mantine",
    package: "@mantine/core",
    packageUrl: "https://www.npmjs.com/package/@mantine/core",
    description: "A fully featured React components library.",
  },
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
  // State Management
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
  // Forms
  // ---------------------------------------------------------------------------
  {
    category: "frontend/state-management",
    name: "pmndrs/jotai",
    repository: "https://github.com/pmndrs/jotai",
    package: "jotai",
    packageUrl: "https://www.npmjs.com/package/jotai",
    description: "Primitive and flexible state management for React.",
  },
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
  // Styling
  // ---------------------------------------------------------------------------
  {
    category: "frontend/forms",
    name: "formik/formik",
    repository: "https://github.com/jaredpalmer/formik",
    package: "formik",
    packageUrl: "https://www.npmjs.com/package/formik",
    description: "Build forms in React without the tears.",
  },
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
  // Animation
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
  {
    category: "frontend/styling",
    name: "vanilla-extract-css/vanilla-extract",
    repository: "https://github.com/vanilla-extract-css/vanilla-extract",
    package: "@vanilla-extract/css",
    packageUrl: "https://www.npmjs.com/package/@vanilla-extract/css",
    description: "Zero-runtime CSS-in-TypeScript with type-safe styles.",
  },
  // ---------------------------------------------------------------------------
  // Data Fetching
  // ---------------------------------------------------------------------------
  {
    category: "frontend/animation",
    name: "motiondivision/motion",
    repository: "https://github.com/motiondivision/motion",
    package: "motion",
    packageUrl: "https://www.npmjs.com/package/motion",
    description: "A modern animation library for React and the web.",
  },
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
  // Charts and Visualization
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
  {
    category: "frontend/charts",
    name: "chartjs/Chart.js",
    repository: "https://github.com/chartjs/Chart.js",
    package: "chart.js",
    packageUrl: "https://www.npmjs.com/package/chart.js",
    description: "Simple yet flexible JavaScript charting for designers and developers.",
  },
  {
    category: "frontend/charts",
    name: "d3/d3",
    repository: "https://github.com/d3/d3",
    package: "d3",
    packageUrl: "https://www.npmjs.com/package/d3",
    description: "Data-driven documents for manipulating documents based on data.",
  },
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
