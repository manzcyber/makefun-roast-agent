import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Adopted" turns collateral damage into a pet, not a bug report.
// Short, self-implicating, and the punch lands on the last word.
const ROAST = "My agent fixed one bug and adopted three.";
const entry = ROAST.replace(/[\r\n]+/g, " ").trim();

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
