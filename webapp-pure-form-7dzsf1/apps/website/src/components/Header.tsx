import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("RU");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "RU" ? "EN" : "RU");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl py-4 border-b border-border/20"
          : "bg-transparent py-8"
      }`}
      data-oid="2_3ykba"
    >
      <div
        className="container mx-auto px-8 flex justify-between items-center"
        data-oid="p:0yowy"
      >
        <div className="flex items-center" data-oid="yjt3vlt">
          <Link
            to="/"
            className="text-foreground text-sm font-light tracking-[0.2em] uppercase transition-all duration-300 hover:text-foreground/70"
            data-oid="pm5u-u_"
          >
            Инженерия Формы
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-12"
          data-oid="_u2p7rf"
        >
          <a
            href="#about"
            className="text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
            data-oid="j3ebs.-"
          >
            О студии
            <span
              className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
              data-oid="s_arckl"
            ></span>
          </a>
          <a
            href="#materials"
            className="text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
            data-oid="730niul"
          >
            Материалы
            <span
              className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
              data-oid="o9crhlq"
            ></span>
          </a>
          <a
            href="#projects"
            className="text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
            data-oid="kztn:j1"
          >
            Проекты
            <span
              className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
              data-oid="jj38:fy"
            ></span>
          </a>
          <a
            href="#process"
            className="text-sm font-light text-foreground/80 hover:text-foreground transition-all duration-300 relative group"
            data-oid="q_x8atp"
          >
            Процесс
            <span
              className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"
              data-oid="2jam36o"
            ></span>
          </a>
          <a
            href="#contact"
            className="text-sm font-light text-foreground border border-foreground/20 px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300"
            data-oid="prvmym9"
          >
            Связаться
          </a>

          <div className="pl-6 border-l border-border/30" data-oid="5xg6eoh">
            <button
              onClick={toggleLanguage}
              className="text-sm font-light text-foreground/60 hover:text-foreground transition-all duration-300"
              data-oid="ewkn:e_"
            >
              {currentLanguage === "RU" ? "RU / EN" : "EN / RU"}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative cursor-pointer py-4 px-8 text-center font-sans inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden md:hidden"
          aria-label="Toggle menu"
          data-oid="ugjzag4"
        >
          <span className="relative z-20" data-oid="u-7lfp-">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="_qe3fhe"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  data-oid="55ziuap"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="59ztkit"
                />
              )}
            </svg>
          </span>
          <span
            className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
            data-oid="vgt-v._"
          ></span>
          <span
            className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
            data-oid="qjb40_k"
          ></span>
          <span
            className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
            data-oid="u92-s7r"
          ></span>
          <span
            className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
            data-oid="ago9cbs"
          ></span>
          <span
            className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
            data-oid="4:9ak0-"
          ></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden bg-background/95 backdrop-blur-lg absolute top-full left-0 w-full py-4 px-6 shadow-md"
          data-oid="m6bfoh."
        >
          <nav className="flex flex-col space-y-4" data-oid=".eefo1i">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
              data-oid="28etw03"
            >
              О студии
            </a>
            <a
              href="#materials"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
              data-oid="ztf66el"
            >
              Материалы
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
              data-oid="1-xs836"
            >
              Проекты
            </a>
            <a
              href="#process"
              className="text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
              data-oid="0tgazm4"
            >
              Процесс
            </a>
            <a
              href="#contact"
              className="relative cursor-pointer py-4 px-8 text-center font-sans inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
              onClick={() => setIsOpen(false)}
              data-oid=":c:g__d"
            >
              <span className="relative z-20" data-oid=":2.fa2j">
                Связаться
              </span>
              <span
                className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                data-oid="daoef8s"
              ></span>
              <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                data-oid="rt2euq7"
              ></span>
              <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                data-oid="5w9qun7"
              ></span>
              <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                data-oid="2zhz:n9"
              ></span>
              <span
                className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                data-oid="na9_0at"
              ></span>
            </a>
            <div
              className="pt-3 mt-3 border-t border-border"
              data-oid="2bgd1jx"
            >
              <button
                onClick={toggleLanguage}
                className="relative cursor-pointer py-4 px-8 text-center font-sans inline-flex justify-center items-center text-base uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
                data-oid="qtfdkgp"
              >
                <span className="relative z-20" data-oid="btykepu">
                  {currentLanguage === "RU" ? "RU / EN" : "EN / RU"}
                </span>
                <span
                  className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out"
                  data-oid="9v3yywk"
                ></span>
                <span
                  className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0"
                  data-oid="vhd.au7"
                ></span>
                <span
                  className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0"
                  data-oid="t2yk48l"
                ></span>
                <span
                  className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0"
                  data-oid="kg.4f63"
                ></span>
                <span
                  className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0"
                  data-oid="-d-:x5i"
                ></span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
