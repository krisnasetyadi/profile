"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { socialMediaUrl } from "@/lib/constant";

const NAV_LINKS = [
  { href: "#work", label: "01 WORK" },
  { href: "#about", label: "02 ABOUT" },
  { href: "#experience", label: "03 EXPERIENCE" },
];

export default function Navigation() {
  const prefersReduced = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 20);
      if (y < 50) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      setHidden(y > lastY.current + 4);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToFooter = () => {
    document
      .getElementById("site-footer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      aria-label="Main navigation"
      style={{ willChange: "transform" }}
      animate={prefersReduced ? {} : { y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      className={[
        "fixed top-0 left-0 right-0 z-50 px-6 md:px-12",
        "transition-colors duration-500",
        atTop
          ? "bg-transparent"
          : "bg-[var(--pnp-bg)]/90 backdrop-blur-md border-b border-[var(--pnp-muted)]",
      ].join(" ")}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: "Main Navigation",
            url: "https://krisnadwisetyaadi.com",
            hasPart: NAV_LINKS.map((item) => ({
              "@type": "WebPage",
              name: item.label,
              url: `https://krisnadwisetyaadi.com/${item.href}`,
            })),
          }),
        }}
      />

      <nav className="flex h-16 items-center justify-between max-w-7xl mx-auto">
        {/* Logo — KRSN with per-letter spring hover */}
        <Link href="/" aria-label="KRSN — Krisna Setyaadi Portfolio">
          <LogoMark />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-xs text-[var(--pnp-fg)] opacity-[var(--pnp-op-secondary)] hover:opacity-100 transition-[opacity,color] duration-200 tracking-[0.2em] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                onMouseEnter={() => setActiveLink(item.href)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {item.label}
                <AnimatePresence>
                  {activeLink === item.href && (
                    <motion.span
                      layoutId="nav-dot"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--pnp-accent)]"
                    />
                  )}
                </AnimatePresence>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + available badge */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <AvailableBadge onClick={scrollToFooter} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--pnp-fg)] p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className="block w-5 h-px bg-current mb-1.5 transition-transform duration-200"
            style={{
              transform: mobileOpen
                ? "rotate(45deg) translate(0, 4px)"
                : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-current transition-opacity duration-200"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-current mt-1.5 transition-transform duration-200"
            style={{
              transform: mobileOpen
                ? "rotate(-45deg) translate(0, -4px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--pnp-surface)] border-t border-[var(--pnp-muted)] px-6 py-6 space-y-4"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[var(--pnp-fg)] text-lg font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--pnp-muted)] flex items-center gap-6 text-sm text-[var(--pnp-fg)] opacity-[var(--pnp-op-secondary)]">
              <a
                href={socialMediaUrl.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={socialMediaUrl.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ── Logo ── */
function LogoMark() {
  const letters = ["K", "R", "S", "N"];
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="flex items-center gap-0.5 cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((l, i) => (
        <motion.span
          key={i}
          animate={hovered ? { y: -4 } : { y: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            delay: i * 0.04,
          }}
          className="text-xl font-bold text-[var(--pnp-fg)] font-syne"
          style={{ display: "inline-block" }}
        >
          {l}
        </motion.span>
      ))}
      <motion.span
        animate={hovered ? { width: 20, height: 20 } : { width: 8, height: 8 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="ml-1 bg-[var(--pnp-accent)] rounded-full inline-block"
      />
    </span>
  );
}

/* ── Theme toggle ── */
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--pnp-muted)] text-[var(--pnp-fg)] opacity-[var(--pnp-op-body)] hover:border-[var(--pnp-accent)] hover:opacity-100 transition-[opacity,border-color] duration-200"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
    >
      {mounted && (isDark ? <Sun size={14} /> : <Moon size={14} />)}
    </motion.button>
  );
}

/* ── Available badge ── */
function AvailableBadge({ onClick }: { onClick: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="flex items-center gap-2 border border-[var(--pnp-muted)] rounded-full px-3 py-1.5 text-[10px] text-[var(--pnp-fg)] opacity-[var(--pnp-op-body)] hover:border-[var(--pnp-accent)] hover:opacity-100 transition-[opacity,border-color] duration-200 overflow-hidden tracking-[0.15em] uppercase"
      aria-label="Available for work — click to contact"
    >
      <span className="pulse-dot" aria-hidden="true" />
      <AnimatePresence initial={false} mode="wait">
        {expanded ? (
          <motion.span
            key="full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap overflow-hidden"
          >
            Available for work
          </motion.span>
        ) : (
          <motion.span
            key="short"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            Available
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
