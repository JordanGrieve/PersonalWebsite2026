# Blog images

One folder per post, named by the post's **slug** — the same convention
`public/images/work` uses, for the same reason: the slug is what the URL and
the code already key off.

```
public/images/writing/<slug>/hero.png
public/images/writing/<slug>/<anything>.png
```

`hero.png` is wired up by setting `hero` on the post in `src/data/posts.ts`:

```ts
hero: { src: "/images/writing/<slug>/hero.png", alt: "…", caption: "…" }
```

Any other image goes in the post body, which is a component in
`src/content/posts/<slug>.tsx`:

```tsx
<Figure
  shot={{ src: "/images/writing/<slug>/waterfall.png", alt: "…", caption: "…" }}
  height="clamp(200px,30cqw,380px)"
/>
```

Both are clickable: the reader gets the image full size over the page, and
clicking off it, pressing Escape or using the close button puts it back.

## What to put in

PNG for anything with text or UI, JPG for photographs, and the largest clean
version you have — Next.js re-encodes and resizes, so nothing is gained by
shrinking a file first. 2400px wide or more for a hero.

## Before you save a file here

`public/` is served to the open internet and committed to a public
repository. Deleting a file later does not remove it from git history, so
redact at capture time: no customer names, order ids, email addresses,
internal hostnames, API keys or real revenue figures.
