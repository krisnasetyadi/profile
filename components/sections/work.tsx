import { CoverImageContainer } from "../image-container";
import AngularGridImage from "../../public/images/angular-grid.png";
import LawFirmImage from "../../public/images/law-firm.png";
import InvitationImage from "../../public/images/invitation.png";

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
          <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-lg overflow-hidden">
            <CoverImageContainer
              src={InvitationImage}
              alt="Wedding Invitation"
              title="Wedding Invitation"
              subtitle="My Own Wedding Invitation Website"
              aspectRatio="wide"
              overlay="gradient"
              textPosition="bottom-left"
              titleSize="5xl"
              subtitleSize="xl"
              className="w-full max-w-6xl mx-auto h-full"
              url="https://digivite.vercel.app/krisnastephani/26jTi6fkHizeEv9A"
            />
          </div>
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
              url="https://paulusshpartners.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
