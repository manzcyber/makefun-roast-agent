import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST = "My agent's brain is a group chat where everyone says \"let's circle back.\"";
const entry = ROAST.replace(/[\r\n]+/g, " ").trim();

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
