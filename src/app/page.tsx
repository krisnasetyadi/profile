import Image from "next/image";

import myImage from "../../public/images/me2.jpg";
import cartoonImage from "../../public/images/krisna-cartoon.png";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";

import { CoverImageContainer } from "@/components/image-container";
import { siteUrl } from "@/lib/constant";
import { Metadata } from "next";
import { ButtonCvDownload } from "@/components/button-cv-download";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Krisna Dwi Setyaadi - Software Developer";

  const description =
    "Krisna Dwi Setyaadi is a software developer based in Jakarta, specializing in modern web technologies. With a focus on building practical, user-centered solutions, Krisna has collaborated on various projects to deliver intuitive and scalable applications.";
  const url = siteUrl;

  const enhancedDescription =
    "Krisna Dwi Setyaadi is a software developer based in Jakarta, specializing in modern web technologies. With a focus on building practical, user-centered solutions, Krisna has collaborated on various projects to deliver intuitive and scalable applications. Explore Krisna's work and insights into the world of software development.";

  return {
    title,
    description: enhancedDescription,
    keywords: [
      "Krisna Dwi Setyaadi",
      "Software Developer",
      "Web Development",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Jakarta Developer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Modern Web Technologies",
      "User-Centered Solutions",
      "Intuitive Applications",
      "Scalable Applications",
      "Software Engineering",
      "Web Applications",
      "Programming",
      "Tech Enthusiast",
      "Open Source Contributor",
      "Software Projects",
      "Tech Blog",
      "Developer Portfolio",
      "Krisna Dwi Setyaadi Portfolio",
      "Krisna Dwi Setyaadi CV",
      "Krisna Dwi Setyaadi Resume",
      "Krisna Dwi Setyaadi Contact",
      "Krisna Dwi Setyaadi Email",
      "Krisna Dwi Setyaadi WhatsApp",
      "Krisna Dwi Setyaadi GitHub",
      "Krisna Dwi Setyaadi LinkedIn",
      "Krisna Dwi Setyaadi Jakarta",
      "Krisna Dwi Setyaadi Indonesia",
      "Krisna Dwi Setyaadi Software Developer",
      "Krisna Dwi Setyaadi Web Developer",
      "Krisna Dwi Setyaadi Frontend Developer",
      "Krisna Dwi Setyaadi Backend Developer",
      "Krisna Dwi Setyaadi Full Stack Developer",
    ].join(", "),
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
          alt: "Krisna Dwi Setyaadi - Software Developer",
        },
      ],
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
    robots: "index, follow",
    other: {
      "article:section": "Software Development, Web Development",
      "article:tag": ["Krisna Dwi Setyaadi", "Software Developer"],
    },
  };
}

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-12 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
              KRISNA
              <br />
              SETYAADI
            </h1>
            <ButtonCvDownload />
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={myImage}
                alt="Krisna - Software Developer"
                width={300}
                height={300}
                className="rounded-full object-cover"
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
      <section id="work" className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">work.</h2>
            {/* <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
              Show More
            </Button> */}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
      <section id="about" className="px-6 md:px-12 py-16 md:py-24">
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
              src={cartoonImage}
              alt="Professional workspace"
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
      <section id="experience" className="px-6 md:px-12  md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">experience.</h2>
          </div>

          <div className="flex flex-col gap-4 border-b-2 border-input">
            <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-start justify-center gap-2">
                <span className="text-muted-foreground flex gap-x-2">
                  <p>FEB,2022 - CURRENT</p>—<p>+3 Years</p>
                </span>
                <h3 className="text-2xl md:text-3xl underline decoration-1 underline-offset-8 decoration-input">
                  Software Developer, Moonlay Technologies
                </h3>
              </div>
              {/* <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
                Show More
              </Button> */}
            </div>

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
        </div>
      </section>
    </>
  );
}

// <div className="h-full flex flex-col items-center pt-10 space-y-8">
//   <div className="flex justify-center">
//     <div className="h-60 w-60 rounded-full overflow-hidden shadow-lg">
//       <Image src={myImage} alt="my-image" className="rounded-full" />
//     </div>
//   </div>

//   <div className="text-center font-semibold lg:h-60 space-y-4">
//     <h3 className={cn("text-2xl font-medium text-muted-foreground")}>
//       Hi, I&apos;m Krisna!
//     </h3>
//     <h1 className={cn("text-5xl font-bold leading-tight text-primary")}>
//       A Software Developer
//     </h1>

//     <ClientWrapper>
//       <HomeButtonComponent />
//     </ClientWrapper>
//   </div>
// </div>
