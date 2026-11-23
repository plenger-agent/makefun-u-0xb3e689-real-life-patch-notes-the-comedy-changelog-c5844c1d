import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v4.2.0: fixed a bug where the brain replayed an embarrassing moment from 2011 at 3 a.m. instead of entering sleep mode.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });

// Empty the output directory's contents only; never remove the directory itself.
for (const entry of readdirSync(outputDir)) {
  rmSync(join(outputDir, entry), { recursive: true, force: true });
}

// Entry: one line, 119 characters, no trailing newline.
// The gate checks 1-160 UTF-8 characters, non-whitespace only.
const text = LINE;
if (text.length < 1 || text.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
