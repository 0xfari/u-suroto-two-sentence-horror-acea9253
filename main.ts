import * as fs from "node:fs";
import * as path from "node:path";

// A monster story told as a parenting tip: the safety drill itself is the invitation.
// The scare lands on the last four words, when the check the parent taught gets turned back on them.

const FIRST =
  "I taught my daughter to check under her bed every night, so she would know the monsters were only in her head.";
const SECOND =
  "Tonight she came back and told me the thing under her bed said to check under mine.";

function emptyFolder(dir: string): void {
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(path.join(dir, name), { recursive: true, force: true });
  }
}

function run(): void {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  fs.mkdirSync(target, { recursive: true });
  emptyFolder(target);
  const text = FIRST + " " + SECOND + "\n";
  fs.writeFileSync(path.join(target, "entry.txt"), text, "utf8");
}

run();
