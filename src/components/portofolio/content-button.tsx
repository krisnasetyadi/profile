'use client'

import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import Image from "next/image"
import { RootStore, store } from "@/store"
import { setCurrentImageIndex } from "@/store/root-store"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ContentButtonProps {
    images: string[] | undefined
    videos: string[] | undefined
}

function ContentButton({images, videos}: ContentButtonProps) {
    const { currentImageIndex, activeButtonsDetail } = useSelector((state: RootStore) => state.rootStore) 
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    
    console.log('currentImageIndex', currentImageIndex)
    useEffect(() => {
        store.dispatch(setCurrentImageIndex(0))
    }, [])

    const handleImagePagination = (i: number) => {
        store.dispatch(setCurrentImageIndex(i))
    }

    const renderThumbnail = (src: string, idx: number) => (
        <Button
            key={idx}
            variant="outline"
            className={`p-0 m-1 w-24 h-24 ${currentImageIndex === idx ? 'ring-2 ring-primary' : ''}`}
            onClick={() => handleImagePagination(idx)}
        >
            {activeButtonsDetail === 'image' ? (
                <Image src={src} alt={`thumbnail-${idx}`} width={100} height={100} className="object-cover rounded-sm" />
            ) : (
                <canvas id={`canvas-${idx}`} ref={canvasRef} width={100} height={100} className="rounded-sm">
                    <video 
                        src={src}
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
            )}
        </Button>
    )

    const content = activeButtonsDetail === 'image' ? images : videos

    return (
        <ScrollArea className="w-full max-w-2xl mx-auto mt-4">
            <div className="flex">
                {content?.map((src, idx) => renderThumbnail(src, idx))}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default ContentButton