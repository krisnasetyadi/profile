import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { useController, Control } from "react-hook-form";

interface InputFileProps {
  name: string;
  label?: string;
  errorMessage?: string;
  onChange:(e: any)=> void;
}

export function InputFile({ name, label = "File", errorMessage, onChange }: InputFileProps) {
 

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="file"
        onChange={(e) => onChange(e)} 
        // onBlur={field.onBlur}
        // ref={field.ref}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}
