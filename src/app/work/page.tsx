import type { Metadata } from "next";
import ProjectGrid from "@/components/work/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Storefronts, apps and speed work. Every project lists what changed, not just what it looks like.",
};

export default function WorkPage() {
  return (
    <section
      style={{
        padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) clamp(38px,6cqw,84px)",
      }}
    >
      <div
        style={{
          font: "500 11px/1 var(--font-heading)",
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--color-accent)",
          marginBottom: 14,
        }}
      >
        Selected work
      </div>
      <h1
        style={{
          fontSize: "clamp(38px,8cqw,96px)",
          lineHeight: 0.9,
          letterSpacing: "-.04em",
          margin: 0,
        }}
      >
        PROJECTS
      </h1>
      <p
        style={{
          margin: "18px 0 0",
          maxWidth: "46ch",
          fontSize: 16,
          lineHeight: 1.6,
          color: "var(--color-neutral-400)",
        }}
      >
        Storefronts, apps and speed work. Every project lists what changed, not just what it looks
        like.
      </p>
      <ProjectGrid />
    </section>
  );
}
