'use client'

import { RootStore } from "@/store"
import { useSelector } from "react-redux"

function RightDrawer() {
    const { isOpenRightDrawer } = useSelector((state: RootStore) => state.rootStore)
    return (
        <div className="">
          <div className={`${isOpenRightDrawer ? 'w-full' : 'w-0'} absolute duration-300 h-screen bg-white opacity-95`}>
            <div>
              {/* asd */}
            </div>
          </div>
        </div>
    )
}

export default RightDrawer