'use client'

import { RootStore, store } from "@/store"
import { useSelector } from "react-redux"
import { setIsOpenRightDrawer } from "@/store/root-store";
import xMarkIcon from '../../public/icons/x-mark-icon.svg'
import Image from "next/image";
import { navRoute } from "@/constants/navbar-constants"
import Link from "next/link";

function RightDrawer() {
    const { isOpenRightDrawer } = useSelector((state: RootStore) => state.rootStore)
    const onClickRightDrawer = () => store.dispatch(setIsOpenRightDrawer(!isOpenRightDrawer))
    
    return (
          <div className={`${isOpenRightDrawer ? 'w-full' : 'w-0'} absolute duration-300 h-screen bg-white opacity-95 z-50`}>
            {isOpenRightDrawer && (
              <div>
                <div className="flex">
                  <div className="flex-1" />
                  <button onClick={onClickRightDrawer}>
                    <Image src={xMarkIcon} alt='x-mark-icon' width={21} height={21} className="mr-5 mt-2" />
                  </button>
                </div>
                <div className="grid grid-rows-2 p-5 gap-4">
                  <Link href={'/'}  className="p-2 font-semibold"  onClick={onClickRightDrawer}>
                    Home
                  </Link>
                 {navRoute.map(route => {
                  const isPortofolio = route.route === '/portofolio'
                   return (
                    <div key={route.route} className="relative group" >
                      <div>
                     <Link 
                        href={isPortofolio ? '' : `${route.route}`} 
                        {...(!isPortofolio && {onClick: onClickRightDrawer})}
                        className={`p-2 font-semibold ${isPortofolio ? 'text-gray-500' : ''}`}
                      >
                       {route.name}
                     </Link>
                     </div>
                     {isPortofolio && 
                        <div 
                          className="tooltip absolute invisible group-hover:visible 
                          top-4 right-1/4 mt-1 px-2 py-1 bg-gray-700
                          text-white rounded-md shadow-sm font-medium text-[9px]"
                        >
                            This page is currently under development
                      </div>
                    }
                    </div>
                   )
                  })}
                </div>
              </div>
            )}
          </div>
    )
}

export default RightDrawer