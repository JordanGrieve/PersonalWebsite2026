import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { ogCard, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";

export const alt = "Blog post";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return ogCard({ kicker: post.category, title: post.title, sub: post.dek });
}
