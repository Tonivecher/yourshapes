import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ProjectDistortionCard } from "@/components/projects/ProjectDistortionCard";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const rail = railRef.current;

    if (!section || !viewport || !rail) {
      return;
    }

    const context = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const getDistance = () => Math.max(0, rail.scrollWidth - viewport.clientWidth);
          if (getDistance() === 0) {
            return undefined;
          }

          const tween = gsap.to(rail, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top+=80",
              end: () => `+=${getDistance() + window.innerHeight * 0.45}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });

          return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            gsap.set(rail, { clearProps: "transform" });
          };
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, [shouldReduceMotion]);

  return (
    <section id="projects" ref={sectionRef} className="px-5 py-10 md:px-8 md:py-16">
      <div className="section-shell mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(205,127,50,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_18%)]" />
        <div className="relative">
          <div className="max-w-3xl">
            <p className="eyebrow">Портфолио производства</p>
            <h2 className="section-heading mt-5">
              Реализованные проекты, где мебель работает как продолжение
              архитектуры.
            </h2>
            <p className="section-copy mt-8">
              От приватных интерьеров до высоконагруженных коммерческих
              пространств. Мы проектируем, выпускаем и монтируем изделия внутри
              одной фабрики, поэтому контролируем качество, сроки и конечную
              стоимость без посредников.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-[#c0c0c0]/58"
          >
            <ArrowDownRight className="h-4 w-4 text-[#cd7f32]" />
            На desktop секция раскрывается в горизонтальную производственную ленту
          </motion.div>

          <div ref={viewportRef} className="relative mt-12 overflow-hidden">
            <div
              ref={railRef}
              className="grid gap-5 lg:flex lg:w-max lg:items-stretch xl:gap-6"
            >
              {projects.map((project) => (
                <ProjectDistortionCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
