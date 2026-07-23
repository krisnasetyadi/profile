"use client";

import { useRef, useEffect, useState } from "react";
import { useIsTouch } from "@/hooks/use-is-touch";

interface MagneticButtonProps {
  children: React.ReactNode;
  radius?: number;
  strength?: number;
  className?: string;
}

/**
 * MagneticButton — wraps any child in a magnetic pull effect.
 * The element shifts toward the cursor within `radius` px.
 * Disabled on touch devices (falls back to normal tap).
 *
 * Usage:
 *   <MagneticButton>
 *     <button>Click me</button>
 *   </MagneticButton>
 */
export function MagneticButton({
  children,
  radius = 80,
  strength = 0.35,
  className,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isTouch) return;
    const el = ref.current;
    if (!el) return;

    function onMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        setOffset({ x: dx * strength, y: dy * strength });
      } else {
        setOffset({ x: 0, y: 0 });
      }
    }

    function onMouseLeave() {
      setOffset({ x: 0, y: 0 });
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isTouch, radius, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition:
          offset.x === 0 && offset.y === 0
            ? "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)"
            : "transform 0.1s linear",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
