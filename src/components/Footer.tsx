import NewTabHint from "@/components/NewTabHint";
import { liveSocials, site } from "@/data/site";

/* padding gets these to the 24px target minimum; they were 19px tall. */
const linkStyle = {
  fontSize: "0.78125rem",
  color: "var(--color-neutral-400)",
  display: "inline-flex",
  alignItems: "center",
  minHeight: 24,
  padding: "0.16em 0",
} as const;

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div
        className="wrap"
        style={{
          padding: "1.7333em clamp(1.2em,4cqw,3.2em)",
          display: "flex",
          gap: "1.0667em",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.78125rem", color: "var(--color-neutral-500)" }}>
          © {new Date().getFullYear()} {site.fullName} · {site.role}, Scotland
        </p>
        <nav aria-label="Elsewhere">
          {/* Wraps: three links in a row is wider than a very narrow screen
              with large text, and the last one ran off the edge. */}
          <ul className="plain-list" style={{ display: "flex", flexWrap: "wrap", gap: "0.9333em" }}>
            {liveSocials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" style={linkStyle}>
                  {s.label}
                  <NewTabHint />
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} style={linkStyle}>
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
