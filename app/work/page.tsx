import type { Metadata } from "next";
import { WorkCatalogGrid } from "@/components/work-catalog-grid";
import { getAllProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Work | Krisna Dwi Setya Adi",
  description:
    "All projects and client work by Krisna Dwi Setya Adi — software developer based in Jakarta, Indonesia.",
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/work`,
    siteName: "Krisna Dwi Setya Adi",
    title: "Work | Krisna Dwi Setya Adi",
    description:
      "All projects and client work by Krisna Dwi Setya Adi — software developer based in Jakarta, Indonesia.",
  },
};

export default function WorkIndexPage() {
  const projects = getAllProjects();

  return (
    <section
      style={{
        padding: "clamp(120px, 12vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 10vw, 140px)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="flex items-baseline gap-6 mb-4">
          <h1
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--pnp-fg)",
              opacity: "var(--pnp-op-label)",
            }}
          >
            All Work
          </h1>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "var(--pnp-accent)",
              opacity: 0.5,
              letterSpacing: "0.15em",
            }}
          >
            ({String(projects.length).padStart(2, "0")})
          </span>
        </div>

        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--pnp-fg)",
            marginBottom: "clamp(48px, 6vw, 80px)",
          }}
        >
          Every project,
          <br />
          in one place.
        </h2>

        <WorkCatalogGrid projects={projects} />
      </div>
    </section>
  );
}
