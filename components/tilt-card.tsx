"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import { useIsTouch } from "@/hooks/use-is-touch";

interface TiltCardProps {
  children: React.ReactNode;
  maxTilt?: number;
  perspective?: number;
  className?: string;
}

/**
 * TiltCard — 3D CSS perspective tilt driven by mousemove.
 * Gloss pseudo-element sweeps diagonally on hover (via CSS class).
 * Touch: tap triggers a single tilt-and-return spring animation.
 * Reduced-motion: no tilt, renders children flat.
 */
export function TiltCard({
  children,
  maxTilt = 12,
  perspective = 800,
  className,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const { prefersReduced } = useMotionSafe();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [gloss, setGloss] = useState({ x: 50, y: 50, opacity: 0 });
  const [mobileTap, setMobileTap] = useState(false);

  useEffect(() => {
    if (isTouch || prefersReduced) return;
    const el = ref.current;
    if (!el) return;

    function onMouseMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 … 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: y * maxTilt, y: -x * maxTilt });
      setGloss({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
        opacity: 0.12,
      });
    }

    function onMouseLeave() {
      setTilt({ x: 0, y: 0 });
      setGloss((g) => ({ ...g, opacity: 0 }));
    }

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isTouch, prefersReduced, maxTilt]);

  // Mobile tap tilt
  function handleTap() {
    if (!isTouch || prefersReduced) return;
    setMobileTap(true);
    setTimeout(() => setMobileTap(false), 600);
  }

  const tapTiltStyle = mobileTap
    ? { rotateX: -8, rotateY: 8 }
    : { rotateX: 0, rotateY: 0 };

  return (
    <motion.div
      ref={ref}
      onClick={handleTap}
      className={className}
      style={{
        perspective,
        transformStyle: "preserve-3d",
        position: "relative",
        display: "inline-block",
        cursor: "default",
      }}
      animate={
        prefersReduced
          ? {}
          : isTouch
            ? tapTiltStyle
            : { rotateX: tilt.x, rotateY: tilt.y }
      }
      transition={
        mobileTap
          ? { type: "spring", stiffness: 300, damping: 15 }
          : { type: "spring", stiffness: 200, damping: 20 }
      }
    >
      {children}

      {/* Gloss sweep */}
      {!isTouch && !prefersReduced && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: `radial-gradient(circle at ${gloss.x}% ${gloss.y}%, rgba(255,255,255,${gloss.opacity}), transparent 60%)`,
            pointerEvents: "none",
            transition: "opacity 0.2s",
          }}
        />
      )}
    </motion.div>
  );
}
