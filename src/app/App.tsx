// src/App.tsx
import { useState, useEffect } from "react";

// IMPORT CONFIGS
import { C, COSMIC_STYLES } from "./config/theme";
import type { Lang } from "./config/translations";

// IMPORT LAYOUT COMPONENTS
import CosmicBackground from "./components/CosmicBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// IMPORT SECTIONS
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  // Satu-satunya state yang tetap di App.tsx karena digunakan oleh semua section
  const [lang, setLang] = useState<Lang>("EN");

  // Inisialisasi tema global
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.style.background = C.bg;
  }, []);

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', 'Space Grotesk', sans-serif", color: C.text, position: "relative" }}>
      {/* Inject Global CSS Animation */}
      <style>{COSMIC_STYLES}</style>
      
      {/* Background Ornaments (Layer 0) */}
      <CosmicBackground />

      {/* Main Content (Layer 1) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        {/* Navigation */}
        <Navbar lang={lang} />

        {/* Sections */}
        <main>
          <HeroSection lang={lang} />
          <AboutSection lang={lang} />
          <ExperienceSection lang={lang} />
          <ProjectsSection lang={lang} />
          {/* <SkillsSection lang={lang} /> */}
          <ContactSection lang={lang} />
        </main>
<FloatingActions lang={lang} setLang={setLang} />
        {/* Footer */}
        <Footer lang={lang} />
        
      </div>
    </div>
  );
}