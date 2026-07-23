"use client";

import type { TargetAndTransition } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type StripTransforms<T> = Omit<
  T,
  | "x"
  | "y"
  | "scale"
  | "rotate"
  | "skew"
  | "skewX"
  | "skewY"
  | "rotateX"
  | "rotateY"
  | "rotateZ"
  | "scaleX"
  | "scaleY"
>;

/**
 * Returns safe animation variants/targets based on prefers-reduced-motion.
 *
 * Usage (flat target):
 *   const { safe } = useMotionSafe();
 *   <motion.div initial={safe({ opacity: 0, y: 20 })} animate={safe({ opacity: 1, y: 0 })} />
 *
 * Usage (variant map):
 *   <motion.div variants={safe({ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } })} />
 *
 * When reduce is set, all transform properties are stripped — only opacity remains.
 */
export function useMotionSafe() {
  const prefersReduced = useReducedMotion();

  // Overload 1: flat TargetAndTransition
  function safe(target: TargetAndTransition): TargetAndTransition;
  // Overload 2: variant map
  function safe<T extends Record<string, Record<string, unknown>>>(
    variants: T,
  ): T;
  // Implementation
  function safe(
    input: TargetAndTransition | Record<string, Record<string, unknown>>,
  ): unknown {
    if (!prefersReduced) return input;

    // Detect if it's a flat target (values are primitives) or a variant map (values are objects)
    const values = Object.values(input);
    const isFlat =
      values.length === 0 ||
      values.some(
        (v) => typeof v !== "object" || v === null || Array.isArray(v),
      );

    if (isFlat) {
      // Flat target: strip transform props
      const {
        x: _x,
        y: _y,
        scale: _s,
        rotate: _r,
        skew: _sk,
        skewX: _sx,
        skewY: _sy,
        rotateX: _rx,
        rotateY: _ry,
        rotateZ: _rz,
        scaleX: _scx,
        scaleY: _scy,
        ...rest
      } = input as Record<string, unknown>;
      return rest as TargetAndTransition;
    }

    // Variant map: strip per-key
    const reduced: Record<string, unknown> = {};
    for (const key in input) {
      const {
        x: _x,
        y: _y,
        scale: _s,
        rotate: _r,
        skew: _sk,
        skewX: _sx,
        skewY: _sy,
        rotateX: _rx,
        rotateY: _ry,
        rotateZ: _rz,
        scaleX: _scx,
        scaleY: _scy,
        ...rest
      } = (input as Record<string, Record<string, unknown>>)[key];
      reduced[key] = rest;
    }
    return reduced;
  }

  return { prefersReduced, safe };
}
