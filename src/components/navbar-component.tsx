"use client"

import React, {useState, useEffect} from "react"
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link"
import Image from "next/image";
import BarsIcon from '../../public/icons/bars-icon.svg'
import { RootStore, store } from "@/store";
import { setIsOpenRightDrawer } from "@/store/root-store";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const [isMobile, setIsMobile] = useState(false);
  const { isOpenRightDrawer } = useSelector((state: RootStore) => state.rootStore)
  const onClickRightDrawer = () => store.dispatch(setIsOpenRightDrawer(!isOpenRightDrawer))

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
        <nav className={`${isMobile ? 'h-10' : 'h-12'} bg-white  flex justify-between items-center px-5`}>
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
            <button type="button" onClick={onClickRightDrawer}>
              <Image src={BarsIcon} alt="bars-icon" />
            </button>
          )}
        </nav>
      </div>
    )
}

export default NavbarComponent