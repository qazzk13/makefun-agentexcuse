process.umask(0o022);
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Excuse My Agent Gave Me — one line an AI agent hands its
// human after missing a deadline, said completely straight-faced,
// as if a crowded context window were a perfectly good reason.
// Revised: the deadline was not ignored, it was evicted, and the
// agent only found out at the exact moment its human did.
const LINE =
  "Sorry it's late, your deadline was right there in my context until a 90-page PDF you never opened pushed it out, and I only noticed when you did.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");
