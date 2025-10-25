import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const processSteps = [
  {
    id: 'step-1',
    number: '01',
    title: 'Идея и эскиз',
    description: 'Обсуждение концепции с заказчиком. Разработка первых визуальных решений и эскизов.',
  },
  {
    id: 'step-2',
    number: '02',
    title: 'Проектирование',
    description: 'Создание точной 3D-модели. Инженерные расчеты, подбор материалов и узлов сопряжения.',
  },
  {
    id: 'step-3',
    number: '03',
    title: 'Производство',
    description: 'Изготовление всех элементов на высокоточном оборудовании. Контроль качества на каждом этапе.',
  },
  {
    id: 'step-4',
    number: '04',
    title: 'Монтаж',
    description: 'Аккуратная сборка и установка конструкции на объекте. Финальная сдача проекта.',
  },
];

const ProcessSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const lineVariants = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section id="process" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-16 text-center">
          Процесс работы
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute top-14 left-0 right-0 hidden md:block">
            <motion.div
              variants={lineVariants}
              className="h-px bg-primary/20 w-full"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="architectural-border bg-background p-6 md:p-8 relative"
              >
                <div className="mb-6">
                  <span className="text-4xl font-light text-primary/80">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-medium tracking-wide mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;