import Image from "next/image";
import myImage from "../../public/images/me2.jpg";
import { ButtonCvDownload } from "../button-cv-download";

export function OverviewIntroduction() {
  return (
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
          specializing in modern web technologies and passionate about building
          practical, user-centered solutions across various projects and
          collaborations.
        </p>
      </div>
    </section>
  );
}
