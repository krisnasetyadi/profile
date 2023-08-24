import { Items } from "@/constants/portofolio-constant"
import Image from "next/image"

import ImageButton from '../../../components/portofolio/image-button'
import ImageList from "@/components/portofolio/image-list"
import ClientWrapper from "@/components/wrapper/client"

interface PageScreenProps {
    id: string
}

function  PageScreen ({params}: {params: PageScreenProps}) {
    const data = Items.find(i => i.id === Number(params.id))

    return (
        <div className="flex justify-center items-center h-full">
          <div>
            <div className="flex justify-between">
              <p className="font-semibold">{data?.project_name}</p>
              <span>image/video</span>
            </div>
            <div>
            <ClientWrapper>
              <ImageList  images={data?.images} /> 
              <ImageButton images={data?.images} />
            </ClientWrapper> 
            </div>
            <div className="flex justify-center">
              {/* <b>Desc</b> */}
              <p className="w-40">
                Description
              </p>
            </div>

          </div>
        </div>
    )
}

export default PageScreen