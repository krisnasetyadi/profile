import { Input } from "@/components/ui/input/input"; 
import { Label } from "@/components/ui/label/label"; 
import { cn } from "@/lib/utils"; 
import {  FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>; 
  register: UseFormRegister<T>; 
  errorMessage?: string;
  disabled?: boolean
};

function InputComponent<T extends FieldValues>(props: InputProps<T>) {
  const { label, name, errorMessage, register, disabled=false } = props;

  return (
    <div className="py-2 flex flex-col">
      <Label className="uppercase mb-2 font-sm" htmlFor={String(name)}>
        {label}
      </Label>
      <Input
        {...register(name)}
        id={String(name)}
        name={String(name)} 
        type="text" 
        className={cn(
          "px-3 py-2 rounded-md border transition duration-200 ease-in-out",
          errorMessage 
            ? "border-red-600 focus:border-red-600 focus:ring-red-600" // Focus color for error
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500" // Default focus colors
        )}

        disabled={disabled}
      />
      {errorMessage && (
        <p className="mt-1 text-red-500 text-sm">
          {errorMessage.includes("_")
            ? errorMessage.split("_").join(" ").toLowerCase()
            : errorMessage.toLowerCase()}
        </p>
      )}
    </div>
  );
}

export default InputComponent;
