import { OverviewIntroduction } from "@/components/sections/overview-introduction";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { Metadata } from "next";
import { siteUrl } from "@/lib/constant";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Krisna Dwi Setya Adi - Software Developer";

  const description =
    "Krisna Dwi Setya Adi is an experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies. Building scalable, user-centered applications since 2022.";
  const url = siteUrl;

  return {
    title,
    description,
    keywords: [
      "Krisna Dwi Setya Adi",
      "Krisna Dwi Setyaadi",
      "Krisna",
      "Krisna Setyaadi",
      "Software Developer Jakarta",
      "React Developer Indonesia",
      "Next.js Developer",
      "Frontend Developer Jakarta",
      "Full Stack Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Web Developer Indonesia",
      "Moonlay Technologies",
      "Portfolio Website",
      "Software Engineering",
      "Modern Web Technologies",
      "User-Centered Design",
      "Scalable Applications",
    ].join(", "),
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Krisna Dwi Setya Adi",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Krisna Dwi Setya Adi - Software Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@krisnasetyaadi",
      creator: "@krisnasetyaadi",
      images: [
        {
          url: "/images/og-image.png",
          alt: "Krisna Dwi Setya Adi - Software Developer",
        },
      ],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "profile:section": "Personal Profile, Portfolio, Projects",
      "profile:tag":
        "Krisna Dwi Setya Adi, Software Developer, React.js, Next.js",
    },
  };
}

export default function Home() {
  // useDynamicSEO(pages.home.toString());

  return (
    <>
      <OverviewIntroduction />
      {/* Work Section */}
      <WorkSection />
      {/* About Section */}
      <AboutSection />
      {/* Experice Section */}
      <ExperienceSection />
    </>
  );
}
