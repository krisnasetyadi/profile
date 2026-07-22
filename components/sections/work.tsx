"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { getFeaturedProjects, PROJECTS } from "@/lib/projects";

const featuredProjects = getFeaturedProjects();

export function WorkSection() {
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
              opacity: "var(--pnp-op-label)",
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
            ({String(featuredProjects.length).padStart(2, "0")})
          </span>
        </motion.div>

        <ProjectList projects={featuredProjects} />

        {PROJECTS.length > featuredProjects.length && (
          <div className="flex justify-end" style={{ marginTop: 24 }}>
            <Link
              href="/work"
              data-cursor="view"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--pnp-fg)",
                opacity: "var(--pnp-op-secondary)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              className="hover:opacity-100"
            >
              View all work →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
