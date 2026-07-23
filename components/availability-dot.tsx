"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionSafe } from "@/hooks/use-motion-safe";

/**
 * AvailabilityDot — pulsing green circle indicating "currently active / now".
 * The ring scales out and fades via CSS keyframes.
 * Reduced-motion: plain static dot, no pulse.
 */
export function AvailabilityDot({ label = "Now" }: { label?: string }) {
  const { prefersReduced } = useMotionSafe();

  return (
    <span
      style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
      aria-label="Currently employed"
    >
      <span
        className={prefersReduced ? undefined : "pulse-dot"}
        style={
          prefersReduced
            ? {
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#22c55e",
              }
            : undefined
        }
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#22c55e",
          fontVariant: "small-caps",
        }}
      >
        {label}
      </span>
    </span>
  );
}
