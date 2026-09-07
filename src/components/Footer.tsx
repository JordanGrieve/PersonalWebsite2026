import { liveSocials, site } from "@/data/site";

/* padding gets these to the 24px target minimum; they were 19px tall. */
const linkStyle = {
  fontSize: 12.5,
  color: "var(--color-neutral-400)",
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: "2px 0",
} as const;

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div
        className="wrap"
        style={{
          padding: "26px clamp(18px,4cqw,48px)",
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 12.5, color: "var(--color-neutral-500)" }}>
          © {new Date().getFullYear()} {site.name} · {site.role}, Scotland
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {liveSocials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              {s.label}
            </a>
          ))}
          <a href={`mailto:${site.email}`} style={linkStyle}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
