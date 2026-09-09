"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, Clock, FileText, ArrowUpRight } from "lucide-react";
import { AnimatedRowBorder } from "@/components/animated-row-border";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import { projectSlug, type Project } from "@/lib/projects";

const specActionStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 10,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--pnp-fg)",
  opacity: "var(--pnp-op-secondary)",
  padding: "12px 8px",
  textDecoration: "none",
  transition: "opacity 0.2s",
  whiteSpace: "nowrap",
  cursor: "none",
};

function SpecRow({
  label,
  grow,
  children,
}: {
  label: string;
  grow?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid var(--pnp-muted)",
        flex: grow ? 1 : undefined,
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9,
          fontWeight: 500,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--pnp-fg)",
          opacity: "var(--pnp-op-label)",
          marginBottom: 6,
        }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

function SpecValue({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "block",
        fontFamily: "Syne, sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--pnp-fg)",
      }}
    >
      {children}
    </span>
  );
}

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
  const hasImage = !!project.image;

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
              className="flex flex-col sm:flex-row sm:items-stretch"
              style={{
                paddingBottom: "clamp(24px, 3vw, 40px)",
                gap: "clamp(16px, 3vw, 32px)",
              }}
            >
              <div
                className="w-full sm:flex-1"
                style={{
                  position: "relative",
                  height: "clamp(160px, 25vw, 380px)",
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid var(--pnp-muted)",
                  ...(!hasImage
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
                ) : hasImage ? (
                  <Image
                    src={project.image!}
                    alt={project.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                ) : (
                  <>
                    <Clock
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
                      In Progress
                    </span>
                  </>
                )}
              </div>

              {/* Info panel — spec-sheet card: labeled rows separated by dividers */}
              <div
                className="w-full sm:w-[clamp(240px,28vw,340px)] sm:min-h-[clamp(160px,25vw,380px)] sm:flex-shrink-0"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid var(--pnp-muted)",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                {project.role && (
                  <SpecRow label="Role">
                    <SpecValue>{project.role}</SpecValue>
                  </SpecRow>
                )}

                {project.description && (
                  <SpecRow label="About" grow>
                    <p
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: 13,
                        lineHeight: 1.55,
                        color: "var(--pnp-fg)",
                        opacity: "var(--pnp-op-body)",
                        margin: 0,
                      }}
                    >
                      {project.description}
                    </p>

                    {project.tags && project.tags.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                          marginTop: 12,
                        }}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 9,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "var(--pnp-fg)",
                              opacity: "var(--pnp-op-secondary)",
                              border: "1px solid var(--pnp-muted)",
                              borderRadius: 9999,
                              padding: "3px 10px",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </SpecRow>
                )}

                {/* Footer actions — split evenly, divided by a vertical rule */}
                <div
                  style={{
                    display: "flex",
                    borderTop: "1px solid var(--pnp-muted)",
                    marginTop: "auto",
                  }}
                >
                  <Link
                    href={`/work/${projectSlug(project)}`}
                    aria-label={`View detail for ${project.name}`}
                    data-cursor="view"
                    style={specActionStyle}
                    className="hover:opacity-100"
                  >
                    <FileText size={12} aria-hidden="true" />
                    Detail
                  </Link>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.name} — opens in new tab`}
                      data-cursor="view"
                      style={{
                        ...specActionStyle,
                        borderLeft: "1px solid var(--pnp-muted)",
                      }}
                      className="hover:opacity-100"
                    >
                      <ArrowUpRight size={12} aria-hidden="true" />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
