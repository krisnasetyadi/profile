import HomeButtonComponent from "@/components/home-button-component";
import Image from "next/image";
import myImage from '../../public/images/me-2.jpg'
import ClientWrapper from "@/components/wrapper/client";

export default function Home() {
  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="h-60 w-60 rounded-full my-5">
          <Image src={myImage} alt="my-image" className="rounded-full h-60 w-60"/>
        </div>
      </div>
      <div className='text-center font-semibold lg:h-60'>
        <h3 className='text-2xl'>Hi, I&apos;m Krisna!</h3>
        <h1 className='text-5xl font-bold'>A Software Developer</h1>
        <ClientWrapper>
          <HomeButtonComponent/>
        </ClientWrapper>

      </div>
    </div>
  )
}
