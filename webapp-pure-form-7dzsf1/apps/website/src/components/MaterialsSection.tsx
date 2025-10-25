import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { withBase } from '@/lib/utils';
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo';

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
    image: 'images/metall.png',
  },
  {
    id: 'wood',
    title: 'ДЕРЕВО',
    description:
      'Живой материал, дышащий временем. Массив и инженерная древесина проходят точную обработку и соединяются без швов. Мы сохраняем природное тепло и создаём поверхности, которые хочется касаться.',
    image: 'images/wood.png',
  },
  {
    id: 'composite',
    title: 'КОМПОЗИТЫ',
    description:
      'Фибробетон, полимеры и новые сплавы — материалы будущего, в которых лёгкость сочетается с прочностью. Они позволяют формировать монолитные плоскости и архитектурные рельефы без компромиссов.',
    image: 'images/compos.png',
  },
];

const MaterialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useAutoplayVideo(videoRef);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll<HTMLDivElement>('.material-card-inner');
    if (!cards.length) return;

    cards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translate3d(0, 80px, 0)';
      card.style.willChange = 'transform, opacity';
    });

    const prefersReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      cards.forEach((card) => {
        card.style.opacity = '1';
        card.style.transform = 'translate3d(0, 0, 0)';
        card.style.willChange = '';
      });
      return;
    }

    let cleanupParallax: (() => void) | undefined;

    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [80, 0],
      rotateX: [-20, 0],
      scale: [0.9, 1],
      easing: 'easeOutBack',
      delay: anime.stagger(100),
      duration: 600,
      complete: () => {
        cards.forEach((card) => {
          card.style.willChange = '';
        });

        let rafId: number | null = null;

        const updateParallax = () => {
          rafId = null;
          const scrollY = window.scrollY;
          cards.forEach((card, index) => {
            const offset = Math.sin(scrollY * 0.002 + index) * 15;
            card.style.transform = `translate3d(0, ${offset}px, 0)`;
          });
        };

        const handleScroll = () => {
          if (rafId !== null) return;
          rafId = window.requestAnimationFrame(updateParallax);
        };

        updateParallax();
        window.addEventListener('scroll', handleScroll, { passive: true });

        cleanupParallax = () => {
          if (rafId !== null) {
            window.cancelAnimationFrame(rafId);
          }
          window.removeEventListener('scroll', handleScroll);
        };
      },
    });

    return () => {
      cleanupParallax?.();
      cards.forEach((card) => {
        card.style.willChange = '';
      });
    };
  }, []);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-black text-zinc-100 relative overflow-hidden"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
      <div className="absolute inset-0 -z-10 bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 md:opacity-60"
          style={{
            backgroundImage: `url("${withBase('images/about-bg-fallback.jpg')}")`,
          }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 hidden md:block overflow-hidden">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={withBase('images/about-bg-fallback.jpg')}
            aria-hidden="true"
          >
            <source src={withBase('videos/about3.mp4')} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.2em] mb-20 text-center text-zinc-200">
          Технологии и материалы
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {materials.map((material) => (
            <div
              key={material.id}
              className="material-card group relative flex flex-col overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.03] hover:border-zinc-400/50 hover:shadow-[0_0_30px_rgba(200,200,200,0.1)]"
            >
              <div className="material-card-inner flex h-full flex-col">
                <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden">
                  <img
                    src={withBase(material.image)}
                    alt={material.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-\[1000ms\] group-hover:scale-110 group-hover:rotate-\[1deg\]"
                  />
                </div>
                <div className="flex flex-grow flex-col justify-between p-8">
                  <div>
                    <h3 className="relative text-xl uppercase tracking-widest text-zinc-100">
                      {material.title}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-zinc-500 transition-all duration-500 group-hover:w-full" />
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                      {material.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
