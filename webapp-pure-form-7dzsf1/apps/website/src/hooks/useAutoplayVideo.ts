import { useEffect } from "react";

type AutoplayOptions = {
  muted?: boolean;
  maxRetries?: number;
  retryDelay?: number;
};

export const useAutoplayVideo = (
  ref: React.RefObject<HTMLVideoElement>,
  options: AutoplayOptions = {}
) => {
  const { muted = true, maxRetries = 3, retryDelay = 300 } = options;

  useEffect(() => {
    const video = ref.current;
    if (!video) {
      return;
    }

    video.defaultMuted = muted;
    video.muted = muted;
    video.playsInline = true;

    let retries = 0;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          if (retries < maxRetries) {
            retries += 1;
            window.setTimeout(attemptPlay, retryDelay);
          }
        });
      }
    };

    const handleReady = () => {
      attemptPlay();
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      attemptPlay();
    } else {
      video.addEventListener("loadedmetadata", handleReady, { once: true });
      video.addEventListener("canplay", handleReady, { once: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("canplay", handleReady);
    };
  }, [ref, muted, maxRetries, retryDelay]);
};

export default useAutoplayVideo;
