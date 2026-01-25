import Link from "next/link";

function BlogHeader() {
  return (
    <Link
      href="/blog"
      className="text-sm text-neutral-400 hover:text-neutral-200"
    >
      ← back to blog
    </Link>
  );
}

export default BlogHeader;
