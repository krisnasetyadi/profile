"use client";

import { useState, useEffect, useRef } from "react";

const useAnimatedCounter = (
  targetValues: { [key: string]: number },
  threshold = 0.1
) => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number>(0);
  const hasAnimatedRef = useRef(false);
  const targetValuesRef = useRef(targetValues);

  useEffect(() => {
    targetValuesRef.current = targetValues;
    hasAnimatedRef.current = false;

    const initialCounts = Object.fromEntries(
      Object.keys(targetValues).map((key) => [key, 0])
    );
    setCounts(initialCounts);
  }, [targetValues]);

  const startAnimation = () => {
    if (Object.keys(targetValuesRef.current).length === 0) {
      console.log("No target values, skipping animation");
      return;
    }

    if (hasAnimatedRef.current) {
      console.log("Already animated, skipping");
      return;
    }

    hasAnimatedRef.current = true;
    const startTime = Date.now();
    const duration = 2000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const newCounts: Record<string, number> = {};

      Object.entries(targetValuesRef.current).forEach(([key, target]) => {
        const current = Math.floor(target * easeOutQuart);
        newCounts[key] = current;
      });

      setCounts(newCounts);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        console.log("Animation completed!");
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (Object.keys(targetValues).length === 0) {
      console.log("Waiting for target values...");
      return;
    }

    console.log("Setting up intersection observer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          console.log("Triggering animation!");
          startAnimation();
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      console.log("Observer attached");
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [targetValues, threshold]);

  const triggerAnimation = () => {
    hasAnimatedRef.current = false;
    startAnimation();
  };

  return { counts, sectionRef, triggerAnimation };
};

export default useAnimatedCounter;
