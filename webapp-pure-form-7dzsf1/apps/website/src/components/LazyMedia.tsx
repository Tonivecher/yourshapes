import { useState, type ImgHTMLAttributes } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { cn, withBase } from "@/lib/utils";

interface LazyMediaProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  webpSrc?: string;
  priority?: boolean;
  wrapperClassName?: string;
}

export function LazyMedia({
  alt,
  className,
  priority = false,
  src,
  webpSrc,
  wrapperClassName,
  ...props
}: LazyMediaProps) {
  const resolvedSrc = src.startsWith("http") ? src : withBase(src);
  const resolvedWebpSrc =
    webpSrc && !webpSrc.startsWith("http") ? withBase(webpSrc) : webpSrc;
  const [activeSrc, setActiveSrc] = useState(resolvedWebpSrc ?? resolvedSrc);

  return (
    <LazyLoadImage
      {...props}
      alt={alt}
      className={cn("block h-full w-full object-cover", className)}
      effect={priority ? undefined : "blur"}
      src={activeSrc}
      visibleByDefault={priority}
      wrapperClassName={cn("block", wrapperClassName)}
      onError={() => {
        if (activeSrc !== resolvedSrc) {
          setActiveSrc(resolvedSrc);
        }
      }}
    />
  );
}
