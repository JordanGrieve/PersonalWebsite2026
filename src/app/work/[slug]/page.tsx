import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import { getCaseStudy, getProject, nextProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.result };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  const next = nextProject(slug);

  return (
    <>
      <section style={{ padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) 0" }}>
        <Link className="btn btn-ghost" href="/work" style={{ fontSize: 12, marginBottom: 20 }}>
          <i className="ph ph-arrow-left" />
          &nbsp;All projects
        </Link>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          {study.tags.map((t, i) => (
            <span key={t} className={i === 0 ? "tag tag-accent" : "tag tag-outline"}>
              {t}
            </span>
          ))}
        </div>
        <h1
          style={{
            fontSize: "clamp(38px,8cqw,96px)",
            lineHeight: 0.9,
            letterSpacing: "-.04em",
            margin: 0,
          }}
        >
          {study.heading}
        </h1>
        <p
          style={{
            margin: "20px 0 0",
            maxWidth: "50ch",
            fontSize: 17,
            lineHeight: 1.6,
            color: "var(--color-neutral-300)",
          }}
        >
          {study.intro}
        </p>
        <div
          style={{
            marginTop: 30,
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            height: "clamp(220px,34cqw,420px)",
            position: "relative",
          }}
        >
          <ImageSlot placeholder={study.slots.hero} />
        </div>
        <div
          style={{
            marginTop: 26,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
            gap: 18,
            padding: "22px 0",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          {study.meta.map((m) => (
            <div key={m.l}>
              <div
                style={{
                  font: "500 11px/1 var(--font-heading)",
                  letterSpacing: ".13em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-500)",
                }}
              >
                {m.l}
              </div>
              <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-neutral-200)" }}>
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "clamp(32px,5cqw,64px) clamp(18px,4cqw,48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "clamp(22px,4cqw,48px)",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 20, letterSpacing: "-.01em" }}>The problem</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--color-neutral-400)" }}>
            {study.problem}
          </p>
        </div>
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 20, letterSpacing: "-.01em" }}>What I did</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--color-neutral-400)" }}>
            {study.approach}
          </p>
        </div>
      </section>

      {study.results?.length ? (
      <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(32px,5cqw,64px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: 16,
          }}
        >
          {study.results.map((r) => (
            <div
              key={r.l}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                padding: 22,
              }}
            >
              <div
                style={{
                  font: "500 clamp(26px,3.2cqw,38px)/1 var(--font-heading)",
                  letterSpacing: "-.03em",
                  color: "var(--color-accent)",
                }}
              >
                {r.n}
              </div>
              <div
                style={{
                  marginTop: 9,
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: "var(--color-neutral-400)",
                }}
              >
                {r.l}
              </div>
            </div>
          ))}
        </div>
      </section>
      ) : null}

      <section
        style={{
          padding: "0 clamp(18px,4cqw,48px) clamp(32px,5cqw,64px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 16,
        }}
      >
        <div
          style={{
            position: "relative",
            height: "clamp(200px,26cqw,320px)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          <ImageSlot placeholder={study.slots.shot1} />
        </div>
        <div
          style={{
            position: "relative",
            height: "clamp(200px,26cqw,320px)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          <ImageSlot placeholder={study.slots.shot2} />
        </div>
      </section>

      <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)" }}>
        {study.quote?.text ? (
          <figure style={{ maxWidth: "60ch" }}>
            <blockquote
              style={{
                margin: 0,
                fontSize: "clamp(18px,2.4cqw,26px)",
                lineHeight: 1.4,
                letterSpacing: "-.02em",
                color: "var(--color-neutral-200)",
              }}
            >
              &ldquo;{study.quote.text}&rdquo;
            </blockquote>
            <figcaption style={{ marginTop: 14, fontSize: 13, color: "var(--color-neutral-500)" }}>
              {study.quote.who}
            </figcaption>
          </figure>
        ) : null}
        <div style={{ marginTop: 34, display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/contact">
            Start a project like this
            <i className="ph ph-arrow-right" />
          </Link>
          <Link className="btn btn-secondary" href={`/work/${next.slug}`}>
            Next project
          </Link>
        </div>
      </section>
    </>
  );
}
