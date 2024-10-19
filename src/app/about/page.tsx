import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import myImage from "../../../public/images/me2.jpg";
import skills from "./skill.json";

function AboutScreen() {
  const startDate = new Date("2022-03-02").getFullYear();
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startDate;
  const arrayOfSkills = skills;

  const SkillsContainer = (data: { name: string; icon: string }[]) => {
    return (
      <>
        {data?.map((skill, index) => (
          <Card key={index} className="flex flex-col items-center justify-between border rounded-xl py-2 px-2">
            <span className="text-xs font-semibold">{skill.name}</span>
          </Card>
        ))}
      </>
    );
  };

  return (
    <div className="py-8 h-full overflow-y-auto">
      <main className="flex flex-col max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">About Me</CardTitle>
        </CardHeader>
        <section className="flex flex-col justify-center lg:flex-row lg:gap-10 md:gap-5 sm:gap-3">
          <div className="xl:w-40 mt-5 min-[320px]:w-full flex justify-center">
            <Image src={myImage} alt="my-image" className="rounded-full h-40 w-40" />
          </div>
          <Card className="max-w-2xl flex-1 pt-2">
            <CardContent className="text-[14.5px]">
              <p>
                Hi, welcome to my Personal Page. I&apos;m <strong>Krisna Dwi Setyaadi</strong>, a{" "}
                <em>Software Developer at Moonlay Technologies</em> and a final year student at{" "}
                <em>Harapan Bangsa Institute of Technology (Major: Data Science Information Systems)</em>.
                <br />
                <br />
                I&apos;m passionate about software development and strive to expand my knowledge and skills. I have
                experience working on various projects and enjoy tackling challenges to create efficient and innovative
                solutions.
                <br />
                <br />
                Feel free to explore my projects and reach out if you have any questions or collaboration opportunities.
              </p>
            </CardContent>
          </Card>
        </section>
        <section className="mt-5 flex flex-col lg:flex-row justify-center gap-10">
          <Card className="max-w-lg text-[14.5px] md:max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mt-3">
                As a Software Developer, my workflow includes:
              </p>
              <ul className="list-disc pl-5 mt-3">
                <li>Developing dynamic web applications using React.js, Next.js, and Node.js</li>
                <li>Writing clean, maintainable, and efficient code with JavaScript</li>
                <li>Collaborating with backend teams for seamless API integration</li>
                <li>Ensuring code quality through best practices</li>
                <li>Creating reusable UI components for efficiency and consistency</li>
                <li>Authoring comprehensive API documentation</li>
                <li>Designing applications to meet user requirements</li>
                <li>Working closely with product owners to align with business goals</li>
                <li>Reviewing code to ensure quality and consistency</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="md:max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="mt-5 space-y-4">
                <li className="flex flex-col gap-2">
                  <strong>Programming Languages</strong>
                  <div className="flex flex-row gap-2 items-center">
                    {SkillsContainer(arrayOfSkills.find((f) => f.type === "programming-languages")?.skills as any)}
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <strong>Frameworks</strong>
                  <div className="flex flex-row gap-2 items-center">
                    {SkillsContainer(arrayOfSkills.find((f) => f.type === "frameworks")?.skills as any)}
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <strong>Libraries</strong>
                  <div className="flex flex-row gap-2 items-center">
                    {SkillsContainer(arrayOfSkills.find((f) => f.type === "libraries")?.skills as any)}
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <strong>Databases</strong>
                  <div className="flex flex-row gap-2 items-center">
                    {SkillsContainer(arrayOfSkills.find((f) => f.type === "databases")?.skills as any)}
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
        <em className="mt-5 self-center">
          Contact me for hiring or business inquiries.{" "}
          <Link href={"https://wa.me/081313218350"} className="text-sm text-blue-500 font-bold underline">
            Contact me here!
          </Link>
        </em>
      </main>
    </div>
  );
}

export default AboutScreen;
