import anime from "animejs/lib/anime.es.js";

type OnScrollOptions = {
  selector?: string;
  translateY?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

type CleanupFn = () => void;

const defaultOptions: Required<
  Pick<
    OnScrollOptions,
    | "selector"
    | "translateY"
    | "opacity"
    | "duration"
    | "delay"
    | "easing"
    | "threshold"
    | "rootMargin"
    | "once"
  >
> = {
  selector: "[data-animate]",
  translateY: 40,
  opacity: 0,
  duration: 900,
  delay: 0,
  easing: "easeOutCubic",
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
  once: true,
};

const setInitialStyles = (element: HTMLElement, translateY: number, opacity: number) => {
  if (!element.dataset.animeInitialized) {
    element.style.willChange = "transform, opacity";
    element.style.opacity = `${opacity}`;
    element.style.transform = `translateY(${translateY}px)`;
    element.dataset.animeInitialized = "true";
  }
};

export const onScroll = (options: OnScrollOptions = {}): CleanupFn | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const config = { ...defaultOptions, ...options };
  const elements = Array.from(document.querySelectorAll<HTMLElement>(config.selector));

  if (!elements.length) {
    return undefined;
  }

  const animatedElements = new WeakSet<Element>();

  const animateElement = (element: HTMLElement) => {
    anime({
      targets: element,
      translateY: [config.translateY, 0],
      opacity: [config.opacity, 1],
      duration: config.duration,
      delay: config.delay,
      easing: config.easing,
      begin: () => setInitialStyles(element, config.translateY, config.opacity),
      complete: () => {
        element.style.willChange = "";
        if (config.once) {
          animatedElements.add(element);
        }
      },
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          animateElement(entry.target as HTMLElement);

          if (config.once) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    {
      threshold: config.threshold,
      rootMargin: config.rootMargin,
    }
  );

  elements.forEach((element) => {
    setInitialStyles(element, config.translateY, config.opacity);
    observer.observe(element);
  });

  return () => observer.disconnect();
};

export type {
  AnimeParams,
  AnimeInstance,
  AnimeTimelineInstance,
  AnimeAnimParams,
} from "animejs/lib/anime.es.js";

// Лёгкая обёртка для animejs — просто реэкспорт.
// Это позволяет использовать алиас в vite.config.ts без ошибок при сборке/SSR.
export default anime;
