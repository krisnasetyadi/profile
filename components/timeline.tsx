"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface TimelineProps {
  /** Height of the container the line should fill */
  children: React.ReactNode;
}

/**
 * Timeline — renders a left-side vertical draw-in line.
 * The line grows scaleY 0→1 via IntersectionObserver thresholds.
 * Children are offset left to sit beside the line.
 */
export function Timeline({ children }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const { prefersReduced } = useMotionSafe();

  useEffect(() => {
    const line = lineRef.current;
    const container = containerRef.current;
    if (!line || !container || prefersReduced) {
      if (line) line.style.transform = "scaleY(1)";
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          line.style.transform = `scaleY(${Math.min(ratio * 1.6, 1)})`;
        });
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20),
      },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <div ref={containerRef} style={{ position: "relative", paddingLeft: 32 }}>
      {/* Vertical line */}
      <div
        ref={lineRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          backgroundColor: "var(--pnp-accent)",
          transformOrigin: "top",
          transform: "scaleY(0)",
          transition: "transform 0.4s ease-out",
          willChange: "transform",
        }}
      />
      {children}
    </div>
  );
}
