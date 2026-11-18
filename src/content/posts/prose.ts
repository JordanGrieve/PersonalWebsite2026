import type { CSSProperties } from "react";

/** Shared type scale for post bodies, lifted from the design's article styles. */

export const para: CSSProperties = {
  margin: "0 0 1.125em",
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "var(--color-neutral-300)",
};

export const sectionHeading: CSSProperties = {
  margin: "1.4545em 0 0.5455em",
  fontSize: "1.375rem",
  letterSpacing: "-.01em",
};

export const listWrap: CSSProperties = {
  margin: "0 0 1.4667em",
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "0.7333em",
};

export const li: CSSProperties = {
  display: "flex",
  gap: "0.7096em",
  fontSize: "0.9688rem",
  lineHeight: 1.6,
  color: "var(--color-neutral-300)",
};

export const code: CSSProperties = {
  font: "400 0.875rem/1 ui-monospace,Menlo,monospace",
  color: "var(--color-accent-300)",
};
