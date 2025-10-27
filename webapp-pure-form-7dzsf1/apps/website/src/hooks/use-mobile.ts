import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  )

  useEffect(() => {
    if (typeof window === "undefined") return

    const mq = `(max-width: ${breakpoint}px)`
    const media = window.matchMedia(mq)

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches)
    }

    // modern API returns MediaQueryList with addEventListener in some browsers
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange)
    } else if (typeof media.addListener === "function") {
      media.addListener(handleChange)
    }

    // initial sync
    setIsMobile(media.matches)

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", handleChange)
      } else if (typeof media.removeListener === "function") {
        media.removeListener(handleChange)
      }
    }
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
