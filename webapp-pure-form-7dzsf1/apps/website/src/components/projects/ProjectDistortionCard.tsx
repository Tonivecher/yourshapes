import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";

import { LazyMedia } from "@/components/LazyMedia";
import { type ProjectItem } from "@/data/projects";
import { isFinePointerDevice } from "@/lib/utils";

interface ProjectDistortionCardProps {
  project: ProjectItem;
}

export function ProjectDistortionCard({
  project,
}: ProjectDistortionCardProps) {
  const filterId = useId().replace(/:/g, "");
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const canDistort = !shouldReduceMotion && isFinePointerDevice();

  useEffect(() => {
    if (!canDistort || !turbulenceRef.current || !displacementRef.current) {
      return;
    }

    gsap.killTweensOf([turbulenceRef.current, displacementRef.current]);

    if (isActive) {
      gsap.to(turbulenceRef.current, {
        attr: { baseFrequency: 0.024 },
        duration: 0.45,
        ease: "power2.out",
      });
      gsap.to(displacementRef.current, {
        attr: { scale: 34 },
        duration: 0.42,
        ease: "power3.out",
      });
      return;
    }

    gsap.to(turbulenceRef.current, {
      attr: { baseFrequency: 0.009 },
      duration: 0.35,
      ease: "power2.out",
    });
    gsap.to(displacementRef.current, {
      attr: { scale: 0 },
      duration: 0.35,
      ease: "power3.out",
    });
  }, [canDistort, isActive]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="group section-shell w-full overflow-hidden border-white/8 bg-[#090909] lg:w-[30rem] xl:w-[34rem]"
    >
      <svg width="0" height="0" aria-hidden className="absolute">
        <filter id={filterId}>
          <feTurbulence
            ref={turbulenceRef}
            type="fractalNoise"
            baseFrequency={0.009}
            numOctaves={2}
            seed={8}
            result="noise"
          />
          <feDisplacementMap
            ref={displacementRef}
            in="SourceGraphic"
            in2="noise"
            scale={0}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.15),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.55))] opacity-80" />
        <LazyMedia
          alt={project.alt}
          src={project.image}
          webpSrc={project.image}
          className="transition duration-700 ease-out group-hover:scale-[1.04]"
          style={{
            filter:
              canDistort && isActive
                ? `url(#${filterId}) brightness(0.84) saturate(1.08)`
                : "brightness(0.84)",
          }}
          wrapperClassName="absolute inset-0"
          sizes="(min-width: 1440px) 34rem, (min-width: 1024px) 30rem, 100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
      </div>

      <div className="relative space-y-4 px-5 pb-6 pt-5 md:px-6 md:pb-7">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
            {project.label}
          </p>
          <ArrowUpRight className="h-4 w-4 text-[#c0c0c0]/55 transition duration-300 group-hover:text-[#cd7f32]" />
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#f5f5f5]">
          {project.title}
        </h3>
        <p className="text-sm uppercase tracking-[0.22em] text-[#c0c0c0]/55">
          {project.material}
        </p>
        <p className="text-sm leading-7 text-[#c0c0c0]/72 md:text-base">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
