import { OverviewIntroduction } from "@/components/sections/overview-introduction";
import { WorkSection } from "@/components/sections/work";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import Me2 from "@/public/images/me2.jpg";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Krisna Dwi Setyaadi - Software Developer";

  const description =
    "Krisna Dwi Setyaadi is an experienced software developer based in Jakarta, Indonesia, specializing in React.js, Next.js, and modern web technologies. Building scalable, user-centered applications since 2022.";
  const url = `https://krisnadwisetyaadi.vercel.app`;

  return {
    title,
    description,
    keywords: [
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
      siteName: "Krisna Dwi Setyaadi",
      images: [
        {
          url: "/images/me2.jpg",
          alt: "Krisna Dwi Setyaadi",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@krisnasetyaadi",
      creator: "@krisnasetyaadi",
      images: Me2
        ? [
            {
              url: "/images/me2.jpg",
              alt: "Krisna Dwi Setyaadi",
            },
          ]
        : [`${url}/me2.jpg`],
    },
    alternates: {
      canonical: url,
    },
    robots: "index, follow",
    other: {
      "profile:section": "Personal Profile, Portfolio, Projects",
      "profile:tag":
        "Krisna Dwi Setyaadi, Software Developer, React.js, Next.js",
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
