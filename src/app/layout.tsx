import type { Metadata } from "next";
import { Anton, Dancing_Script, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";
import "@/styles/nocturne.css";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${dancingScript.variable}`}
      // The inline script below adds `js-reveal` here before React hydrates,
      // so the client's class list legitimately differs from the server's.
      suppressHydrationWarning
    >
      <head>
        {/* Phosphor icon font, used as `<i className="ph ph-…">` throughout —
            the same source the design project pulled from. */}
        <link rel="preconnect" href="https://unpkg.com" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
        {/* Runs before first paint, so the scroll-reveal start state is never
            visible as a flash. Gated this way rather than in the stylesheet so
            that a browser without JS never hides anything. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js-reveal')`,
          }}
        />
      </head>
      <body>
        <ScrollReveal />
        <div className="site">
          <Header />
          <main className="wrap" style={{ animation: "riseIn .45s ease both" }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
