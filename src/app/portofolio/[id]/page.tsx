'use client'

import ContentButton from '../../../components/portofolio/content-button'
import ContentList from "@/components/portofolio/content-list"
import ClientWrapper from "@/components/wrapper/client"
import DetailDescription from "@/components/portofolio/detail-description"
import ToggleButton from "@/components/portofolio/toggle-button"
import Image from "next/image"
import { arrowLeftIcon } from "../../../../public/icons"
import Link from "next/link"
import { PortofolioApi } from "@/services"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function  PageScreen () {
    const { id } = useParams()
    const [data, setData] = useState<any>({})

    useEffect(() => {
      PortofolioApi.find(Number(id))
        .then(({ Data }: any) => {
          setData(Data)
        })
        .catch(err => {
          console.log('error_get_detail', err)
          setData({})
        })
    }, [])

    return (
        <div className="flex justify-center items-center pt-1 md:pt-2 pb-2 md:pb-5">
          <div className="mt-1">
            <div className="flex justify-between md:py-1.5 px-2">
              <Link href={'/portofolio'}  className="flex items-center">
                <Image src={arrowLeftIcon} alt='back button' />
                <p className="font-semibold ml-2 text-xs md:text-md">Back</p>
              </Link>
              <ClientWrapper>
                <ToggleButton videos={data?.video_urls}  />
              </ClientWrapper>
            </div>
            <div>
              <ClientWrapper>
                <ContentList  images={data?.image_urls} videos={data?.video_urls}/> 
                <ContentButton images={data?.image_urls} videos={data?.video_urls} />
              </ClientWrapper> 
            </div>
            <div className="flex justify-center pt-2">
              <DetailDescription 
                data={data}
                columns={[
                  {
                    title: 'Name',
                    key: 'project_name',
                  },
                  {
                    title: 'Role',
                    key: 'roles',
                  },
                  {
                    title: 'Stacks',
                    key: 'stacks',
                  },
                  {
                    title: 'Others',
                    key: 'others',
                  },
                  {
                    title: 'Links',
                    key: 'links',
                  },
                  {
                    title: 'Description',
                    key: 'project_description'
                  }
                ]}
              />
            </div>
          </div>
        </div>
    )
}