"use client";

import Link from "next/link";
import { useState } from "react";
import CardThumb from "@/components/CardThumb";
import { projectFilters, projects } from "@/data/projects";

const chip = (on: boolean) =>
  on
    ? {
        background: "color-mix(in srgb, var(--color-accent) 16%, transparent)",
        color: "var(--color-accent-200)",
        borderColor: "var(--color-accent)",
      }
    : {
        background: "transparent",
        color: "var(--color-neutral-400)",
        borderColor: "var(--color-divider)",
      };

export default function ProjectGrid() {
  const [filter, setFilter] = useState<string>("All");
  const shown = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <>
      {/* A named group, so the five buttons are announced as one control
          for one job rather than five unrelated toggles. */}
      <div
        role="group"
        aria-label="Filter projects by type"
        style={{ display: "flex", gap: "0.5333em", flexWrap: "wrap", margin: "1.7333em 0 1.4667em" }}
      >
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            style={{
              cursor: "pointer",
              font: "500 0.75rem/1 var(--font-heading)",
              letterSpacing: ".06em",
              padding: "0.6667em 1.1667em",
              borderRadius: 999,
              borderStyle: "solid",
              borderWidth: 1,
              ...chip(filter === f),
            }}
          >
            {f}
          </button>
        ))}
      </div>
      {/* Pressing a filter redraws the grid below, which a screen reader has
          no way to notice. This says what happened (WCAG 4.1.3). */}
      <p className="sr-only" role="status">
        {filter === "All"
          ? `Showing all ${shown.length} projects`
          : `Showing ${shown.length} ${filter} ${shown.length === 1 ? "project" : "projects"}`}
      </p>
      <ul
        className="plain-list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "1.0667em",
        }}
      >
        {shown.map((p) => (
          <li key={p.slug}>
          <Link
            href={`/work/${p.slug}`}
            /* Eight case studies prefetching on sight cost 86kB on /work,
               of which a reader uses at most one. Off entirely — Next 15 does
               not prefetch on hover as a fallback — which takes the page to
               23.1kB of prefetch. See the note in Header.tsx. */
            prefetch={false}
            className="hov-lift"
            style={{
              display: "block",
              height: "100%",
              textAlign: "left",
              padding: 0,
              background: "var(--color-surface)",
              border: "1px solid var(--color-divider)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              color: "inherit",
            }}
          >
            <div style={{ position: "relative", height: 184 }}>
              <CardThumb slug={p.slug} placeholder={p.ph} />
            </div>
            <div style={{ padding: "1.0667em 1.2em" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.6667em",
                }}
              >
                <span className="tag tag-outline" style={{ fontSize: "0.65625rem", padding: "0.2857em 0.9524em" }}>
                  {p.kind}
                </span>
                <span style={{ fontSize: "0.6875rem", color: "var(--color-neutral-500)" }}>{p.year}</span>
              </div>
              <h2
                style={{
                  margin: "0.75em 0 0",
                  font: "500 1rem/1.25 var(--font-heading)",
                  letterSpacing: "normal",
                  color: "var(--color-text)",
                }}
              >
                {p.name}
              </h2>
              <div style={{ marginTop: "0.3846em", fontSize: "0.8125rem", color: "var(--color-neutral-400)" }}>
                {p.result}
              </div>
            </div>
          </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
