import { motion } from "framer-motion";
import { BadgeCheck, Factory, ShieldCheck, WalletCards } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Собственная фабрика",
    description:
      "Проектируем, производим и собираем мебель внутри одного производственного цикла без передачи задачи посредникам.",
  },
  {
    icon: ShieldCheck,
    title: "Контроль качества на каждом этапе",
    description:
      "От замера до упаковки отслеживаем геометрию, отделку, фурнитуру и стабильность материалов по внутренним стандартам производства.",
  },
  {
    icon: WalletCards,
    title: "Честная стоимость",
    description:
      "Цена формируется из материалов, инженерии и работ, а не из цепочки подрядчиков и надбавок за перепродажу.",
  },
];

const metrics = [
  { value: "150+", label: "реализованных объектов" },
  { value: "8 лет", label: "производственной экспертизы" },
  { value: "3 сегмента", label: "корпусная, встроенная, коммерческая мебель" },
  { value: "1 команда", label: "проект, производство и монтаж" },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-5 py-10 md:px-8 md:py-16">
      <div className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(205,127,50,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="relative grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="eyebrow">О производстве</p>
            <h2 className="section-heading mt-5 max-w-2xl">
              Премиальная мебель без посредников и лишней дистанции между
              идеей и цехом.
            </h2>
            <p className="section-copy mt-8 max-w-2xl">
              Инженерия формы работает как прямой производитель мебели на
              заказ. Мы соединяем архитектурный подход, фабричную дисциплину и
              гибкость кастомных решений, чтобы собирать интерьеры высокой
              сложности и при этом контролировать бюджет.
            </p>
            <p className="section-copy mt-6 max-w-2xl text-[#c0c0c0]/64">
              Для премиальных интерьеров подбираем редкие отделки, натуральный
              шпон, массив, латунь и сложные металлоконструкции. Для типовых
              задач оптимизируем конструктив, материалы и цикл производства,
              сохраняя высокую визуальную планку.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#cd7f32]/25 bg-[#cd7f32]/10 text-[#cd7f32]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#f5f5f5]">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#c0c0c0]/72 md:text-base">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
          className="relative mt-14 grid gap-5 border-t border-white/10 pt-10 md:grid-cols-2 xl:grid-cols-4"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.4rem] border border-white/8 bg-[#0c0c0c]/80 p-5"
            >
              <div className="flex items-center gap-2 text-[#cd7f32]">
                <BadgeCheck className="h-4 w-4" />
                <span className="text-[0.7rem] uppercase tracking-[0.28em]">
                  Factory metric
                </span>
              </div>
              <p className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-[#f5f5f5]">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-7 text-[#c0c0c0]/66">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
