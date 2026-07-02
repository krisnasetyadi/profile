"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useIsTouch } from "@/hooks/use-is-touch";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface BlobPhotoProps {
  src: string;
  alt: string;
  size?: number;
}

// Two keyframe shapes — CSS will morph between them
const BLOB_A =
  "polygon(50% 0%, 85% 10%, 100% 40%, 90% 75%, 60% 100%, 30% 95%, 5% 70%, 0% 35%, 20% 8%)";
const BLOB_B =
  "polygon(45% 0%, 90% 15%, 98% 50%, 80% 85%, 55% 100%, 20% 92%, 2% 60%, 10% 25%, 30% 4%)";

/**
 * BlobPhoto — headshot inside a morphing organic clip-path.
 * - Continuously breathes via CSS @keyframes
 * - On mousemove near image: distorts toward cursor (desktop only)
 * - Reduced-motion: frozen on BLOB_A
 */
export function BlobPhoto({ src, alt, size = 340 }: BlobPhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const { prefersReduced } = useMotionSafe();
  const [clipPath, setClipPath] = useState(BLOB_A);

  useEffect(() => {
    if (isTouch || prefersReduced) return;

    function onMouseMove(e: MouseEvent) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5 … 0.5
      const dy = (e.clientY - cy) / rect.height;

      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 0.8) {
        setClipPath(""); // let CSS animation take over
        return;
      }

      // Squish the blob toward the cursor
      const ox = dx * 12;
      const oy = dy * 12;
      setClipPath(
        `polygon(
          ${50 + ox}% ${0 + oy}%,
          ${85 + ox}% ${10 - oy}%,
          ${100 + ox}% ${40 + oy}%,
          ${90 - ox}% ${75 + oy}%,
          ${60 - ox}% ${100 - oy}%,
          ${30 - ox}% ${95 - oy}%,
          ${5 - ox}% ${70 - oy}%,
          ${0 + ox}% ${35 - oy}%,
          ${20 + ox}% ${8 + oy}%
        )`,
      );
    }

    function onMouseLeave() {
      setClipPath("");
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isTouch, prefersReduced]);

  const animationStyle = prefersReduced
    ? { clipPath: BLOB_A }
    : clipPath
      ? { clipPath, transition: "clip-path 0.15s ease-out" }
      : { animation: "blob-breathe 8s ease-in-out infinite" };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: size,
        height: size,
        flexShrink: 0,
      }}
    >
      {/* Orbit ring */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -24,
          borderRadius: "50%",
          border: "1px dashed rgba(200,255,0,0.25)",
          animation: prefersReduced ? "none" : "orbit-spin 12s linear infinite",
          pointerEvents: "none",
        }}
      />

      {/* Image with blob clip */}
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          ...animationStyle,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes={`${size}px`}
        />
      </div>
    </div>
  );
}
