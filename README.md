# Jordan — portfolio

Next.js (App Router) implementation of the `Jordan Portfolio.dc.html` design from
[Claude Design](https://claude.ai/design/p/1e321c7a-272e-437b-bff6-28cde1f6a2b5).

```bash
npm run dev
```

Then open http://localhost:3000.

## Stack

- Next.js 15, App Router, React 19, TypeScript
- The design system's own CSS (`src/styles/nocturne.css`) plus inline styles ported
  1:1 from the design — no Tailwind, no CSS-in-JS
- `next/font` for Inter, Anton and Dancing Script
- Phosphor icons via their web font (`<i className="ph ph-…">`), loaded from unpkg in
  `src/app/layout.tsx`

## Routes

| Route             | Design view |
| ----------------- | ----------- |
| `/`               | Home        |
| `/work`           | Projects, with the client-side filter chips |
| `/work/[slug]`    | Case study  |
| `/about`          | About       |
| `/services`       | Services    |
| `/pricing`        | Pricing     |
| `/writing`        | Blog index  |
| `/writing/[slug]` | Post        |
| `/contact`        | Contact     |

Every page is statically prerendered at build time.

## How the layout works

The design lived inside a fixed-width preview frame carrying
`container-type: inline-size`, so its sizing maths is written in `cqw` units and its
one breakpoint is `@container (max-width: 640px)`. `.wrap` in `src/styles/globals.css`
plays that role now — capped at 1500px, full-width below that — which keeps every
original measurement intact.

Backgrounds run full-bleed and only the content inside them is constrained: `body` and
`.site` span the viewport, while the header row, `<main>` and the footer row each get
`.wrap`. Add `.wrap` to any new band you introduce. Two more consequences worth knowing:

- The mobile drawer is portalled to `document.body`, since `position: fixed` inside a
  container-type element would resolve against the container, not the viewport.
- `useIsNarrow()` (`src/lib/useIsNarrow.ts`) mirrors that 640px breakpoint in JS for
  the one behaviour CSS cannot express: the services grid collapsing to an accordion.

The design's Desktop/Mobile preview toggle was tooling for the design canvas, not part
of the site, so it is gone — real breakpoints do that job here.

## Where the content lives

All copy is in plain TypeScript under `src/data/` — edit there, not in the components.

| File                 | Contents |
| -------------------- | -------- |
| `site.ts`            | Name, email, location, nav items, social links |
| `home.ts`            | Hero stats, services, toolkit, process, testimonials, about timeline |
| `projects.ts`        | Projects, filters, featured selection, case-study bodies |
| `services.ts`        | The six detailed service blocks |
| `pricing.ts`         | Tiers and the contact form's budget options |
| `posts.ts`           | Blog post metadata |
| `src/content/posts/` | Post bodies, one `.tsx` per slug |

## Known gaps

These are placeholders from the design, carried over deliberately:

- **Project and post artwork.** Rendered by `ImageSlot`, a dashed placeholder box.
  Replace with `next/image` once there are real screenshots.
- **Case studies.** Only `halden-athletic` has real copy; the other five fall back to a
  shared stub in `src/data/projects.ts`. Same story for posts — only
  `lcp-4-8s-to-1-3s` is written, the rest render a stub from `src/content/posts/`.
- **The contact form does not send anything.** It validates and shows the confirmation
  state, then stops. Wire `handleSubmit` in `src/components/contact/ContactForm.tsx` to
  a server action before launch.
- **Links.** GitHub/LinkedIn/X and the CV download are `#` — fill in `src/data/site.ts`
  and the About page.
- `site.url` in `src/data/site.ts` is `https://jordan.dev`; set it to the real domain so
  metadata and `sitemap.xml` point at the right place.

## Deploying

Vercel needs no configuration — import the repo and it builds. `npm run build` locally
does the same thing.
