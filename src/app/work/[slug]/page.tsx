import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Figure from "@/components/Figure";
import ImageSlot from "@/components/ImageSlot";
import Zoomable from "@/components/Zoomable";
import { getCaseStudy, getProject, nextProject, projects, type Shot } from "@/data/projects";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { caseStudySchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.kind}`,
    description: project.result,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.name} — ${project.kind}`,
      description: project.result,
      type: "article",
      url: `${site.url}/work/${slug}`,
    },
  };
}

/**
 * Case-study body copy. Splits on blank lines so a long `problem` or
 * `approach` reads as paragraphs rather than one unbroken block — a single
 * `<p>` swallows the newlines, which is easy to miss until a study is long
 * enough for it to matter.
 */
function Prose({ text }: { text: string }) {
  const paragraphs = text.split(/\n\s*\n/).filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            margin: i === 0 ? 0 : "14px 0 0",
            fontSize: 15,
            lineHeight: 1.65,
            color: "var(--color-neutral-400)",
          }}
        >
          {linked(p)}
        </p>
      ))}
    </>
  );
}

/**
 * Turns `[text](https://…)` into a link, and leaves everything else alone.
 *
 * The case-study copy is plain strings, so naming a third-party product
 * without this means either a bare URL in the middle of a sentence or no
 * reference at all. Deliberately only links — no other markdown — because
 * the moment this understands emphasis it becomes a renderer to maintain.
 */
function linked(text: string) {
  const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (!m) return part;
    return (
      <a key={i} href={m[2]} target="_blank" rel="noreferrer noopener">
        {m[1]}
      </a>
    );
  });
}

/**
 * A titled list of `{ what, why }` pairs — used for both the rejected
 * experiments and the incidents a change caused. Renders nothing when the
 * study has no such list, so the section simply does not exist on pages
 * without one.
 */
function DetailList({
  title,
  note,
  items,
}: {
  title: string;
  note: string;
  items?: { what: string; why: string }[];
}) {
  if (!items?.length) return null;

  return (
    <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(32px,5cqw,64px)" }}>
      <h3 style={{ margin: "0 0 6px", fontSize: 20, letterSpacing: "-.01em" }}>{title}</h3>
      <p
        style={{
          margin: "0 0 18px",
          fontSize: 14,
          lineHeight: 1.6,
          color: "var(--color-neutral-500)",
        }}
      >
        {note}
      </p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item) => (
          <div
            key={item.what}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "8px clamp(16px,3cqw,36px)",
              padding: "16px 0",
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            <div style={{ font: "500 15px/1.45 var(--font-heading)", color: "var(--color-text)" }}>
              {item.what}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--color-neutral-400)" }}>
              {item.why}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * One image slot: the real image when there is one, the dashed placeholder
 * when there is not. A study can gain images one at a time without the page
 * changing shape.
 *
 * A real image goes in as `Zoomable`, which fills the wrapper the same way a
 * bare `next/image` did and adds click-to-enlarge — these are screenshots of
 * charts and tables shown at 400px tall, which is enough to see what they
 * are and not enough to read them.
 */
function Slot({
  shot,
  placeholder,
  priority,
}: {
  shot?: Shot;
  placeholder: string;
  priority?: boolean;
}) {
  if (!shot) return <ImageSlot placeholder={placeholder} />;
  return <Zoomable src={shot.src} alt={shot.alt} priority={priority} />;
}

/**
 * Supporting evidence under the incidents, for a study with more of it than
 * three slots can hold. Each image is captioned, because a screenshot of a
 * dashboard proves nothing to a reader who cannot see what they are meant to
 * be looking at.
 */
function Gallery({ items }: { items?: Shot[] }) {
  if (!items?.length) return null;

  return (
    <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(32px,5cqw,64px)" }}>
      <h3 style={{ margin: "0 0 18px", fontSize: 20, letterSpacing: "-.01em" }}>
        The evidence
      </h3>
      {/* Two across at most. At four these were 150px wide and the routes
          table was unreadable, which defeats the point of showing it. */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,560px),1fr))",
          gap: "clamp(16px,3cqw,28px)",
        }}
      >
        {items.map((item) => (
          <Figure key={item.src} shot={item} height="clamp(240px,30cqw,400px)" />
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();

  const next = nextProject(slug);

  return (
    <>
      <JsonLd data={caseStudySchema(project)} />
      <section style={{ padding: "clamp(30px,5cqw,68px) clamp(18px,4cqw,48px) 0" }}>
        <Link className="btn btn-ghost" href="/work" style={{ marginBottom: 20 }}>
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
          <Slot shot={study.shots?.hero} placeholder={study.slots.hero} priority />
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

      {/* One column, not two: "The problem" and "What I did" each run the full
          content measure, the way the intro and the section notes do. The gap
          is now the space between them rather than beside them. */}
      <section
        style={{
          padding: "clamp(32px,5cqw,64px) clamp(18px,4cqw,48px)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "clamp(22px,4cqw,48px)",
        }}
      >
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 20, letterSpacing: "-.01em" }}>The problem</h3>
          <Prose text={study.problem} />
        </div>
        <div>
          <h3 style={{ margin: "0 0 12px", fontSize: 20, letterSpacing: "-.01em" }}>What I did</h3>
          <Prose text={study.approach} />
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

      <DetailList
        title="What I tried and threw away"
        note="Built, measured, reverted. Each of these looked right on paper."
        items={study.rejected}
      />

      <DetailList
        title="What proxying Shopify cost"
        note="Putting a worker in front of a platform activates it on paths nobody was thinking about. These four surfaced in production and were fixed, most of them by route configuration rather than an application change."
        items={study.incidents}
      />


      {/* Two up on desktop; a swipeable carousel on a phone — see
          `#studyShots` in globals.css. */}
      <section
        id="studyShots"
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
          <Slot shot={study.shots?.shot1} placeholder={study.slots.shot1} />
        </div>
        <div
          style={{
            position: "relative",
            height: "clamp(200px,26cqw,320px)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          <Slot shot={study.shots?.shot2} placeholder={study.slots.shot2} />
        </div>
      </section>

      <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(40px,6cqw,84px)" }}>
        {study.quote?.text ? (
          <figure>
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
        {/* The pair spans the full measure: side by side and equal above
            640px, stacked and full width below it. `minWidth: 0` because a
            flex item defaults to min-content and the longer label would
            otherwise refuse to share the row evenly. */}
        <div
          id="caseStudyCtas"
          style={{ marginTop: 34, display: "flex", gap: 10, flexWrap: "wrap" }}
        >
          <Link className="btn btn-primary" href="/contact">
            Start a project like this
            <i className="ph ph-arrow-right" />
          </Link>
          <Link className="btn btn-secondary" href={`/work/${next.slug}`}>
            Next project
          </Link>
        </div>
      </section>
      <Gallery items={study.gallery} />

    </>
  );
}
