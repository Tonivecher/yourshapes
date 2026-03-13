import {
  useEffect,
  useMemo,
  useRef,
  type PropsWithChildren,
} from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  SmoothScrollContext,
  type SmoothScrollContextValue,
} from "@/components/smooth-scroll-context";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: PropsWithChildren) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
    });

    lenisRef.current = lenis;
    document.documentElement.classList.add("lenis");

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.documentElement.classList.remove("lenis");
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      lenis: lenisRef.current,
      scrollTo: (target, options) => {
        const lenis = lenisRef.current;

        if (lenis) {
          lenis.scrollTo(target, {
            duration: options?.duration ?? 1.1,
            offset: options?.offset ?? 0,
            immediate: options?.immediate ?? false,
          });
          return;
        }

        if (typeof target === "string") {
          const resolvedTarget = document.querySelector(target);
          resolvedTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
          return;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
      },
    }),
    [],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
