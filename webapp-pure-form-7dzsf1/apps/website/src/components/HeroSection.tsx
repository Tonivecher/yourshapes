import { lazy, Suspense, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { isFinePointerDevice } from "@/lib/utils";

gsap.registerPlugin(SplitText);

const HeroParticlesScene = lazy(() =>
  import("@/components/hero/HeroParticlesScene").then((module) => ({
    default: module.HeroParticlesScene,
  })),
);

const HeroSection = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const subheadlineRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const splitInstances: SplitText[] = [];
    const cleanupMagnet: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const animatedElements = [
        eyebrowRef.current,
        headlineRef.current,
        subheadlineRef.current,
      ];

      animatedElements.forEach((element, index) => {
        if (!element) {
          return;
        }

        const split = new SplitText(element, { type: "lines,words" });
        splitInstances.push(split);

        gsap.from(split.words, {
          opacity: 0,
          yPercent: 120,
          rotateX: -60,
          transformOrigin: "50% 100%",
          duration: 1,
          ease: "power4.out",
          stagger: 0.028,
          delay: index * 0.1,
        });
      });

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.45,
        });
      }

      if (ctaRef.current && isFinePointerDevice()) {
        const button = ctaRef.current;
        const xTo = gsap.quickTo(button, "x", { duration: 0.35, ease: "power3.out" });
        const yTo = gsap.quickTo(button, "y", { duration: 0.35, ease: "power3.out" });

        const handlePointerMove = (event: PointerEvent) => {
          const bounds = button.getBoundingClientRect();
          const x = event.clientX - bounds.left - bounds.width / 2;
          const y = event.clientY - bounds.top - bounds.height / 2;

          xTo(x * 0.16);
          yTo(y * 0.16);
        };

        const reset = () => {
          xTo(0);
          yTo(0);
        };

        button.addEventListener("pointermove", handlePointerMove);
        button.addEventListener("pointerleave", reset);
        cleanupMagnet.push(() => {
          button.removeEventListener("pointermove", handlePointerMove);
          button.removeEventListener("pointerleave", reset);
        });
      }
    }, rootRef);

    return () => {
      cleanupMagnet.forEach((cleanup) => cleanup());
      splitInstances.forEach((split) => split.revert());
      ctx.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
    >
      <div className="absolute inset-0">
        <div className="luxury-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(192,192,192,0.14),transparent_22%)]" />
        {!shouldReduceMotion ? (
          <div className="absolute inset-0 opacity-90">
            <Suspense fallback={null}>
              <HeroParticlesScene />
            </Suspense>
          </div>
        ) : null}
      </div>

      <div className="absolute inset-x-5 top-28 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:inset-x-8 md:top-32" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-16 lg:grid-cols-[minmax(0,1.1fr)_320px]">
        <div className="max-w-4xl">
          <p ref={eyebrowRef} className="eyebrow flex items-center gap-3">
            <Sparkles className="h-4 w-4" />
            Direct custom furniture manufacturing
          </p>
          <h1
            ref={headlineRef}
            className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] text-[#f5f5f5] md:text-7xl lg:text-[6.4rem]"
          >
            Искусство формы.
            <br />
            Точность производства.
          </h1>
          <p
            ref={subheadlineRef}
            className="mt-8 max-w-3xl text-lg leading-8 text-[#c0c0c0]/78 md:text-2xl md:leading-10"
          >
            Мебель на заказ от прямого производителя. Создаем эксклюзивные
            решения для премиум-интерьеров и оптимизируем бюджет для типовых
            задач.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              ref={ctaRef}
              type="button"
              onClick={() => scrollTo("#contact", { offset: -92 })}
              className="bronze-button group gap-3 self-start px-7 py-4 text-[0.78rem] shadow-[0_20px_50px_rgba(205,127,50,0.24)]"
            >
              Рассчитать проект
              <ArrowDownRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            <p className="text-sm uppercase tracking-[0.24em] text-[#c0c0c0]/58">
              Собственный цех, инженерная документация, монтаж под ключ
            </p>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
          className="section-shell relative max-w-sm border-[#cd7f32]/15 p-6 md:p-7 lg:justify-self-end"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#c0c0c0]/48">
            Factory-direct advantage
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-[#f5f5f5]">
                1 контракт
              </p>
              <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/68">
                Один производственный контур: от замера и 3D-проекта до
                изготовления, логистики и финального монтажа.
              </p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-4">
              <p className="text-xs uppercase tracking-[0.32em] text-[#cd7f32]/70">
                Luxury & mass market
              </p>
              <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/72">
                Масштабируем сложность проекта: эксклюзивные отделки и
                оптимизированные решения внутри одной фабрики.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
