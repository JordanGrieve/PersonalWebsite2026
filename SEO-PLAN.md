# SEO & GEO plan

**Status: all eight tasks done, 8 September 2026.** Each is ticked off below with
what was actually built and how it was checked. Two notes where the work differed
from the plan: task 7 turned out better than intended (the font could be inlined,
so the icons now cost no request at all), and task 8 turned out smaller (every
page already had a deck under its `h1`, so the keywords went into those rather
than into new lines).

Audit date: 8 September 2026. Baseline: per-page `title`/`description` on most routes,
plus `src/app/sitemap.ts`. Nothing else.

GEO here means *generative engine optimisation* — being legible to AI answer engines
(ChatGPT, Claude, Perplexity, Google AI Overviews), which is mostly a structured-data and
content-shape problem rather than a link problem.

Rules for this work:

- No visual change to the design without flagging it first. Task 8 is the only one that
  adds visible copy, and it adds it *below* the existing headings.
- Everything is generated from the typed data files in `src/data/`, so copy stays in one
  place and the schema cannot drift from the page.
- `npx tsc --noEmit`, `npm run lint` and `npm run build` clean after every task.

---

## Task 1 — Put the full name on the site

> **Done.** `site.fullName` added; titles now read *Jordan Grieve — Frontend developer in Scotland*, template `%s · Jordan Grieve`. `authors`/`creator`/`publisher` set, `lang` tightened to `en-GB`, footer byline uses the full name. Verified in the built `<title>` and `<meta name="description">`.

**Problem.** The string "Jordan Grieve" appears nowhere in the source. `site.name` is
`"Jordan"`, so every `<title>` is *"Jordan — Frontend developer"*. A search for the actual
name matches nothing, and an AI asked "who is Jordan Grieve" has no document to anchor to.
This is the single biggest gap; everything below is secondary.

**How.**

- Add `fullName: "Jordan Grieve"` to `src/data/site.ts`, keeping `name: "Jordan"` for the
  places the design uses the short form (logo, footer copyright).
- Root `title.default` becomes `Jordan Grieve — Frontend developer`, template
  `%s · Jordan Grieve`.
- Root `description` leads with the full name.
- Author metadata: `authors`, `creator`, `publisher`.

**Done when.** The built home page contains `Jordan Grieve` in `<title>`, in
`<meta name="description">` and in the `Person` schema from task 3.

---

## Task 2 — `robots.ts`, canonicals, sitemap detail

> **Done.** `/robots.txt` serves host and sitemap (later moved to `src/app/robots.txt/route.ts` — see the follow-up at the end of this file). Canonicals on all 21 indexable routes, verified one by one against the built HTML. Sitemap carries `lastModified`, `changeFrequency` and `priority`. The 404 is marked `noindex`.

**Problem.** No `/robots.txt` at all, so the sitemap is discoverable only by luck. No
canonical URL on any route, so `www` / apex and every Vercel preview deployment compete
with production as duplicates. The sitemap has URLs and nothing else.

**How.**

- New `src/app/robots.ts` returning `allow: "/"` plus `sitemap: ${site.url}/sitemap.xml`
  and `host`.
- `alternates: { canonical: … }` on every route. Each page and both dynamic routes set
  their own path. `metadataBase` is already set, so relative paths resolve.
- Sitemap gains `lastModified`, `changeFrequency` and `priority` — home 1.0, section
  indexes 0.8, leaves 0.6.

**Done when.** `/robots.txt` and `/sitemap.xml` both render in the build output, and every
route in the sitemap has a matching `<link rel="canonical">` pointing at itself.

---

## Task 3 — Structured data (the main GEO lever)

> **Done.** `src/lib/schema.ts` plus `src/components/JsonLd.tsx`. Every route emits the graph in the table below. Checked by a script that parses the JSON-LD out of all 18 prerendered pages and asserts every internal `@id` reference resolves — it caught two that did not (the blog index referenced posts it never defined, and each post referenced a `Blog` node living on another page), both fixed.

**Problem.** Zero JSON-LD. This is how an answer engine extracts *who this is, what they
do, where, and what it costs* with enough confidence to cite. Without it the site is prose
a model has to guess at.

**How.** One `src/components/JsonLd.tsx` renderer and a `src/lib/schema.ts` that builds
the graph from the existing data files. No hand-written JSON anywhere.

| Route | Schema |
|---|---|
| All | `WebSite` + `Person`, `@id`-linked so every page references the same entity |
| `/` | `ProfilePage`, `Person` with `knowsAbout`, `sameAs` (GitHub, LinkedIn), `address` |
| `/about` | `AboutPage` |
| `/services` | `Service` per entry, with `areaServed` and `offers.priceSpecification` |
| `/pricing` | `OfferCatalog` of three `Offer`s carrying the real numbers |
| `/work` | `CollectionPage` + `ItemList` |
| `/work/[slug]` | `CreativeWork` with `about`, `dateCreated`, `author` |
| `/writing` | `Blog` |
| `/writing/[slug]` | `BlogPosting` with `datePublished`, `articleSection`, `author` |
| All non-root | `BreadcrumbList` |

**Done when.** Every route emits valid JSON-LD, parsed and asserted by a script over the
built HTML — no route with a missing or malformed graph.

---

## Task 4 — Open Graph images and the icon set

> **Done.** `src/lib/og.tsx` renders the card in the site palette, Anton for display type and Inter for anything meant to be read. `opengraph-image` and `twitter-image` at the root and on both dynamic routes, so a shared case study or post carries its own title. `icon`, `apple-icon` and `manifest` added. 26 PNGs generated at build; output inspected.

**Problem.** No OG image anywhere, so every share on LinkedIn or Slack is a blank grey
card. No favicon, `apple-icon` or manifest either — the browser tab is the Next.js
default.

**How.**

- `opengraph-image.tsx` using `next/og` at the root (name, role, domain), and per-route for
  `/work/[slug]` and `/writing/[slug]` so a shared case study shows its own title.
- Rendered in the site's own palette and Anton wordmark so it stays in step with the
  design.
- `icon.tsx` (the `JORDAN.` mark), `apple-icon.tsx`, `manifest.ts`.
- `twitter: { card: "summary_large_image" }` in root metadata.

**Done when.** Each of those routes serves a 1200×630 PNG, and the built HTML carries
`og:image` and `twitter:image` pointing at it.

---

## Task 5 — Real dates on posts

> **Done.** `Post.date` replaced by ISO `Post.published`, with `displayDate()` deriving the visible string so the two cannot disagree. All three render sites use `<time datetime>`; `article:published_time` and `datePublished` now carry real values.

**Problem.** `Post.date` is a display string (`"Jul 2026"`). Nothing machine-readable: no
`<time datetime>`, no `article:published_time`, and `BlogPosting.datePublished` from
task 3 has nothing valid to read.

**How.**

- `Post` gains `published` in ISO `YYYY-MM-DD`; `date` is dropped and the display string
  derived with `Intl.DateTimeFormat("en-GB")` so the two cannot disagree.
- Every place a date renders becomes `<time dateTime={…}>`.
- Post metadata gains `openGraph.publishedTime` and `type: "article"`.

**Note.** The four current dates are Apr–Jul 2026 and accurate only to the month. I will
use the 1st of each and flag them for correction when the posts are actually written.

**Done when.** No date parsing failures, and every rendered date sits in a `<time>` with a
valid `datetime`.

---

## Task 6 — `llms.txt`

> **Done.** `/llms.txt` generated from the data files — identity, six services with prices, three tiers, six projects with stack and measured results, four posts, contact.

**Problem.** No plain-text summary for models that look for one.

**How.** `src/app/llms.txt/route.ts` generating from the data files: who, what, where,
services with prices, projects with their outcome lines, posts, and contact. Regenerates
as the data files change, so it cannot go stale.

**Done when.** `/llms.txt` serves `text/plain` listing every service, project and post.

---

## Task 7 — Self-host the Phosphor icon CSS

> **Done, and better than planned.** `scripts/build-icon-font.mjs` collects the `ph-*` names used in the source (34), subsets the font to exactly those glyphs and inlines it as a data URI in `src/styles/phosphor-subset.css`. **144kB from unpkg on the critical path became 4.1kB of font inside the stylesheet that already loads — no third-party origin, and no extra request at all.** The generated CSS is committed, so a normal build needs neither the script nor its devDependencies. Verified in the browser: all 34 glyphs measure non-zero against the loaded font, and no `unpkg.com` request is made.

**Problem.** `layout.tsx` pulls the Phosphor stylesheet from `unpkg.com`. That is a
render-blocking third-party request in `<head>`, on the critical path, on a site that
sells performance work. It also puts first paint at the mercy of a CDN we do not control.

**How.**

- Vendor `@phosphor-icons/web` as a dependency, subset to the glyphs the site actually
  uses (a script over the source collects the `ph-*` class names), and serve the CSS and
  woff2 from `public/` with immutable cache headers.
- Drop the `unpkg` `preconnect` and `<link>`; `preload` the local font instead.

**Risk.** A missed glyph shows as a blank box. The subset list is generated from the
source rather than written by hand, and I will diff the rendered icon count on every page
before and after.

**Done when.** No `unpkg.com` request on any route, and the icon count per page is
identical to before.

---

## Task 8 — Keyword-bearing sub-headings

> **Done, smaller than planned.** Every page already had a deck paragraph under its `h1`, so nothing new was added — the keywords went into the copy that was already there. Changed: the hero tagline (now says "from Scotland") and the decks on Work, Services, Pricing and Contact. About and Blog were left alone; they already named the subject. The matching `meta description` was updated on the four. Each screenshotted.

**Problem.** The `h1`s are `PROJECTS`, `PLAIN NUMBERS`, `NOTES ON SHIPPING`, `LET'S TALK`.
Strong design, but the most heavily weighted element on each page says nothing about
Shopify, performance, Cloudflare or Scotland. Both crawlers and answer engines take the
heading as the page's subject.

**How.** Leave every `h1` exactly as it is and add a single line of supporting copy
directly beneath it, in the muted deck style already used on several pages, so it reads as
part of the design rather than an SEO bolt-on. Example, under `PROJECTS`: "Shopify
storefronts, custom apps and performance work — six recent builds."

**This is the one task that changes what you see.** I will write all of them, show you the
list, and revert any you do not want.

**Done when.** Every top-level route has one line of keyword-bearing copy under its `h1`,
and the copy has been reviewed.

---

## Deliberately not doing

- **Keyword-stuffed body copy.** The writing is good; that would spoil it for a signal
  Google stopped weighting years ago.
- **`FAQPage` markup.** Worth having — Q&A blocks are surfaced heavily in AI answers — but
  there is no FAQ content on the site yet, and inventing questions you have never been
  asked is a content decision, not a technical one. Flagged for the content pass.
- **Filling the three stub blog posts.** Thin content limits what an answer engine can
  cite, but that is the content work you said comes next.
- **`Review` / `AggregateRating` on the testimonials.** Valid only if the quotes are
  attributable and the people would stand behind them publicly. Your call, later.

---

## Follow-up — AI crawler policy (9 September 2026)

After the first deploy, the live `/robots.txt` turned out not to be the one this
repo serves. Cloudflare’s **managed robots.txt** setting (Security Settings → Bot
traffic) was prepending its own block, which disallowed every major AI crawler
outright — ClaudeBot and GPTBot included. Classic search was unaffected
(Googlebot is not on that list), but the two crawlers that build the indexes
answer engines cite from were blocked, which is precisely the half of task 3
that pays off.

The managed block is all-or-nothing — there is no per-crawler exception inside
it — so the file moved into the site: `src/app/robots.txt/route.ts`, replacing
`robots.ts` because `MetadataRoute.Robots` cannot emit a `Content-Signal` line.
It keeps Cloudflare’s stance and its block list, minus ClaudeBot and GPTBot,
which are now named and allowed explicitly.

**This file only takes effect with the Cloudflare toggle turned off.** While the
managed setting is on, Cloudflare prepends its block regardless of what the
origin returns, leaving two conflicting groups for the same user-agent.

Note on GPTBot: OpenAI documents it as the crawler used to gather training data,
so allowing it while signalling `ai-train=no` leaves the preference resting on
the `Content-Signal` line alone. OAI-SearchBot and ChatGPT-User — the retrieval
fetchers behind ChatGPT search — are separate agents and were never blocked.
