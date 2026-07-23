"use client";

import { useEffect, useRef, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks raw mouse position globally.
 * Returns { x, y } in px relative to the viewport.
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: -999, y: -999 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return pos;
}

/**
 * Returns a lerped (smoothed) mouse position via requestAnimationFrame.
 * @param factor  lerp factor 0–1 (lower = smoother, default 0.12)
 */
export function useLerpedMousePosition(factor = 0.12): MousePosition {
  const raw = useMousePosition();
  const [lerped, setLerped] = useState<MousePosition>({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);
  const current = useRef<MousePosition>({ x: -999, y: -999 });

  useEffect(() => {
    function tick() {
      current.current = {
        x: current.current.x + (raw.x - current.current.x) * factor,
        y: current.current.y + (raw.y - current.current.y) * factor,
      };
      setLerped({ ...current.current });
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [raw, factor]);

  return lerped;
}
