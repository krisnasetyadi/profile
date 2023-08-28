
import { Items } from "@/constants/portofolio-constant"
import ContentButton from '../../../components/portofolio/content-button'
import ContentList from "@/components/portofolio/content-list"
import ClientWrapper from "@/components/wrapper/client"
import DetailDescription from "@/components/portofolio/detail-description"
import ToggleButton from "@/components/portofolio/toggle-button"
import Image from "next/image"
import { arrowLeftIcon } from "../../../../public/icons"
import Link from "next/link"

interface PageScreenProps {
    id: string
}

function  PageScreen ({params}: {params: PageScreenProps}) {
    const data = Items.find(i => i.id === Number(params.id))
    
    return (
        <div className="flex justify-center items-center pt-1 md:pt-2 pb-2 md:pb-5">
          <div className="mt-1">
            <div className="flex justify-between md:py-1.5 px-2">
              <Link href={'/portofolio'}  className="flex items-center">
                <Image src={arrowLeftIcon} alt='back button' />
                <p className="font-semibold ml-2 text-xs md:text-md">Back</p>
              </Link>
              <ClientWrapper>
                <ToggleButton  />
              </ClientWrapper>
            </div>
            <div>
              <ClientWrapper>
                <ContentList  images={data?.images} videos={data?.videos}/> 
                <ContentButton images={data?.images} videos={data?.videos} />
              </ClientWrapper> 
            </div>
            <div className="flex justify-center pt-2">
              {data && <DetailDescription data={data} />}
            </div>
          </div>
        </div>
    )
}

export default PageScreen