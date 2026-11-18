import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Figure from "@/components/Figure";
import { getPostBody } from "@/content/posts";
import { displayDate, getPost, posts, relatedPosts } from "@/data/posts";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { postSchema } from "@/lib/schema";

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
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      title: post.title,
      description: post.dek,
      type: "article",
      url: `${site.url}/writing/${slug}`,
      authors: [site.fullName],
      publishedTime: post.published,
    },
    /* Set alongside openGraph: the layout's twitter text is inherited whole
       unless replaced, so without this a shared post carries the post's
       image with the home page's title and description. */
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.dek,
    },
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
      <JsonLd data={postSchema(post)} />
      <article>
        <section style={{ padding: "clamp(1.7333em,4cqw,3.7333em) clamp(1.2em,4cqw,3.2em) 0" }}>
          <Link className="btn btn-ghost" href="/writing" style={{ marginBottom: "1.4286em" }}>
            <i aria-hidden="true" className="ph ph-arrow-left" />
            &nbsp;All posts
          </Link>
          <div
            style={{
              display: "flex",
              gap: "1.2727em",
              flexWrap: "wrap",
              alignItems: "center",
              font: "500 0.6875rem/1 var(--font-heading)",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--color-neutral-500)",
              marginBottom: "1.4545em",
            }}
          >
            <span style={{ color: "var(--color-accent)" }}>{post.category}</span>
            <time dateTime={post.published}>{displayDate(post.published)}</time>
            <span>{post.read} read</span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontWeight: 400,
              fontSize: "clamp(2.125rem,6.4cqw,4.625rem)",
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
              margin: "1.25rem 0 0",
              maxWidth: "60ch",
              fontSize: "clamp(1rem,1.7cqw,1.1875rem)",
              lineHeight: 1.6,
              color: "var(--color-neutral-300)",
            }}
          >
            {post.dek}
          </p>
          <div style={{ marginTop: "1.8667em" }}>
            <Figure
              shot={post.hero}
              placeholder={post.ph}
              height="clamp(200px,30cqw,380px)"
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        </section>

        <section
          style={{
            padding: "clamp(1.8667em,4cqw,3.4667em) clamp(1.2em,4cqw,3.2em) 0",
            maxWidth: "74ch",
          }}
        >
          <Body />
        </section>
      </article>

      <section style={{ padding: "clamp(2em,4cqw,3.7333em) clamp(1.2em,4cqw,3.2em)" }}>
        <div
          style={{
            display: "flex",
            gap: "0.8em",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.4667em 0",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--color-neutral-300)" }}>
            Interested in this kind of work?
          </p>
          <Link className="btn btn-primary" href="/contact">
            Get in touch
            <i aria-hidden="true" className="ph ph-arrow-up-right" />
          </Link>
        </div>
        {/* Only rendered when there is somewhere to go next. With one post on
            the site this was a heading above an empty grid. */}
        {related.length ? (
          <>
            <h2
              style={{
                margin: "1.875rem 0 1rem",
                fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                fontWeight: 400,
                fontSize: "clamp(1.375rem,2.6cqw,1.875rem)",
                color: "var(--color-accent)",
              }}
            >
              READ NEXT
            </h2>
            <ul
              className="plain-list"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
                gap: "0.9333em",
              }}
            >
          {related.map((r) => (
            <li key={r.slug}>
            <Link
              href={`/writing/${r.slug}`}
              className="hov-border"
              style={{
                display: "block",
                height: "100%",
                textAlign: "left",
                background: "var(--color-surface)",
                border: "1px solid var(--color-divider)",
                borderRadius: "var(--radius-lg)",
                padding: "1.3333em",
                color: "inherit",
              }}
            >
              <div style={{ fontSize: "0.7188rem", color: "var(--color-neutral-500)" }}>
                <time dateTime={r.published}>{displayDate(r.published)}</time> · {r.read}
              </div>
              <h3
                style={{
                  margin: "0.5625em 0 0",
                  font: "500 1rem/1.3 var(--font-heading)",
                  letterSpacing: "normal",
                  color: "var(--color-text)",
                }}
              >
                {r.title}
              </h3>
            </Link>
            </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>
    </>
  );
}
