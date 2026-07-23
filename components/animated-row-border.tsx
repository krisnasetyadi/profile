"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionSafe } from "@/hooks/use-motion-safe";

/**
 * AnimatedRowBorder — a 1px horizontal line that draws itself left-to-right
 * (scaleX: 0 → 1) when the row enters the viewport.
 */
export function AnimatedRowBorder() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { prefersReduced } = useMotionSafe();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <div
      ref={ref}
      style={{
        height: 1,
        backgroundColor: "var(--pnp-muted)",
        transformOrigin: "left",
        transform: visible ? "scaleX(1)" : "scaleX(0)",
        transition: visible
          ? "transform 0.8s cubic-bezier(0.76,0,0.24,1)"
          : "none",
        willChange: "transform",
      }}
    />
  );
}
