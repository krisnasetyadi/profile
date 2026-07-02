"use client";

import { motion, AnimatePresence, type Transition } from "framer-motion";
import { useEffect, useState } from "react";
import { useMotionSafe } from "@/hooks/use-motion-safe";

/**
 * PageTransition — cinematic curtain lift on first load.
 * Full-viewport #0a0a0a overlay slides up with Awwwards easing.
 * Reduced-motion: fades out instead of sliding.
 */
export function PageTransition() {
  const [visible, setVisible] = useState(true);
  const { prefersReduced } = useMotionSafe();

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(id);
  }, []);

  const reducedExit: { opacity: number; transition: Transition } = {
    opacity: 0,
    transition: { duration: 0.2 },
  };

  const fullExit: { y: string; transition: Transition } = {
    y: "-100%",
    transition: {
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
    },
  };

  const exitVariant = prefersReduced ? reducedExit : fullExit;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="curtain"
          aria-hidden="true"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] pointer-events-none"
          initial={prefersReduced ? { opacity: 1 } : { y: "0%" }}
          exit={exitVariant}
        />
      )}
    </AnimatePresence>
  );
}
