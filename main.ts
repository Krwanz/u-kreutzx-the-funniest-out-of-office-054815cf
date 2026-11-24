import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I'm out of office until Monday, pretending to be unreachable while refreshing my inbox every four minutes from the beach.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`Wrote ${line.length} characters to entry.txt`);
