"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";
import Cashnomy from "../../public/images/cashnomy.png";
import Vovelia from "../../public/images/vovelia-preview.png";
import { AnimatedRowBorder } from "@/components/animated-row-border";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import Image from "next/image";

const PROJECTS = [
  {
    index: "01",
    name: "VOVELIA",
    category: "Digital Invitation",
    year: "2026",
    url: "https://vovelia.vercel.app/",
    image: Vovelia,
    alt: "Vovelia — Digital Wedding Invitation Platform",
  },
  {
    index: "02",
    name: "CASHNOMY",
    category: "Finance App",
    year: "2026",
    url: "https://cashnomy.vercel.app",
    image: Cashnomy,
    alt: "Cashnomy — Personal Finance Dashboard",
  },
  {
    index: "03",
    name: "ANGULAR GRID",
    category: "Dev Tool",
    year: "2023",
    url: "https://angular-grid-ivory.vercel.app/",
    image: AngularGridImage,
    alt: "Angular Grid — Spreadsheet App",
  },
  {
    index: "04",
    name: "LAW FIRM",
    category: "Corporate Site",
    year: "2025",
    url: "https://paulusshpartners.com/",
    image: LawFirmImage,
    alt: "Law Firm — Corporate Website",
  },
];

function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: (typeof PROJECTS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { safe } = useMotionSafe();

  return (
    <div>
      <AnimatedRowBorder />
      <motion.button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`project-panel-${project.index}`}
        className="group flex items-center gap-4 md:gap-8 w-full text-left"
        style={{
          padding: "clamp(16px, 2.5vw, 28px) 0",
          background: "none",
          border: "none",
          cursor: "none",
          position: "relative",
        }}
        initial={safe({ opacity: 0, y: 24 })}
        whileInView={safe({ opacity: 1, y: 0 })}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Index */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(11px, 1vw, 14px)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--pnp-fg)",
            opacity: 0.12,
            minWidth: 28,
            flexShrink: 0,
          }}
        >
          {project.index}
        </span>

        {/* Name */}
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(16px, 2vw, 32px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: isOpen ? "var(--pnp-accent)" : "var(--pnp-fg)",
            transition: "color 0.2s",
            flex: 1,
          }}
        >
          {project.name}
        </span>

        {/* Meta */}
        <span
          className="hidden md:flex items-center gap-8 flex-shrink-0"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(11px, 1vw, 13px)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: isOpen ? 0.7 : 0.35,
            transition: "opacity 0.2s",
          }}
        >
          <span>{project.category}</span>
          <span>{project.year}</span>
        </span>

        {/* Plus / minus toggle */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            position: "relative",
            opacity: 0.5,
            transition: "opacity 0.2s",
          }}
          className="group-hover:opacity-100"
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: "100%",
              height: 1.5,
              background: "var(--pnp-fg)",
              transform: "translateY(-50%)",
            }}
          />
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              width: 1.5,
              height: "100%",
              background: "var(--pnp-fg)",
              transform: "translateX(-50%)",
              transformOrigin: "center",
              display: "block",
            }}
          />
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`project-panel-${project.index}`}
            role="region"
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingBottom: "clamp(24px, 3vw, 40px)",
                display: "flex",
                alignItems: "flex-end",
                gap: "clamp(16px, 3vw, 40px)",
              }}
            >
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  height: "clamp(160px, 25vw, 380px)",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} — opens in new tab`}
                data-cursor="view"
                style={{
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--pnp-fg)",
                  opacity: 0.5,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  whiteSpace: "nowrap",
                  cursor: "none",
                }}
                className="hover:opacity-100"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 15L15 5M15 5H7M15 5V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WorkSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  function handleToggle(name: string) {
    setOpenProject((prev) => (prev === name ? null : name));
  }

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <motion.div
          className="flex items-baseline gap-6 mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2
            id="work-heading"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--pnp-fg)",
              opacity: 0.35,
            }}
          >
            01 — Work
          </h2>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--pnp-accent)",
              opacity: 0.5,
              letterSpacing: "0.15em",
            }}
          >
            ({String(PROJECTS.length).padStart(2, "0")})
          </span>
        </motion.div>

        <div itemScope itemType="https://schema.org/CreativeWork" role="list">
          {PROJECTS.sort((a, b) => b.year.localeCompare(a.year)).map(
            (project) => (
              <div key={project.name} role="listitem" itemProp="workExample">
                <ProjectRow
                  project={project}
                  isOpen={openProject === project.name}
                  onToggle={() => handleToggle(project.name)}
                />
              </div>
            ),
          )}
        </div>

        <AnimatedRowBorder />
      </div>
    </section>
  );
}
