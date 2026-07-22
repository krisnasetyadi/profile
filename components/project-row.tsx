"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Lock } from "lucide-react";
import { AnimatedRowBorder } from "@/components/animated-row-border";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import type { Project } from "@/lib/projects";

export function ProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { safe } = useMotionSafe();
  const isConfidential = !!project.confidential;

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
            opacity: "var(--pnp-op-faint)",
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
            opacity: isOpen ? "var(--pnp-op-body)" : "var(--pnp-op-label)",
            transition: "opacity 0.2s",
          }}
        >
          {isConfidential ? (
            <span
              style={{
                border: "1px solid var(--pnp-muted)",
                borderRadius: 9999,
                padding: "2px 10px",
              }}
            >
              NDA
            </span>
          ) : (
            <>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </>
          )}
        </span>

        {/* Plus / minus toggle */}
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 24,
            height: 24,
            position: "relative",
            opacity: "var(--pnp-op-secondary)",
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
                  border: "1px solid var(--pnp-muted)",
                  ...(isConfidential
                    ? {
                        display: "flex",
                        flexDirection: "column" as const,
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        background: "var(--pnp-surface)",
                      }
                    : {}),
                }}
              >
                {isConfidential ? (
                  <>
                    <Lock
                      size={20}
                      style={{
                        color: "var(--pnp-fg)",
                        opacity: "var(--pnp-op-secondary)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--pnp-fg)",
                        opacity: "var(--pnp-op-secondary)",
                      }}
                    >
                      Under NDA
                    </span>
                  </>
                ) : (
                  <Image
                    src={project.image!}
                    alt={project.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                )}
              </div>

              {isConfidential ? (
                <span
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
                    opacity: "var(--pnp-op-label)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Details private
                </span>
              ) : (
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
                  opacity: "var(--pnp-op-secondary)",
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
