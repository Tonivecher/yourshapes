import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col"
      data-oid="g.10t8w"
    >
      {/* Header */}
      <header className="py-6 px-6" data-oid="i_cbzbh">
        <div className="container mx-auto" data-oid="t:aki:z">
          <Link
            to="/"
            className="text-foreground text-xl tracking-wider"
            data-oid="j5-g4vk"
          >
            ИНЖЕНЕРИЯ ФОРМЫ
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div
        className="flex-grow flex items-center justify-center p-6"
        data-oid="ul581lz"
      >
        <div className="max-w-md w-full" data-oid="jgjmx8y">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
            data-oid="0_ksyun"
          >
            {/* Error code with architectural border */}
            <div
              className="mb-8 relative inline-block architectural-border p-8"
              data-oid="k3wgsir"
            >
              <h1 className="text-6xl font-light" data-oid="f7uk8ot">
                404
              </h1>
            </div>

            {/* Separator line */}
            <div
              className="h-px w-16 bg-primary/30 mx-auto mb-8"
              data-oid="kwrpfu7"
            ></div>

            <h2 className="text-2xl font-light mb-4" data-oid="ybr5jdc">
              Страница не найдена
            </h2>

            <p className="text-foreground/70 mb-8" data-oid="8.vgoq:">
              Запрашиваемая страница не существует или была перемещена.
              Вернитесь на главную страницу.
            </p>

            <Button
              asChild
              className="bg-transparent border border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-500"
              data-oid="3o031-n"
            >
              <Link to="/" data-oid="rutx478">
                На главную
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="py-6 px-6 border-t border-border/30"
        data-oid="e9-f88q"
      >
        <div
          className="container mx-auto flex justify-between items-center"
          data-oid="-s58xqz"
        >
          <div data-oid="zvkhq2q">
            <img
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp"
              alt="Инженерия формы"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="h-8 w-auto"
              data-oid="x2zgbzr"
            />
          </div>
          <div data-oid="u98bqmt">
            <p className="text-sm text-foreground/50" data-oid="wr6n_2v">
              © {new Date().getFullYear()} Инженерия формы
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
