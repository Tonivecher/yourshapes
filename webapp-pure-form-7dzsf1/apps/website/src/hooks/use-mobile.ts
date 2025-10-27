import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = `(max-width: ${breakpoint}px)`;
    const media = window.matchMedia(mq);

    const handler = (ev: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(media.matches);
    };

    // modern API returns MediaQueryList with addEventListener in some browsers
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handler as any);
    } else if (typeof media.addListener === "function") {
      media.addListener(handler as any);
    }

    // initial sync
    setIsMobile(media.matches);

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", handler as any);
      } else if (typeof media.removeListener === "function") {
        media.removeListener(handler as any);
      }
    };
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
