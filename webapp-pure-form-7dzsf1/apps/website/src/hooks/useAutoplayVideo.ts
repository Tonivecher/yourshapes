import { useEffect } from "react";

export function useAutoplayVideo(ref: React.RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = ref.current;
    if (!video || typeof window === "undefined") return;

    let cancelled = false;
    let retryTimeout: number | undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = async () => {
      if (cancelled || !video) return;
      try {
        await video.play();
      } catch {
        if (cancelled) return;
        // постепенный бэкофф
        retryTimeout = window.setTimeout(tryPlay, 400);
      }
    };

    const handleVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        tryPlay();
      }
    };

    // Если медиа уже готово — попытаться сразу
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    } else {
      const onCanPlay = () => {
        video.removeEventListener("canplay", onCanPlay);
        tryPlay();
      };
      video.addEventListener("canplay", onCanPlay, { once: true });
    }

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelled = true;
      if (retryTimeout !== undefined) window.clearTimeout(retryTimeout);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [ref]);
}

export default useAutoplayVideo;
