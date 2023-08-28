'use client'

import Image from "next/image"
import { circleChevronLeft, circleChevronRight } from "../../../public/icons"
import { useSelector } from "react-redux"
import { RootStore, store } from "@/store"
import { setCurrentImageIndex, setCurrentVideoIndex } from "@/store/root-store"

interface ContentListProps {
  images: string[] | undefined;
  videos: string[] | undefined
}

function ContentList ({images, videos}: ContentListProps) {
    const { currentImageIndex, currentVideoIndex , activeButtonsDetail } =  useSelector((state: RootStore) => state.rootStore)
    const imageLength = images?.length
    const videoLength = videos?.length

    const handleImagePagination = (i: number) => {
      store.dispatch(setCurrentImageIndex(i))
    }

    const handleVideoPagination = (i: number) => {
      store.dispatch(setCurrentVideoIndex(i))
    }

    let content 

    if(activeButtonsDetail === 'image') {
      content = (
        <>
        {images?.length ? images.map((image, idx) => { 
          if(currentImageIndex === idx) {
            return (
              <div className="flex items-center" key={image}>
                {currentImageIndex !== 0 && (
                  <button className="mr-[-10px] z-20" onClick={() => handleImagePagination(idx - 1)}>
                  <Image src={circleChevronLeft} alt="chevron left" width={20} />
                </button>
                )}
              
                <Image src={`${image}`} alt="image-content" width={520} height={400} />
                {imageLength && currentImageIndex !== imageLength - 1 && (
                  <button  className="ml-[-10px] z-20"  onClick={() => handleImagePagination(idx + 1)}>
                    <Image src={circleChevronRight} alt="chevron right" width={20} />
                  </button>
                )}

              </div>
            )
          }
        }) : (
          <div className="flex h-80 w-80 bg-gray-200 items-center justify-center rounded-lg">
            No Content Available
          </div>
        )}
      </>
      )
    } 

    if(activeButtonsDetail === 'video') {
      content = (
        <>
        {videos?.length ? videos.map((video, idx) => { 
          if(currentVideoIndex === idx) {
            return (
              <div className="flex items-center" key={video}>
                {currentVideoIndex !== 0 && (
                  <button className="mr-[-10px] z-20" onClick={() => handleVideoPagination(idx - 1)}>
                  <Image src={circleChevronLeft} alt="chevron left" width={20} />
                </button>
                )}
                <video src={video} controls  width={520} height={400}/>
      
                {videoLength && currentVideoIndex !== videoLength - 1 && (
                  <button  className="ml-[-10px] z-20"  onClick={() => handleVideoPagination(idx + 1)}>
                    <Image src={circleChevronRight} alt="chevron right" width={20} />
                  </button>
                )}

              </div>
            )
          }
        }) : (
          <div className="flex h-80 w-80 bg-gray-200 items-center justify-center rounded-lg">
            No Content Available
          </div>
        )}
      </>
      )
    }

    return (
      <>{content}</>
    )
}

export default ContentList