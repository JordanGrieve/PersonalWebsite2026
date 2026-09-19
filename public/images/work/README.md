# Project images

One folder per project, named by the project's **slug** — not its display
name. The slug is what appears in the URL and what the code keys off, so
matching it means wiring an image up is mechanical rather than a lookup.

```
public/images/work/<slug>/hero.png
public/images/work/<slug>/shot1.png
public/images/work/<slug>/shot2.png
```

The three filenames match the three `slots` on each case study in
`src/data/projects.ts` (`hero`, `shot1`, `shot2`), so a file dropped in the
right place with the right name needs no decision from anyone to hook up.

## The slugs

| Folder | Project as it appears on the site |
| --- | --- |
| `essential-upsell` | Essential Upsell |
| `amoria` | AMORIA |
| `dfyne-storefront-refactor` | DFYNE storefront refactor |
| `dfyne-cloudflare-migration` | **DFYNE geo-routing** |
| `dfyne-fit-finder` | DFYNE size advisor |
| `dfyne-mobile-performance` | **DFYNE site performance** |
| `open-door-bakery` | Open Door Bakery |
| `postbox` | Postbox |

Four of those folder names do not match what the page is called. The
geo-routing work in particular lives under `dfyne-cloudflare-migration`,
because the page was renamed after publication and keeping the URL was worth
more than a tidy folder name. The performance study is the same story: it was
named for mobile before the desktop numbers came in. Go by the table, not by
the title.

## What to put in

- **PNG for anything with text or UI** — charts, dashboards, traces, diagrams.
  Lossless, so the type stays crisp.
- **JPG for photographs.**
- Give the largest, cleanest version you have. Next.js re-encodes to WebP and
  AVIF and generates every size the page needs, so there is nothing to gain by
  shrinking a file first, and detail lost before it arrives cannot come back.
- Rough targets: **2400px wide or more** for a hero, **1600px** for the two
  supporting shots. Bigger is fine.

## Before you save a file here

`public/` is served to the open internet, and everything in it is committed to
a public repository. A file put here is published the moment it deploys, and
deleting it later does not remove it from git history.

So redact at capture time, not afterwards: no customer names, order ids, email
addresses, internal hostnames, API keys or real revenue figures. Where a shot
needs data, seed it.

`IMAGES-NEEDED.md` in the repository root lists, per project, what each of the
three slots is meant to prove and which ones must use fabricated data.
