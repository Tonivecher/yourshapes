import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const processSteps = [
  {
    id: "step-1",
    number: "01",
    title: "Обсуждаем задачу, анализируем пространство и примеры.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Замер и 3D-модель будущей мебели.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Подбор материалов и фурнитуры.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Производство, сборка и установка.",
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
      controls.start("visible");
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
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section
      id="process"
      className="py-24 md:py-32 bg-card/50"
      data-oid="kn2vihb"
    >
      <div className="container mx-auto px-6" data-oid="u2if7m2">
        <h2
          className="text-2xl md:text-3xl font-light uppercase tracking-wider mb-16 text-center"
          data-oid="5g1uw5d"
        >
          Как мы работаем
        </h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
          data-oid="l8u6xkt"
        >
          {/* Connecting line */}
          <div
            className="absolute top-14 left-0 right-0 hidden md:block"
            data-oid="mayahs7"
          >
            <motion.div
              variants={lineVariants}
              className="h-px bg-primary/20 w-full"
              data-oid="noifr.j"
            ></motion.div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            data-oid="p4jwv.h"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="architectural-border bg-background p-6 md:p-8 relative"
                data-oid="eiobd9m"
              >
                <div className="mb-6" data-oid="2:pkji7">
                  <span
                    className="text-4xl font-light text-primary/80"
                    data-oid="p6-xd2m"
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="text-lg font-medium tracking-wide mb-4"
                  data-oid="im7v55a"
                >
                  {step.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
