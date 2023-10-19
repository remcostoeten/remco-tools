import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const headerSpacing = 'clear-header';

export const headerSpacingAside = 'clear-header--aside';
       