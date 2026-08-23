import { site } from "@/data/site";

const linkStyle = { fontSize: 12.5, color: "var(--color-neutral-400)" } as const;

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
        <div style={{ fontSize: 12.5, color: "var(--color-neutral-600)" }}>
          © {new Date().getFullYear()} {site.name} · {site.role}, Scotland
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <a href="#" style={linkStyle}>
            GitHub
          </a>
          <a href="#" style={linkStyle}>
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} style={linkStyle}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
