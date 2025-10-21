export function ExperienceSection() {
  return (
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
  );
}
