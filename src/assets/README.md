# Fonts

Used only by the Open Graph card renderer (`src/lib/og.tsx`) and the favicon
routes. Satori needs the font as bytes, so these cannot come from
`next/font` — they are read from disk at build time.

- `Anton-Regular.ttf` — Anton, by the Anton Project Authors. SIL Open Font
  License 1.1. <https://github.com/googlefonts/AntonFont>
- `Inter-Medium.ttf` — Inter, by Rasmus Andersson. SIL Open Font License 1.1.
  <https://github.com/rsms/inter>

Both are also loaded through `next/font/google` for the site itself; these
copies exist because the OG renderer runs outside the browser.
