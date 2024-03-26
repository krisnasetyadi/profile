import Image from "next/image";
import TrashIcon from '../../public/icons/trash-icon.svg'

interface UploadComponentProps {
    name: string;
    label: string;
    isMulti?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>
    errorMessage: {
        [key: string]: string;
    };
    files: File[];
    setUploadFiles: any;
}

function UploadComponent (props: UploadComponentProps) {
    const { name, label, isMulti=false, onChange, errorMessage, files, setUploadFiles } = props

    const handleDelete = (file: any) => {
        setUploadFiles((prev: File[]) => prev.filter(i => i.name !== file.name))
    }
    return (
        <>
            <div className="py-2 flex flex-col">
                <label className="uppercase">{label}</label>
                <input 
                    name={name} 
                    multiple={isMulti}
                    type="file"
                    className={`px-2 py-2  rounded rounded-md border ${errorMessage[name] ? 'border-red-600' : 'border-gray-500'}`}
                    onChange={onChange}
                />
                {errorMessage[name] && (<p className='text-red-400'>{errorMessage[name].includes('_') ? errorMessage[name].split('_').join(' ') : errorMessage[name]}</p>)}
                <p>Number of uploaded files: {files.length}</p>
            </div>
        
            <div className='grid grid-cols-3'> 
                {files.map((file: File, idx) => (
                <div key={idx} className='mr-2' > 
                    <div className='w-100 h-100'>
                        <button 
                            className='rounded-full h-5 w-5 absolute bg-white flex justify-center items-center' 
                            onClick={() => handleDelete(file)}
                        >
                            <Image src={TrashIcon} alt="trash-icon" width={10} height={10}/>
                        </button>
                        <Image src={URL.createObjectURL(file)} width={100} height={100} alt={file.name} />
                    </div>
                    <p>{file.name}</p>
                </div>
                ))
                }
            </div>
        
        </>
  
    )
}

export default UploadComponent