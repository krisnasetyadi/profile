'use client'

import { CVApi } from "@/services"
import Image from "next/image"
import { FormEvent, useEffect, useState } from "react"
import { addIcon, editIcon, pdfIcon, trashIcon } from "../../../../public/icons"
import { formattedDateNow } from "@/utils/helper"
import FormModal from "@/components/form-modal-component"
import Swal from "sweetalert2"

function CVComponent () {
    const [cvData, setCvData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        CVApi.get()
            .then(({ Data }: any) => {
                console.log('Data', Data)
                setCvData(Data)
            })
            .catch((error) => {
                console.log('errror', error)
            })
    }, [])

    const handleDelete = (id: number) => {
        Swal.fire({
            toast: true, 
            text: 'Are you sure want to delete ?', 
            position: 'top', 
            showConfirmButton: true,
            confirmButtonText: 'Delete',
            showDenyButton: true
        }).then(({isConfirmed}) => {
            if(isConfirmed) {
                CVApi.delete(id)
                    .then(({ Data }: any) => {
                        setCvData(Data || [])
                        Swal.fire({ toast: true,  text: `Data with id ${id} deleted successfully`, icon: 'success' })
                    })
                    .catch((error) => {
                        console.log('errror', error)
                    })
            }
        })
      
    }

    const handleAddCv = () => setIsModalOpen(prev => !prev)
    const onSubmit = (data: any) => {

        setIsLoading(true)
        console.log('data_data', data)
        const formData = new FormData()
        data?.uploadFiles.forEach((d: File) => {
            formData.append('file', d)
        })
        formData.append('is_default', data.is_default ? data.is_default : 'N')
        
        CVApi.updateCV(formData)
            .then(({ Data }: any) => {
                setCvData(Data)
                setIsLoading(false)
                setIsModalOpen(false)
            })
            .catch((error) => {
                console.log('errror', error)
                setIsLoading(false)
            })

    }
    return (
        <div>
            <div className="flex items-center gap-2">
                <span className="font-semibold">Your available CV</span>
                <button 
                    disabled={cvData?.length > 0 } 
                    onClick={handleAddCv} 
                    className="flex gap-2 items-center my-2 py-1 px-1 rounded rounded-md border border-gray-700 disabled:opacity-20 disabled:bg-gray-200">
                    <span className="text-sm">Add</span> 
                    <Image src={addIcon} alt="add icon" width={15} height={15}/>
                </button>
            </div>
            <FormModal 
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen}
                forms={[
                    {
                        type: 'upload',
                        label: 'Upload CV',
                        name: 'upload'
                    },
                    {
                        type: 'select',
                        label: 'SET AS DEFAULT CV',
                        name: 'is_default'
                    }
                ]}
                loading={isLoading}
                handleSubmit={onSubmit}
            />
            <div className="border border-black rounded rounded-md flex justify-center py-5">
                {cvData?.length > 0 ? cvData.map((m: any) => {
                    return (
                        <div key={m.name} className="border border-gray-500 rounded-lg w-[230px] flex ">
                            <div className="flex justify-center items-center pl-2 rounded rounded-md">
                                <Image src={pdfIcon} alt="pdf icon" width={50} height={100}  />
                            </div>
                            
                            <div className="py-2 px-1 flex">
                                <div>
                                    <p className="font-semibold text-sm">{m.name}</p>
                                    <span className="lowercase text-xs text-gray-600">Last Update: {formattedDateNow((m.updated_at))}</span>
                                </div>
                                
                                <div className="flex">
                                {/* onClick={() => handleDelete(m.id)} */}
                                    <button  type="button" onClick={() => handleDelete(m.id)}  className="bg-white w-5 h-5 rounded-lg  flex justify-center items-center hover:bg-gray-200">
                                        <Image src={trashIcon} alt='trash icon' width={15} height={15}/>
                                    </button>
                                    <button  type="button" onClick={() => setIsModalOpen(true)} className="bg-white w-5 h-5 rounded-lg  flex justify-center items-center hover:bg-gray-200">
                                        <Image src={editIcon} alt='edit icon' width={15} height={15}/>
                                    </button>
                                </div>
                               
                            </div>
                           
                        </div>
                    )
                }) : (
                    <div className="flex h-10 w-80 md:h-[100px] md:w-[520px] bg-gray-200 items-center justify-center rounded-lg">
                        No Content Available
                    </div>
                )}
            </div>
        </div>
    )
}

export default CVComponent