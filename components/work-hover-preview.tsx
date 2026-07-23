"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import { useIsTouch } from "@/hooks/use-is-touch";

interface WorkHoverPreviewProps {
  src: StaticImageData | string;
  alt: string;
  active: boolean;
}

/**
 * WorkHoverPreview — fixed 512×384 preview image that appears on project
 * row hover. Tracks cursor Y position for vertical drift.
 * Wipes in left-to-right via clip-path in 300ms, wipes out in 200ms.
 * On mobile: not rendered (tap-to-expand handled in row directly).
 */
export function WorkHoverPreview({ src, alt, active }: WorkHoverPreviewProps) {
  const isTouch = useIsTouch();
  const { prefersReduced } = useMotionSafe();
  const [cursorY, setCursorY] = useState(0);
  const rafRef = useRef<number>(0);
  const targetY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    if (isTouch || prefersReduced) return;

    function onMouseMove(e: MouseEvent) {
      targetY.current = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function tick() {
      currentY.current += (targetY.current - currentY.current) * 0.1;
      setCursorY(currentY.current);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouch, prefersReduced]);

  if (isTouch || prefersReduced) return null;

  // Fixed X position — always right-center of viewport
  const previewW = 512;
  const previewH = 384;
  const fixedX = typeof window !== "undefined" ? window.innerWidth * 0.62 : 800;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: previewW,
        height: previewH,
        transform: `translate(${fixedX}px, ${cursorY - previewH / 2}px)`,
        pointerEvents: "none",
        zIndex: 9990,
        clipPath: active ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transition: active
          ? "clip-path 0.3s cubic-bezier(0.76,0,0.24,1)"
          : "clip-path 0.2s cubic-bezier(0.76,0,0.24,1)",
        willChange: "transform, clip-path",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="512px" />
    </div>
  );
}
