import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";

/** Every OG card is this size — the ratio LinkedIn, Slack and X all crop to. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/* Straight from nocturne.css. Satori cannot read CSS variables, so these are
   restated here — if the palette changes, change it in both places. */
const BG = "#161826";
const ACCENT = "#9184d9";
const TEXT = "#f3f5fe";
const MUTED = "#cfd3e5";

/* Anton for the display type, Inter for everything meant to be read. Satori
   falls back to whichever font it was given, so supplying only Anton would set
   the whole card in condensed caps. */
function load(file: string) {
  return readFile(join(process.cwd(), "src/assets", file));
}

/**
 * Shared card. `kicker` is the small uppercase label above the title, `title`
 * the headline, `sub` the line under it.
 */
export async function ogCard({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub: string;
}) {
  const [display, body] = await Promise.all([
    load("Anton-Regular.ttf"),
    load("Inter-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          fontFamily: "Inter",
          padding: 72,
          position: "relative",
        }}
      >
        {/* The accent glow the site uses behind its hero. */}
        <div
          style={{
            position: "absolute",
            top: -260,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(145,132,217,0.30), rgba(22,24,38,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", fontFamily: "Anton", fontSize: 34, color: TEXT }}>
            JORDAN
          </div>
          <div style={{ display: "flex", fontFamily: "Anton", fontSize: 34, color: ACCENT }}>.</div>
          <div
            style={{
              display: "flex",
              marginLeft: 20,
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: ACCENT,
            }}
          >
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Anton",
              fontSize: title.length > 46 ? 68 : 92,
              lineHeight: 1.02,
              textTransform: "uppercase",
              color: TEXT,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 27,
              lineHeight: 1.4,
              color: MUTED,
              maxWidth: 900,
            }}
          >
            {sub}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `2px solid ${ACCENT}`,
            paddingTop: 24,
            fontSize: 22,
            color: MUTED,
          }}
        >
          <div style={{ display: "flex" }}>{site.fullName}</div>
          <div style={{ display: "flex" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Anton", data: display, style: "normal" as const, weight: 400 as const },
        { name: "Inter", data: body, style: "normal" as const, weight: 500 as const },
      ],
    },
  );
}
