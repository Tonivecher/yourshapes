import { useEffect, useRef } from 'react';
import anime from 'animejs';

const resolveAssetPath = (path: string) => {
  const base = (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}/${path.replace(/^\/+/, '')}`;
};

const VIDEO_BACKGROUND_SRC = resolveAssetPath('videos/about3.mp4');
const VIDEO_POSTER_SRC = resolveAssetPath('images/about-bg-fallback.jpg');

interface Material {
  id: string;
  title: string;
  description: string;
  image: string;
}

const materials: Material[] = [
  {
    id: 'metal',
    title: 'МЕТАЛЛ',
    description:
      'Лазерная точность, холодная мощь и вечная форма. Мы работаем с металлом, который подчиняется свету и идеальной геометрии. От несущих каркасов до тончайших декоративных линий — всё в балансе силы и чистоты.',
    image:
      'https://storage.googleapis.com/fenado-ai-farm-public/generated/9c5c2930-6bd2-4b16-b233-b3e2814d9e6a.webp',
  },
  {
    id: 'wood',
    title: 'ДЕРЕВО',
    description:
      'Живой материал, дышащий временем. Массив и инженерная древесина проходят точную обработку и соединяются без швов. Мы сохраняем природное тепло и создаём поверхности, которые хочется касаться.',
    image:
      'https://storage.googleapis.com/fenado-ai-farm-public/generated/7932d923-2575-481a-bb10-8ac3db72b28c.webp',
  },
  {
    id: 'composite',
    title: 'КОМПОЗИТЫ',
    description:
      'Фибробетон, полимеры и новые сплавы — материалы будущего, в которых лёгкость сочетается с прочностью. Они позволяют формировать монолитные плоскости и архитектурные рельефы без компромиссов.',
    image:
      'https://storage.googleapis.com/fenado-ai-farm-public/generated/0380c180-d0c4-487d-b621-0ff2e55bed8f.webp',
  },
];

const MaterialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll<HTMLDivElement>('.material-card');

    // Анимация появления карточек
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [60, 0],
      scale: [0.95, 1],
      easing: 'easeOutCubic',
      delay: anime.stagger(200),
      duration: 1200,
    });

    // Параллакс при скролле
    const handleScroll = () => {
      const scrollY = window.scrollY;
      anime({
        targets: cards,
        translateY: (_el, i) => scrollY * 0.05 * (i + 1),
        duration: 400,
        easing: 'easeOutQuad',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    let retryTimeout: number | undefined;
    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      const playback = video.play();
      if (playback && typeof playback.catch === 'function') {
        playback.catch(() => {
          if (cancelled) return;
          retryTimeout = window.setTimeout(tryPlay, 400);
        });
      }
    };

    let cleanup: (() => void) | undefined;

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      tryPlay();
    } else {
      const handleCanPlay = () => {
        video.removeEventListener('canplay', handleCanPlay);
        tryPlay();
      };

      video.addEventListener('canplay', handleCanPlay, { once: true });
      cleanup = () => {
        video.removeEventListener('canplay', handleCanPlay);
      };
    }

    return () => {
      cancelled = true;
      if (retryTimeout !== undefined) {
        window.clearTimeout(retryTimeout);
      }
      cleanup?.();
    };
  }, []);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 relative overflow-hidden"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url("${VIDEO_POSTER_SRC}")` }}
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        className="pointer-events-none absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        width={1280}
        height={720}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={VIDEO_POSTER_SRC}
        aria-hidden="true"
      >
        <source src={VIDEO_BACKGROUND_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] mb-20 text-center text-zinc-200">
          Технологии и материалы
        </h2>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.id}
              className="material-card group relative overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-all duration-700 hover:border-zinc-400/50 hover:shadow-[0_0_40px_rgba(200,200,200,0.1)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={material.image}
                  alt={material.title}
                  className="h-64 w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <h3 className="relative text-xl uppercase tracking-widest text-zinc-100">
                  {material.title}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-zinc-500 transition-all duration-700 group-hover:w-full" />
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
