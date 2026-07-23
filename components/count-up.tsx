"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/use-count-up";
import { useScrambleText } from "@/hooks/use-scramble-text";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface StatItemProps {
  value: string;
  label: string;
  numeric?: number; // if set, count-up animation runs
  typewriter?: boolean; // if set, types letter by letter
}

function StatItem({ value, label, numeric, typewriter }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { prefersReduced } = useMotionSafe();

  const count = useCountUp(
    numeric ?? 0,
    1400,
    inView && !prefersReduced && !!numeric,
  );
  const scrambled = useScrambleText(value, hovered && !prefersReduced);

  // Typewriter state for "Jakarta"
  const [typed, setTyped] = useState(typewriter ? "" : value);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Typewriter effect for Jakarta
  useEffect(() => {
    if (!typewriter || !inView || prefersReduced) {
      if (typewriter) setTyped(value);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(value.slice(0, i));
      if (i >= value.length) {
        clearInterval(id);
        setBlink(true);
        setTimeout(() => setBlink(false), 1200);
      }
    }, 80);
    return () => clearInterval(id);
  }, [inView, typewriter, value, prefersReduced]);

  const displayValue = typewriter
    ? typed
    : numeric && inView && !prefersReduced
      ? `${count}+`
      : hovered && !prefersReduced
        ? scrambled
        : value;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textAlign: "center", userSelect: "none", minWidth: 0 }}
    >
      <div
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(12px, 3.5vw, 72px)",
          fontWeight: 800,
          lineHeight: 1,
          color: "var(--pnp-fg)",
          letterSpacing: "-0.02em",
          display: "inline-block",
        }}
        aria-label={value}
      >
        {displayValue}
        {blink && (
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "0.85em",
              backgroundColor: "var(--pnp-accent)",
              marginLeft: 3,
              verticalAlign: "middle",
              animation: "blink 1s step-end 3",
            }}
            aria-hidden="true"
          />
        )}
      </div>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(10px, 1vw, 12px)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--pnp-fg)",
          opacity: "var(--pnp-op-label)",
          marginTop: 8,
        }}
      >
        {label}
      </p>
    </div>
  );
}

/**
 * CountUp — renders three stats in a row with count-up / typewriter animations.
 */
export function CountUp() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "clamp(4px, 4vw, 64px)",
        padding: "clamp(24px, 4vw, 56px) 0",
        borderTop: "1px solid var(--pnp-muted)",
        borderBottom: "1px solid var(--pnp-muted)",
      }}
    >
      <StatItem value="4+" label="Years" numeric={4} />
      <StatItem value="10+" label="Projects" numeric={10} />
      <StatItem value="Jakarta" label="Based In" typewriter />
    </div>
  );
}
