import { useRef } from "react";
import { motion } from "framer-motion";
import { withBase } from "@/lib/utils";
import { useAutoplayVideo } from "@/hooks/useAutoplayVideo";

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useAutoplayVideo(videoRef);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 md:py-40 bg-background"
      data-oid="rqcm0s9"
    >
      {/* --- Background video layer --- */}
      <div className="absolute inset-0 -z-10" data-oid="0sfqx-l">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-10"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          data-oid="lfbkn3."
        >
          <source
            src={withBase("videos/about2.mp4")}
            type="video/mp4"
            data-oid="ah16eqa"
          />
        </video>
      </div>

      {/* --- Foreground content --- */}
      <div
        className="relative z-10 container mx-auto px-8 max-w-6xl"
        data-oid=".r2u9-j"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          data-oid="5-h1z0n"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-oid="5hma.yg"
          >
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-normal text-foreground mb-8 leading-tight"
              data-oid="jbilwn:"
            >
              О студии
            </h2>
            <div
              className="w-16 h-px bg-foreground/30 mb-8"
              data-oid=":--ef-k"
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
            data-oid="g4:w42u"
          >
            <p
              className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed"
              data-oid="crizukw"
            >
              Formalab — инженерная студия полного цикла. Мы проектируем и
              производим корпусную и встроенную мебель на заказ.
            </p>
            <p
              className="text-base md:text-lg text-foreground/60 font-light leading-relaxed"
              data-oid="hdnitc-"
            >
              Наши клиенты — те, кто ценит пропорции, материалы и аккуратность
              деталей. У нас собственный цех, поэтому цена не уходит в
              посредников.
            </p>
            <p
              className="text-base md:text-lg text-foreground/60 font-light leading-relaxed"
              data-oid="i7:bhr8"
            >
              Мы работаем в двух направлениях: для тех, кто хочет визуальный
              эффект премиум-интерьера без переплаты, и для тех, кто выбирает
              без компромиссов — дорогие материалы, фурнитуру, точность сборки.
            </p>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-foreground/10"
          data-oid="5t.6mfj"
        >
          <div className="text-center" data-oid="carwqcl">
            <div
              className="text-3xl md:text-4xl font-light text-foreground mb-2"
              data-oid="utf7jhq"
            >
              150+
            </div>
            <div
              className="text-sm text-foreground/50 font-light tracking-wide"
              data-oid="7rshjc2"
            >
              Проектов
            </div>
          </div>
          <div className="text-center" data-oid="yoay_jg">
            <div
              className="text-3xl md:text-4xl font-light text-foreground mb-2"
              data-oid="c0nam.:"
            >
              8
            </div>
            <div
              className="text-sm text-foreground/50 font-light tracking-wide"
              data-oid="8vp3bm3"
            >
              Лет опыта
            </div>
          </div>
          <div className="text-center" data-oid="3lj.fs8">
            <div
              className="text-3xl md:text-4xl font-light text-foreground mb-2"
              data-oid="6734yg7"
            >
              24/7
            </div>
            <div
              className="text-sm text-foreground/50 font-light tracking-wide"
              data-oid="8lz4p.5"
            >
              Поддержка
            </div>
          </div>
          <div className="text-center" data-oid="uo8:mqe">
            <div
              className="text-3xl md:text-4xl font-light text-foreground mb-2"
              data-oid="671rq:_"
            >
              100%
            </div>
            <div
              className="text-sm text-foreground/50 font-light tracking-wide"
              data-oid="15:abip"
            >
              Качество
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
