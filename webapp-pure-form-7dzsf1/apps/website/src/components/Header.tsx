import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { WEBSITE_NAME } from "@/constants";

const navigationItems = [
  { id: "about", label: "Производство" },
  { id: "materials", label: "Материалы" },
  { id: "projects", label: "Портфолио" },
  { id: "process", label: "Процесс" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateTo = (id: string) => {
    scrollTo(`#${id}`, { offset: -96 });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-[#050505]/88 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-4"
          onClick={() => scrollTo(0, { immediate: true })}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#cd7f32]/30 bg-[#0e0e0e]/90 text-xs font-semibold uppercase tracking-[0.35em] text-[#cd7f32]">
            IF
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-lg tracking-[0.18em] text-[#f5f5f5] transition group-hover:text-[#cd7f32]">
              {WEBSITE_NAME}
            </p>
            <p className="truncate text-[0.7rem] uppercase tracking-[0.32em] text-[#c0c0c0]/55">
              Direct Custom Manufacturing
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => navigateTo(item.id)}
              className="text-sm uppercase tracking-[0.26em] text-[#c0c0c0]/72 transition duration-300 hover:text-[#f5f5f5]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-right">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#c0c0c0]/55">
              Без посредников
            </p>
            <p className="text-sm font-semibold text-[#f5f5f5]">
              Премиум и массовые серии
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo("contact")}
            className="bronze-button gap-2"
          >
            Рассчитать проект
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#f5f5f5] transition duration-300 hover:border-[#cd7f32]/50 hover:text-[#cd7f32] lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#050505]/98 px-5 pb-6 pt-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigateTo(item.id)}
                className="flex w-full items-center justify-between rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-left text-sm uppercase tracking-[0.24em] text-[#f5f5f5]"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="h-4 w-4 text-[#cd7f32]" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="bronze-button mt-4 w-full gap-2"
            >
              Рассчитать проект
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
