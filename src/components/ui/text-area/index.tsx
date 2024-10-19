import { Textarea } from "@/components/ui/text-area/textarea"
import { Label } from "../label/label"
import { cn } from "@/lib/utils";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TextProps<T extends FieldValues> = {
    label: string;
    name: Path<T>;
    errorMessage: string | undefined;
    placeholder?: string;
    register: UseFormRegister<T>
}
export function TextareaComponent<T extends FieldValues>({
    label,
    errorMessage,
    name,
    register,
    placeholder ='Type your message here.'
}: TextProps<T>) {
  return <div  className="py-2 flex flex-col">
      <Label className="uppercase mb-2 font-sm" htmlFor={String(name)}>
        {label}
      </Label>
      <Textarea 
        {...register(name)}
        id={String(name)}
        name={String(name)} 
        placeholder={placeholder} 
        className={cn(
            "px-3 py-2 rounded-md border transition duration-200 ease-in-out",
            errorMessage 
            ? "border-red-600 focus:border-red-600 focus:ring-red-600" // Focus color for error
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500" // Default focus colors
        )}
        />

        {errorMessage && (
            <p className="mt-1 text-red-500 text-sm">
            {errorMessage.includes("_")
                ? errorMessage.split("_").join(" ").toLowerCase()
                : errorMessage.toLowerCase()}
            </p>
        )}
  </div>
}
