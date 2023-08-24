"use client"

import React, { useEffect, useState } from "react"
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link"
import Image from "next/image";
import BarsIcon from '../../public/icons/bars-icon.svg'
import LinkedIn from '../../public/icons/linkedin-icon.svg'
import SunIcon from '../../public/icons/sun-icon.svg'
import { RootStore, store } from "@/store";
import { setIsOpenRightDrawer, setIsMobileDimension } from "@/store/root-store";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const { isOpenRightDrawer, isMobileDimension } = useSelector((state: RootStore) => state.rootStore)
  const onClickRightDrawer = () => store.dispatch(setIsOpenRightDrawer(!isOpenRightDrawer))
  const [currentRoute, setCurrentRoute] = useState('')

  useEffect(() => {
    const handleResize = () => {
      store.dispatch(setIsMobileDimension(window.innerWidth < 768)); 
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div className={`absolute w-full ${isMobileDimension ? 'px-1': 'px-20'}`}>
        <nav className={`${isMobileDimension ? 'h-10' : 'h-12'} bg-white flex justify-between items-center px-5 border-b-solid border-2 border-gray-300 rounded-lg`}>
          <Link href={`/`} onClick={() => setCurrentRoute('')} className="font-bold text-lg">
            <div className="flex"><p>krsn</p><span className="h-2.5 w-2.5 bg-blue-400 rounded-full my-auto ml-0.5"/></div>
            
          </Link>
          {!isMobileDimension ? (
            <div className="flex p-10">
              {navRoute.map(route => {
                   return (
                     <Link key={route.route} href={`${route.route}`} onClick={() => setCurrentRoute(route.route)} className={`${currentRoute === route.route ? 'text-blue-600' : ''} p-2 font-semibold text-sm`}>
                       {route.name}
                     </Link>
                   )
               })}
               <button className="mb-1">
                <Image src={SunIcon} alt="sun-icon" className="p-2" width={30} height={30}/>
               </button>
               <Link href={'https://www.linkedin.com/in/krisnadwisetyaadi'}>
                <Image src={LinkedIn} alt="linkedin-icon" className="p-2"  width={30} height={30}/>
               </Link>
             
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