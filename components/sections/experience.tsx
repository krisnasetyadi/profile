"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMotionSafe } from "@/hooks/use-motion-safe";

const TECH_TAGS = ["React", "Angular", "TypeScript", "Next.js", "C#", "REST API"];

const IMPACTS = [
  "Contributed to 7 client projects, delivering 19 frontend applications built with React and Angular.",
  "Designed and implemented a shared frontend boilerplate that streamlined development workflows and improved UI consistency across projects.",
  "Delivered high-quality frontend UI despite backend constraints, keeping project delivery on track.",
  "Participated in frontend-focused code reviews on ongoing projects across multiple repositories.",
  "Onboarded and mentored intern batches, guiding them through building frontend projects.",
];

const PRIOR_RESPONSIBILITIES = [
  "Led 46 employees — 3 team leads, 4 inline supervisors, 2 maintenance operators, and 37 production operators.",
  "Reported directly to the deputy head of department / head of division.",
  "Reduced production time while improving product quality.",
  "Prepared and managed safety training and operation training for new equipment.",
  "Maintained production quality to minimize defects.",
  "Trained operators on machine operation and quality control procedures.",
  "Handled salary distribution for team members.",
];

export function ExperienceSection() {
  const { safe } = useMotionSafe();
  const [showPrior, setShowPrior] = useState(false);

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

              {/* Before Tech — collapsible trigger */}
              <button
                type="button"
                onClick={() => setShowPrior((v) => !v)}
                className="mt-6"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--pnp-fg)",
                  opacity: showPrior ? 1 : "var(--pnp-op-label)",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                aria-expanded={showPrior}
              >
                {showPrior ? "← hide" : "→"} Before tech: production supervisor
              </button>
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
                Developing and maintaining frontend applications with React,
                TypeScript, and Next.js — from bug fixes to new features
                across ongoing client projects. Collaborate closely with
                Product Owners, UI/UX designers, and backend engineers on
                REST API integration, with occasional backend work in C#.
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

        {/* ── Before Tech — collapsible panel ── */}
        <AnimatePresence initial={false}>
          {showPrior && (
            <motion.div
              key="prior-experience"
              initial={safe({ height: 0, opacity: 0 })}
              animate={safe({ height: "auto", opacity: 1 })}
              exit={safe({ height: 0, opacity: 0 })}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  marginTop: "clamp(32px, 4vw, 48px)",
                  paddingTop: "clamp(24px, 3vw, 32px)",
                  borderTop: "1px solid var(--pnp-muted)",
                }}
                itemScope
                itemType="https://schema.org/OrganizationRole"
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--pnp-fg)",
                    opacity: "var(--pnp-op-label)",
                    marginBottom: 24,
                  }}
                >
                  Before Tech
                </p>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontSize: "clamp(18px, 2vw, 24px)",
                      fontWeight: 700,
                      color: "var(--pnp-fg)",
                      opacity: "var(--pnp-op-body)",
                    }}
                    itemProp="roleName"
                  >
                    Production Supervisor ·{" "}
                    <span itemProp="worksFor">PT Kahatex</span>
                  </h3>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--pnp-fg)",
                      opacity: "var(--pnp-op-label)",
                      flexShrink: 0,
                    }}
                  >
                    May 2019 — Feb 2022
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "clamp(13px, 1.2vw, 15px)",
                    lineHeight: 1.75,
                    color: "var(--pnp-fg)",
                    opacity: "var(--pnp-op-secondary)",
                    marginBottom: 20,
                    maxWidth: 720,
                  }}
                  itemProp="description"
                >
                  PT Kahatex is a garment manufacturer with an
                  international-scale market. Supervised production
                  operations and led a large floor team before transitioning
                  into software development.
                </p>

                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                  {PRIOR_RESPONSIBILITIES.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        lineHeight: 1.6,
                        color: "var(--pnp-fg)",
                        opacity: "var(--pnp-op-label)",
                      }}
                    >
                      <span style={{ flexShrink: 0 }} aria-hidden="true">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
