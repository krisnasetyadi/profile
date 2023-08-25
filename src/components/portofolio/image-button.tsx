'use client'

import { RootStore, store } from "@/store"
import { setCurrentImageIndex } from "@/store/root-store"
import Image from "next/image"
import { useEffect } from "react"
import { useSelector } from "react-redux"

interface ImagesProps {
    images: string[] | undefined
}

function ImageScreen({images}: ImagesProps) {
    const { currentImageIndex } =  useSelector((state: RootStore) => state.rootStore) 
    const handleImagePagination = (i: number) => {
        store.dispatch(setCurrentImageIndex(i))
    }

    useEffect(() => {
        store.dispatch(setCurrentImageIndex(0))
    }, [])

    return( 
        <div className="flex justify-center gap-5 mt-2">
          {images?.map((i, idx) => {
                return (
                 <button key={idx} onClick={() => handleImagePagination(idx)} className={`${currentImageIndex === idx ? 'border-solid border-2 border-blue-600 ' : ''} ml-[-10px] z-20 rounded-lg`}>
                   <Image src={i} alt="images" width={100} height={100} className={`rounded-lg`}/>
                 </button>
                )
           })}
         </div>
    )
}

export default ImageScreen