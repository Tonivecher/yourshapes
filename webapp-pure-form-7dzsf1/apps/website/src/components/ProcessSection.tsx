import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "measure-design",
    number: "01",
    title: "Замер и 3D-проект",
    description:
      "Фиксируем геометрию помещения, собираем референсы, готовим инженерную модель и показываем будущую мебель до запуска в цех.",
  },
  {
    id: "material-selection",
    number: "02",
    title: "Выбор материалов",
    description:
      "Подбираем массив, шпон, premium MDF, металл, композиты и фурнитуру под бюджет, нагрузку и визуальный сценарий проекта.",
  },
  {
    id: "own-production",
    number: "03",
    title: "Собственное производство",
    description:
      "Запускаем изделия в работу внутри одного фабричного контура: раскрой, обработка, отделка, сборка, упаковка и контроль качества.",
  },
  {
    id: "installation",
    number: "04",
    title: "Монтаж",
    description:
      "Доставляем, поднимаем, стыкуем и сдаём объект командой, которая знает изделие с момента проектирования.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;

    if (!section || !line) {
      return;
    }

    if (shouldReduceMotion) {
      gsap.set(line, { scaleY: 1 });
      return;
    }

    const triggers: ScrollTrigger[] = [];

    const lineTween = gsap.fromTo(
      line,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center+=80",
          end: "bottom bottom-=80",
          scrub: true,
        },
      },
    );

    processSteps.forEach((_, index) => {
      const element = section.querySelector<HTMLElement>(`[data-step-index="${index}"]`);
      if (!element) {
        return;
      }

      const trigger = ScrollTrigger.create({
        trigger: element,
        start: "top center+=60",
        end: "bottom center",
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });

      triggers.push(trigger);
    });

    return () => {
      lineTween.scrollTrigger?.kill();
      lineTween.kill();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [shouldReduceMotion]);

  return (
    <section id="process" ref={sectionRef} className="px-5 py-10 md:px-8 md:py-16">
      <div className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Производственный процесс</p>
          <h2 className="section-heading mt-5">
            Прозрачный цикл от замера до монтажа, где каждая стадия связана с
            одной фабрикой и одной командой.
          </h2>
          <p className="section-copy mt-8">
            Мы не передаем проект по цепочке подрядчиков. Поэтому сроки,
            материалы, чертежи и монтажная логика остаются под единым
            управлением, а качество не теряется на стыках процессов.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:left-[7.25rem]" />
          <div
            ref={lineRef}
            className="absolute left-5 top-0 h-full w-px origin-top bg-[linear-gradient(180deg,#cd7f32_0%,rgba(255,255,255,0.9)_50%,rgba(205,127,50,0.15)_100%)] shadow-[0_0_28px_rgba(205,127,50,0.55)] md:left-[7.25rem]"
          />

          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const isActive = index <= activeIndex;

              return (
                <motion.article
                  key={step.id}
                  data-step-index={index}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                  className={`relative ml-0 rounded-[1.7rem] border px-5 py-6 transition duration-500 md:ml-28 md:px-7 ${
                    isActive
                      ? "border-[#cd7f32]/30 bg-[linear-gradient(180deg,rgba(205,127,50,0.14),rgba(255,255,255,0.03))] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
                      : "border-white/8 bg-white/[0.03]"
                  }`}
                >
                  <div
                    className={`absolute left-5 top-8 h-5 w-5 rounded-full border md:left-[-2.58rem] ${
                      isActive
                        ? "border-[#cd7f32]/70 bg-[#cd7f32] shadow-[0_0_18px_rgba(205,127,50,0.85)]"
                        : "border-white/20 bg-[#050505]"
                    }`}
                  />

                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-[#cd7f32]/76">
                        Шаг {step.number}
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#f5f5f5] md:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#c0c0c0]/72 md:text-base">
                        {step.description}
                      </p>
                    </div>
                    <div className="text-5xl font-semibold tracking-[-0.06em] text-white/10 md:text-6xl">
                      {step.number}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
