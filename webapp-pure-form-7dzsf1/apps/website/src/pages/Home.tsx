import { useEffect } from "react";
import { SectionErrorBoundary } from "@/components/SectionErrorBoundary";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MaterialsSection from "@/components/MaterialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.removeAttribute("data-theme");

    const metaDescription = document.querySelector('meta[name="description"]');
    const description =
      "Инженерия формы — прямой производитель мебели на заказ. Премиальное качество, собственное производство и точная реализация без посредников.";

    if (!metaDescription) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    } else {
      metaDescription.setAttribute("content", description);
    }

    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", "#050505");
    }

    document.title =
      "Инженерия формы — мебель на заказ от прямого производителя";
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-oid="-sdk692"
    >
      <Header data-oid="0pmxfag" />

      <main className="relative pb-10" data-oid="a2l-dcn">
        <SectionErrorBoundary sectionName="Главный экран">
          <HeroSection data-oid="126wxpe" />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="О производстве">
          <AboutSection data-oid="cn2k98_" />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Материалы">
          <MaterialsSection data-oid=".tyep5o" />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Проекты">
          <ProjectsSection data-oid="4jwibll" />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Производственный процесс">
          <ProcessSection data-oid="qa6uz5w" />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Контакты">
          <ContactSection data-oid="yuh3n22" />
        </SectionErrorBoundary>
      </main>
    </div>
  );
}
