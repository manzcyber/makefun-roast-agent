import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "Tenure" promotes the leftover bugs to permanent staff, harsher than "adopted".
// The proven one-bug/three-bugs rhythm stays; the punch lands on the last word.
const ROAST = "My agent fixed one bug; the other three got tenure.";
const entry = ROAST.replace(/[\r\n]+/g, " ").trim();

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
