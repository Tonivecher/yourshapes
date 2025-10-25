import { useEffect, useRef } from 'react';
import anime from 'animejs';

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
    image: '/images/metall.png',
  },
  {
    id: 'wood',
    title: 'ДЕРЕВО',
    description:
      'Живой материал, дышащий временем. Массив и инженерная древесина проходят точную обработку и соединяются без швов. Мы сохраняем природное тепло и создаём поверхности, которые хочется касаться.',
    image: '/images/wood.png',
  },
  {
    id: 'composite',
    title: 'КОМПОЗИТЫ',
    description:
      'Фибробетон, полимеры и новые сплавы — материалы будущего, в которых лёгкость сочетается с прочностью. Они позволяют формировать монолитные плоскости и архитектурные рельефы без компромиссов.',
    image: '/images/compos.png',
  },
];

const MaterialsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll<HTMLDivElement>('.material-card');

    // Быстрое и энергичное появление карточек
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [80, 0],
      rotateX: [-20, 0],
      scale: [0.9, 1],
      easing: 'easeOutBack',
      delay: anime.stagger(100),
      duration: 600,
    });

    // Параллакс с ускорением
    const handleScroll = () => {
      const scrollY = window.scrollY;
      anime({
        targets: cards,
        translateY: (_el, i) => Math.sin(scrollY * 0.002 + i) * 15,
        duration: 300,
        easing: 'easeOutSine',
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 relative overflow-hidden"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
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
              <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden">
                <img
                  src={material.image}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
