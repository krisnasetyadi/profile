import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateDuplicatedItems(items: any[], count?: number): any[] {
  const minCount = count || 10;
  const timesToDuplicate =
    items.length < minCount ? Math.ceil(minCount / items.length) : 1;

  return Array(timesToDuplicate).fill(items).flat().slice(0, minCount);
}
