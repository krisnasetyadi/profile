'use client'

import Image from "next/image"
import { useSelector } from "react-redux"
import { RootStore, store } from "@/store"
// import { setCurrentImageIndex, setCurrentVideoIndex } from "@/store/root-store"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

interface ContentListProps {
  images: string[] | undefined;
  videos: string[] | undefined
  onSlideChange?: (index: number) => void;
}

function ContentList({ images, videos }: ContentListProps) {
    const { activeButtonsDetail } = useSelector((state: RootStore) => state.rootStore)

    const content = activeButtonsDetail === 'image' ? images : videos
    
    // const handleSlideChange = (index: number):void => {
    //   if (activeButtonsDetail === 'image') {
    //     store.dispatch(setCurrentImageIndex(index))
    //   } else {
    //     store.dispatch(setCurrentVideoIndex(index))
    //   }
    // }

    return (
      <Carousel 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl"
      >
        <CarouselContent>
          {content && content.length > 0 ? (
            content.map((item, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {activeButtonsDetail === 'image' ? (
                        <Image src={item} alt={`image-${index}`} width={520} height={400} className="object-cover" />
                      ) : (
                        <video src={item} controls width={520} height={400} className="object-cover" />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))
          ) : (
            <CarouselItem>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <p>No Content Available</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
}

export default ContentList