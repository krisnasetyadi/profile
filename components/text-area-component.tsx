'use client'

interface TextAreaProps {
    label: string;
    name: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    errorMessage: {
        [key: string]: string;
    }
}

function TextAreaComponent(props: TextAreaProps) {
    const { label, name, onChange, errorMessage, placeholder } = props
    return (
        <div className="py-2 flex flex-col">
            <label className="uppercase">{label}</label>
            <textarea
                name={name}
                placeholder={placeholder}
                className={`px-2 py-2 rounded rounded-md border ${errorMessage[name] ? 'border-red-600' : 'border-gray-500'}`}
                onChange={onChange}
            />
            {errorMessage[name] && (
                <p className="text-red-400">{errorMessage[name].includes('_') ? errorMessage[name].split('_').join(' ') : errorMessage[name]}</p>
            )}
        </div>
    )
}

export default TextAreaComponent