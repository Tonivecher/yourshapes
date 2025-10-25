import { useEffect, useRef } from 'react';
import anime from 'animejs';

const materials = [
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
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.material-card');

    // Вылет карточек при загрузке
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
        translateY: (el, i) => scrollY * 0.05 * (i + 1),
        duration: 400,
        easing: 'easeOutQuad',
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {materials.map((material) => (
            <div
              key={material.id}
              className="material-card group relative overflow-hidden rounded-sm bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 transition-all duration-700 hover:border-zinc-400/50 hover:shadow-[0_0_40px_rgba(200,200,200,0.1)]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-full h-64 object-cover transition-transform duration-[2000ms] group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl uppercase tracking-widest mb-4 text-zinc-100 relative">
                  {material.title}
                  <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1px] bg-zinc-500 transition-all duration-700"></span>
                </h3>
                <p className="text-zinc-400 leading-relaxed text-[15px]">
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
