"use client"
import React, {useState, useEffect} from "react"
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link"
import Image from "next/image";
import BarsIcon from '../../public/icons/bars-icon.svg'

function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const [openRightDrawer, setOpenRightDrawer] = useState(false)
  console.log('openRightDrawerh', openRightDrawer)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div className={`w-full ${isMobile ? 'px-1': 'px-20'}`}>
        <nav className="h-10 bg-white  flex justify-between items-center px-5">
          <Link href={`/`} className="font-bold text-lg">
            krsn
          </Link>
          {!isMobile ? (
            <div className="flex p-10">
              {navRoute.map(route => {
                   return (
                     <Link key={route.route} href={`${route.route}`} className="p-2 font-semibold">
                       {route.name}
                     </Link>
                   )
               })}
              <div className="p-2">Icon</div>
              <div  className="p-2">Linkedin</div>
            </div>
          ) : (
            <button type="button" onClick={() => setOpenRightDrawer(prev => !prev)}>
              <Image src={BarsIcon} alt="bars-icon" />
            </button>
          )}
        </nav>
      </div>
    )
}

export default NavbarComponent