"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { navItems, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Drawer slide duration. Shared by the CSS below and the unmount timer, so
    the two cannot drift apart. */
const DRAWER_MS = 280;
const DRAWER_EASE = "cubic-bezier(.22,.7,.3,1)";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const openMenu = () => {
    setClosing(false);
    setMenuOpen(true);
  };
  // Starts the exit animation; the effect below unmounts once it has run.
  const closeMenu = () => setClosing(true);
  /** Open and not already on its way out — drives the burger's icon and label,
      so it flips back the moment the drawer starts leaving. */
  const showingMenu = menuOpen && !closing;

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => {
      setMenuOpen(false);
      setClosing(false);
    }, DRAWER_MS);
    return () => clearTimeout(timer);
  }, [closing]);

  // Close the drawer whenever navigation lands on a new page.
  useEffect(() => {
    setMenuOpen((open) => {
      if (open) setClosing(true);
      return open;
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setClosing(true);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const drawer = (
    <div>
      <div
        onClick={closeMenu}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(11,12,20,.62)",
          backdropFilter: "blur(2px)",
          zIndex: 40,
          animation: `${closing ? "fadeScrimOut" : "fadeScrim"} .25s ease both`,
        }}
      />
      <div
        role="dialog"
        aria-label="Menu"
        aria-modal
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "85%",
          maxWidth: 420,
          zIndex: 41,
          overflowY: "auto",
          background: "var(--color-bg)",
          borderLeft: "1px solid var(--color-accent-800)",
          boxShadow: "-24px 0 48px rgba(0,0,0,.55)",
          padding: 22,
          display: "flex",
          flexDirection: "column",
          animation: `${closing ? "slideOut" : "slideIn"} ${DRAWER_MS}ms ${DRAWER_EASE} both`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 18,
          }}
        >
          <span
            style={{
              font: "500 10.5px/1 var(--font-heading)",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
            }}
          >
            Menu
          </span>
          <button
            className="btn btn-secondary"
            onClick={closeMenu}
            aria-label="Close menu"
            style={{ width: 40, height: 40, padding: 0 }}
          >
            <i className="ph ph-x" style={{ fontSize: 20 }} />
          </button>
        </div>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              textAlign: "left",
              fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
              fontSize: 27,
              letterSpacing: ".01em",
              textTransform: "uppercase",
              padding: "8px 0",
              color: isActive(pathname, item.href)
                ? "var(--color-text)"
                : "var(--color-neutral-500)",
            }}
          >
            {item.label}
          </Link>
        ))}
        <Link className="btn btn-primary btn-block" href="/contact" style={{ marginTop: 22 }}>
          Start a project
          <i className="ph ph-arrow-up-right" />
        </Link>
        <a
          href={`mailto:${site.email}`}
          style={{
            marginTop: "auto",
            paddingTop: 20,
            fontSize: 13,
            color: "var(--color-neutral-400)",
          }}
        >
          {site.email}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          backdropFilter: "blur(14px)",
          background: "color-mix(in srgb,#161826 88%,transparent)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
            padding: "14px clamp(18px,4cqw,48px)",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span
              style={{
                fontFamily: "var(--font-anton), 'Anton', var(--font-heading)",
                fontWeight: 400,
                fontSize: 24,
                letterSpacing: ".01em",
                color: "var(--color-neutral-100)",
              }}
            >
              JORDAN<span style={{ color: "var(--color-accent)" }}>.</span>
            </span>
          </Link>
          <nav id="siteNav" style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  font: "500 13px/1 var(--font-heading)",
                  padding: "7px 10px",
                  borderRadius: "var(--radius-sm)",
                  color: isActive(pathname, item.href)
                    ? "var(--color-text)"
                    : "var(--color-neutral-500)",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link id="headerCta" className="btn btn-primary" href="/contact">
            Start a project
            <i className="ph ph-arrow-up-right" />
          </Link>
          <button
            id="burger"
            className="btn btn-secondary"
            onClick={showingMenu ? closeMenu : openMenu}
            aria-label={showingMenu ? "Close menu" : "Open menu"}
            aria-expanded={showingMenu}
            style={{ display: "none", width: 44, height: 44, padding: 0 }}
          >
            <i className={showingMenu ? "ph ph-x" : "ph ph-list"} style={{ fontSize: 22 }} />
          </button>
        </div>
      </header>
      {mounted && menuOpen ? createPortal(drawer, document.body) : null}
    </>
  );
}
