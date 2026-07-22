"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { AmbientCursorBg } from "@/components/ambient-cursor-bg";
import { ButtonCvDownload } from "@/components/button-cv-download";
import { useScrambleText } from "@/hooks/use-scramble-text";
import { useMotionSafe } from "@/hooks/use-motion-safe";
import Image from "next/image";

// Per-letter animated reveal with optional idle scramble
function LetterReveal({
  word,
  delay = 0,
  scramble = false,
}: {
  word: string;
  delay?: number;
  scramble?: boolean;
}) {
  const { prefersReduced, safe } = useMotionSafe();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!scramble) return;
    const id = setInterval(() => {
      setTriggered(true);
      setTimeout(() => setTriggered(false), 700);
    }, 8000);
    return () => clearInterval(id);
  }, [scramble]);

  const scrambled = useScrambleText(word, triggered);
  const display = scramble && !prefersReduced ? scrambled : word;

  return (
    <span aria-label={word} style={{ display: "inline-block" }}>
      {display.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={safe({ opacity: 0, y: "105%" })}
          animate={safe({ opacity: 1, y: "0%" })}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
            delay: delay + i * 0.04,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// Word-by-word paragraph reveal on scroll-in
function WordReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  const { safe } = useMotionSafe();
  const ACCENT_WORDS = ["Jakarta,", "web", "developer"];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="text-lg md:text-xl leading-relaxed"
      style={{ color: "var(--pnp-fg)", opacity: "var(--pnp-op-body)", maxWidth: 540 }}
    >
      {text.split(" ").map((word, i) => {
        const isAccent = ACCENT_WORDS.includes(word);
        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              overflow: "hidden",
              marginRight: "0.3em",
              color: isAccent ? "var(--pnp-accent)" : "inherit",
            }}
            initial={safe({ opacity: 0, y: "100%" })}
            animate={visible ? safe({ opacity: 1, y: "0%" }) : {}}
            transition={{
              duration: 0.5,
              ease: [0.34, 1.56, 0.64, 1],
              delay: i * 0.022,
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export function OverviewIntroduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const { safe } = useMotionSafe();

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -48]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 80px) 80px",
      }}
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Ambient orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AmbientCursorBg opacity={0.08} size={700} lerp={0.05} />
      </div>

      <motion.div
        className="relative z-10 flex flex-col"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Top label row */}
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={safe({ opacity: 0 })}
          animate={safe({ opacity: 1 })}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
          }}
        >
          <span>Software Developer</span>
          <span>Jakarta, Indonesia — Est. 2022</span>
        </motion.div>

        {/* Giant name + photo */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h1
            className="display uppercase select-none"
            style={{ color: "var(--pnp-fg)", marginBottom: 0 }}
            itemProp="name"
          >
            <span className="block overflow-hidden">
              <LetterReveal word="KRISNA" delay={0.12} scramble />
            </span>
            <span className="block overflow-hidden">
              <LetterReveal word="SETYA ADI" delay={0.42} />
            </span>
          </h1>

          <motion.div
            className="relative self-center lg:self-auto flex-shrink-0 rounded-full overflow-hidden"
            style={{ width: 220, height: 220 }}
            initial={safe({ opacity: 0, scale: 0.9 })}
            animate={safe({ opacity: 1, scale: 1 })}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.6 }}
          >
            <Image
              src="/images/me2.jpg"
              alt="Krisna Dwi Setya Adi - Professional Software Developer headshot"
              fill
              className="object-cover"
              priority
              sizes="220px"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px mt-8"
          style={{ background: "var(--pnp-muted)", transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 1.0 }}
        />

        {/* Bottom row: bio left, CTA right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-8">
          <WordReveal text="Hi, I'm Krisna — a software developer based in Jakarta, specializing in modern web technologies and passionate about building practical, user-centered solutions across various projects and collaborations." />

          <div className="flex-shrink-0">
            <MagneticButton radius={80} strength={0.35}>
              <ButtonCvDownload />
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* SEO */}
      <p
        className="sr-only"
        itemProp="address"
        itemScope
        itemType="https://schema.org/PostalAddress"
      >
        <span itemProp="addressLocality">Jakarta</span>,
        <span itemProp="addressCountry">Indonesia</span>
      </p>

      {/* Scroll nudge */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={safe({ opacity: 0 })}
        animate={safe({ opacity: 1 })}
        transition={{ delay: 2.4, duration: 0.8 }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
          }}
        >
          scroll
        </span>
        <motion.div
          className="w-px bg-[var(--pnp-fg)]"
          style={{ opacity: "var(--pnp-op-label)" }}
          animate={{ height: [12, 28, 12] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
