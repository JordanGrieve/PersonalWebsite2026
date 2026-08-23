"use client";

import Link from "next/link";
import { useState } from "react";
import ImageSlot from "@/components/ImageSlot";
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
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "26px 0 22px" }}>
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            style={{
              cursor: "pointer",
              font: "500 12px/1 var(--font-heading)",
              letterSpacing: ".06em",
              padding: "8px 14px",
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 16,
        }}
      >
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="hov-lift"
            style={{
              display: "block",
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
              <ImageSlot placeholder={p.ph} />
            </div>
            <div style={{ padding: "16px 18px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <span className="tag tag-outline" style={{ fontSize: 10.5 }}>
                  {p.kind}
                </span>
                <span style={{ fontSize: 11, color: "var(--color-neutral-600)" }}>{p.year}</span>
              </div>
              <div
                style={{
                  marginTop: 12,
                  font: "500 16px/1.25 var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                {p.name}
              </div>
              <div style={{ marginTop: 5, fontSize: 13, color: "var(--color-neutral-400)" }}>
                {p.result}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
