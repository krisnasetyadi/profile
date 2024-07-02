import Image from "next/image";
import Link from "next/link";
import myImage from '../../../public/images/me2.jpg'
import skills from './skill.json'

function AboutScreen() {
    const startDate = new Date('2022-03-02').getFullYear();
    const currentYear = new Date().getFullYear();
    const arrayOfSkills = (skills);
    const yearsOfExperience = currentYear - startDate;

    const SkillsContainer = (data: { name: string; icon: string; }[]) => {
      if(data) {
        return data.map((skill, index) => {
  
          return (
            <div key={index} className="flex flex-col items-center justify-between  border border-2 border-[#5C94F2] rounded-xl py-2 px-2">
              <span className="text-xs text-gray-900 font-semibold">{skill.name}</span>
            </div>
          )
        })
      }
    }

    return (
        <div className="py-8">
            <main className="flex flex-col">
              <h1 className="text-4xl font-bold self-center">About Me</h1>
              <section className="flex flex-col justify-center lg:flex-row lg:gap-10">
                <div className="xl:w-40 mt-5 min-[320px]:w-full min-[320px]:flex min-[320px]:justify-center">
                  <Image src={myImage} alt="my-image" className="rounded-full h-40 w-40"/>
                </div>
                <div className="max-w-2xl">
                 <p className="mt-5 text-[14.5px]">
                    Hi, welcome to my Personal Page. I&apos;m <strong>Krisna Dwi Setyaadi</strong>, a <em>Software Developer at Moonlay Technologies</em> and a final year student at <em>Harapan Bangsa Institute of Technology (Major: Data Science Information Systems)</em>. 
                    <br/>
                    <br/>
                    As a dedicated professional, I am passionate about software development and constantly strive to expand my knowledge and skills in the field. I have experience working on various projects and enjoy tackling challenges to create efficient and innovative solutions.
                    <br/>
                    <br/>
                    On my Personal Profile, you&apos;ll find a collection of my projects and contributions. Feel free to explore and reach out if you have any questions or collaboration opportunities.
                  </p>
                </div>
              </section>
              <section className="mt-5 flex flex-row lg:flex-row min-[320px]:flex-col justify-center gap-10">
                <div className=" max-w-lg  text-[14.5px]">
                  <h2 className="text-2xl font-bold">Workflow</h2>
                  <p className="mt-3">As a Software Developer, I engage in a diverse range of tasks and responsibilities to deliver high-quality software solutions. My workflow includes:</p>
                  <ul className="list-disc pl-5 mt-3">
                    <li>Developing dynamic and interactive web applications using React.js, Next.js and Node JS</li>
                    <li>Writing clean, maintainable, and efficient code with JavaScript</li>
                    <li>Collaborating with backend teams to ensure seamless integration with APIs and business logic</li>
                    <li>Ensuring code quality and functionality by adhering to best practices and design patterns</li>
                    <li>Creating and maintaining reusable UI components to enhance development efficiency and consistency</li>
                    <li>Authoring comprehensive API documentation to facilitate smooth integration and usage</li>
                    <li>Designing and implementing applications to meet user requirements and enhance user experience</li>
                    <li>Working closely with product owners and business analysts to ensure alignment with business objectives and requirements</li>
                    <li>Contributing to various projects for a diverse client base, including startups and large enterprises, across multiple industries</li>
                    <li>Reviewing code written by other developers to ensure quality and consistency</li>
                  </ul>
                </div>
                <div className="">
                  <h2 className="text-2xl font-bold">Skills</h2>
                  <ul className="mt-5">
                    <li className="flex flex-col gap-2 my-2">
                      <strong>Programming Languanges</strong>
                      <div className="flex flex-row gap-2 items-center">
                        {SkillsContainer(arrayOfSkills.find(f => f.type === 'programming-languages')?.skills as any)}
                      </div>
                     </li>
                     <li className="flex flex-col gap-2 my-2">
                      <strong>Frameworks</strong>
                      <div className="flex flex-row gap-2 items-center">
                        {SkillsContainer(arrayOfSkills.find(f => f.type === 'frameworks')?.skills as any)}
                      </div>
                     </li>
                     <li className="flex flex-col gap-2 my-2">
                      <strong>Libraries</strong>
                      <div className="flex flex-row gap-2 items-center">
                        {SkillsContainer(arrayOfSkills.find(f => f.type === 'libraries')?.skills as any)}
                      </div>
                     </li>
                      <li className="flex flex-col gap-2 my-2">
                        <strong>Databases</strong>
                        <div className="flex flex-row gap-2 items-center">
                          {SkillsContainer(arrayOfSkills.find(f => f.type === 'databases')?.skills as any)}
                        </div>
                      </li>
                  </ul>
                </div>
              </section>
              <em className="mt-5 self-center">
                Contact me for hiring or business inquiries.{' '} 
                <Link 
                  href={'https://wa.me/081313218350'} 
                  className="text-sm text-blue-500 font-bold underline">
                  Contact me here!
                </Link>
              </em>
            </main>
           
        </div>
    );
}

export default AboutScreen;
