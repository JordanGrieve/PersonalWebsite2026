import { site } from "@/data/site";

/**
 * `/robots.txt`.
 *
 * Written by hand rather than through Next's `robots.ts` helper, because
 * `MetadataRoute.Robots` can only emit user-agent, allow, disallow, host and
 * sitemap — it has no way to express a `Content-Signal` line.
 *
 * The position this file takes: the content may be indexed, referenced and
 * cited, but not used as training data. That is `search=yes, ai-train=no,
 * use=reference`, and it is a stated preference rather than an enforcement —
 * robots.txt is voluntary. The crawlers listed under `BLOCKED` below are asked
 * to stay away outright; the ones that build the indexes answer engines cite
 * from are deliberately not on that list.
 *
 * IMPORTANT: Cloudflare's managed robots.txt setting (Security Settings → Bot
 * traffic) prepends its own block to whatever this file returns, and that block
 * disallows ClaudeBot and GPTBot. This file only takes effect with that setting
 * turned off.
 */

/** The Content Signals Policy, as published at contentsignals.org. */
const CONTENT_SIGNALS_PREAMBLE = `# As a condition of accessing this website, you agree to abide by the following
# content signals:
#
# (a)  If a content-signal = yes, you may collect content for the corresponding
#      use.
# (b)  If a content-signal = no, you may not collect content for the
#      corresponding use.
# (c)  If the website operator does not include a content-signal for a
#      corresponding use, the website operator neither grants nor restricts
#      permission via content-signal with respect to the corresponding use.
#
# The content signals and their meanings are:
#
# search:   building a search index and providing search results (e.g.,
#           returning hyperlinks and short excerpts from this website's
#           contents). Search does not include providing AI-generated search
#           summaries.
# ai-input: inputting content into one or more AI models (e.g., retrieval
#           augmented generation, grounding, or other real-time taking of
#           content for generative AI search answers).
# ai-train: training or fine-tuning AI models.
# use:      how AI systems may consume the content (immediate, reference, or
#           full).
#
# ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF
# RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT
# AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.`;

/**
 * Crawlers asked to stay off the site entirely. This is Cloudflare's managed
 * list minus ClaudeBot and GPTBot — see ALLOWED below.
 */
const BLOCKED = [
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "CloudflareBrowserRenderingCrawler",
  "Google-Extended",
  "meta-externalagent",
];

/**
 * Named explicitly so the intent is legible, even though `User-agent: *`
 * already allows them. These are the crawlers behind the answer engines — being
 * absent from their index means never being cited by them. The `ai-train=no`
 * signal above still applies to everything they take.
 *
 * OAI-SearchBot and ChatGPT-User (OpenAI's retrieval and on-demand fetchers,
 * as distinct from GPTBot) were never blocked, and are covered by `*`.
 */
const ALLOWED = ["ClaudeBot", "GPTBot"];

function build(): string {
  return [
    CONTENT_SIGNALS_PREAMBLE,
    "",
    "User-agent: *",
    "Content-Signal: search=yes,ai-train=no,use=reference",
    "Allow: /",
    "",
    ...ALLOWED.flatMap((agent) => [`User-agent: ${agent}`, "Allow: /", ""]),
    ...BLOCKED.flatMap((agent) => [`User-agent: ${agent}`, "Disallow: /", ""]),
    `Host: ${site.url}`,
    `Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");
}

export const dynamic = "force-static";

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
