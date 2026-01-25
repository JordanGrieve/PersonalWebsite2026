function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
