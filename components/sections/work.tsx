import { CoverImageContainer } from "../image-container";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";
import Cashnomy from "../../public/images/cashnomy.png";
import Vovelia from "../../public/images/vovelia-preview.png";

export function WorkSection() {
  return (
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
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <CoverImageContainer
                src={Vovelia}
                alt="Vovelia - Digital Wedding Invitation Platform"
                aspectRatio="custom"
                customAspectRatio="4/3"
                overlay="none"
                textPosition="below"
                titleSize="2xl"
                subtitleSize="sm"
                className="w-full h-full"
                rounded="none"
                shadow="none"
                url="https://vovelia.vercel.app/"
              />
            </div>
            <div className="pt-3">
              <h3 className="font-semibold text-lg md:text-xl">Vovelia</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Digital wedding invitation platform with RSVP, guest management
                & personalized pages
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <CoverImageContainer
                src={Cashnomy}
                alt="Cashnomy - Personal Finance Dashboard"
                aspectRatio="custom"
                customAspectRatio="4/3"
                overlay="none"
                textPosition="below"
                titleSize="2xl"
                subtitleSize="sm"
                className="w-full h-full"
                rounded="none"
                shadow="none"
                url="https://cashnomy.vercel.app"
              />
            </div>
            <div className="pt-3">
              <h3 className="font-semibold text-lg md:text-xl">Cashnomy</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Personal finance tracker with budgeting, expense analytics &
                savings goals
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <CoverImageContainer
                src={AngularGridImage}
                alt="Angular Grid - Spreadsheet app built with Angular"
                aspectRatio="custom"
                customAspectRatio="4/3"
                overlay="none"
                textPosition="below"
                titleSize="2xl"
                subtitleSize="sm"
                className="w-full h-full"
                rounded="none"
                shadow="none"
                url="https://angular-grid-ivory.vercel.app/"
              />
            </div>
            <div className="pt-3">
              <h3 className="font-semibold text-lg md:text-xl">Angular Grid</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Exploring spreadsheet functionality with Angular
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <CoverImageContainer
                src={LawFirmImage}
                alt="Law Firm website built with Next.js"
                aspectRatio="custom"
                customAspectRatio="4/3"
                overlay="none"
                textPosition="below"
                titleSize="2xl"
                subtitleSize="sm"
                className="w-full h-full"
                rounded="none"
                shadow="none"
                url="https://paulusshpartners.com/"
              />
            </div>
            <div className="pt-3">
              <h3 className="font-semibold text-lg md:text-xl">Law Firm</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Law firm website built with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
