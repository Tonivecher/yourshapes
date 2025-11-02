import React, { useEffect, useRef } from "react";
import anime from "animejs";
import { withBase } from "@/lib/utils";

const imageList = [
  {
    src: "projects/P_20190127_212042.jpg",
    caption:
      "Лофт-спальня с графитовой стеной и подсветкой. Атмосфера тишины и тепла.",
  },
  {
    src: "projects/P_20190912_004011_vHDR_On.jpg",
    caption:
      "Диванная группа с текстурным ритмом ткани — фирменный стиль Formalab.",
  },
  {
    src: "projects/P_20180705_151636.jpg",
    caption: "Коридор под скатом крыши. Тёмное дерево и мягкий свет точек.",
  },
  {
    src: "projects/IMG-20210304-WA0006.jpg",
    caption:
      "Ресторанный зал с интегрированным озеленением — природная геометрия.",
  },
  {
    src: "projects/IMG-20210304-WA0000.jpg",
    caption: "Медный куб-стойка. Акцентный элемент в интерьере из камня.",
  },
  {
    src: "projects/IMG_20171208_010952.jpg",
    caption:
      "Винный зал с латунными акцентами и стеклом — театральная тёплая атмосфера.",
  },
  {
    src: "projects/IMG_20171207_004810.jpg",
    caption:
      "Бар Formalab: бетон, кожа и свет. Геометрия звука и пространства.",
  },
  {
    src: "projects/P_20180414_084921.jpg",
    caption:
      "Секции ZARYAD в процессе монтажа. Структурный дизайн и точная сборка.",
  },
  {
    src: "projects/P_20180414_084844.jpg",
    caption: "Рабочая зона ZARYAD. Минимализм и инженерия формы.",
  },
  {
    src: "projects/IMG_20171208_011046.jpg",
    caption: "Интерьер ресторана с бархатным светом. Атмосфера завершённости.",
  },
  {
    src: "projects/gen1.png",
    caption:
      "Модульная гардеробная стена с латунными ручками — премиальная отделка и безупречные стыки.",
  },
  {
    src: "projects/gen2.png",
    caption:
      "Встраиваемый почтовый блок с гравировкой номеров — точная геометрия и спокойная палитра.",
  },
  {
    src: "projects/gen3.png",
    caption:
      "Индустриальная кухня с сетчатыми фасадами и массивом лиственницы — баланс брутальности и тепла.",
  },
  {
    src: "projects/gen4.png",
    caption:
      "Приёмная зона с длинной витриной ZARYAD — аккуратная навигация и равномерное освещение.",
  },
  {
    src: "projects/gen5.png",
    caption:
      "Металлические шкафчики с гравировкой и ключами — чёткая организация пространства.",
  },
  {
    src: "projects/gen6.png",
    caption:
      "Островная стойка Beeline в аэропорту — витрины с подсветкой, мягкая графика бренда.",
  },
  {
    src: "projects/gen7.png",
    caption:
      "Экспозиционный блок для наушников — деревянные сферы-подиумы и витринное стекло.",
  },
  {
    src: "projects/gen8.png",
    caption:
      "Ресторанная группа Seating — кожаные диваны, массивные столешницы и скрытая проводка.",
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images =
      containerRef.current?.querySelectorAll<HTMLElement>(".project-card");
    if (!images || images.length === 0) {
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      images.forEach((image) => {
        image.style.opacity = "1";
        image.style.transform = "translate3d(0, 0, 0)";
      });
      return;
    }

    images.forEach((image) => {
      image.style.opacity = "0";
      image.style.transform = "translate3d(0, 50px, 0)";
      image.style.willChange = "transform, opacity";
    });

    anime({
      targets: images,
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.95, 1],
      delay: anime.stagger(150),
      duration: 1000,
      easing: "easeOutQuad",
      complete: () => {
        images.forEach((image) => {
          image.style.willChange = "";
          image.style.transform = "";
        });
      },
    });

    return () => {
      images.forEach((image) => {
        image.style.willChange = "";
      });
    };
  }, []);

  return (
    <section
      id="projects"
      data-animate
      className="py-20 bg-neutral-950 text-white overflow-x-hidden font-[Manrope]"
      data-oid="ajouya4"
    >
      <div className="px-6 mb-10 text-center" data-oid="oorfin2">
        <h2
          className="text-3xl font-light mb-6 text-center uppercase tracking-widest"
          data-oid="w6qfkam"
        >
          Реализованные проекты
        </h2>
        <p className="text-lg text-white/80 mb-4" data-oid="-ng9xa:">
          Каждая деталь просчитана. Материалы подчинены форме.
        </p>
        <p
          className="mx-auto max-w-3xl text-sm text-white/60 leading-relaxed"
          data-oid="m-h_ei4"
        >
          От частных интерьеров до ресторанов и бутиков. Мы создаём мебель,
          которая вписывается в архитектуру пространства и становится его
          логичным продолжением. Любые формы по вашим эскизам или референсам из
          Pinterest.
        </p>
      </div>
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 snap-x snap-mandatory scroll-smooth no-scrollbar"
        data-oid="3cm_27z"
      >
        {imageList.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 snap-center project-card group"
            style={{ width: "480px", height: "320px" }}
            data-oid="wm8.od7"
          >
            <img
              src={withBase(item.src)}
              alt={item.caption}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              data-oid="ekff:er"
            />

            <div
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-center px-4"
              data-oid="0vf8jyz"
            >
              <p
                className="text-neutral-100 text-sm leading-snug tracking-wide"
                data-oid="brp2rsy"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
