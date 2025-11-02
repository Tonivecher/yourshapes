import { useEffect } from "react";
import { onScroll } from "animejs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MaterialsSection from "@/components/MaterialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  // Set dark mode by default for this site
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("darkMode", "true");

    // Add favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href =
        "https://storage.googleapis.com/fenado-ai-farm-public/generated/0bcd745a-7cce-4d29-aa51-fa78c3e56af3.webp";
    }

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Производство нестандартных конструкций из металла, дерева и композитов с архитектурной точностью и минималистичным дизайном.";
      const headEl = document.head ?? document.getElementsByTagName("head")[0];
      headEl?.appendChild(meta);
    } else {
      metaDescription.setAttribute(
        "content",
        "Производство нестандартных конструкций из металла, дерева и композитов с архитектурной точностью и минималистичным дизайном.",
      );
    }

    // Set page title
    document.title =
      "Инженерия формы — студия архитектурного дизайна и производства";
  }, []);

  useEffect(() => {
    const cleanup = onScroll({
      selector: "[data-animate]",
      translateY: 36,
      opacity: 0,
      duration: 800,
      easing: "easeOutQuad",
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px",
    });

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-oid="-sdk692"
    >
      <Header data-oid="0pmxfag" />

      <main data-oid="a2l-dcn">
        <HeroSection data-oid="126wxpe" />
        <AboutSection data-oid="cn2k98_" />
        <MaterialsSection data-oid=".tyep5o" />
        <ProjectsSection data-oid="4jwibll" />
        <ProcessSection data-oid="qa6uz5w" />
        <ContactSection data-oid="yuh3n22" />
      </main>
    </div>
  );
}
