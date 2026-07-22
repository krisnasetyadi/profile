"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { ScrambleText } from "@/components/scramble-text";
import { contact, socialMediaUrl } from "@/lib/constant";

const CTA_WORDS = ["LETS", "BUILD", "SOMETHING."];

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const dividerInView = useInView(dividerRef, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();

  return (
    <footer
      id="site-footer"
      ref={sectionRef}
      className="relative bg-[var(--pnp-bg)] px-6 md:px-12 pt-24 pb-12 overflow-hidden"
      itemScope
      itemType="https://schema.org/WPFooter"
      role="contentinfo"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Krisna Dwi Setya Adi",
            jobTitle: "Software Developer",
            description:
              "Full-stack developer specializing in modern web technologies",
            url: typeof window !== "undefined" ? window.location.origin : "",
            sameAs: [socialMediaUrl.linkedin, socialMediaUrl.github],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+62-813-1321-8350",
              email: contact.email,
              contactType: "professional",
              availableLanguage: ["English", "Indonesian"],
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "ID",
            },
          }),
        }}
      />

      {/* Center-outward divider */}
      <div ref={dividerRef} className="relative mb-16 h-px overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[var(--pnp-muted)]"
          initial={{ scaleX: 0 }}
          animate={dividerInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Giant CTA */}
      <div className="mb-16">
        {CTA_WORDS.map((word, wi) => (
          <CTAWord
            key={word}
            word={word}
            index={wi}
            inView={inView}
            isLast={wi === CTA_WORDS.length - 1}
            prefersReduced={!!prefersReduced}
          />
        ))}
      </div>

      {/* Social links row */}
      <div className="flex items-center gap-6 mb-16">
        <MagneticButton radius={60} strength={0.4}>
          <a
            href={socialMediaUrl.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--pnp-fg)] text-sm tracking-widest uppercase border border-[var(--pnp-muted)] px-5 py-2.5 hover:border-[var(--pnp-fg)] transition-colors duration-200"
            aria-label="Connect on LinkedIn"
          >
            <ScrambleText
              text="LI→"
              trigger={false}
              className="font-mono"
            />
            <span>LinkedIn</span>
          </a>
        </MagneticButton>

        <MagneticButton radius={60} strength={0.4}>
          <a
            href={socialMediaUrl.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--pnp-fg)] text-sm tracking-widest uppercase border border-[var(--pnp-muted)] px-5 py-2.5 hover:border-[var(--pnp-fg)] transition-colors duration-200"
            aria-label="View projects on GitHub"
          >
            <ScrambleText
              text="GH→"
              trigger={false}
              className="font-mono"
            />
            <span>GitHub</span>
          </a>
        </MagneticButton>
      </div>

      {/* Meta row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[var(--pnp-fg)] opacity-[var(--pnp-op-label)]">
        <p className="text-[11px] tracking-widest uppercase font-mono">
          Developed by Krisna &middot; Jakarta &middot; 2026 &copy;
        </p>
        <p className="text-[11px] tracking-[0.3em] uppercase font-syne font-bold opacity-80">
          KRSN
        </p>
      </div>
    </footer>
  );
}

/* ── Single CTA word with letter-wave on hover ── */
function CTAWord({
  word,
  index,
  inView,
  isLast,
  prefersReduced,
}: {
  word: string;
  index: number;
  inView: boolean;
  isLast: boolean;
  prefersReduced: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: "100%" }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: index * 0.12,
      }}
      className="overflow-hidden leading-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="display-footer">
        {word.split("").map((char, ci) => (
          <motion.span
            key={ci}
            animate={hovered ? { y: -6 } : { y: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 16,
              delay: ci * 0.025,
            }}
            className={[
              "inline-block",
              isLast && ci === word.length - 1
                ? "text-[var(--pnp-accent)] blink-cursor"
                : "text-[var(--pnp-fg)]",
            ].join(" ")}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
