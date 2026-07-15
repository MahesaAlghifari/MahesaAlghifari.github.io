// src/sections/ProjectsSection.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";
import { projects } from "../data/projects";
import type { Project, ProjectCategory } from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

const TABS = ["UI/UX", "Social Media", "Media Print", "Other"] as const;
type Tab = typeof TABS[number];

export default function ProjectsSection({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];
  
  // Local state
  const [activeTab, setActiveTab] = useState<Tab>("UI/UX");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter logic
  const catKey: Record<Tab, ProjectCategory> = { 
    "UI/UX": "uiux", "Social Media": "social", "Media Print": "print", "Other": "other" 
  };
  const filtered = projects.filter((p) => p.category === catKey[activeTab]);

  // Modal navigation logic
  const modalIdx = selectedProject ? filtered.findIndex((p) => p.id === selectedProject.id) : -1;
  const goModalNext = () => { if (modalIdx < filtered.length - 1) setSelectedProject(filtered[modalIdx + 1]); };
  const goModalPrev = () => { if (modalIdx > 0) setSelectedProject(filtered[modalIdx - 1]); };

  const btnBase: React.CSSProperties = { border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" };

  return (
    <>
      <section id="projects" style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px,6vw,80px)" }}>
        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
          
          {/* Header */}
          <div style={{ marginBottom: 44 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", color: C.cyan, marginBottom: 14, fontFamily: "'Space Mono', monospace" }}>{t.projects.tag}</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.projects.h1}<span style={{ color: C.pink, textShadow: `0 0 20px ${C.pink}55` }}>{t.projects.hAccent}</span>
            </h2>
            
            {/* DESKRIPSI TAMBAHAN DI SINI */}
            <p style={{ 
              fontSize: "clamp(14px, 2vw, 16px)", 
              color: C.textMuted, 
              lineHeight: 1.8, 
              marginTop: 18, 
              maxWidth: 600 
            }}>
              {lang === "ID" 
                ? "Jelajahi berbagai karya yang telah saya buat. Portofolio ini terbagi menjadi beberapa kategori, mulai dari desain antarmuka, media sosial, hingga kebutuhan cetak." 
                : "Explore the various works I have created. This portfolio is divided into several categories, ranging from user interfaces and social media to print requirements."}
            </p>
          </div>

          {/* TABS - DESKTOP VIEW */}
          <div className="tabs-desktop" style={{ gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {TABS.map((tab, idx) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                style={{ 
                  ...btnBase, 
                  padding: "9px 20px", 
                  borderRadius: 99, 
                  fontSize: 12, 
                  fontWeight: 600, 
                  border: `1px solid ${activeTab === tab ? C.cyan : C.border}`, 
                  background: activeTab === tab ? "rgba(0,212,255,0.1)" : "rgba(8,8,28,0.5)", 
                  color: activeTab === tab ? C.cyan : C.textMuted, 
                  boxShadow: activeTab === tab ? `0 0 20px ${C.cyan}22` : "none", 
                  transition: "all 0.25s", 
                  fontFamily: "'Space Grotesk', sans-serif" 
                }}
              >
                {t.projects.tabs[idx]}
              </button>
            ))}
          </div>

          {/* TABS - MOBILE DROPDOWN */}
          <div className="tabs-mobile" style={{ position: "relative", marginBottom: 32 }}>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value as Tab)}
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: 14,
                background: "rgba(8,8,28,0.7)",
                border: `1px solid ${C.border}`,
                color: C.cyan,
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                appearance: "none",
                outline: "none",
                cursor: "pointer",
                boxShadow: `0 0 20px ${C.cyan}10`
              }}
            >
              {TABS.map((tab, idx) => (
                <option key={tab} value={tab} style={{ background: "#08081c", color: "#fff" }}>
                  {t.projects.tabs[idx]}
                </option>
              ))}
            </select>
            {/* Custom Icon Dropdown */}
            <div style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: C.cyan, display: "flex" }}>
              <ChevronDown size={18} />
            </div>
          </div>

          {/* Grid Card */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
                {filtered.map((p) => (
                  <ProjectCard key={p.id} project={p} onClick={() => setSelectedProject(p)} viewLabel={t.projects.viewCaseStudy} lang={lang} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Modal */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onNext={goModalNext} onPrev={goModalPrev} lang={lang} />
            )}
          </AnimatePresence>

        </div>
      </section>

      <style>{`
        .tabs-desktop {
          display: flex;
        }
        .tabs-mobile {
          display: none;
        }

        @media (max-width: 768px) {
          .tabs-desktop {
            display: none !important;
          }
          .tabs-mobile {
            display: block;
          }
        }
      `}</style>
    </>
  );
}