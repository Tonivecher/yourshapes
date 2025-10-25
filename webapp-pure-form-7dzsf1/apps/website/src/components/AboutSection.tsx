import { useRef } from 'react';
import { withBase } from '@/lib/utils';
import { useAutoplayVideo } from '@/hooks/useAutoplayVideo';

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useAutoplayVideo(videoRef);

  return (
    <section
      id="about"
      data-animate
      className="relative overflow-hidden py-24 md:py-32 bg-black text-zinc-100 font-sans"
    >
      {/* --- Background video layer --- */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={withBase("videos/about2.mp4")} type="video/mp4" />
        </video>
        {/* Тёмная подложка для контраста */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* --- Foreground content --- */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-3xl">
        <h2
          className="text-4xl md:text-5xl font-semibold uppercase tracking-[0.15em] text-zinc-50 mb-10"
          style={{
            letterSpacing: '0.15em',
            fontFeatureSettings: '"ss01", "liga", "kern"',
          }}
        >
          Философия
        </h2>
        <p
          className="text-zinc-300 text-[16px] md:text-[18px] leading-relaxed font-medium tracking-tight"
          style={{
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: '1.7',
          }}
        >
          Мы работаем с металлом, деревом и композитами, добиваясь идеальной точности сопряжений
          и чистоты поверхностей. Каждый проект — это диалог между функцией, формой и материалом.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
