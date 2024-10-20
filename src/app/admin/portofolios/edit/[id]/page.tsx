'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import * as yup from 'yup'
import InputComponent  from '@/components/ui/input' 
import  {TextareaComponent} from '@/components/ui/text-area/index'
import { InputFile } from '@/components/ui/upload-file' 
import { otherStackOptions, roleOptions, stackOptions } from '../../../constant'
import PortofoliosApi from '@/services/resouces/portofolios'
import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectComponent from '@/components/ui/select/index'
import { SwitchComponent } from '@/components/ui/switch'
import images from '@/services/resouces/images'

type SelectOption = {
    value: string;
    label: string;
  };

type FormData = {
    name: string;
    roles: SelectOption[];
    stacks: SelectOption[];
    others: SelectOption[];
    description: string;
    links: string;
    // is_confidential?: boolean;
    // images: FileList;
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    roles: yup.array().of(
      yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required()
      })
    ).required(),
    stacks: yup.array().of(
      yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required()
      })
    ).required(),
    others: yup.array().of(
      yup.object().shape({
        value: yup.string().required(),
        label: yup.string().required()
      })
    ).required(),
    description: yup.string().required(),
    links: yup.string().required(),
    // is_confidential: yup.boolean(),
    // images: yup.mixed()
  });
  
function EditScreen({params}: any) {
    console.log('params', params)
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        
        
    });
    const router = useRouter()
    const [uploadFiles, setUploadFiles] = useState<File[]>([])
    const [errorsField, setErrors] = useState({})
    const [data, setData] = useState({})
    const [checked, setChecked] = useState<boolean>(false)

    function mapObjectToLabelValueShape(array=[]) {
        return array.map((r: any) => ({
            value: r.toLowerCase(),
            label: r
        }))
    }

    function fetchDataById() {
        PortofoliosApi.find(params.id)
            .then(({Data}: any) => {
                setValue('name', Data.name)
                setValue('roles', mapObjectToLabelValueShape(Data.roles))
                setValue('stacks', mapObjectToLabelValueShape(Data.stacks))
                setValue('others', mapObjectToLabelValueShape(Data.others))
                setValue('description', Data.description)
                setValue('links', Data.links.join(','))
                // setValue('images', Data.images)
                setData(Data)
            })
            .catch(error => {
                console.log('error_fetch', error)
            })
    }

    useEffect(() => {
        fetchDataById()
    }, [params])
   
    const handleFileChange = (e: any) => {
        const selectedFiles: FileList = e.target.files
        const fieldName = e.target.name
        if (selectedFiles.length > 0) {
            const validFile = Array.from(selectedFiles).filter((file) => validateUpload(file, fieldName))
            setUploadFiles((prev) => [...prev, ...validFile])
            e.target.value = null;
            setErrors((prev: any) => (prev[fieldName] && delete prev[fieldName], { ...prev }))
        }  
    };

    const validateUpload = (file: File, fieldName: any): boolean => {
        const isDuplicate = uploadFiles.some(existingFile => existingFile.name === file.name);
        if (isDuplicate) {
            Swal.fire({
                toast: true,
                text: `Cannot upload duplicate file: ${file.name}`,
                icon: 'warning',
                position: 'top',
                timer: 3000,
                showConfirmButton: false
            });
            return false;
        }
        return true;
    };

    const onSubmit: SubmitHandler<FormData> = async (formData) => {
        const body = {
            ...formData,
            roles: formData.roles.map(m => m.label).join(','),
            stacks: formData.stacks.map(m => m.label).join(','),
            others: formData.others.map(m => m.label).join(','),
            images: uploadFiles
        }

        const formDataBody = new FormData();
        Object.keys(body).forEach(key => {
            if (key === 'images') {
                Array.from(body.images).forEach(file => {
                    formDataBody.append(key, file);
                });
            } else {
                formDataBody.append(key, body[key as keyof FormData] as any);
            }
        });

        try {
            await PortofoliosApi.update(formDataBody, params.id);
            Swal.fire({
                toast: true,
                text: 'Data saved successfully',
                icon: 'success',
                position: 'top',
                timer: 3000,
                showConfirmButton: false
            });
            router.push('/admin/portofolios');
        } catch (error: any) {
            Swal.fire({
                toast: true,
                text: 'Something went wrong',
                icon: 'error',
                position: 'top',
                timer: 3000,
                showConfirmButton: false
            });
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid justify-center p-6'>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                gridTemplateRows: '100px'
            }}>
                <InputComponent 
                  label='Project Name'
                  name='name'
                  register={register}
                  errorMessage={errors?.name?.message}
                  disabled
                />
                <SelectComponent 
                    name="roles"
                    label="Roles"
                    options={roleOptions}
                    control={control}
                    isMulti={true} 
                    errorMessage={errors.roles?.message} 
                />
               <SelectComponent 
                    name="stacks"
                    label="Stacks"
                    options={stackOptions}
                    control={control}
                    isMulti={true} 
                    errorMessage={errors.stacks?.message} 
                />
               <SelectComponent 
                    name="others"
                    label="Others"
                    options={otherStackOptions}
                    control={control}
                    isMulti={true} 
                    errorMessage={errors.others?.message} 
                />

                <TextareaComponent
                    label="Description"
                    name='description'
                    register={register}
                    errorMessage={errors.description?.message}
                />

                <TextareaComponent
                    label="Links"
                    name='links'
                    placeholder='Enter multiple links separated by commas'
                    register={register}
                    errorMessage={errors.links?.message}
                />

                <InputFile
                    name="images"
                    label="Upload Image"
                    onChange={handleFileChange}
                    // errorMessage={errorsField?.images?.message}
                />

                <div>
                    <SwitchComponent
                        isChecked
                        handleChange={(e)=> setChecked(!checked)}
                        label='Is Confidential'
                    />
                    {/* <span>{errors.is_confidential?.message}</span> */}
                </div>
               
            </div>
            <div className="mt-6">
                <Button type='submit' className='w-full bg-gray-200 text-gray-800 hover:bg-gray-300'>
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default EditScreen
