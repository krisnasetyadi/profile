"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import type { Project } from "@/lib/projects";

export function WorkCatalogGrid({ projects }: { projects: Project[] }) {
  return (
    <div
      className="grid sm:grid-cols-2 gap-x-8 gap-y-14"
      itemScope
      itemType="https://schema.org/CreativeWork"
      role="list"
    >
      {projects.map((project, i) => (
        <CatalogCard key={project.name} project={project} delay={i * 0.06} />
      ))}
    </div>
  );
}

function CatalogCard({ project, delay }: { project: Project; delay: number }) {
  const { safe } = useMotionSafe();
  const isConfidential = !!project.confidential;

  const thumbnail = isConfidential ? (
    <div
      style={{
        position: "relative",
        aspectRatio: "4 / 3",
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid var(--pnp-muted)",
        background: "var(--pnp-surface)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--pnp-muted) 0, var(--pnp-muted) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <Lock
        size={20}
        style={{
          color: "var(--pnp-fg)",
          opacity: "var(--pnp-op-secondary)",
          position: "relative",
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
          position: "relative",
        }}
      >
        Under NDA
      </span>
    </div>
  ) : (
    <TiltCard className="block w-full" maxTilt={8} perspective={1000}>
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 3",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid var(--pnp-muted)",
          background: "var(--pnp-surface)",
        }}
      >
        <Image
          src={project.image!}
          alt={project.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </TiltCard>
  );

  const caption = (
    <div className="flex items-baseline justify-between gap-4 mt-4">
      <span className="flex items-baseline gap-3">
        <span
          aria-hidden="true"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-faint)",
          }}
        >
          {project.index}
        </span>
        <span
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(18px, 2.2vw, 28px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--pnp-fg)",
          }}
        >
          {project.name}
        </span>
      </span>

      {isConfidential ? (
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
            flexShrink: 0,
            whiteSpace: "nowrap",
            border: "1px solid var(--pnp-muted)",
            borderRadius: 9999,
            padding: "3px 10px",
          }}
        >
          NDA
        </span>
      ) : (
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
        >
          {project.category} · {project.year}
        </span>
      )}
    </div>
  );

  const note = project.note && (
    <p
      style={{
        fontFamily: "'Geist', sans-serif",
        fontSize: 13,
        lineHeight: 1.6,
        color: "var(--pnp-fg)",
        opacity: "var(--pnp-op-secondary)",
        marginTop: 6,
      }}
    >
      {project.note}
    </p>
  );

  const motionProps = {
    role: "listitem" as const,
    itemProp: "workExample",
    initial: safe({ opacity: 0, y: 24 }),
    whileInView: safe({ opacity: 1, y: 0 }),
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const, delay },
  };

  if (isConfidential) {
    return (
      <motion.div
        aria-label={`${project.name} — details confidential under NDA`}
        style={{ display: "block" }}
        {...motionProps}
      >
        {thumbnail}
        {caption}
        {note}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} — opens in new tab`}
      data-cursor="view"
      style={{ textDecoration: "none", display: "block", cursor: "none" }}
      {...motionProps}
    >
      {thumbnail}
      {caption}
      {note}
    </motion.a>
  );
}
