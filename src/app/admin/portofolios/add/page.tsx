'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import InputComponent from '@/components/input-component'
import TextAreaComponent from '@/components/text-area-component'
import SelectComponent from '@/components/select-component'
import classes from './admin.module.css'
import UploadComponent from '@/components/upload-component'
import { otherStackOptions, roleOptions, stackOptions } from '../../constant'
import PortofoliosApi from '@/services/resouces/portofolios'

interface FormData {
    [key: string]: string;
}

function StoreImagesScreen () {
    const router = useRouter()
    const [uploadFiles, setUploadFiles] = useState<File[]>([])
    const [errors, setErrors] = useState({})
    const [formData, setFormData]=useState<FormData>({
        project_name: '',
        description: '',
        stacks: '',
        others: '',
        roles: '',
        links: '',
        is_confidential: '',
    })
    
    const handleUpload = (e: any) => {
        const selectedFiles: FileList = e.target.files
        const fieldName = e.target.name
        if (selectedFiles.length > 0) {
            const validFile = Array.from(selectedFiles).filter((file) => validateUpload(file, fieldName))
            setUploadFiles((prev) => [...prev, ...validFile])
            e.target.value = null;
            setErrors((prev: any) => (prev[fieldName] && delete prev[fieldName], { ...prev }))
        }  
    }

    const validateForm = (): boolean => {
        let pass = []

        if(Object.keys(formData).length > 0) {
            Object.keys(formData).map(key => {
                if(formData[key].trim() === '' ) {
                    setErrors(prev =>({ ...prev, [key]: `${key} field is required` }))
                    pass.push(false)
                } else {
                    setErrors((prev: any) => (prev[key] && delete prev[key], {  ...prev }))
                    pass.push(true)
                }
            })
        }

        if(uploadFiles.length === 0) {
            setErrors(prev => ({ ...prev, 'images': 'upload file required'}))
            pass.push(false)
        } else {
            setErrors((prev: any) => (prev['images'] && delete prev['images'], {  ...prev }))
            pass.push(true)
        }

        return pass.every(i => i === true)
    }

    const validateUpload = (file: File, fieldName: string): boolean => {
        const isDuplicate = uploadFiles.some((existingFile) => existingFile.name === file.name)
        if(isDuplicate) {
            setErrors(prev => ({ ...prev, [fieldName]: `cannot add the same ${fieldName}`}))
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if(validateForm()) {
            const body: any = {
                ...formData, 
                links: formData.links.includes('/n') 
                    ? formData.links.replace(/\n/g, '') 
                    : formData.links,
                images: uploadFiles
            }

            const formDataBody = new FormData();
            for (const key in body) {
                if(key === 'images' && Array.isArray(body[key])) {
                    body[key].map((item: File) => {
                        formDataBody.append(key, item);
                    })
                } else {
                    formDataBody.append(key, body[key]);
                }               
            }

            PortofoliosApi.storePortofolios(formDataBody)
                .then(response => {
                    Swal.fire({ toast: true, text: 'Data saved successfully', icon: 'success'})
                    router.push('/admin/portofolios')
                })
                .catch(error => {
                    Swal.fire({ toast: true, text: error?.message, icon: 'error'})
                })
        }
        
    }
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSelectChange = (newValue: any, actionMeta: any)=> {
            setFormData(prev => ({ 
                ...prev, 
                [actionMeta.name]: newValue.map((m: any) => m.label).join(',')
            }))
        }

    return (
        <form onSubmit={handleSubmit} className='grid justify-center'>
            <div className={classes.projectForm}>
                <InputComponent 
                    label='Project Name' 
                    name='project_name' 
                    onChange={handleInputChange} 
                    errorMessage={errors} 
                />
                <SelectComponent 
                    label='Roles' 
                    name='roles' 
                    isMulti
                    options={roleOptions} 
                    onChange={handleSelectChange} 
                    errorMessage={errors}
                />
                <SelectComponent 
                    label='Stacks' 
                    name='stacks' 
                    isMulti
                    options={stackOptions} 
                    onChange={handleSelectChange} 
                    errorMessage={errors}
                    />
                <SelectComponent 
                    label='Others' 
                    name='others' 
                    isMulti
                    options={otherStackOptions} 
                    onChange={handleSelectChange} 
                    errorMessage={errors}
                />
            
                <SelectComponent 
                    label='CONFIDENTIAL' 
                    name='is_confidential' 
                    isMulti
                    options={[
                        {
                            label: 'Y',
                            value: 'y',
                        },
                        {
                            label: 'N',
                            value: 'n'
                        }
                    ]} 
                    onChange={handleSelectChange} 
                    errorMessage={errors}
                />
                <div/>
                <TextAreaComponent 
                    label="Description" 
                    name='description' 
                    onChange={handleInputChange} 
                    errorMessage={errors} 
                />
                <TextAreaComponent 
                    label="Links" 
                    name='links'
                    placeholder='enter multiple links separated by commas'
                    onChange={handleInputChange} 
                    errorMessage={errors} 
                />
                <UploadComponent
                    label='Images'
                    name='images'
                    onChange={handleUpload}
                    isMulti
                    errorMessage={errors} 
                    files={uploadFiles}
                    setUploadFiles={setUploadFiles}
                />
            </div>
            <div className={classes.sumbitButton}>
                <button className='px-3 py-1 bg-gray-200 border border-gray-800 rounded rounded-md my-2 text-gray-800 font-semibold' style={{float: 'right'}} type='submit'>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default StoreImagesScreen