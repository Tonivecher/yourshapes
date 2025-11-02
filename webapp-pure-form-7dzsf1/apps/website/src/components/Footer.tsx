import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      data-animate
      className="py-12 bg-background border-t border-border/30"
      data-oid="628q67m"
    >
      <div className="container mx-auto px-6" data-oid="f5mg03e">
        <div
          className="flex flex-col md:flex-row justify-between items-center"
          data-oid="py3eq__"
        >
          {/* Logo */}
          <div className="mb-6 md:mb-0" data-oid="-9ad93o">
            <Link to="/" className="block" data-oid="f_zehnu">
              <img
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp"
                alt="Инженерия формы"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="h-12 w-auto"
                data-oid="aw.gt1y"
              />
            </Link>
          </div>

          {/* Tagline */}
          <div className="mb-6 md:mb-0 text-center" data-oid="7k94cct">
            <p
              className="text-foreground/70 text-sm tracking-wider uppercase"
              data-oid="o1::aig"
            >
              Форма подчиняет материал
            </p>
          </div>

          {/* Social and Language */}
          <div className="flex items-center space-x-6" data-oid="gv7_-yd">
            {/* Social Icons */}
            <div className="flex space-x-4" data-oid="obok6re">
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Behance"
                data-oid="ptgkfca"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-oid="bf.lqi6"
                >
                  <path
                    d="M8.5 9.5H3m11.5 0h-4m4 5h-4m-4 0H3m1.5-2.5h5a2 2 0 0 0 0-4h-5v8h5a2 2 0 0 0 0-4Zm8 0h2a2 2 0 0 0 0-4h-2v8Z"
                    data-oid="n2p.nos"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
                data-oid=":v2kmto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  data-oid="gxb6a-t"
                >
                  <rect
                    width="20"
                    height="20"
                    x="2"
                    y="2"
                    rx="5"
                    ry="5"
                    data-oid="gudqn4x"
                  />

                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    data-oid="jiz4s0n"
                  />

                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                    data-oid=":.cu5.."
                  />
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div
              className="flex items-center border-l border-border/30 pl-6"
              data-oid="3:5_wx."
            >
              <button className="text-foreground mr-2" data-oid="wr:ynz6">
                RU
              </button>
              <span className="text-foreground/30" data-oid="8d:82gw">
                /
              </span>
              <button
                className="text-foreground/30 ml-2 cursor-not-allowed"
                data-oid="8xv54lo"
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-6 border-t border-border/10 text-center"
          data-oid="ra9c0b5"
        >
          <p className="text-xs text-foreground/50" data-oid="6:pgj7t">
            © {new Date().getFullYear()} Инженерия формы. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
