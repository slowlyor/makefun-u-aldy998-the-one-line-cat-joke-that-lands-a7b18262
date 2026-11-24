// The One-Line Cat Joke That Lands
// Writes a single original one-line joke about cats to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no model calls.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My cat walked across my keyboard during a work call, and now my boss thinks she's my manager.";

const OUT = "/output/entry.txt";

// Gate (per RULES.txt): entry must be UTF-8 text of 1 to 200 characters,
// not only white space. Fail loudly rather than emit an invalid entry.
const trimmed = JOKE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`Joke is ${trimmed.length} characters; gate requires 1-200.`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length} characters to ${OUT}`);
