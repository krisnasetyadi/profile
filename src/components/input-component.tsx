'use client'

type InputProps = {
    label: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage: {
        [key: string]: string;
    };
}

function InputComponent (props: InputProps) {
    const { label, name, onChange, errorMessage } = props
    return (
        <div className="py-2 flex flex-col">
            <label className="uppercase">{label}</label>
            <input 
              name={name} 
              type="input"
              className={`px-2 py-2  rounded rounded-md border ${errorMessage[name] ? 'border-red-600' : 'border-gray-500'}`}
              onChange={onChange}
            />
            {errorMessage[name] && (<p className='text-red-400'>{errorMessage[name].includes('_') ? errorMessage[name].split('_').join(' ') : errorMessage[name]}</p>)}
        </div>
    )
}

export default InputComponent