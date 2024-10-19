import HomeButtonComponent from "@/components/home-button-component";
import Image from "next/image";
import myImage from '../../public/images/me2.jpg';
import ClientWrapper from "@/components/wrapper/client";
import { cn } from "@/lib/utils"; 

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center pt-10 space-y-8">
      <div className="flex justify-center">
        <div className="h-60 w-60 rounded-full overflow-hidden shadow-lg">
          <Image src={myImage} alt="my-image" className="rounded-full" />
        </div>
      </div>

      <div className="text-center font-semibold lg:h-60 space-y-4">
        <h3 className={cn("text-2xl font-medium text-muted-foreground")}>
          Hi, I&apos;m Krisna!
        </h3>
        <h1 className={cn("text-5xl font-bold leading-tight text-primary")}>
          A Software Developer
        </h1>

        <ClientWrapper>
          <HomeButtonComponent />
        </ClientWrapper>
      </div>
    </div>
  );
}
