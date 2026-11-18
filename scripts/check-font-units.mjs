/**
 * Fails the build if a font-size, or any spacing, is declared in px.
 *
 * Font sizes are in rem. Text that cannot be resized is a WCAG 2.2 AA failure
 * (1.4.4), and it is the kind of regression that reappears one inline style
 * at a time — nobody notices, because the page looks correct at the default
 * font size.
 *
 * Spacing — padding, margin and gap — is in em, so the room around a piece of
 * text grows with the text. A reader who doubles their font size otherwise
 * gets doubled words inside buttons, cards and sections that stayed the size
 * they were. The one exception is an element whose own font-size is fluid (a
 * `clamp()` with a `cqw` middle): em there would make the spacing track the
 * clamp, so those are in rem, which still follows the reader's setting.
 *
 * The check runs as `prebuild`, so `npm run build` cannot succeed with either.
 *
 * Borders, shadows, radii and fixed box sizes in px are fine.
 *
 * The ImageResponse files are exempt: Satori renders those to a PNG on the
 * server, where there is no root element and rem resolves to nothing.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src";
const EXEMPT = ["src/app/icon.tsx", "src/app/apple-icon.tsx", "src/lib/og.tsx"];

const RULES = [
  { kind: "font", label: "fontSize: <number>", pattern: /fontSize:\s*\d*\.?\d+(?=[,\s}])/g },
  { kind: "font", label: "fontSize with px", pattern: /fontSize:\s*"[^"]*\d\s*px[^"]*"/g },
  { kind: "font", label: "font shorthand with px", pattern: /font:\s*"[^"]*\d\s*px[^"]*"/g },
  { kind: "font", label: "css font-size with px", pattern: /font-size:\s*[^;}]*\d\s*px/g },
  {
    kind: "space",
    label: "spacing: <number>",
    /* A bare number in a React style object is px. 0 is fine. */
    pattern:
      /(?<![\w.-])(?:(?:padding|margin)(?:Top|Right|Bottom|Left|Inline|Block)?|gap|rowGap|columnGap):\s*-?(?!0(?=[,\s}]))\d*\.?\d+(?=[,\s}])/g,
  },
  {
    kind: "space",
    label: "spacing with px",
    pattern:
      /(?<![\w.-])(?:(?:padding|margin)(?:Top|Right|Bottom|Left|Inline|Block)?|gap|rowGap|columnGap):\s*"[^"]*\d\s*px[^"]*"/g,
  },
  {
    kind: "space",
    label: "css spacing with px",
    pattern:
      /(?<![\w-])(?:(?:padding|margin)(?:-[a-z-]+)?|(?:row-|column-)?gap|scroll-padding(?:-[a-z-]+)?):\s*[^;}"]*\d\s*px/g,
  },
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
      if (hit) {
        failures.push({ file, line: i + 1, kind: rule.kind, rule: rule.label, text: hit[0].trim() });
      }
    }
  });
}

if (failures.length) {
  const fonts = failures.filter((f) => f.kind === "font");
  const spaces = failures.filter((f) => f.kind === "space");
  if (fonts.length) {
    console.error(`\nfont-size must be in rem, not px — ${fonts.length} found:\n`);
    for (const f of fonts) console.error(`  ${f.file}:${f.line}  ${f.text}   (${f.rule})`);
    console.error(`\n16px is 1rem. 13px is 0.8125rem.`);
    console.error(`Inside clamp(), convert the first and last terms and leave the middle one.`);
  }
  if (spaces.length) {
    console.error(`\npadding, margin and gap must be in em, not px — ${spaces.length} found:\n`);
    for (const f of spaces) console.error(`  ${f.file}:${f.line}  ${f.text}   (${f.rule})`);
    console.error(`\nDivide by the element's own font-size: 12px on 0.75rem text is 1em,`);
    console.error(`and on an element that sets no size it is 12 / 15 = 0.8em (the body is 15px).`);
    console.error(`If the element's font-size is a clamp(), use rem instead: 12px is 0.75rem.`);
  }
  console.error("");
  process.exit(1);
}

console.log("units: every font-size is in rem, every padding, margin and gap in em");
