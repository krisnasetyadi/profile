import { CircleCheck, CirclePlus } from "lucide-react";

export const CheckedIcon = () => (
  <span className="text-green-500 text-xs">
    <CircleCheck className="h-4 w-4" />
  </span>
);

export const FailedIcon = () => (
  <span className="text-destructive text-xs rotate-45">
    <CirclePlus className="h-4 w-4" />
  </span>
);
