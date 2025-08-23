import Image from "next/image";

import myImage from "../../public/images/me2.jpg";
import cartoonImage from "../../public/images/krisna-cartoon.png";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";

import { CoverImageContainer } from "@/components/image-container";
import { siteUrl } from "@/lib/constant";
import type { Metadata } from "next";
import { ButtonCvDownload } from "@/components/button-cv-download";

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Krisna Dwi Setyaadi - Software Developer | React.js & Next.js Expert";

  const description =
    "Experienced software developer based in Jakarta, Indonesia. Specializing in React.js, Next.js, TypeScript, and modern web technologies. 3+ years at Moonlay Technologies building scalable, user-centered applications.";
  const url = siteUrl;

  return {
    title,
    description: description,
    keywords: [
      "Krisna Dwi Setyaadi",
      "Software Developer Jakarta",
      "React Developer Indonesia",
      "Next.js Expert",
      "Frontend Developer",
      "Full Stack Developer",
      "JavaScript Developer",
      "TypeScript Developer",
      "Web Developer Jakarta",
      "Moonlay Technologies Developer",
      "Modern Web Technologies",
      "Scalable Applications",
      "User-Centered Design",
      "Software Engineering Jakarta",
      "React.js Specialist",
      "Node.js Developer",
      "Portfolio Website",
      "Indonesian Developer",
      "Jakarta Tech Professional",
    ],
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Krisna Dwi Setyaadi - Software Developer",
      images: [
        {
          url: `${siteUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Krisna Dwi Setyaadi - Software Developer Portfolio",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@krisnasetyaadi",
      creator: "@krisnasetyaadi",
      images: [`${siteUrl}/images/og-image.png`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "article:section": "Software Development",
      "article:tag": "Software Developer, React.js, Next.js, Jakarta",
      "profile:first_name": "Krisna",
      "profile:last_name": "Setyaadi",
      "profile:username": "krisnasetyaadi",
    },
  };
}

export default function Home() {
  return (
    <>
      <section
        className="px-6 md:px-12 py-12 md:py-20 relative"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
              KRISNA
              <br />
              SETYAADI
            </h1>
            <p
              className="sr-only"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="addressLocality">Jakarta</span>,
              <span itemProp="addressCountry">Indonesia</span>
            </p>
            <ButtonCvDownload />
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={myImage || "/placeholder.svg"}
                alt="Krisna Dwi Setyaadi - Professional Software Developer headshot"
                width={300}
                height={300}
                className="rounded-full object-cover"
                itemProp="image"
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 md:mt-24">
          <p className="text-lg md:text-xl leading-relaxed">
            Hi, I&apos;m Krisna — a software developer based in Jakarta,
            specializing in modern web technologies and passionate about
            building practical, user-centered solutions across various projects
            and collaborations.
          </p>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="px-6 md:px-12 py-16 md:py-24"
        aria-labelledby="work-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">work.</h2>
            {/* <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
              Show More
            </Button> */}
          </div>

          <div
            className="grid md:grid-cols-2 gap-8"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-lg overflow-hidden">
              <CoverImageContainer
                src={AngularGridImage}
                alt="Angular Grid - Artistic sculpture with floating geometric elements"
                title="Angular Grid"
                subtitle="Exploring some spread sheet functionality with Angular"
                aspectRatio="wide"
                overlay="gradient"
                textPosition="bottom-left"
                titleSize="5xl"
                subtitleSize="xl"
                className="w-full max-w-6xl mx-auto h-full"
                url="https://angular-grid-ivory.vercel.app/"
              />
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-lg overflow-hidden">
              <CoverImageContainer
                src={LawFirmImage}
                alt="Law Firm - Artistic sculpture with floating geometric elements"
                title="Law Firm"
                subtitle="Develop a law firm website with Next.js and Tailwind CSS"
                aspectRatio="wide"
                overlay="gradient"
                textPosition="bottom-left"
                titleSize="5xl"
                subtitleSize="xl"
                className="w-full max-w-6xl mx-auto h-full"
                url="https://law-firm-olive-iota.vercel.app/"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 md:px-12 py-16 md:py-24"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">about.</h2>
            {/* <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
              Show More
            </Button> */}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8">
                I design and build web applications using modern technologies to
                help teams and businesses solve real problems.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:justify-around">
            <Image
              src={cartoonImage || "/placeholder.svg"}
              alt="Krisna Dwi Setyaadi cartoon illustration representing creative problem-solving approach"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="mt-16 flex justify-end">
              <div className="max-w-md">
                <div className="w-4 h-4 bg-foreground rounded-full mb-8"></div>
                <p className="text-lg leading-relaxed">
                  With a focus on performance, usability, and clean
                  architecture, I strive to deliver intuitive and scalable
                  solutions tailored to each project&apos;s unique goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experice Section */}
      <section
        id="experience"
        className="px-6 md:px-12  md:py-24"
        itemScope
        itemType="https://schema.org/WorkHistory"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">experience.</h2>
          </div>

          <article
            className="flex flex-col gap-4 border-b-2 border-input"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-start justify-center gap-2">
                <time
                  className="text-muted-foreground flex gap-x-2"
                  dateTime="2022-02"
                >
                  <span itemProp="startDate">FEB 2022</span> —{" "}
                  <span>CURRENT</span> • <span>3+ Years</span>
                </time>
                <h3 className="text-2xl md:text-3xl underline decoration-1 underline-offset-8 decoration-input">
                  <span itemProp="roleName">Software Developer</span>,
                  <span
                    itemProp="worksFor"
                    itemScope
                    itemType="https://schema.org/Organization"
                  >
                    <span itemProp="name"> Moonlay Technologies</span>
                  </span>
                </h3>
              </div>
              {/* <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
                Show More
              </Button> */}
            </div>
            <div itemProp="description">
              <p className="text-md md:text-lg leading-relaxed mb-8">
                As a Software Developer, I specialize in building dynamic web
                applications using React.js, Next.js, and Node.js. My workflow
                involves writing clean, maintainable JavaScript code, creating
                reusable UI components, and ensuring code quality through best
                practices and code reviews. I collaborate closely with backend
                teams for seamless API integration, author comprehensive
                documentation, and work alongside product owners to design
                applications that align with user needs and business goals.
              </p>
            </div>
          </article>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            mainEntity: {
              "@type": "Person",
              name: "Krisna Dwi Setyaadi",
              jobTitle: "Software Developer",
              description:
                "Experienced software developer specializing in React.js, Next.js, and modern web technologies",
              url: "https://krisnasetyaadi.dev",
              image: "https://krisnasetyaadi.dev/images/me2.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta",
                addressCountry: "Indonesia",
              },
              worksFor: {
                "@type": "Organization",
                name: "Moonlay Technologies",
              },
              hasOccupation: {
                "@type": "Occupation",
                name: "Software Developer",
                occupationLocation: {
                  "@type": "City",
                  name: "Jakarta",
                },
                skills: [
                  "React.js",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Web Development",
                ],
              },
            },
          }),
        }}
      />
    </>
  );
}
