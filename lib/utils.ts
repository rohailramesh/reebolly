import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};
