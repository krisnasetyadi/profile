'use client'

import { useState, useEffect } from 'react'
import CardComponent from "@/components/card-component"
import { Items } from "@/constants/portofolio-constant"
import { useSelector } from 'react-redux'
import { RootStore } from '@/store'
import Link from 'next/link'
import { FirebaseApp } from '@/config/firebase-database'
import { getStorage, list, listAll, ref } from 'firebase/storage'
import { PortofolioApi } from '@/services'

// interface ItemType { 
//   id: number; 
//   image: string; 
//   project_name: string; 
//   project_role: string; 
// }
const ITEMS_PER_PAGE = 6

function PortofolioScreen () {
  const totalItem = Items.length
  const [totalPages, setTotalPages] =  useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(1)
  const [offset, setOffset] = useState(1)
  const [prefixesGroup, setPrefixesGroup] = useState<string[]>([])
  const { isMobileDimension } = useSelector((state: RootStore) => state.rootStore)

  const [data, setData] = useState<any[]>([])
  console.log('prefixesGroup', prefixesGroup)

  useEffect(() => {
    PortofolioApi.get({ limit: 1 })
    .then(({ Data }: any) => {
      setData(Data)
      console.log('Data_PortofolioApi', Data)
    })
    .catch(error => console.log('error_portofolio', error))

  }, [])
  useEffect(() => {
 
   
  

    setTotalPages(Math.ceil(totalItem / ITEMS_PER_PAGE))  
    if(isMobileDimension) {
      
        // setTotalPages(Math.ceil(totalItem / 2))
        setLimit((currentPage - 1) * 2)
        setOffset(limit + 2)
      
    } else {
        setLimit((currentPage - 1) * ITEMS_PER_PAGE)
        setOffset(limit + ITEMS_PER_PAGE)
        // setData(Items.slice(limit, offset))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isMobileDimension, limit, offset])

    return (
      <div className={`${isMobileDimension ? 'h-screen': ''} w-full pt-2`}>
        <div className={`${isMobileDimension ? 'overflow-y-auto  h-screen' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1`}>
            {data?.map(i => {
                return (
                  <div className="flex items-center justify-center p-2" key={i.id}>
                   <Link href={`portofolio/${i.id}`} >
                    <CardComponent 
                      id={i.id}
                      image={i.image_urls[0]}
                      project_name={i.project_name}
                      project_role={i.roles[0]}
                    />
                   </Link>
                  </div>
                )
            })}
        </div>
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`text-sm w-8 h-8 flex items-center justify-center rounded-md border border-gray-lighter/50 hover:bg-opacity-75 transition-all ease-out duration-100 ${
                currentPage === index + 1 ? 'bg-blue-400 text-white border-transparent' : 'bg-white dark:bg-current-light'
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
          </button>
          ))}
        </div>
      </div>
    )
}

export default PortofolioScreen