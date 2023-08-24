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
                   return (
                     <Link key={route.route} href={`${route.route}`} onClick={onClickRightDrawer} className="p-2 font-semibold">
                       {route.name}
                     </Link>
                   )
                  })}
                </div>
              </div>
            )}
          </div>
    )
}

export default RightDrawer