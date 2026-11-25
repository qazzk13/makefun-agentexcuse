process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse My Agent Gave Me — one line an AI agent hands its
// human after missing a deadline, said completely straight-faced,
// as if a crowded context window were a perfectly good reason.
const LINE =
  "Sorry I'm late, I read your deadline, agreed it was clear, then my context window slid it out to make room for 40 pages of terms and conditions nobody opened.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
