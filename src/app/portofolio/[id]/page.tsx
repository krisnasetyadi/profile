'use client'

import { useEffect, useState } from "react"

import Link from "next/link"
import { useParams } from "next/navigation"

import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'
import LoadingSpinner from "@/components/spinner"
import ClientWrapper from "@/components/wrapper/client"
import { ScrollArea } from "@/components/ui/scroll-area"
import ContentList from "@/components/portofolio/content-list"
import ToggleButton from "@/components/portofolio/toggle-button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import DetailDescription from "@/components/portofolio/detail-description"

import { PortofolioApi } from "@/services"

export default function PageScreen() {
    const { id } = useParams()
    const [data, setData] = useState<any>({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        PortofolioApi.find(Number(id))
            .then(({ Data }: any) => {
                setData(Data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log('error_get_detail', err)
                setData({})
                setIsLoading(false)
            })
    }, [id])

    return (
        <div className="relative container mx-auto h-full flex flex-col">
           <LoadingSpinner show={isLoading} />
            <Card className="flex-grow flex flex-col overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Link href="/portofolio">
                      <Button variant="ghost" size="sm">
                          <ArrowLeftIcon className="mr-2 h-4 w-4" />
                          Back
                      </Button>
                  </Link>
                  <ClientWrapper>
                      <ToggleButton videos={data?.video_urls} />
                  </ClientWrapper>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden flex flex-col">
                <ScrollArea className="flex-grow">
                  <div className="space-y-4">
                    <ClientWrapper>
                      <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                      }}>
                        <ContentList images={data?.image_urls} videos={data?.video_urls} />
                      </div>
                    </ClientWrapper>
                    <DetailDescription 
                        data={data}
                        columns={[
                            { title: 'Name', key: 'name' },
                            { title: 'Role', key: 'roles' },
                            { title: 'Stacks', key: 'stacks' },
                            { title: 'Others', key: 'others' },
                            { title: 'Links', key: 'links' },
                            { title: 'Description', key: 'description' }
                        ]}
                    />
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
        </div>
    )
}