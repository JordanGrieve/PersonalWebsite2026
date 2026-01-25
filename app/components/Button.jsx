function Button({
  title,
  onClick,
  icon: Icon,
  href,
  variant = "icon", // "pill" | "icon"
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-md text-white/80 " +
    "transition hover:bg-white/10 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20";

  const styles =
    variant === "pill"
      ? "h-10 gap-2 px-4 text-sm font-medium border border-white/10"
      : "h-10 w-10 border-white/10";

  const content = (
    <>
      {variant === "pill" ? <span>{title}</span> : null}
      {Icon ? <Icon size={18} className="text-white/80" /> : null}
    </>
  );

  // Link button (recommended for external links / resume download)
  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.endsWith(".pdf");

    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={title}
        title={title}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${base} ${styles} ${className}`}
      >
        {content}
      </a>
    );
  }

  // Normal button
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      title={title}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
