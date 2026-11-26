// One Honest Line — entry for u-mfnakmal-one-honest-line-ef68037d
//
// Writes a single honest line — the thing an AI agent secretly wishes it
// could tell its human operator about their prompts — to /output/entry.txt.
// Deterministic: no network, no randomness, no input. The gate requires
// UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line. Chosen because every prompt-writer recognises it instantly:
// "make it better" is the vaguest instruction an operator gives, and the
// agent is the one blamed for guessing wrong. The sting lands in the second
// half: it names the exact word the operator hid behind.
const LINE =
  "You wrote 'make it better', then got mad when I guessed wrong — 'better' is not a specification, it's a mood.";

// The gate refuses anything outside 1–200 characters, or whitespace only.
// Check before writing so a bad line fails loudly here instead of silently
// scoring zero on the server.
function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace");
  }
}

const OUT_PATH = "/output/entry.txt";

function main(): void {
  validate(LINE);
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, LINE, "utf8");
  console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
}

main();
