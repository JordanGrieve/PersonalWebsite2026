import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageSlot from "@/components/ImageSlot";
import { getPostBody } from "@/content/posts";
import { getPost, posts, relatedPosts } from "@/data/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.dek,
    openGraph: { title: post.title, description: post.dek, type: "article" },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const Body = getPostBody(slug);
  const related = relatedPosts(slug);

  return (
    <>
      <article>
        <section style={{ padding: "clamp(26px,4cqw,56px) clamp(18px,4cqw,48px) 0" }}>
          <Link className="btn btn-ghost" href="/writing" style={{ fontSize: 12, marginBottom: 20 }}>
            <i className="ph ph-arrow-left" />
            &nbsp;All posts
          </Link>
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              alignItems: "center",
              font: "500 11px/1 var(--font-heading)",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-neutral-500)",
              marginBottom: 16,
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.read} read</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(34px,6.4cqw,74px)",
              lineHeight: 0.94,
              letterSpacing: 0,
              textTransform: "uppercase",
              margin: 0,
              maxWidth: "20ch",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "60ch",
              fontSize: "clamp(16px,1.7cqw,19px)",
              lineHeight: 1.6,
              color: "var(--color-neutral-300)",
            }}
          >
            {post.dek}
          </p>
          <div
            style={{
              marginTop: 28,
              height: "clamp(200px,30cqw,380px)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <ImageSlot placeholder={post.ph} />
          </div>
        </section>

        <section
          style={{
            padding: "clamp(28px,4cqw,52px) clamp(18px,4cqw,48px) 0",
            maxWidth: "74ch",
          }}
        >
          <Body />
        </section>
      </article>

      <section style={{ padding: "clamp(30px,4cqw,56px) clamp(18px,4cqw,48px)" }}>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "22px 0",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <span style={{ fontSize: 15, color: "var(--color-neutral-300)" }}>
            Got a store that feels slow?
          </span>
          <Link className="btn btn-primary" href="/contact">
            Book a speed audit
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
        <h3
          style={{
            margin: "30px 0 16px",
            fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
            fontWeight: 400,
            fontSize: "clamp(22px,2.6cqw,30px)",
            color: "var(--color-accent)",
          }}
        >
          READ NEXT
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 14,
          }}
        >
          {related.map((r) => (
            <Link
              key={r.slug}
              href={`/writing/${r.slug}`}
              className="hov-border"
              style={{
                display: "block",
                textAlign: "left",
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                padding: 20,
                color: "inherit",
              }}
            >
              <div style={{ fontSize: 11.5, color: "var(--color-neutral-500)" }}>
                {r.date} · {r.read}
              </div>
              <div
                style={{
                  marginTop: 9,
                  font: "500 16px/1.3 var(--font-heading)",
                  color: "var(--color-text)",
                }}
              >
                {r.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
