import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { withBase } from "@/lib/utils";

interface Material {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  seoSnippet: string;
  features: string[];
  keywords: string[];
  image: string;
  imageAlt: string;
}

const materials: Material[] = [
  {
    id: "premium-wood",
    title: "Премиальная древесина",
    subtitle: "Индивидуально подобранные массивы и шпоны",
    description:
      "Работаем практически с любой породой: от дуба и ясеня до бука и термообработанной сосны. Каждую заготовку стабилизируем в контролируемой среде и обрабатываем на ЧПУ для безупречной геометрии фасадов и панелей.",
    seoSnippet:
      "Изготовление мебели из массива и шпона в Москве и по всей России: камерная сушка, ЧПУ обработка древесины, профессиональное тонирование без потери фактуры.",
    features: [
      "Камерная сушка и стабилизация до 8% влажности",
      "ЧПУ-фрезеровка фасадов с безупречной симметрией",
      "Микрошпон и кромки без заметных стыков",
      "Масла и лаки с низким содержанием ЛОС",
    ],
    keywords: [
      "мебель из массива",
      "дуб ясень бук",
      "чпу обработка дерева",
      "индивидуальная мебель Москва",
    ],
    image: "images/generated/materials/premium-wood-masterpiece.webp",
    imageAlt:
      "Панель из тонированного дуба с графичными фасками и подсветкой",
  },
  {
    id: "architectural-metal",
    title: "Архитектурный металл",
    subtitle: "Сталь, алюминий и латунь",
    description:
      "Формируем металлоконструкции с лазерной точностью, используем анодирование, сатинирование и глубокое патинирование, чтобы подчеркнуть геометрию и добиться матового свечения поверхности.",
    seoSnippet:
      "Архитектурный металл для мебели премиум-класса: лазерная резка, TIG-сварка без шва, шлифование до сатина и антикоррозийные покрытия, соответствующие стандартам люксовых брендов.",
    features: [
      "Лазерная резка с точностью ±0.1 мм",
      "Скрытая TIG-сварка и ручное шлифование",
      "Анодирование алюминия в глубоких тонах",
      "Латунь с травлением и восковым запечатыванием",
    ],
    keywords: [
      "архитектурный металл",
      "латунь премиум",
      "анодированный алюминий",
      "лазерная резка Москва",
    ],
    image: "images/generated/materials/architectural-metal-structure.webp",
    imageAlt:
      "Сложная металлическая конструкция с латунными вставками и мягким светом",
  },
  {
    id: "modern-composites",
    title: "Композиты и мягкие материалы",
    subtitle: "HPL, технические пластики, текстиль и кожа",
    description:
      "Обрабатываем композитные панели, HPL и инженерные пластики на собственных ЧПУ станках, шьём обивки из ткани и натуральной либо эко-кожи под любой проект. Создаём сложные формы для кухонь, гардеробных, ресепшен-зон и мягкой мебели.",
    seoSnippet:
      "Производство мебели из композитов и текстиля: HPL панели, ABS и акриловые пластики, профессиональная обивка тканью и кожей, ЧПУ обработка радиусных форм для проектов по всей России.",
    features: [
      "ЧПУ-раскрой и 3D-фрезеровка композитных плит",
      "Постформинг и гибка HPL и ABS кромок",
      "Обивка из премиальных тканей и натуральной кожи",
      "Термостойкие и влагостойкие покрытия для кухонных зон",
    ],
    keywords: [
      "мебель из HPL",
      "обивка кожа ткань",
      "чпу обработка пластика",
      "индивидуальные гардеробные Россия",
    ],
    image: "images/generated/materials/modern-composites-sculpt.webp",
    imageAlt:
      "Монолитный блок из композита с матовым покрытием и мягким освещением",
  },
];

const MaterialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  if (!materials.length) {
    return null;
  }

  const safeIndex = Math.min(activeIndex, materials.length - 1);
  const activeMaterial = materials[safeIndex]!;
  const progress = ((safeIndex + 1) / materials.length) * 100;

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Материалы и технологии премиальной мебели",
      description:
        "Каталог материалов для изготовления мебели высокого уровня: древесина, архитектурный металл, композиты и мягкие покрытия.",
      itemListElement: materials.map((material, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: material.title,
          description: material.description,
          material: material.subtitle,
          image: withBase(material.image),
          keywords: material.keywords.join(", "),
        },
      })),
    }),
    [],
  );

  const nextMaterial = () => {
    setActiveIndex((prev) => (prev + 1) % materials.length);
  };

  const prevMaterial = () => {
    setActiveIndex((prev) => (prev - 1 + materials.length) % materials.length);
  };

  return (
    <section
      id="materials"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-32 text-foreground md:py-40"
      data-oid="materials-section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-foreground/10 blur-3xl mix-blend-screen"
        animate={{ x: [0, 24, -32, 10], y: [0, -26, 18, 0], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[28rem] w-[28rem] rounded-full bg-foreground/5 blur-[140px]"
        animate={{ x: [0, -18, 12, -24, 0], y: [0, 16, -22, 12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative mx-auto max-w-7xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-foreground/50">
            Материалы высшей категории
          </p>
          <h2 className="text-6xl font-normal leading-tight text-foreground md:text-7xl lg:text-[5.5rem]">
            Материалы
            <br />
            <span className="text-foreground/50">и технологии</span>
          </h2>
          <p className="mt-8 text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
            Собираем коллекцию поверхностей, текстур и металлов, подходящих для
            жилых и коммерческих интерьеров по всей России. Создаём мебель,
            которая точно соответствует архитектурному замыслу и спокойно
            выдерживает интенсивную эксплуатацию.
          </p>
        </motion.div>

        <div className="relative mt-20 grid gap-16 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
              Категории материалов
            </p>
            <ul className="space-y-6">
              {materials.map((material, index) => {
                const isActive = index === safeIndex;
                return (
                  <motion.li
                    key={material.id}
                    className="relative"
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="material-highlight"
                        className="absolute inset-0 -z-10 rounded-sm bg-foreground/5"
                        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      className="group flex w-full flex-col border-l border-transparent pl-6 text-left transition-colors duration-300 focus:outline-none"
                    >
                      <span className="mb-1 text-xs uppercase tracking-[0.5em] text-foreground/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-3xl font-light tracking-[0.08em] text-foreground md:text-[2.2rem]">
                        {material.title}
                      </span>
                      <span className="mt-2 text-sm font-light text-foreground/60">
                        {material.subtitle}
                      </span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.aside>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeMaterial.id}
                initial={{
                  opacity: 0,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
                  filter: "grayscale(40%) contrast(0.8)",
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  filter: "grayscale(0%) contrast(1)",
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  clipPath: "polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%)",
                  filter: "grayscale(60%) contrast(0.7)",
                  scale: 0.98,
                }}
                transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
                className="relative aspect-[3/4] overflow-hidden rounded-sm bg-black"
              >
                <motion.img
                  key={`${activeMaterial.id}-image`}
                  src={withBase(activeMaterial.image)}
                  alt={activeMaterial.imageAlt}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.08, rotate: -0.6 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                  loading="lazy"
                  decoding="async"
                />
                <motion.div
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent mix-blend-multiply"
                />

              </motion.figure>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              <motion.button
                type="button"
                onClick={prevMaterial}
                className="pointer-events-auto ml-2 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                aria-label="Предыдущий материал"
                whileTap={{ scale: 0.92 }}
                whileHover={{ x: -4 }}
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
              <motion.button
                type="button"
                onClick={nextMaterial}
                className="pointer-events-auto mr-2 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-black"
                aria-label="Следующий материал"
                whileTap={{ scale: 0.92 }}
                whileHover={{ x: 4 }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeMaterial.id}-detail`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
                className="mt-10 grid gap-10 md:grid-cols-2"
              >
                <div className="space-y-6">
                  <h3 className="text-4xl font-light tracking-[0.08em] text-foreground">
                    {activeMaterial.title}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                    {activeMaterial.subtitle}
                  </p>
                  <p className="text-base font-light leading-relaxed text-foreground/70 md:text-lg">
                    {activeMaterial.description}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-foreground/50">
                    {activeMaterial.seoSnippet}
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-sm uppercase tracking-[0.35em] text-foreground/60">
                    Технологические преимущества
                  </h4>
                  <ul className="space-y-4">
                    {activeMaterial.features.map((feature, index) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex items-start gap-3 text-base font-light text-foreground/70"
                      >
                        <span className="mt-2 h-1.5 w-4 rounded-full bg-foreground/40" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="overflow-hidden rounded-sm border border-foreground/10 bg-foreground/5 p-6">
                    <div className="flex flex-wrap gap-3">
                      {activeMaterial.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-foreground/20 px-4 py-1 text-xs uppercase tracking-[0.25em] text-foreground/60"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
