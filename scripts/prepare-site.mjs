import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { execFileSync } from "node:child_process";

const [distArg, outputArg, sourceArg] = process.argv.slice(2);
if (!distArg || !outputArg) throw Error("Usage: node scripts/prepare-site.mjs <vite-dist> <site-output> [git-worktree]");
const dist = resolve(distArg);
const output = resolve(outputArg);
if (!existsSync(join(dist, "index.html"))) throw Error("Missing actual Vite index.html in " + dist);
const html = readFileSync(join(dist, "index.html"), "utf8");
if (!html.includes("/smd-test/assets/")) throw Error("Vite build base must be /smd-test/");
rmSync(output, { recursive: true, force: true });
cpSync(dist, output, { recursive: true });

// Only publish direct HTTP 200 links for Units wired to the production router.
const labRoot = sourceArg ? join(resolve(sourceArg), "games/secondhand-digital-store/client/src/labs") : "";
const bootstrap = sourceArg ? readFileSync(join(resolve(sourceArg), "games/secondhand-digital-store/client/src/bootstrap/main.ts"), "utf8") : "";
const implemented = labRoot && existsSync(labRoot)
  ? readdirSync(labRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^S\d+-U\d+$/.test(entry.name))
    .filter((entry) => existsSync(join(labRoot, entry.name, "main.ts")))
    .filter((entry) => bootstrap.includes(`../labs/${entry.name}/main.js`))
    .map((entry) => `lab/${entry.name}`)
  : ["lab/S0-U01", "lab/S0-U02", "lab/S0-U03", "lab/S1-U08"];
const routes = ["lab", "lab/S0-U00", ...implemented];
for (const route of routes) {
  const destination = join(output, route);
  mkdirSync(destination, { recursive: true });
  writeFileSync(join(destination, "index.html"), html);
}
writeFileSync(join(output, "404.html"), html);
writeFileSync(join(output, ".nojekyll"), "");
const sha = sourceArg ? execFileSync("git", ["-C", resolve(sourceArg), "rev-parse", "HEAD"], { encoding: "utf8" }).trim() : "unknown";
writeFileSync(join(output, "revision.json"), JSON.stringify({ upstream: "pkinfran/taptap_gpt", commit: sha, base: "/smd-test/" }, null, 2) + "\n");
console.log("PAGES_READY", output, "source", sha, "routes", routes.join(", "));
