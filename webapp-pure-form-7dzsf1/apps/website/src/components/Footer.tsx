import { Link } from "react-router-dom";

import { LazyMedia } from "@/components/LazyMedia";
import { WEBSITE_NAME } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-5 pb-10 pt-6 md:px-8 md:pb-12">
      <div className="section-shell mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(205,127,50,0.14),transparent_26%)]" />
        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Link to="/" className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <LazyMedia
                  alt={WEBSITE_NAME}
                  src="logo.webp"
                  webpSrc="logo.webp"
                  className="object-contain p-2"
                  wrapperClassName="h-full w-full"
                  priority
                />
              </div>
              <div>
                <p className="font-display text-lg tracking-[0.18em] text-[#f5f5f5]">
                  {WEBSITE_NAME}
                </p>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#c0c0c0]/55">
                  Direct custom manufacturing
                </p>
              </div>
            </Link>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#c0c0c0]/68 md:text-base">
              Прямой производитель мебели на заказ для премиальных интерьеров,
              коммерческих пространств и типовых серий с контролируемым
              бюджетом.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 lg:min-w-[34rem]">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                Email
              </p>
              <a
                href="mailto:contact@form-eng.com"
                className="mt-3 inline-block text-base text-[#f5f5f5] transition hover:text-[#cd7f32]"
              >
                contact@form-eng.com
              </a>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                Телефон
              </p>
              <a
                href="tel:+74951234567"
                className="mt-3 inline-block text-base text-[#f5f5f5] transition hover:text-[#cd7f32]"
              >
                +7 (495) 123-45-67
              </a>
            </div>
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#cd7f32]/75">
                Адрес
              </p>
              <p className="mt-3 text-base text-[#f5f5f5]">
                Москва, Проектируемый проезд, 1
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-10 border-t border-white/10 pt-6 text-sm text-[#c0c0c0]/52">
          © {new Date().getFullYear()} {WEBSITE_NAME}. Премиальное производство
          мебели без посредников.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
