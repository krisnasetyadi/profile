"use client";

import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useIsTouch } from "@/hooks/use-is-touch";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface AmbientCursorBgProps {
  /** Accent opacity at the orb center. Default 0.08 */
  opacity?: number;
  /** Orb diameter in px. Default 600 */
  size?: number;
  /** Lerp speed 0–1. Default 0.05 */
  lerp?: number;
}

/**
 * AmbientCursorBg — a large radial gradient orb that follows the cursor
 * with a slow lerp, creating a breathing ambient glow behind the hero.
 *
 * On mobile / reduced-motion: static centered orb, no JS tracking.
 */
export function AmbientCursorBg({
  opacity = 0.08,
  size = 600,
  lerp = 0.05,
}: AmbientCursorBgProps) {
  const isTouch = useIsTouch();
  const { prefersReduced } = useMotionSafe();
  const raw = useMousePosition();
  const orbEl = useRef<HTMLDivElement>(null);
  const current = useRef({ x: -1, y: -1 });

  useEffect(() => {
    if (isTouch || prefersReduced) return;

    // Initialise to center of window
    if (current.current.x === -1) {
      current.current = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
    }

    let rafId: number;

    function tick() {
      const tx = raw.x === -999 ? window.innerWidth / 2 : raw.x;
      const ty = raw.y === -999 ? window.innerHeight / 2 : raw.y;

      current.current = {
        x: current.current.x + (tx - current.current.x) * lerp,
        y: current.current.y + (ty - current.current.y) * lerp,
      };

      if (orbEl.current) {
        orbEl.current.style.transform = `translate(${current.current.x - size / 2}px, ${current.current.y - size / 2}px)`;
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [raw, isTouch, prefersReduced, lerp, size]);

  const staticStyle =
    isTouch || prefersReduced
      ? {
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }
      : {
          position: "absolute" as const,
          top: 0,
          left: 0,
          willChange: "transform" as const,
        };

  return (
    <div
      aria-hidden="true"
      ref={orbEl}
      style={{
        ...staticStyle,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, rgba(77,159,255,${opacity}) 0%, transparent 70%)`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
