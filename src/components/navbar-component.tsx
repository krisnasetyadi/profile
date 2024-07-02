"use client"

import React, { useEffect, useState } from "react"
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link"
import Image from "next/image";
import BarsIcon from '../../public/icons/bars-icon.svg'
import LinkedIn from '../../public/icons/linkedin-icon.svg'
import SunIcon from '../../public/icons/sun-icon.svg'
import { RootStore, store } from "@/store";
import { setIsOpenRightDrawer } from "@/store/root-store";
import { useSelector } from "react-redux";

function NavbarComponent() {
  const { isOpenRightDrawer } = useSelector((state: RootStore) => state.rootStore)
  const onClickRightDrawer = () => store.dispatch(setIsOpenRightDrawer(!isOpenRightDrawer))
  const [currentRoute, setCurrentRoute] = useState('')

    return (
      <div className={`absolute w-full min-[320px]:px-1 px-20`}>
        <nav className={`min-[320px]:h-10 h-12 bg-white flex justify-between items-center px-5 border-b-solid border-2 border-gray-300 rounded-lg`}>
          <Link href={`/`} onClick={() => setCurrentRoute('')} className="font-bold text-lg">
            <div className="flex"><p>krsn</p><span className="h-2.5 w-2.5 bg-blue-400 rounded-full my-auto ml-0.5"/></div>
          </Link>
     
            <div className="hidden md:flex p-10">
              {navRoute.map(route => {
                  const isPortofolio = route.route === '/portofolio'
                   return (
                    <div key={route.route} className="relative group" >
                      <div>
                   
                      <Link  
                          href={isPortofolio ? `` : `${route.route}`} 
                          onClick={() => setCurrentRoute(route.route)} 
                          className={`${currentRoute === route.route && !isPortofolio ? 'text-blue-600' : isPortofolio ? 'text-gray-500' : ''} p-2 font-semibold text-sm`}
                          aria-disabled={isPortofolio}
                        >
                        {route.name}
                      </Link>
                     </div>
                     {isPortofolio && 
                      <div 
                        className="tooltip absolute invisible group-hover:visible 
                        top-0 left-full mt-1 px-2 py-1 bg-gray-700
                         text-white rounded-md shadow-sm font-medium text-[8px]"
                      >
                          This page is currently under development
                    </div>}
                    </div>
                    
                   )
               })}
               <button className="mb-1">
                <Image src={SunIcon} alt="sun-icon" className="p-2" width={30} height={30}/>
               </button>
               <Link href={'https://www.linkedin.com/in/krisnadwisetyaadi'}>
                <Image src={LinkedIn} alt="linkedin-icon" className="p-2"  width={30} height={30}/>
               </Link>
             
            </div>
    
            <button type="button" className="min-[765px]:hidden" onClick={onClickRightDrawer}>
              <Image src={BarsIcon} alt="bars-icon" />
            </button>

        </nav>
      </div>
    )
}

export default NavbarComponent