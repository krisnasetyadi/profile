
import { Items } from "@/constants/portofolio-constant"
import ImageButton from '../../../components/portofolio/image-button'
import ImageList from "@/components/portofolio/image-list"
import ClientWrapper from "@/components/wrapper/client"
import DetailDescription from "@/components/portofolio/detail-description"
import ToggleButton from "@/components/portofolio/toggle-button"

interface PageScreenProps {
    id: string
}

function  PageScreen ({params}: {params: PageScreenProps}) {
    const data = Items.find(i => i.id === Number(params.id))

    return (
        <div className="flex justify-center items-center pt-1 md:pt-2 pb-2 md:pb-5">
          <div>
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Back</p>
              <ClientWrapper>
                <ToggleButton  />
              </ClientWrapper>
            </div>
            <div>
            <ClientWrapper>
              <ImageList  images={data?.images} /> 
              <ImageButton images={data?.images} />
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