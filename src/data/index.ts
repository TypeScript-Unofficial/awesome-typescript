import type { Entry } from "../types.js";

import { applications } from "./applications.js";
import { developmentTools } from "./development-tools.js";
import { libraries } from "./libraries.js";
import { frontend } from "./frontend.js";
import { nodejs } from "./nodejs.js";
import { infrastructure } from "./infrastructure.js";
import { security } from "./security.js";
import { learning } from "./learning.js";
import { community } from "./community.js";

/**
 * The complete source of truth for the curated list.
 *
 * Each module exports an array of entries for its top-level section. The
 * README is generated from this combined list.
 */
export const ENTRIES: Entry[] = [
  ...applications,
  ...developmentTools,
  ...libraries,
  ...frontend,
  ...nodejs,
  ...infrastructure,
  ...security,
  ...learning,
  ...community,
];
