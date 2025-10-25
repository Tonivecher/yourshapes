import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Smooth scroll function
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background video/image */}
      <div className="absolute inset-0 bg-background">
        {/* Fallback image for mobile or when video fails to load */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/about-bg-fallback.jpg')`,
            opacity: 0.65,
          }}
        ></div>
        
        {/* Video background - hidden on mobile for performance */}
        <div className="absolute inset-0 hidden md:block overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute h-full w-full object-cover opacity-70"
          >
            <source src="/videos/about-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-background/30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-foreground mb-4 uppercase">
            Инженерия формы
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Студия архитектурного дизайна и производства
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-transparent border border-primary/30 hover:bg-primary/10 text-foreground hover:text-primary transition-all duration-500 px-8 py-6 text-base"
          >
            Связаться
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.7 : 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <svg
            width="24"
            height="48"
            viewBox="0 0 24 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path
              d="M12 2L12 46"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 39L12 46L19 39"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
