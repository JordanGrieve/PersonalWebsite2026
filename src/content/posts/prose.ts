import type { CSSProperties } from "react";

/** Shared type scale for post bodies, lifted from the design's article styles. */

export const para: CSSProperties = {
  margin: "0 0 18px",
  fontSize: 16,
  lineHeight: 1.7,
  color: "var(--color-neutral-300)",
};

export const sectionHeading: CSSProperties = {
  margin: "32px 0 12px",
  fontSize: 22,
  letterSpacing: "-.01em",
};

export const listWrap: CSSProperties = {
  margin: "0 0 22px",
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 11,
};

export const li: CSSProperties = {
  display: "flex",
  gap: 11,
  fontSize: 15.5,
  lineHeight: 1.6,
  color: "var(--color-neutral-300)",
};

export const code: CSSProperties = {
  font: "400 14px/1 ui-monospace,Menlo,monospace",
  color: "var(--color-accent-300)",
};
