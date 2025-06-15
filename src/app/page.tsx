"use client";

import Image from "next/image";

import myImage from "../../public/images/me2.jpg";
import cartoonImage from "../../public/images/krisna-cartoon.png";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";

import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CircleCheck, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { CVApi } from "@/services";
import { toast } from "sonner";
import { CheckedIcon, FailedIcon } from "@/components/check-icon";
import { CoverImageContainer } from "@/components/image-container";
import { contact } from "@/lib/constant";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isDownload, setIsDownload] = useState({
    loading: false,
    error: false,
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  ("use client");

  const handleDownloadCV = async () => {
    setIsDownload({
      loading: true,
      error: false,
    });
    await CVApi.download()
      .then(() => {
        toast.success("Download successful", {
          description: "The file has been downloaded successfully.",
        });
        setIsDownload({
          loading: false,
          error: false,
        });
      })
      .catch((error) => {
        toast.error("Download Failed", {
          description:
            error?.originalMessage ||
            "Something went wrong during the download.",
        });
        setIsDownload({
          loading: false,
          error: true,
        });

        setTimeout(() => {
          setIsDownload({
            loading: false,
            error: false,
          });
        }, 3000);
      });
  };

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
            <div className="flex items-center gap-14">
              <div className="flex items-center gap-3 text-sm">
                <span>{contact.email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyEmail}
                  className="h-6 w-6"
                >
                  <Copy className="h-3 w-3" />
                </Button>
                {copied && <CheckedIcon />}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={handleDownloadCV}
                className="h-6 w-6 flex items-center gap-3 text-sm"
                disabled={isDownload.loading}
              >
                <span className="hover:underline hover:underline-offset-4">
                  {isDownload.loading ? "downloading..." : "download cv"}
                </span>
                <ArrowDownToLine className="h-3 w-3" />
              </Button>
              {isDownload.error && <FailedIcon />}
            </div>
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
            <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
              Show More
            </Button>
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
            <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
              Show More
            </Button>
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
                  Software Engineer, Moonlay Technologies
                </h3>
              </div>
              <Button className="text-sm bg-secondary text-primary hover:bg-primary hover:text-secondary transition-colors">
                Show More
              </Button>
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
