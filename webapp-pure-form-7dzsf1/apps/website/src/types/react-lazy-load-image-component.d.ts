declare module "react-lazy-load-image-component" {
  import type { FC, HTMLAttributes, ImgHTMLAttributes, ReactNode } from "react";

  export interface LazyLoadImageProps
    extends ImgHTMLAttributes<HTMLImageElement> {
    afterLoad?: () => void;
    beforeLoad?: () => void;
    delayMethod?: "debounce" | "throttle";
    delayTime?: number;
    effect?: string;
    placeholder?: ReactNode;
    placeholderSrc?: string;
    threshold?: number;
    useIntersectionObserver?: boolean;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: HTMLAttributes<HTMLSpanElement>;
  }

  export const LazyLoadImage: FC<LazyLoadImageProps>;
}
