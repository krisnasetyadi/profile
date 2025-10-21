import Image from "next/image";
import cartoonImage from "../../public/images/krisna-cartoon.png";

export function AboutSection() {
  return (
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
                With a focus on performance, usability, and clean architecture,
                I strive to deliver intuitive and scalable solutions tailored to
                each project&apos;s unique goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
