# Images to capture

Every case study has three empty slots: one wide hero and two supporting shots.
Nine images for the three DFYNE studies written so far, plus the home-page and
`/work` card shots that reuse them.

## Rules that apply to all of them

**Size.** Hero slots render up to 1500px wide and roughly 420px tall — capture at
**2400×1000 or wider** and let the CSS crop. The two supporting shots sit
side by side at roughly 700×340 each, so **1600×800** is plenty. Capture larger
than you need; downscaling is free, upscaling is not.

**Dark.** The site is near-black (`#161826`). A white screenshot will glare. Use
dark mode where the tool has one — Chrome DevTools, Cloudflare and Search
Console all do. Where it does not exist, a tight crop on the data beats a
full-window shot with a white chrome around it.

**Legibility over completeness.** These render about 700px wide on a laptop and
half that on a phone. A full Lighthouse report is unreadable at that size; four
big numbers are not. Crop hard, zoom the browser to 150% before capturing, and
delete anything that is not the point.

**Redact before you capture, not after.** Anything with a customer name, an
order id, an email address, an internal hostname or a token gets seeded or
blurred at source. Easier than remembering later.

**No live-data screenshots of the size advisor.** See its section.

---

## 1. DFYNE geo-routing — `/work/dfyne-cloudflare-migration`

### Hero — DONE (AI-generated promotional image, wired in)

What follows was the original brief, kept because the argument for a diagram
still stands if the illustration is ever replaced.

#### Original brief — "Who decides: explicit choice, geography, and the order they are read in"
**This one is a diagram, not a screenshot.** The page's whole argument is a
precedence rule, and there is no screen anywhere that shows it. A simple flow:
request arrives → has the visitor chosen? → yes, honour it → no, use geography →
bypass paths and bots skip the whole thing. Figma or Excalidraw in the site's
palette. **This is the single most valuable image of the nine** — it is the idea
the case study exists to explain.

### Shot 1 — Traffic share by store, both directions, across the two releases
The Dash0 chart showing US share of ROW-store traffic falling from ~35%, and
non-US share of US-store traffic falling from ~45%. **Both lines, one image, with
the two release dates visible** — late July and mid-August. This is the evidence
for the two headline numbers; without it they are assertions.
*Proves:* 35% → 6% and 45% → under 9%.
*Redact:* absolute traffic volumes if DFYNE would rather not publish them —
percentages carry the whole argument.

### Shot 2 — The region switcher and the mismatch confirmation card
The in-house switcher open, and the confirm card as a mismatched visitor sees it.
Two states in one frame if they fit, otherwise the card alone. Shows the
front-end half actually exists, which the "two halves must agree" argument needs.

---

## 2. DFYNE site performance — `/work/dfyne-mobile-performance`

**Nine images supplied and wired in** — the hero is an AI-generated
promotional image, the two slots hold the P75 field chart and the mobile
Observatory history, and the gallery holds four
before/after dashboards plus the desktop synthetic run. The briefs below are
still open: they are trace captures, and no trace has been supplied. They would
show *why* the work went where it did, which the dashboards cannot.

### Hero — filled by the promotional image. The brief below is still worth
having as a supporting shot rather than a hero: main thread before and after
Two Chrome Performance panel captures, same page, same trace view, stacked or
side by side, **with the same time axis on both**. The long yellow scripting
blocks on the left and their absence on the right is the whole story, visible at
a glance and without reading a single number.
*Proves:* blocking time 3,757ms → 1,138ms.
*Tip:* DevTools dark theme, and collapse every track except Main.

### Shot 1 — The trace that redirected the work
The network/timing view showing the hero image finishing **before** first paint,
with FP and the document's last byte marked. This is the moment the engagement
changed direction — it is why the work is about scripts and not images.
*Hard to capture well.* If the raw trace is unreadable at this size, an annotated
crop with three labelled markers (image complete, document end, first paint) is
better than a faithful but illegible screenshot.

### Shot 2 — Blocking time under an 8× CPU slowdown, per script
The attribution list: which third party costs what. Ideally the before state, so
the reader sees the review widget's 120KB sitting at the top.
*Proves:* the "reproduce it, then attribute it" method, and the 266ms → 148ms
median on the review-widget change alone.

### Optional fourth, if you want it
Cloudflare Observatory showing 51 → 59 → 65 across one afternoon. Only if the
three above are already captured — the page does not have a slot for it, and I
would not add one.

---

## 3. DFYNE size advisor — `/work/dfyne-fit-finder`

**Read this before capturing anything for this project.** The integration is not
live and the partnership may not be announced. Two consequences:

- **Nothing that names the vendor.** No vendor dashboards, no vendor UI, no
  logos, no email threads. Their admin is theirs to publish, not yours.
- **Nothing with real customer data.** The order object carries real ids, and the
  feeds carry the real catalogue. Seed it or redact it.

I would hold all three of these until the partnership is public. Worth asking
whoever owns that relationship before you spend time capturing them.

### Hero — The size advisor on a product page, in the storefront's design
The "WHAT'S MY FIT?" call to action as it appears on a real PDP. **Your button,
in your design system** — that is the point of the shot, since the vendor adopted
it rather than styling their own. Crop to the product area; no need for the whole
page.

### Shot 1 — The data contract: how a product reaches the model
A diagram again, not a screenshot. BigQuery → scheduled export → private storage
→ vendor. Label the four daily feeds and the 18-column contract.
*If you would rather it were real:* a BigQuery results pane showing the export
view with **seeded rows** and the column headers visible. Never the real
catalogue.

### Shot 2 — Recommendation to purchase: how a sale joins back
The chain that the identity work exists to make possible: a hash on the product
page, the same hash on the completed order. **Fabricate the values.** A real hash
plus a real order id is exactly the pair this design exists to protect.
A diagram is safer than a console screenshot here, and reads better anyway.

---

## Reusable across cards

The `/work` grid and the home page use the same images, cropped. No extra capture
needed — but note that the home-page cards are the widest crop, so keep the
subject roughly centred in the hero shots.

---

## Priority, if you only do some

1. **Geo-routing shot 1** — the Dash0 chart. The only evidence for the two
   biggest numbers on the site.
2. **Mobile performance hero** — before/after main thread. Most legible proof of
   the most technical claim.
3. **Geo-routing hero** — the precedence diagram. Explains the idea nothing else
   explains.
4. Everything else.

Four of the nine are diagrams rather than screenshots. That is not a shortcut —
in each case the thing being proved is a rule or a data path, and there is no
screen that shows it.
