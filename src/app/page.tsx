import Image from "next/image";
import Link from "next/link";
import ImageSlot from "@/components/ImageSlot";
import SpinBadge from "@/components/SpinBadge";
import ServicesGrid from "@/components/home/ServicesGrid";
import Toolkit from "@/components/home/Toolkit";
import { process, stats, testimonials } from "@/data/home";
import {
  featuredBlurbs,
  featuredPlaceholders,
  featuredSlugs,
  getProject,
} from "@/data/projects";
import { site } from "@/data/site";

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
      <section
        id="heroSection"
        style={{
          position: "relative",
          padding: "clamp(16px,2.4cqw,30px) clamp(18px,4cqw,48px) 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -40,
            width: 640,
            height: 640,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(145,132,217,.30),transparent 66%)",
            filter: "blur(12px)",
            animation: "glowPulse 7s ease-in-out infinite",
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
            alt="Jordan"
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
            <SpinBadge arcId="badgeArcM" textFill="#b2b6ca" initialsSize={26} />
          </div>
        </div>

        <div id="heroWrap" style={{ position: "relative", zIndex: 2, paddingRight: "34cqw" }}>
          <h1
            style={{
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(50px,15.2cqw,164px)",
              lineHeight: 0.84,
              letterSpacing: "-.005em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ display: "block", color: "var(--color-accent)" }}>Frontend</span>
            <span style={{ display: "block", color: "var(--color-neutral-200)" }}>Developer</span>
          </h1>
          <div
            style={{
              fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
              fontWeight: 600,
              fontSize: "clamp(26px,5.4cqw,62px)",
              lineHeight: 1,
              color: "var(--color-accent)",
              margin: "-0.30em 0 0 clamp(6px,38cqw,420px)",
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          id="heroMeta"
          style={{
            position: "relative",
            zIndex: 2,
            marginTop: "calc(-1 * clamp(4px,1.6cqw,20px))",
            display: "grid",
            gridTemplateColumns: "minmax(180px,1fr) auto",
            gap: 24,
            alignItems: "end",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                maxWidth: "26ch",
                font: "500 clamp(13px,1.3cqw,15px)/1.45 var(--font-heading)",
                letterSpacing: ".05em",
                textTransform: "uppercase",
                color: "var(--color-neutral-200)",
              }}
            >
              {site.tagline}
            </p>
            <p
              style={{
                margin: "14px 0 0",
                font: "500 11.5px/1.6 var(--font-heading)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--color-accent-300)",
              }}
            >
              &lt;/ Build. Ship. Speed up. /&gt;
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
              <Link className="btn btn-primary" href="/contact">
                Get a quote
                <i className="ph ph-arrow-right" style={{ fontSize: 18 }} />
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
              gap: 20,
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            <div
              id="availPill"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                font: "500 11px/1.3 var(--font-heading)",
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--color-neutral-200)",
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  boxShadow: "0 0 0 5px rgba(145,132,217,.16)",
                  flex: "none",
                }}
              />
              <span style={{ marginLeft: 5 }}>Available for projects</span>
            </div>
            <div id="heroBadge" style={{ position: "relative", width: 104, height: 104, flex: "none" }}>
              <SpinBadge arcId="badgeArc" textFill="#9397ab" initialsSize={30} />
            </div>
          </div>
        </div>
      </section>

      {/* Sibling of the hero, not a child: `#heroSection` clips its overflow
          to contain the glow, which would also clip this band's full-bleed
          overhang. globals.css bleeds it out to both viewport edges. */}
      <div
        id="heroStats"
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "clamp(24px,3.4cqw,44px)",
          padding: "clamp(20px,2.6cqw,30px) clamp(18px,4cqw,48px)",
          background:
            "linear-gradient(100deg,var(--color-section) 0%,#1d2149 55%,var(--color-section) 100%)",
          borderTop: "1px solid var(--color-accent-800)",
          borderBottom: "1px solid var(--color-accent-800)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
          gap: "clamp(14px,2cqw,24px)",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.l}
            style={{
              paddingLeft: "clamp(14px,2cqw,24px)",
              borderLeft: "1px solid rgba(233,233,237,.14)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(30px,3.6cqw,46px)",
                lineHeight: 1,
                color: "var(--color-accent-300)",
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                marginTop: 8,
                font: "500 10.5px/1.4 var(--font-heading)",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--color-neutral-300)",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <section style={{ padding: "clamp(38px,6cqw,84px) clamp(18px,4cqw,48px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "clamp(20px,3cqw,40px)",
          }}
        >
          <div>
            <h2
              id="whatIDo"
              style={{
                ...sectionHeading,
                fontSize: "clamp(30px,4.8cqw,56px)",
                lineHeight: 0.94,
              }}
            >
              WHAT
              <br />
              <span>I DO</span>
            </h2>
            <p
              style={{
                margin: "18px 0 0",
                maxWidth: "30ch",
                fontSize: 15,
                lineHeight: 1.6,
                color: "var(--color-neutral-400)",
              }}
            >
              Front end first, full stack when it&apos;s needed. Most of my work is Shopify
              storefronts, custom apps, and making slow sites fast.
            </p>
          </div>
          <ServicesGrid />
        </div>
      </section>

      <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(38px,6cqw,84px)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 22,
          }}
        >
          <h2 style={{ ...sectionHeading, fontSize: "clamp(28px,4.4cqw,52px)" }}>
            FEATURED PROJECTS
          </h2>
          <Link
            className="btn btn-ghost"
            href="/work"
            style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase" }}
          >
            All projects
            <i className="ph ph-arrow-right" />
          </Link>
        </div>
        <div
          id="featGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 16,
          }}
        >
          {featured.map((p, i) => (
            <div
              key={p.slug}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", height: 190 }}>
                <ImageSlot placeholder={featuredPlaceholders[p.slug]} />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    pointerEvents: "none",
                    fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                    fontSize: 13,
                    letterSpacing: ".06em",
                    color: "var(--color-accent-200)",
                    background: "rgba(15,17,28,.72)",
                    border: "1px solid var(--color-divider)",
                    borderRadius: "var(--radius-sm)",
                    padding: "4px 8px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ font: "500 14px/1.3 var(--font-heading)" }}>{p.name}</div>
                  <div style={{ fontSize: 12.5, color: "var(--color-neutral-500)" }}>
                    {featuredBlurbs[p.slug]}
                  </div>
                </div>
                <Link
                  className="btn btn-icon btn-secondary"
                  href={`/work/${p.slug}`}
                  aria-label={`Read the ${p.name} case study`}
                >
                  <i className="ph ph-arrow-up-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "0 clamp(18px,4cqw,48px) clamp(38px,6cqw,84px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: 16,
        }}
      >
        <Toolkit />

        <div
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-divider)",
            borderRadius: "var(--radius-lg)",
            padding: 24,
          }}
        >
          <h3 style={{ ...sectionHeading, margin: "0 0 18px", fontSize: "clamp(24px,2.6cqw,32px)" }}>
            WORK PROCESS
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {process.map((p) => (
              <div key={p.no} style={{ display: "flex", gap: 14 }}>
                <span
                  style={{
                    flex: "none",
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    border: "1px solid var(--color-accent-700)",
                    display: "grid",
                    placeItems: "center",
                    font: "500 11px/1 var(--font-heading)",
                    color: "var(--color-accent)",
                  }}
                >
                  {p.no}
                </span>
                <div>
                  <div
                    style={{
                      font: "500 13px/1.3 var(--font-heading)",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 13,
                      lineHeight: 1.5,
                      color: "var(--color-neutral-400)",
                    }}
                  >
                    {p.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="ctaCard"
          style={{
            borderRadius: "var(--radius-lg)",
            padding: 26,
            background: "linear-gradient(150deg,var(--color-accent-500),var(--color-accent-700) 70%)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(26px,3.2cqw,38px)",
              lineHeight: 1.02,
              letterSpacing: 0,
              textTransform: "uppercase",
              color: "#14121f",
            }}
          >
            Let&apos;s build something fast.
          </h3>
          <p style={{ margin: "14px 0 0", fontSize: 14, lineHeight: 1.55, color: "rgba(20,18,31,.72)" }}>
            Taking on freelance builds and speed work alongside my day job at Dfyne.
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
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </section>

      {testimonials.length ? (
      <section style={{ padding: "0 clamp(18px,4cqw,48px) clamp(38px,6cqw,84px)" }}>
        <h2 style={{ ...sectionHeading, fontSize: "clamp(28px,4.4cqw,52px)", margin: "0 0 22px" }}>
          WHAT PEOPLE SAY
        </h2>
        <div
          id="testGrid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {testimonials.map((t) => (
            <figure
              key={t.who}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                padding: 22,
              }}
            >
              <i className="ph ph-quotes" style={{ fontSize: 22, color: "var(--color-accent)" }} />
              <blockquote
                style={{
                  margin: "12px 0 0",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "var(--color-neutral-200)",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption style={{ marginTop: 16, fontSize: 12, color: "var(--color-neutral-500)" }}>
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
            "clamp(30px,4cqw,56px) clamp(18px,4cqw,48px) clamp(40px,5cqw,70px)",
          borderTop: "1px solid var(--color-divider)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "clamp(24px,4cqw,56px)",
        }}
      >
        <div>
          <h2 style={{ ...sectionHeading, fontSize: "clamp(26px,3.8cqw,44px)", margin: "0 0 18px" }}>
            CONTACT
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
            <a
              href={`mailto:${site.email}`}
              style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 15 }}
            >
              <i className="ph ph-envelope-simple" style={{ fontSize: 19 }} />
              {site.email}
            </a>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                fontSize: 15,
                color: "var(--color-neutral-400)",
              }}
            >
              <i className="ph ph-map-pin" style={{ fontSize: 19, color: "var(--color-accent)" }} />
              {site.location}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 11,
                fontSize: 15,
                color: "var(--color-neutral-400)",
              }}
            >
              <i className="ph ph-clock" style={{ fontSize: 19, color: "var(--color-accent)" }} />
              Replies within a day
            </div>
          </div>
          <Link className="btn btn-primary" href="/contact" style={{ marginTop: 22 }}>
            Send a brief
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
        <div>
          <h2 style={{ ...sectionHeading, fontSize: "clamp(26px,3.8cqw,44px)", margin: "0 0 18px" }}>
            LET&apos;S CONNECT
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
              gap: 10,
            }}
          >
            {[
              { label: "GitHub", icon: "ph ph-github-logo", href: "#" },
              { label: "LinkedIn", icon: "ph ph-linkedin-logo", href: "#" },
              { label: "X", icon: "ph ph-x-logo", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="hov-border"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "13px 15px",
                  border: "1px solid var(--color-divider)",
                  borderRadius: "var(--radius-md)",
                  fontSize: 14,
                  color: "var(--color-neutral-300)",
                }}
              >
                <i className={s.icon} style={{ fontSize: 18, color: "var(--color-accent)" }} />
                {s.label}
              </a>
            ))}
            <a
              href="#"
              download
              className="hov-border"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 15px",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-md)",
                fontSize: 14,
                color: "var(--color-neutral-300)",
              }}
            >
              <i className="ph ph-download-simple" style={{ fontSize: 18, color: "var(--color-accent)" }} />
              CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
