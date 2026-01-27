import BlogCard from "../components/BlogCard";

export default function BlogPage() {
  return (
    <>
      <h1 className="calistoga-font text-5xl">my blogs.</h1>
      <div className="flex flex-col gap-4 mt-10 rounded-xl border border-neutral-800">
        <BlogCard
          href="/blog/hello-world"
          title="Hello World"
          desc="My first blog post! Testing out blog components."
          date="January 26, 2025"
          readingTime="1 min"
          tags={["Hello", "World"]}
        />
        {/* <hr className="border-neutral-800" /> */}
      </div>
    </>
  );
}
