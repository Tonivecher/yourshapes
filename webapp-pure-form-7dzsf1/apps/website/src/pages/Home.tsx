import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MaterialsSection from '@/components/MaterialsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  // Set dark mode by default for this site
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
    
    // Add favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp";
    }
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Производство нестандартных конструкций из металла, дерева и композитов с архитектурной точностью и минималистичным дизайном.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    } else {
      metaDescription.setAttribute('content', 'Производство нестандартных конструкций из металла, дерева и композитов с архитектурной точностью и минималистичным дизайном.');
    }
    
    // Set page title
    document.title = 'Инженерия формы — студия архитектурного дизайна и производства';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <MaterialsSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      
    </div>
  );
}
