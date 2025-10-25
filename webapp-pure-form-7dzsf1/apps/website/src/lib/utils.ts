import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix asset paths with the Vite base URL so that GitHub Pages (served from /<repo>)
 * resolves static files correctly.
 */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}/${path.replace(/^\/+/, "")}`;
}
