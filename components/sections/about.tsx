"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import cartoonImage from "../../public/images/krisna-cartoon.png";
import { MarqueeTicker } from "@/components/marquee-ticker";
import { CountUp } from "@/components/count-up";
import { TiltCard } from "@/components/tilt-card";
import { useMotionSafe } from "@/hooks/use-motion-safe";

/** Draws a `background-size: 0% → 100%` underline on scroll-in */
function HighlightedPhrase({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  // Use a simple mount-time observer — phrases are in the viewport quickly
  if (typeof window !== "undefined" && !visible) {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
  }

  return (
    <span
      ref={ref}
      style={{
        backgroundImage:
          "linear-gradient(var(--pnp-accent), var(--pnp-accent))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 100%",
        backgroundSize: visible ? "100% 2px" : "0% 2px",
        transition: "background-size 0.6s cubic-bezier(0.76,0,0.24,1)",
        paddingBottom: 2,
      }}
    >
      {children}
    </span>
  );
}

/** Giant statement with per-word scroll-stagger */
function GiantStatement() {
  const { safe } = useMotionSafe();
  const words = ["PRECISE.", "INTENTIONAL.", "SHIPPED."];

  return (
    <div
      style={{
        textAlign: "center",
        padding: "clamp(64px, 8vw, 120px) 0 clamp(32px, 4vw, 56px)",
      }}
      aria-label="Precise. Intentional. Shipped."
    >
      {words.map((word, i) => (
        <motion.div
          key={word}
          initial={safe({ opacity: 0, y: 60 })}
          whileInView={safe({ opacity: 1, y: 0 })}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
            delay: i * 0.12,
          }}
          style={{
            display: "block",
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px, 5.5vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color:
              i === words.length - 1 ? "var(--pnp-accent)" : "var(--pnp-fg)",
          }}
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
}

export function AboutSection() {
  const { safe } = useMotionSafe();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ position: "relative" }}
    >
      {/* ── Dual Marquee Divider ── */}
      <MarqueeTicker direction="right" speed={28} />
      <MarqueeTicker direction="left" speed={22} />

      {/* ── Giant Statement ── */}
      <div style={{ padding: "0 clamp(24px, 5vw, 80px)" }}>
        <GiantStatement />
      </div>

      {/* ── Stats Row ── */}
      <div style={{ padding: "0 clamp(24px, 5vw, 80px)" }}>
        <CountUp />
      </div>

      {/* ── Main content: tilt card + text ── */}
      <div
        style={{
          padding: "clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <motion.h2
          id="about-heading"
          initial={safe({ opacity: 0, y: 12 })}
          whileInView={safe({ opacity: 1, y: 0 })}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
            marginBottom: "clamp(40px, 5vw, 72px)",
          }}
        >
          02 — About
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Tilt card */}
          <motion.div
            initial={safe({ opacity: 0, x: -32 })}
            whileInView={safe({ opacity: 1, x: 0 })}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="flex-shrink-0 flex justify-center w-full lg:w-auto"
          >
            <TiltCard maxTilt={10} perspective={800}>
              <div
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  width: "clamp(240px, 28vw, 360px)",
                  aspectRatio: "1 / 1",
                  border: "1px solid var(--pnp-muted)",
                  position: "relative",
                }}
              >
                <Image
                  src={cartoonImage}
                  alt="Krisna Setya Adi cartoon illustration"
                  fill
                  className="object-cover"
                  sizes="360px"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </TiltCard>
          </motion.div>

          {/* Text content */}
          <div className="flex flex-col gap-8 flex-1">
            <motion.p
              initial={safe({ opacity: 0, y: 24 })}
              whileInView={safe({ opacity: 1, y: 0 })}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1,
              }}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: 1.85,
                color: "var(--pnp-fg)",
                opacity: 0.9,
              }}
            >
              I design and build{" "}
              <HighlightedPhrase>modern web</HighlightedPhrase> applications
              using the latest technologies to help teams and businesses solve{" "}
              <HighlightedPhrase>real problems</HighlightedPhrase>.
            </motion.p>

            <motion.p
              initial={safe({ opacity: 0, y: 24 })}
              whileInView={safe({ opacity: 1, y: 0 })}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2,
              }}
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.85,
                color: "var(--pnp-fg)",
                opacity: "var(--pnp-op-secondary)",
                maxWidth: 520,
              }}
            >
              Based in <HighlightedPhrase>Jakarta</HighlightedPhrase>,
              Indonesia. With a focus on performance, usability, and clean
              architecture — delivering intuitive, scalable solutions tailored
              to each project&apos;s unique goals.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
