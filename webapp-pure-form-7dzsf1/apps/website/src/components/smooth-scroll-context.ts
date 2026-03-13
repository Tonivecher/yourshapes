import { createContext } from "react";
import type Lenis from "@studio-freight/lenis";

export type ScrollTarget = string | number | HTMLElement;

export interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  immediate?: boolean;
}

export interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (target: ScrollTarget, options?: SmoothScrollOptions) => void;
}

export const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => undefined,
});
