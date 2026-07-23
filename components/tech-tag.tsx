"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface TechTagProps {
  label: string;
  delay?: number;
  inView?: boolean;
}

/**
 * TechTag — spring-entry pill that fills with accent on hover.
 * Appears one-by-one via staggered delay when `inView` is true.
 */
export function TechTag({ label, delay = 0, inView = false }: TechTagProps) {
  const [hovered, setHovered] = useState(false);
  const { safe } = useMotionSafe();

  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={safe({ opacity: 0, scale: 0.8 })}
      animate={inView ? safe({ opacity: 1, scale: 1 }) : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 18,
        delay,
      }}
      style={{
        display: "inline-block",
        padding: "5px 14px",
        borderRadius: 9999,
        border: `1px solid ${hovered ? "var(--pnp-accent)" : "var(--pnp-muted)"}`,
        backgroundColor: hovered ? "var(--pnp-accent)" : "transparent",
        color: hovered ? "#ffffff" : "var(--pnp-fg)",
        opacity: hovered ? 1 : 0.6,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(10px, 0.9vw, 12px)",
        letterSpacing: "0.1em",
        transition:
          "background-color 0.2s, color 0.2s, border-color 0.2s, opacity 0.2s",
        cursor: "default",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </motion.span>
  );
}
