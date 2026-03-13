import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { LazyMedia } from "@/components/LazyMedia";
import { WEBSITE_NAME } from "@/constants";

export default function ErrorPage() {
  return (
    <div
      className="flex min-h-screen flex-col bg-background text-foreground"
      data-oid="g.10t8w"
    >
      <header className="px-6 py-6" data-oid="i_cbzbh">
        <div className="mx-auto max-w-7xl" data-oid="t:aki:z">
          <Link
            to="/"
            className="font-display text-xl tracking-[0.18em] text-foreground"
            data-oid="j5-g4vk"
          >
            {WEBSITE_NAME}
          </Link>
        </div>
      </header>

      <div
        className="flex flex-grow items-center justify-center p-6"
        data-oid="ul581lz"
      >
        <div className="w-full max-w-md" data-oid="jgjmx8y">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-shell text-center"
            data-oid="0_ksyun"
          >
            <div className="px-8 py-12">
              <div className="mx-auto mb-8 h-20 w-20 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <LazyMedia
                  alt={WEBSITE_NAME}
                  src="logo.webp"
                  webpSrc="logo.webp"
                  className="object-contain p-3"
                  wrapperClassName="h-full w-full"
                  priority
                />
              </div>
              <div
                className="mb-8 inline-flex rounded-full border border-[#cd7f32]/20 bg-[#cd7f32]/10 px-6 py-3"
                data-oid="k3wgsir"
              >
                <h1 className="text-5xl font-semibold tracking-[-0.06em]" data-oid="f7uk8ot">
                  404
                </h1>
              </div>

              <div
                className="mx-auto mb-8 h-px w-16 bg-[#cd7f32]/40"
                data-oid="kwrpfu7"
              ></div>

              <h2 className="text-2xl font-semibold tracking-[-0.04em] mb-4" data-oid="ybr5jdc">
                Страница не найдена
              </h2>

              <p className="mb-8 text-[#c0c0c0]/70 leading-7" data-oid="8.vgoq:">
                Запрашиваемая страница недоступна. Вернитесь на главную и
                продолжите знакомство с производством.
              </p>

              <Button
                asChild
                className="bronze-button h-auto px-6 py-3"
                data-oid="3o031-n"
              >
                <Link to="/" data-oid="rutx478">
                  На главную
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="border-t border-border/30 px-6 py-6" data-oid="e9-f88q">
        <div
          className="mx-auto flex max-w-7xl items-center justify-between gap-4"
          data-oid="-s58xqz"
        >
          <div className="flex items-center gap-3" data-oid="zvkhq2q">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-white/5">
              <LazyMedia
                alt={WEBSITE_NAME}
                src="logo.webp"
                webpSrc="logo.webp"
                className="object-contain p-2"
                wrapperClassName="h-full w-full"
                priority
              />
            </div>
            <span className="text-sm text-[#c0c0c0]/58">{WEBSITE_NAME}</span>
          </div>
          <div data-oid="u98bqmt">
            <p className="text-sm text-foreground/50" data-oid="wr6n_2v">
              © {new Date().getFullYear()} {WEBSITE_NAME}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
