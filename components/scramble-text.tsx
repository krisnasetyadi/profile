"use client";

import { useScrambleText } from "@/hooks/use-scramble-text";
import { useMotionSafe } from "@/hooks/use-motion-safe";

interface ScrambleTextProps {
  text: string;
  trigger: boolean;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
}

/**
 * Renders text that scrambles on trigger.
 * Passes through instantly when prefers-reduced-motion is set.
 */
export function ScrambleText({
  text,
  trigger,
  className,
  tag: Tag = "span",
}: ScrambleTextProps) {
  const { prefersReduced } = useMotionSafe();
  const display = useScrambleText(text, prefersReduced ? false : trigger);
  const shown = prefersReduced ? text : display;

  return (
    // @ts-expect-error dynamic tag
    <Tag className={className} aria-label={text}>
      {shown}
    </Tag>
  );
}
