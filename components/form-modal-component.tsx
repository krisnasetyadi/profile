import UploadComponent from "./upload-component";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import SelectComponent from "./select-component";

interface FormModalProps {
    isOpen: boolean;
    loading: boolean;
    forms: { type: string, label: string, name: string }[];
    setIsOpen:  Dispatch<SetStateAction<boolean>>;
    handleSubmit:  (data: any) => void; 
}
function FormModalComponent (props: FormModalProps) {
    const { isOpen, setIsOpen, forms, handleSubmit , loading} = props
    const [uploadFiles, setUploadFiles] = useState<File[]>([])
    const [selectValue, setSelectValue] = useState<{[key: string]: { value: string }} | undefined>()
    const [errors, setErrors] = useState({});
    console.log('errors', errors)
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

    
    const validateUpload = (file: File, fieldName: string): boolean => {
        const isDuplicate = uploadFiles.some((existingFile) => existingFile.name === file.name)
        if(isDuplicate) {
            setErrors(prev => ({ ...prev, [fieldName]: `cannot add the same ${fieldName}`}))
            return false
        }
        return true
    }

    const handleSelect = (props: any, e: any) => {
        setSelectValue({[e.name]: props.value})
    }


    const body = {
        uploadFiles,
        ...selectValue
    }

    function allValueFullied (body : any): boolean {
        console.log('body', body)
        if(Object.keys(body).length > 0  && !Object.keys(body).every(key => !!body[key])) {
            Object.keys(body).map(key =>   setErrors(prev => ({...prev, [key]: `${key} is required fields`})) )
          
        } else setErrors({})
        return Object.keys(body).length > 0 && Object.keys(body).every(key => !!body[key])
    }

    return isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-gray-500 opacity-50"  onClick={() => setIsOpen(prev => !prev)}/>
        <form 
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
                 event.preventDefault() 
                 if(allValueFullied(body)) {
                    handleSubmit(body)
                 }
            }} 
            className="flex z-10 bg-white p-6 rounded-lg">
            {forms.map((form: any) => {

                if(form.type === 'upload') {
                    return (
                        <div key={form.label}>
                            <UploadComponent
                                label={form.label}
                                name={'file'}
                                onChange={handleUpload}
                                errorMessage={errors} 
                                files={uploadFiles}
                                setUploadFiles={setUploadFiles}
                            />
                           
                        </div>
                    )
                    
                } 
                if(form.type === 'select') {
                    return (
                        <div key={form.label}>
                            <SelectComponent 
                                label={form.label}
                                name={form.name}
                                onChange={handleSelect}
                                options={[
                                    {
                                        value: 'Y',
                                        label: 'Y'
                                    },
                                    {
                                        value: 'N',
                                        label: 'N'
                                    }
                                ]} 
                                errorMessage={errors} 
                            />
                        </div>
                    )
                }
                return form
            })}
            <div className="flex justify-center items-center">
                <button disabled={loading} type="submit" className="rounded rounded-md border border-2 boder-gray-800 px-4 py-2 h-10  ml-10 bg-blue-500">
                {loading ? 'Loading...' : 'Submit'}
                </button>
            </div>
        </form>
      </div>
    )
}

export default FormModalComponent