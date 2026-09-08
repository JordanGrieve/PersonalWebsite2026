import type { Metadata } from "next";
import { Anton, Dancing_Script, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data/site";
import "@/styles/phosphor-subset.css";
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
    default: `${site.fullName} — ${site.role} in Scotland`,
    template: `%s · ${site.fullName}`,
  },
  description: site.description,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  publisher: site.fullName,
  openGraph: {
    title: `${site.fullName} — ${site.role} in Scotland`,
    description: site.description,
    type: "website",
    siteName: site.fullName,
    locale: "en_GB",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.role} in Scotland`,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${anton.variable} ${dancingScript.variable}`}
      // The inline script below adds `js-reveal` here before React hydrates,
      // so the client's class list legitimately differs from the server's.
      suppressHydrationWarning
    >
      <head>
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
