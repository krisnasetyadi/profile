"use client";

import { useMotionSafe } from "@/hooks/use-motion-safe";

const ITEMS = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "TAILWIND",
  "JAKARTA",
  "CLEAN CODE",
  "UI/UX",
  "OPEN SOURCE",
  "COFFEE ☕",
];

// Duplicate for seamless loop
const TRACK = [...ITEMS, ...ITEMS];

interface MarqueeTickerProps {
  direction?: "right" | "left";
  speed?: number; // seconds for one full cycle
}

/**
 * MarqueeTicker — infinite horizontal marquee.
 * direction="right" → runs right (normal), direction="left" → runs left (reverse).
 * On hover: reverses direction — pure Jhey.
 * Reduced-motion: static row, no animation.
 */
export function MarqueeTicker({
  direction = "right",
  speed = 28,
}: MarqueeTickerProps) {
  const { prefersReduced } = useMotionSafe();

  const animClass =
    direction === "right"
      ? "marquee-track marquee-track--right"
      : "marquee-track marquee-track--left";

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        borderTop: "1px solid var(--pnp-muted)",
        borderBottom: "1px solid var(--pnp-muted)",
        padding: "14px 0",
      }}
      aria-hidden="true"
    >
      {prefersReduced ? (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
            fontFamily: "Syne, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            color: "var(--pnp-fg)",
            opacity: 0.4,
          }}
        >
          {ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : (
        <div className={animClass} style={{ animationDuration: `${speed}s` }}>
          {TRACK.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(11px, 1vw, 13px)",
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "var(--pnp-fg)",
                opacity: 0.38,
                marginRight: "3rem",
                flexShrink: 0,
              }}
            >
              {item}
              <span style={{ marginLeft: "3rem", opacity: 0.3 }}>·</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
