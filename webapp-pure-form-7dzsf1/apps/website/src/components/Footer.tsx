import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="block">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp" 
                alt="Инженерия формы" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Tagline */}
          <div className="mb-6 md:mb-0 text-center">
            <p className="text-foreground/70 text-sm tracking-wider uppercase">
              Форма подчиняет материал
            </p>
          </div>

          {/* Social and Language */}
          <div className="flex items-center space-x-6">
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a 
                href="/#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Behance"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 9.5H3m11.5 0h-4m4 5h-4m-4 0H3m1.5-2.5h5a2 2 0 0 0 0-4h-5v8h5a2 2 0 0 0 0-4Zm8 0h2a2 2 0 0 0 0-4h-2v8Z"/>
                </svg>
              </a>
              <a 
                href="/#" 
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div className="flex items-center border-l border-border/30 pl-6">
              <button className="text-foreground mr-2">RU</button>
              <span className="text-foreground/30">/</span>
              <button className="text-foreground/30 ml-2 cursor-not-allowed">EN</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/10 text-center">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Инженерия формы. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;