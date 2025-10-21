import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useIntervalVariants(heroVariations: any[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    if (!heroVariations || heroVariations.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setNextIndex((prev) => {
        const next = (prev + 1) % heroVariations?.length;
        setIsTransitioning(true);

        setTimeout(() => {
          setCurrentIndex(next);
          setIsTransitioning(false);
        }, 1000);

        return next;
      });
    }, 10000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroVariations]);

  const currentVariation = heroVariations?.[currentIndex];
  const nextVariation = heroVariations?.[nextIndex];

  return {
    currentVariation,
    nextVariation,
    currentIndex,
    isTransitioning,
    setCurrentIndex,
    setIsTransitioning,
    setNextIndex,
  };
}
