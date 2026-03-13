import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Boxes, Cuboid, Layers3 } from "lucide-react";

const MaterialsScene = lazy(() =>
  import("@/components/materials/MaterialsScene").then((module) => ({
    default: module.MaterialsScene,
  })),
);

const materialCards = [
  {
    icon: Layers3,
    title: "Массив и шпон",
    description:
      "Дуб, ясень, орех, премиальный шпон и стабилизированные породы для фасадов, стеновых панелей и корпусной мебели.",
  },
  {
    icon: Cuboid,
    title: "Архитектурный металл",
    description:
      "Сталь, алюминий, латунь и порошковые покрытия для каркасов, декоративных вставок и коммерческих конструкций.",
  },
  {
    icon: Boxes,
    title: "Композиты и premium MDF",
    description:
      "Форматы для масштабных серий, сложных радиусов, встроенных решений и чистой геометрии с прогнозируемой стоимостью.",
  },
];

const MaterialsSection = () => {
  return (
    <section id="materials" className="px-5 py-10 md:px-8 md:py-16">
      <div className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(205,127,50,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative grid gap-12 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow">Материальный фонд</p>
            <h2 className="section-heading mt-5 max-w-2xl">
              Прямой доступ к складу материалов и отделок внутри одного
              производственного контура.
            </h2>
            <p className="section-copy mt-8 max-w-2xl">
              Как производитель мы не покупаем решения у третьих лиц, а
              комплектуем их сами: держим в работе массив, шпон, premium MDF,
              архитектурные металлы, HPL и композиты. Это позволяет быстро
              собирать образцы, точно считать сроки и не терять качество при
              переходе от рендера к производству.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {materialCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, delay: index * 0.08, ease: "easeOut" }}
                    className="rounded-[1.45rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cd7f32]/25 bg-[#cd7f32]/10 text-[#cd7f32]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#f5f5f5]">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/70">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.05, ease: "easeOut" }}
            className="relative rounded-[2rem] border border-white/10 bg-[#050505] p-2 shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.2),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="relative h-[420px] overflow-hidden rounded-[1.7rem] md:h-[560px]">
              <Suspense fallback={null}>
                <MaterialsScene />
              </Suspense>
            </div>
            <div className="relative grid gap-4 border-t border-white/10 px-4 py-5 md:grid-cols-3 md:px-6">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Wood
                </p>
                <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/68">
                  Стабилизированный массив, шпон, тонировки и глубокая отделка.
                </p>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Metal
                </p>
                <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/68">
                  Лазерная резка, сварка, патинирование и архитектурные
                  металлы.
                </p>
              </div>
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                  Composite
                </p>
                <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/68">
                  Композиты, HPL, premium MDF и радиусные формы для серийных
                  решений.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
