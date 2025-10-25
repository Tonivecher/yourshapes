import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { withBase } from "@/lib/utils";

const imageList = [
  { src: "projects/P_20190127_212042.jpg", caption: "Лофт-спальня с графитовой стеной и подсветкой. Атмосфера тишины и тепла." },
  { src: "projects/P_20190912_004011_vHDR_On.jpg", caption: "Диванная группа с текстурным ритмом ткани — фирменный стиль Formalab." },
  { src: "projects/P_20180705_151636.jpg", caption: "Коридор под скатом крыши. Тёмное дерево и мягкий свет точек." },
  { src: "projects/IMG-20210304-WA0006.jpg", caption: "Ресторанный зал с интегрированным озеленением — природная геометрия." },
  { src: "projects/IMG-20210304-WA0000.jpg", caption: "Медный куб-стойка. Акцентный элемент в интерьере из камня." },
  { src: "projects/IMG_20171208_010952.jpg", caption: "Винный зал с латунными акцентами и стеклом — театральная тёплая атмосфера." },
  { src: "projects/IMG_20171207_004810.jpg", caption: "Бар Formalab: бетон, кожа и свет. Геометрия звука и пространства." },
  { src: "projects/P_20180414_084921.jpg", caption: "Секции ZARYAD в процессе монтажа. Структурный дизайн и точная сборка." },
  { src: "projects/P_20180414_084844.jpg", caption: "Рабочая зона ZARYAD. Минимализм и инженерия формы." },
  { src: "projects/IMG_20171208_011046.jpg", caption: "Интерьер ресторана с бархатным светом. Атмосфера завершённости." },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = containerRef.current?.querySelectorAll(".project-card");
    if (images) {
      anime({
        targets: images,
        opacity: [0, 1],
        translateY: [50, 0],
        scale: [0.95, 1],
        delay: anime.stagger(150),
        duration: 1000,
        easing: "easeOutQuad",
      });
    }
  }, []);

  return (
    <section className="py-20 bg-neutral-950 text-white overflow-x-hidden font-[Manrope]">
      <h2 className="text-3xl font-light mb-10 text-center uppercase tracking-widest">
        Projects
      </h2>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {imageList.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-center project-card group"
            style={{ width: "480px", height: "320px" }}
          >
            <img
              src={withBase(item.src)}
              alt={item.caption}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center px-4">
              <p className="text-neutral-100 text-sm leading-snug tracking-wide">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
