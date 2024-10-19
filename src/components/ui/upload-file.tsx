import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { useController, Control } from "react-hook-form";

interface InputFileProps {
  name: string;
  control: Control<any>;
  label?: string;
  errorMessage?: string;
}

export function InputFile({ name, control, label = "File", errorMessage }: InputFileProps) {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type="file"
        onChange={(e) => field.onChange(e.target.files)} // Pass the selected file(s) to the form
        onBlur={field.onBlur}
        ref={field.ref}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );
}
