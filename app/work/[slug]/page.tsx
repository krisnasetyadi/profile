import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock, Clock } from "lucide-react";
import { TiltCard } from "@/components/tilt-card";
import {
  PROJECTS,
  getProjectBySlug,
  projectSlug,
} from "@/lib/projects";
import { siteUrl } from "@/lib/constant";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: projectSlug(project) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} | Krisna Dwi Setya Adi`;
  const description =
    project.description ?? `${project.category} — ${project.year}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/work/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/work/${slug}`,
      siteName: "Krisna Dwi Setya Adi",
      title,
      description,
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isConfidential = !!project.confidential;
  const hasImage = !!project.image;

  return (
    <section
      style={{
        padding:
          "clamp(120px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link
          href="/work"
          data-cursor="view"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-secondary)",
            textDecoration: "none",
            marginBottom: "clamp(32px, 4vw, 56px)",
          }}
          className="hover:opacity-100"
        >
          ← All Work
        </Link>

        {/* Meta row */}
        <div
          className="flex items-center gap-4"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--pnp-fg)",
            opacity: "var(--pnp-op-label)",
            marginBottom: 16,
          }}
        >
          {isConfidential ? (
            <span
              style={{
                border: "1px solid var(--pnp-muted)",
                borderRadius: 9999,
                padding: "2px 10px",
              }}
            >
              NDA
            </span>
          ) : (
            <>
              <span>{project.category}</span>
              <span>{project.year}</span>
            </>
          )}
          {project.inProgress && (
            <span
              style={{
                border: "1px solid var(--pnp-muted)",
                borderRadius: 9999,
                padding: "2px 10px",
                color: "var(--pnp-accent)",
              }}
            >
              In Progress
            </span>
          )}
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "var(--pnp-fg)",
            marginBottom: "clamp(32px, 4vw, 56px)",
          }}
        >
          {project.name}
        </h1>

        {/* Visual */}
        <div style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          {hasImage ? (
            <TiltCard className="block w-full" maxTilt={6} perspective={1200}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  borderRadius: 8,
                  overflow: "hidden",
                  border: "1px solid var(--pnp-muted)",
                  background: "var(--pnp-surface)",
                }}
              >
                <Image
                  src={project.image!}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 960px) 100vw, 960px"
                  priority
                />
              </div>
            </TiltCard>
          ) : (
            <div
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid var(--pnp-muted)",
                background: "var(--pnp-surface)",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              {isConfidential ? (
                <>
                  <Lock
                    size={24}
                    style={{ color: "var(--pnp-fg)", opacity: "var(--pnp-op-secondary)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--pnp-fg)",
                      opacity: "var(--pnp-op-secondary)",
                    }}
                  >
                    Under NDA
                  </span>
                </>
              ) : (
                <>
                  <Clock
                    size={24}
                    style={{ color: "var(--pnp-fg)", opacity: "var(--pnp-op-secondary)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--pnp-fg)",
                      opacity: "var(--pnp-op-secondary)",
                    }}
                  >
                    In Progress
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        {project.description && (
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(16px, 1.6vw, 20px)",
              lineHeight: 1.8,
              color: "var(--pnp-fg)",
              opacity: "var(--pnp-op-body)",
              maxWidth: 720,
              marginBottom: project.note ? 16 : "clamp(32px, 4vw, 56px)",
            }}
          >
            {project.description}
          </p>
        )}

        {project.note && (
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(14px, 1.3vw, 16px)",
              lineHeight: 1.75,
              color: "var(--pnp-fg)",
              opacity: "var(--pnp-op-secondary)",
              maxWidth: 720,
              marginBottom: "clamp(32px, 4vw, 56px)",
            }}
          >
            {project.note}
          </p>
        )}

        {/* CTA */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--pnp-fg)",
              border: "1px solid var(--pnp-muted)",
              padding: "12px 20px",
              textDecoration: "none",
              transition: "border-color 0.2s, opacity 0.2s",
            }}
            className="hover:opacity-100"
          >
            Visit Live Site
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 15L15 5M15 5H7M15 5V13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        )}
      </div>
    </section>
  );
}
