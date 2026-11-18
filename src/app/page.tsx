import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CardThumb from "@/components/CardThumb";
import PortfolioWord from "@/components/PortfolioWord";
import SpinBadge from "@/components/SpinBadge";
import ServicesGrid from "@/components/home/ServicesGrid";
import Toolkit from "@/components/home/Toolkit";
import { stats, testimonials } from "@/data/home";
import {
  featuredBlurbs,
  featuredPlaceholders,
  featuredSlugs,
  getProject,
} from "@/data/projects";
import { liveSocials, site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import NewTabHint from "@/components/NewTabHint";
import { homeSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const sectionHeading = {
  fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
  fontWeight: 400,
  letterSpacing: 0,
  margin: 0,
  color: "var(--color-accent)",
} as const;

export default function HomePage() {
  const featured = featuredSlugs.map((slug) => getProject(slug)!);

  return (
    <>
      <JsonLd data={homeSchema()} />
      <section
        id="heroSection"
        style={{
          position: "relative",
          padding: "clamp(1.0667em,2.4cqw,2em) clamp(1.2em,4cqw,3.2em) 0",
          overflow: "hidden",
        }}
      >
        {/* The pulse lives in globals.css behind `.motion-on` — see
            DeferMotion. The gradient itself is always painted. */}
        <div
          className="hero-glow"
          style={{
            position: "absolute",
            top: -180,
            right: -40,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(145,132,217,.30),transparent 66%)",
            filter: "blur(12px)",
            pointerEvents: "none",
          }}
        />

        <div
          id="heroPhoto"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "46cqw",
            height: "clamp(320px,44cqw,600px)",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/images/jordan-hero-image.png"
            alt="Jordan Grieve"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 46vw"
            style={{
              objectFit: "cover",
              objectPosition: "60% 12%",
              filter: "grayscale(.35) contrast(1.06) brightness(.95)",
              WebkitMaskImage:
                "radial-gradient(115% 92% at 72% 26%,#000 42%,transparent 76%)",
              maskImage: "radial-gradient(115% 92% at 72% 26%,#000 42%,transparent 76%)",
            }}
          />
          <div
            id="heroPhotoBadge"
            style={{
              display: "none",
              position: "absolute",
              right: 8,
              bottom: 4,
              width: 92,
              height: 92,
              background: "rgba(15,17,28,.66)",
              borderRadius: "50%",
              backdropFilter: "blur(3px)",
            }}
          >
            <SpinBadge arcId="badgeArcM" textFill="#b2b6ca" initialsSize="1.625rem" />
          </div>
        </div>

        <div id="heroWrap" style={{ position: "relative", zIndex: 2, paddingRight: "34cqw" }}>
          <h1
            style={{
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(3.125rem,15.2cqw,10.25rem)",
              lineHeight: 0.84,
              letterSpacing: "-.005em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {/* The space is for the accessible name. Two block spans look
                like two lines and read as "SoftwareDeveloper" without it. */}
            <span style={{ display: "block", color: "var(--color-accent)" }}>Software </span>
            <span style={{ display: "block", color: "var(--color-neutral-200)" }}>Developer</span>
          </h1>
          {/* Outlines, not live text — see PortfolioWord. The font-size here
              still drives it: the SVG is sized in `em`, so the clamp below is
              unchanged and so is the box it occupies. */}
          <div
            style={{
              /* `flow-root` so the SVG's negative block margins shrink this
                 box instead of collapsing through it. Without it the wrapper
                 takes the glyphs' full 1.2em content area, grows from 62px to
                 74px at the top of the clamp, and pushes #heroMeta down. */
              display: "flow-root",
              fontSize: "clamp(1.625rem,5.4cqw,3.875rem)",
              lineHeight: 1,
              color: "var(--color-accent)",
              margin: "-0.30em 0 0 clamp(0.375rem,38cqw,26.25rem)",
            }}
          >
            <PortfolioWord />
          </div>
        </div>

        <div
          id="heroMeta"
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "calc(-1 * clamp(0.2667em,1.6cqw,1.3333em))",
            display: "grid",
            gridTemplateColumns: "minmax(180px,1fr) auto",
            gap: "1.6em",
            alignItems: "end",
          }}
        >
          <div>
            <p
              id="heroTagline"
              /* 26ch was 260px inside a 985px column, which broke a
                 73-character line into four. 44ch lands it on two and still
                 leaves the badge column its room. Uppercase and letterspaced,
                 so it wants a shorter measure than body copy — the column
                 itself is 99ch and nowhere near readable at that width.
                 Dropped entirely below 640px, see `#heroTagline` in
                 globals.css. */
              style={{
                margin: 0,
                maxWidth: "44ch",
                /* Flat 0.9375rem rather than clamping down to 0.8125rem.
                   The clamp only ever ranged 13px to 15px, and 13px is
                   small for the line that says what I do — it was the
                   measurement that started this. */
                font: "500 0.9375rem/1.45 var(--font-heading)",
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: "var(--color-neutral-200)",
              }}
            >
              {site.tagline}
            </p>
            <p
              style={{
                margin: "1.2174em 0 0",
                font: "500 0.71875rem/1.6 var(--font-heading)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--color-accent-300)",
              }}
            >
              &lt;/ Build. Ship. Speed up. /&gt;
            </p>
            <div id="heroActions" style={{ display: "flex", gap: "0.6667em", flexWrap: "wrap", marginTop: "1.3333em" }}>
              <Link className="btn btn-primary" href="/contact">
                Hire me
                <i aria-hidden="true" className="ph ph-arrow-right" style={{ fontSize: "1.125rem" }} />
              </Link>
              <Link className="btn btn-secondary" href="/work">
                See the work
              </Link>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.3333em",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <div id="heroBadge" style={{ position: "relative", width: 104, height: 104, flex: "none" }}>
              <SpinBadge arcId="badgeArc" textFill="#9397ab" initialsSize="1.875rem" />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling of the hero, not a child: `#heroSection` clips its overflow
          to contain the glow, which would also clip this band's full-bleed
          overhang. globals.css bleeds it out to both viewport edges. */}
      <ul
        id="heroStats"
        className="plain-list"
        aria-label="In numbers"
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "clamp(1.6em,3.4cqw,2.9333em)",
          padding: "clamp(1.3333em,2.6cqw,2em) clamp(1.2em,4cqw,3.2em)",
          background:
            "linear-gradient(100deg,var(--color-section) 0%,#1d2149 55%,var(--color-section) 100%)",
          borderTop: "1px solid var(--color-accent-800)",
          borderBottom: "1px solid var(--color-accent-800)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
          gap: "clamp(0.9333em,2cqw,1.6em)",
        }}
      >
        {stats.map((s) => (
          <li
            key={s.l}
            style={{
              paddingLeft: "clamp(0.9333em,2cqw,1.6em)",
              borderLeft: "1px solid rgba(233,233,237,.14)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(1.875rem,3.6cqw,2.875rem)",
                lineHeight: 1,
                color: "var(--color-accent-300)",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                marginTop: "0.7619em",
                font: "500 0.65625rem/1.4 var(--font-heading)",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--color-neutral-300)",
              }}
            >
              {s.l}
            </div>
          </li>
        ))}
      </ul>

      <section style={{ padding: "clamp(2.5333em,6cqw,5.6em) clamp(1.2em,4cqw,3.2em)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "clamp(1.3333em,3cqw,2.6667em)",
          }}
        >
          <div>
            <h2
              id="whatIDo"
              className="section-title"
              style={{
                ...sectionHeading,
                fontSize: "clamp(1.875rem,4.8cqw,3.5rem)",
                lineHeight: 0.94,
              }}
            >
              {/* The line break is visual only. Without a space either side
                  of it the accessible name concatenates to "WHATI DO" — it
                  looks right and reads wrong. The space is inside the span
                  so the two lines still butt up against the break. */}
              WHAT
              <br />
              <span> I DO</span>
            </h2>
            <p
              style={{
                margin: "1.2em 0 0",
                maxWidth: "42ch",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                color: "var(--color-neutral-400)",
              }}
            >
              Front end, back end, and the infrastructure under both. Most of my work is Shopify
              storefronts, custom apps, and making slow sites fast.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <section style={{ padding: "0 clamp(1.2em,4cqw,3.2em) clamp(2.5333em,6cqw,5.6em)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1.0667em",
            flexWrap: "wrap",
            marginBottom: "1.4667em",
          }}
        >
          <h2 className="section-title" style={{ ...sectionHeading, fontSize: "clamp(1.75rem,4.4cqw,3.25rem)" }}>
            FEATURED PROJECTS
          </h2>
          <Link
            className="btn btn-ghost"
            href="/work"
            style={{ letterSpacing: ".1em", textTransform: "uppercase" }}
          >
            All projects
            <i aria-hidden="true" className="ph ph-arrow-right" />
          </Link>
        </div>
        <ul
          id="featGrid"
          className="plain-list"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "1.0667em",
          }}
        >
          {featured.map((p, i) => (
            /* The whole card is the link. The arrow used to be the only hit
               target — a 36px square in a 260px card. */
            <li key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              className="hov-lift"
              style={{
                display: "block",
                height: "100%",
                color: "inherit",
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", height: 190 }}>
                <CardThumb slug={p.slug} placeholder={featuredPlaceholders[p.slug]} />
                {/* "01" to "04": ornament. The list says which card this
                    is; read aloud, the number just gets in front of the
                    project's name. */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    pointerEvents: "none",
                    fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                    fontSize: "0.8125rem",
                    letterSpacing: ".06em",
                    color: "var(--color-accent-200)",
                    background: "rgba(15,17,28,.72)",
                    border: "1px solid var(--color-divider)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.3077em 0.6154em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                style={{
                  padding: "1.0667em 1.2em",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.8em",
                }}
              >
                <div>
                  <h3
                    style={{
                      margin: 0,
                      font: "500 0.875rem/1.3 var(--font-heading)",
                      letterSpacing: "normal",
                    }}
                  >
                    {p.name}
                  </h3>
                  <div style={{ fontSize: "0.78125rem", color: "var(--color-neutral-500)" }}>
                    {featuredBlurbs[p.slug]}
                  </div>
                </div>
                {/* Decorative only — the card is the link, and a nested one
                    would be invalid. Hidden on mobile (globals.css). */}
                <span className="btn btn-icon btn-secondary feat-arrow" aria-hidden="true">
                  <i aria-hidden="true" className="ph ph-arrow-up-right" />
                </span>
              </div>
            </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        style={{
          padding: "0 clamp(1.2em,4cqw,3.2em) clamp(2.5333em,6cqw,5.6em)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "1.0667em",
        }}
      >
        <Toolkit />


        <div
          id="ctaCard"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: "1.7333em",
            // Lightened from accent-500/700: dark text on the old dark end measured
            // 2.2:1. accent-400/500 keeps the same look and clears AA.
            background: "linear-gradient(150deg,var(--color-accent-400),var(--color-accent-500) 70%)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(1.625rem,3.2cqw,2.375rem)",
              lineHeight: 1.02,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: "#14121f",
            }}
          >
            Looking for my next role.
          </h2>
          <p style={{ margin: "1em 0 0", fontSize: "0.875rem", lineHeight: 1.55, color: "#14121f" }}>
            For my next role I want to be pushed — unfamiliar problems, a bigger codebase,
            and the kind of work that leaves me better than it found me.
          </p>
          <Link
            id="ctaBtn"
            className="btn"
            href="/contact"
            style={{
              marginTop: "auto",
              alignSelf: "flex-start",
              background: "#14121f",
              color: "var(--color-accent-200)",
              borderColor: "#14121f",
            }}
          >
            Get in touch
            <i aria-hidden="true" className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </section>

      {testimonials.length ? (
      <section style={{ padding: "0 clamp(1.2em,4cqw,3.2em) clamp(2.5333em,6cqw,5.6em)" }}>
        <h2 className="section-title" style={{ ...sectionHeading, fontSize: "clamp(1.75rem,4.4cqw,3.25rem)", margin: "0 0 1.375rem" }}>
          WHAT PEOPLE SAY
        </h2>
        <div
          id="testGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "1.0667em",
          }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.who}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                padding: "1.4667em",
              }}
            >
              <i aria-hidden="true" className="ph ph-quotes" style={{ fontSize: "1.375rem", color: "var(--color-accent)" }} />
              <blockquote
                style={{
                  margin: "0.8276em 0 0",
                  fontSize: "0.90625rem",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-200)",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption style={{ marginTop: "1.3333em", fontSize: "0.75rem", color: "var(--color-neutral-500)" }}>
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      ) : null}

      <section
        style={{
          padding:
            "clamp(2em,4cqw,3.7333em) clamp(1.2em,4cqw,3.2em) clamp(2.6667em,5cqw,4.6667em)",
          borderTop: "1px solid var(--color-divider)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "clamp(1.6em,4cqw,3.7333em)",
        }}
      >
        <div>
          <h2 className="section-title" style={{ ...sectionHeading, fontSize: "clamp(1.625rem,3.8cqw,2.75rem)", margin: "0 0 1.125rem" }}>
            CONTACT
          </h2>
          <ul className="plain-list" style={{ display: "flex", flexDirection: "column", gap: "0.8667em" }}>
            <li>
            <a
              href={`mailto:${site.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7333em",
                fontSize: "0.9375rem",
                minHeight: 24,
                padding: "0.2667em 0",
                /* The address is one unbreakable word. With large text in a
                   narrow column it ran out of the column and over the one
                   beside it; this lets it break instead. */
                overflowWrap: "anywhere",
              }}
            >
              <i aria-hidden="true" className="ph ph-envelope-simple" style={{ fontSize: "1.1875rem" }} />
              {site.email}
            </a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7333em",
                fontSize: "0.9375rem",
                color: "var(--color-neutral-400)",
              }}
            >
              <i aria-hidden="true" className="ph ph-map-pin" style={{ fontSize: "1.1875rem", color: "var(--color-accent)" }} />
              {site.location}
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7333em",
                fontSize: "0.9375rem",
                color: "var(--color-neutral-400)",
              }}
            >
              <i aria-hidden="true" className="ph ph-clock" style={{ fontSize: "1.1875rem", color: "var(--color-accent)" }} />
              Replies within a day
            </li>
          </ul>
          <Link className="btn btn-primary" href="/contact" style={{ marginTop: "1.375em" }}>
            Get in touch
            <i aria-hidden="true" className="ph ph-arrow-up-right" />
          </Link>
        </div>
        <div>
          <h2 className="section-title" style={{ ...sectionHeading, fontSize: "clamp(1.625rem,3.8cqw,2.75rem)", margin: "0 0 1.125rem" }}>
            LET&apos;S CONNECT
          </h2>
          <ul
            id="connectGrid"
            className="plain-list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
              gap: "0.6667em",
            }}
          >
            {liveSocials.map((s) => (
              <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hov-border"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7143em",
                  padding: "0.9286em 1.0714em",
                  border: "1px solid var(--color-divider)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "0.875rem",
                  color: "var(--color-neutral-300)",
                }}
              >
                <i aria-hidden="true" className={s.icon} style={{ fontSize: "1.125rem", color: "var(--color-accent)" }} />
                {s.label}
                <NewTabHint />
              </a>
              </li>
            ))}
            <li>
            <a
              href={site.cv}
              download={site.cvName}
              /* "CV" alone says neither what happens nor what arrives. */
              aria-label="CV — download as a PDF"
              className="hov-border"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7143em",
                padding: "0.9286em 1.0714em",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-md)",
                fontSize: "0.875rem",
                color: "var(--color-neutral-300)",
              }}
            >
              <i aria-hidden="true" className="ph ph-download-simple" style={{ fontSize: "1.125rem", color: "var(--color-accent)" }} />
              CV
            </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
