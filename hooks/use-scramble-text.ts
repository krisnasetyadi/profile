"use client";

import { useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

/**
 * Scrambles text char-by-char using random CHARS, resolves to real text
 * over `text.length * 3` iterations at 28ms interval.
 *
 * @param text     The final resolved string
 * @param trigger  Set to true to fire the scramble
 */
export function useScrambleText(text: string, trigger: boolean) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const totalIterations = text.length * 3;

    clearInterval(intervalRef.current!);

    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration / 3) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      iteration++;
      if (iteration > totalIterations) {
        clearInterval(intervalRef.current!);
        setDisplay(text);
      }
    }, 28);

    return () => clearInterval(intervalRef.current!);
  }, [trigger, text]);

  return display;
}
