import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The second sentence adds no new monster; it moves the one already there.
// The ritual is the trap: teaching her to look is what lets it answer.
// Two-Sentence Horror: exactly two sentences, at most 400 characters.
// The second sentence turns the first — the ritual the parent taught
// the child is the thing the monster now uses against the parent.
const STORY =
  "I taught my daughter to check under her bed every night, so she would know the monsters were only in her head. Tonight she came back and told me the thing under her bed said to check under mine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
