import { displayDate, posts } from "@/data/posts";
import { tiers } from "@/data/pricing";
import { getCaseStudy, projects } from "@/data/projects";
import { serviceDetail } from "@/data/services";
import { liveSocials, site } from "@/data/site";

/**
 * `/llms.txt` — a plain-text summary of the site for language models, following
 * the llmstxt.org convention.
 *
 * Generated from the same data files the pages render, so it cannot go stale
 * the way a hand-maintained copy would. It contains nothing that is not already
 * on a public page.
 */

export const dynamic = "force-static";

function build(): string {
  const lines: string[] = [];

  lines.push(`# ${site.fullName}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(`- Name: ${site.fullName}`);
  lines.push(`- Role: ${site.role}`);
  lines.push(`- Based: ${site.location}`);
  lines.push(`- Site: ${site.url}`);
  lines.push(`- Email: ${site.email}`);
  for (const s of liveSocials) lines.push(`- ${s.label}: ${s.href}`);
  lines.push(`- Works on: ${site.expertise.join(", ")}`);
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const s of serviceDetail) {
    lines.push(`### ${s.title} (${s.from})`);
    lines.push(s.body);
    for (const item of s.items) lines.push(`- ${item}`);
    lines.push("");
  }

  lines.push("## Pricing");
  lines.push("");
  for (const t of tiers) {
    lines.push(`### ${t.name} — ${t.price}`);
    lines.push(t.note);
    for (const item of t.items) lines.push(`- ${item}`);
    lines.push("");
  }
  lines.push("Prices are indicative; the final quote follows a short call.");
  lines.push("");

  lines.push("## Projects");
  lines.push("");
  for (const p of projects) {
    const study = getCaseStudy(p.slug);
    lines.push(`### ${p.name} — ${p.kind}, ${p.year}`);
    lines.push(`${site.url}/work/${p.slug}`);
    lines.push(p.result);
    if (study) {
      lines.push(study.intro);
      const stack = study.meta.find((m) => m.l === "Stack")?.v;
      if (stack) lines.push(`Stack: ${stack}`);
      /* Measured outcomes only — a case study with no `results` had nothing
         measured, and inventing a number here would be worse than silence. */
      for (const r of study.results ?? []) lines.push(`- ${r.n}: ${r.l}`);
    }
    lines.push("");
  }

  lines.push("## Writing");
  lines.push("");
  for (const p of posts) {
    lines.push(`### ${p.title}`);
    lines.push(`${site.url}/writing/${p.slug} — ${p.category}, ${displayDate(p.published)}`);
    lines.push(p.dek);
    lines.push("");
  }

  lines.push("## Contact");
  lines.push("");
  lines.push(`Enquiries: ${site.url}/contact or ${site.email}. Replies within a day.`);
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
