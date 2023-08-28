'use client'

import { RootStore, store } from "@/store"
import { setCurrentImageIndex } from "@/store/root-store"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"

interface ContentButtonProps {
    images: string[] | undefined
    videos: string[] | undefined
}

function ContentButton({images, videos}: ContentButtonProps) {
    const { currentImageIndex, activeButtonsDetail } =  useSelector((state: RootStore) => state.rootStore) 
    const handleImagePagination = (i: number) => {
        store.dispatch(setCurrentImageIndex(i))
    }
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        store.dispatch(setCurrentImageIndex(0))
    }, [])

    let content
    if(activeButtonsDetail === 'image') {
        content = (
            <>
              {images?.map((i, idx) => {
                return (
                 <button key={idx} onClick={() => handleImagePagination(idx)} className={`${currentImageIndex === idx ? 'border-solid border-2 border-blue-600 ' : ''} ml-[-10px] z-20 rounded-lg`}>
                   <Image src={i} alt="images" width={100} height={100} className={`rounded-lg`}/>
                 </button>
                )
              })}
            </>
        )
    }
    
    if(activeButtonsDetail === 'video') {
        content = (
            <>
              {videos?.map((i, idx) => {
                return (
                 <button 
                    key={idx} 
                    onClick={() => handleImagePagination(idx)} 
                    className={`
                        ${currentImageIndex === idx ? 'border-solid border-2 border-blue-600 ' : ''} 
                        ml-[-10px] z-20 rounded-lg`}
                    >
                      <canvas  width={100} height={100}  className={`rounded-lg`}>
                        <video 
                            src={i}
                            width={100} 
                            height={100} 
                            preload="metadata"
                            onLoadedMetadata={(e) => {
                                const video = e.currentTarget
                                const canvas = document.getElementById(`canvas-${idx}`) as HTMLCanvasElement;
                                if (canvas) {
                                  canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
                                }
                            }}
                        />
                      </canvas>
                 </button>
                )
              })}
            </>
        )
    }
    

    return( 
        <div className="flex justify-center gap-5 mt-2">
            {content}
         </div>
    )
}

export default ContentButton