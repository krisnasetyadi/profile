"use client";

import { useLenis } from "@/hooks/use-lenis";

/**
 * LenisProvider — mounts Lenis smooth scroll globally.
 * Renders no DOM output; just initialises the scroll engine.
 */
export function LenisProvider() {
  useLenis();
  return null;
}
