"use client";

import { motion } from "framer-motion";
import { useMotionSafe } from "@/hooks/use-motion-safe";

const TECH_TAGS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "REST API",
  "AI Agents",
  "Figma",
  "GitHub Copilot",
];

const IMPACTS = [
  "Integrated AI agents into development workflows, leveraging GitHub Copilot and custom automation for efficient task completion and code quality.",
  "Built user-centered web applications with React.js and Next.js, prioritizing maintainable architecture over raw performance optimization.",
  "Developed secure RESTful APIs and database integrations, focusing on reliability and developer experience rather than micro-optimizations.",
];

export function ExperienceSection() {
  const { safe } = useMotionSafe();

  return (
    <section
      id="experience"
      itemScope
      itemType="https://schema.org/WorkHistory"
      style={{ padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px)" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Section label */}
        <motion.p
          initial={safe({ opacity: 0 })}
          whileInView={safe({ opacity: 1 })}
          viewport={{ once: true }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
            marginBottom: "clamp(48px, 6vw, 96px)",
          }}
        >
          03 — Experience
        </motion.p>

        {/* ── Split timeline grid ── */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-12 md:gap-0">
          {/* Gradient centre line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(180deg, var(--pnp-accent) 0%, transparent 100%)",
            }}
          />

          {/* LEFT — date + company */}
          <motion.div
            className="md:pr-16 flex flex-col items-start md:items-end text-left md:text-right"
            initial={safe({ opacity: 0, x: -24 })}
            whileInView={safe({ opacity: 1, x: 0 })}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="sticky top-32">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--pnp-accent)",
                  opacity: 0.8,
                  display: "block",
                  marginBottom: 12,
                }}
              >
                2022 — PRESENT
              </span>

              <h2
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(28px, 4vw, 56px)",
                  fontWeight: 800,
                  color: "var(--pnp-fg)",
                  lineHeight: 1.0,
                  marginBottom: 8,
                }}
                itemProp="worksFor"
              >
                MOONLAY
              </h2>

              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--pnp-fg)",
                  opacity: "var(--pnp-op-label)",
                }}
                itemProp="roleName"
              >
                Software Developer
              </p>

              {/* Availability dot */}
              <div className="flex items-center gap-2 mt-4 md:justify-end">
                <span className="pulse-dot" aria-hidden="true" />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#22c55e",
                  }}
                >
                  Now · 4+ Yrs
                </span>
              </div>
            </div>
          </motion.div>

          {/* CENTRE — glowing node */}
          <div className="hidden md:flex justify-center relative z-10 pt-2">
            <motion.div
              initial={safe({ scale: 0, opacity: 0 })}
              whileInView={safe({ scale: 1, opacity: 1 })}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
                delay: 0.2,
              }}
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor: "var(--pnp-accent)",
                boxShadow: "0 0 0 8px rgba(77,159,255,0.15)",
              }}
            />
          </div>

          {/* RIGHT — content card */}
          <motion.div
            className="md:pl-16"
            initial={safe({ opacity: 0, x: 24 })}
            whileInView={safe({ opacity: 1, x: 0 })}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            <div
              style={{
                background: "var(--pnp-surface)",
                border: "1px solid var(--pnp-muted)",
                padding: "clamp(24px, 3vw, 40px)",
              }}
            >
              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {TECH_TAGS.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      padding: "4px 12px",
                      borderRadius: 9999,
                      background: "rgba(77,159,255,0.08)",
                      border: "1px solid rgba(77,159,255,0.2)",
                      color: "var(--pnp-accent)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                itemProp="description"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 16px)",
                  lineHeight: 1.8,
                  color: "var(--pnp-fg)",
                  opacity: "var(--pnp-op-secondary)",
                  marginBottom: 32,
                }}
              >
                Building dynamic web applications using React.js, Next.js, and
                Node.js with AI assistance for each development task. Focus on
                clean, maintainable code and user-centered solutions rather than
                performance optimization. Collaborate closely with AI agents and
                product owners to deliver reliable applications that prioritize
                developer experience and business goals.
              </p>

              {/* Impact bullets */}
              <div
                style={{
                  borderTop: "1px solid var(--pnp-muted)",
                  paddingTop: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "var(--pnp-accent)",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  TECHNICAL_IMPACT
                </p>
                <ul className="space-y-3">
                  {IMPACTS.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        lineHeight: 1.7,
                        color: "var(--pnp-fg)",
                        opacity: "var(--pnp-op-secondary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--pnp-accent)",
                          opacity: 0.5,
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
