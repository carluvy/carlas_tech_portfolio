import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function captionFromSrc(src: string) {
  const filename = src.split("/").pop()?.split(".")[0] ?? ""
  return filename
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase())
}
