/**
 * Fails the build if any font-size is declared in px.
 *
 * Text that cannot be resized is a WCAG 2.2 AA failure (1.4.4), and it is
 * the kind of regression that reappears one inline style at a time — nobody
 * notices, because the page looks correct at the default font size. The
 * check runs as `prebuild`, so `npm run build` cannot succeed with one.
 *
 * Only font-size. Borders, shadows, spacing and radii in px are fine.
 *
 * The ImageResponse files are exempt: Satori renders those to a PNG on the
 * server, where there is no root element and rem resolves to nothing.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src";
const EXEMPT = ["src/app/icon.tsx", "src/app/apple-icon.tsx", "src/lib/og.tsx"];

const RULES = [
  { label: "fontSize: <number>", pattern: /fontSize:\s*\d*\.?\d+(?=[,\s}])/g },
  { label: "fontSize with px", pattern: /fontSize:\s*"[^"]*\d\s*px[^"]*"/g },
  { label: "font shorthand with px", pattern: /font:\s*"[^"]*\d\s*px[^"]*"/g },
  { label: "css font-size with px", pattern: /font-size:\s*[^;}]*\d\s*px/g },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.(tsx?|css)$/.test(name)) out.push(path.split("\\").join("/"));
  }
  return out;
}

const failures = [];

for (const file of walk(ROOT)) {
  if (EXEMPT.some((e) => file.endsWith(e))) continue;
  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const rule of RULES) {
      rule.pattern.lastIndex = 0;
      const hit = rule.pattern.exec(line);
      if (hit) failures.push({ file, line: i + 1, rule: rule.label, text: hit[0].trim() });
    }
  });
}

if (failures.length) {
  console.error(`\nfont-size must be in rem, not px — ${failures.length} found:\n`);
  for (const f of failures) {
    console.error(`  ${f.file}:${f.line}  ${f.text}   (${f.rule})`);
  }
  console.error(`\n16px is 1rem. 13px is 0.8125rem.`);
  console.error(`Inside clamp(), convert the first and last terms and leave the middle one.\n`);
  process.exit(1);
}

console.log("font units: every font-size is in rem");
