import Link from "next/link";
import Tags from "../components/Tags";

function BlogCard({ href, title, desc, date, readingTime, tags }) {
  return (
    <Link href={href}>
      <article className="p-6 rounded-xl hover:bg-neutral-600/5 transition flex flex-row gap-5">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-5">{title}</h2>
          <p className="text-neutral-400 text-sm">{desc}</p>
          <Tags tags={tags} />
        </div>

        <div className="flex flex-col gap-1 text-sm text-neutral-500 ml-auto text-right">
          <span className="">{date}</span>
          <span className="">{readingTime} read</span>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
