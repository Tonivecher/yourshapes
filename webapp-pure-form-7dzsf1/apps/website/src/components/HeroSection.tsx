import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { withBase } from "@/lib/utils";
import { useAutoplayVideo } from "@/hooks/useAutoplayVideo";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroBackground = withBase("images/about-bg-fallback.png");
  const videoSrc = withBase("videos/about-bg.mp4");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useAutoplayVideo(videoRef);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth scroll function
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-screen w-full flex items-center justify-start overflow-hidden"
      data-oid="yyo2q-_"
    >
      {/* Background video/image */}
      <div className="absolute inset-0 bg-background" data-oid="dgrtff0" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url("${heroBackground}")` }}
        data-oid="44us.ls"
      />

      <div
        className="absolute inset-0 hidden overflow-hidden md:block"
        data-oid="d.k1r0c"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-20"
          data-oid="o.cam8s"
        >
          <source src={videoSrc} type="video/mp4" data-oid=".kfej02" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      {/* Content */}
      <div
        className="container relative z-10 px-8 max-w-6xl"
        data-oid="67-pkbl"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 40 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl"
          data-oid="yhyg.1x"
        >
          <h1
            className="text-6xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-[0.9] tracking-tight"
            data-oid="svvgr_e"
          >
            Мебель и интерьеры
            <br data-oid="f36ir0t" />
            <span className="text-foreground/60" data-oid="onntm-c">
              на заказ
            </span>
          </h1>
          <div className="max-w-xl" data-oid="kx9n7zc">
            <p
              className="text-lg md:text-xl text-foreground/70 mb-6 font-light leading-relaxed"
              data-oid="sp3ok41"
            >
              С инженерной точностью и премиальным уровнем отделки.
            </p>
            <p
              className="text-base md:text-lg text-foreground/60 mb-12 font-light leading-relaxed"
              data-oid="xg:_dbu"
            >
              Собственное производство. Мы создаём мебель, которая выглядит
              дорого — и стоит разумно. Металл, дерево, композиты.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="text-sm font-light text-foreground border border-foreground/20 px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-500 tracking-wide"
            data-oid="tf8f61o"
          >
            Обсудить проект
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 right-8 flex flex-col items-center"
        data-oid="0g8v9dn"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.4 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center"
          data-oid="uhvw1-e"
        >
          <span
            className="text-xs font-light text-foreground/40 mb-4 tracking-wider rotate-90 origin-center"
            data-oid="j2vigbe"
          >
            SCROLL
          </span>
          <div className="w-px h-16 bg-foreground/20" data-oid="pk3qvle"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
