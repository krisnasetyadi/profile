"use client";

import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import { useIsTouch } from "@/hooks/use-is-touch";

type CursorState = "default" | "link" | "button" | "view";

/**
 * CustomCursor — dot + trailing ring cursor system.
 *
 * States:
 *  default  → 8px accent dot  + 32px ghost ring (200ms lerp)
 *  link     → dot hidden       + 64px filled accent ring ("eat" effect)
 *  button   → crosshair shape  + 40px ring
 *  view     → "VIEW →" label   + no ring (used on project rows)
 *
 * Hidden entirely on touch devices and when prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const isTouch = useIsTouch();
  const { prefersReduced } = useMotionSafe();

  const raw = useMousePosition();
  const ringPos = useRef({ x: -999, y: -999 });
  const ringEl = useRef<HTMLDivElement>(null);
  const dotEl = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  // Lerp ring toward raw cursor via RAF
  useEffect(() => {
    if (isTouch || prefersReduced) return;

    let rafId: number;

    function tick() {
      ringPos.current = {
        x: ringPos.current.x + (raw.x - ringPos.current.x) * 0.12,
        y: ringPos.current.y + (raw.y - ringPos.current.y) * 0.12,
      };
      if (ringEl.current) {
        ringEl.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      if (dotEl.current) {
        dotEl.current.style.transform = `translate(${raw.x}px, ${raw.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [raw, isTouch, prefersReduced]);

  // Show on first move, hide on leave
  useEffect(() => {
    if (isTouch || prefersReduced) return;
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    if (raw.x !== -999) setVisible(true);
    return () => {
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, [isTouch, prefersReduced, raw.x]);

  // Track hovered element type
  useEffect(() => {
    if (isTouch || prefersReduced) return;

    function update(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor='view']")) {
        setState("view");
      } else if (el.closest("a")) {
        setState("link");
      } else if (el.closest("button")) {
        setState("button");
      } else {
        setState("default");
      }
    }
    window.addEventListener("mouseover", update, { passive: true });
    return () => window.removeEventListener("mouseover", update);
  }, [isTouch, prefersReduced]);

  if (isTouch || prefersReduced) return null;

  const dotHidden = state === "link" || state === "view";

  const ringSize =
    state === "link" ? 64 : state === "button" ? 40 : state === "view" ? 0 : 32;

  const ringFilled = state === "link";
  const isCrosshair = state === "button";

  return (
    <>
      {/* Dot */}
      <div
        ref={dotEl}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "var(--pnp-accent)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible && !dotHidden ? 1 : 0,
          transition: "opacity 0.2s, width 0.2s, height 0.2s",
          willChange: "transform",
        }}
      />

      {/* Ring */}
      {state !== "view" && (
        <div
          ref={ringEl}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: ringSize,
            height: ringSize,
            borderRadius: "50%",
            border: ringFilled ? "none" : "1.5px solid var(--pnp-accent)",
            backgroundColor: ringFilled ? "var(--pnp-accent)" : "transparent",
            pointerEvents: "none",
            zIndex: 99998,
            opacity: visible ? (isCrosshair ? 0.6 : 0.5) : 0,
            transition:
              "opacity 0.2s, width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), background-color 0.2s, border 0.2s",
            willChange: "transform",
          }}
        />
      )}

      {/* VIEW → label */}
      {state === "view" && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            transform: `translate(${raw.x}px, ${raw.y}px) translate(12px, -50%)`,
            color: "var(--pnp-accent)",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            pointerEvents: "none",
            zIndex: 99999,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.15s",
            fontFamily: "Syne, sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          VIEW →
        </div>
      )}

      {/* Crosshair lines for button state */}
      {isCrosshair && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            transform: `translate(${raw.x}px, ${raw.y}px) translate(-50%, -50%)`,
            width: 20,
            height: 20,
            pointerEvents: "none",
            zIndex: 99999,
            opacity: visible ? 0.8 : 0,
            transition: "opacity 0.15s",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              backgroundColor: "var(--pnp-accent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: "var(--pnp-accent)",
            }}
          />
        </div>
      )}
    </>
  );
}
