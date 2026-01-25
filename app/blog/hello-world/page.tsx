import BlogHeader from "../../components/Blog/BlogHeader";
import BlogImage from "../../components/Blog/BlogImage";
import Tags from "../../components/Tags";
import CodeSnippet from "../../components/Blog/CodeSnippet";
import BlogFooter from "../../components/Blog/BlogFooter";

export default function firstBlog() {
  const tags = ["Hello", "World"];

  return (
    <article className="text-neutral-400">
      <BlogHeader />
      <BlogImage imgSrc="/profile-pic-1.jpg" />
      <h1 className="mt-6 text-4xl font-bold">Hello World!</h1>

      <div className="flex gap-4 text-sm mt-4 mb-2">
        <span>6 min read</span>
        <div>|</div>
        <span>Published January 26, 2025</span>
      </div>

      {/* Tags */}
      <Tags tags={tags} />

      <div className="mt-8 prose prose-invert">
        <p className="text-lg text-neutral-400">
          This first blog post is a simple "Hello World" example to demonstrate
          the blog components. I'm excited to start sharing my thoughts and
          ideas here!
        </p>
        <h6 className="mt-6 text-2xl font-bold text-neutral-200 mb-4">
          Component Tests
        </h6>
        <CodeSnippet code={`print`} language="('hello world')" />
      </div>
      <BlogFooter
        content={
          "That's it for this test post! Check back soon for more updates, and thanks for stopping by!"
        }
      />
    </article>
  );
}
