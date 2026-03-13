import { useContext } from "react";

import { SmoothScrollContext } from "@/components/smooth-scroll-context";

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
