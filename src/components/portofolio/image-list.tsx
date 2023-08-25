'use client'

import Image from "next/image"
import { circleChevronLeft, circleChevronRight } from "../../../public/icons"
import { useSelector } from "react-redux"
import { RootStore, store } from "@/store"
import { setCurrentImageIndex } from "@/store/root-store"

function ImageList ({images}: {images: string[] | undefined}) {
    const dataLength = images?.length
    const { currentImageIndex } =  useSelector((state: RootStore) => state.rootStore)
    const handleImagePagination = (i: number) => {
      store.dispatch(setCurrentImageIndex(i))
    }

    return (
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
                {dataLength && currentImageIndex !== dataLength - 1 && (
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

export default ImageList