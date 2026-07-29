// src/components/projects/ProjectModal.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Figma, FileText } from "lucide-react";
import { C } from "../../config/theme";
import { TRANSLATIONS } from "../../config/translations";
import type { Lang } from "../../config/translations";
import type { Project } from "../../data/projects";

/* ─────────────────────────────────────────────────────────
   MODALS KHUSUS (PDF & IMAGE LIGHTBOX)
───────────────────────────────────────────────────────── */

// Modal khusus untuk melihat PDF
function PdfModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(20px, 4vw, 40px)" }}
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} 
        style={{ width: "100%", maxWidth: 1200, height: "100%", background: C.surface1, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", border: `1px solid ${C.borderCyan}` }}
      >
        <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${C.border}`, background: C.surface2 }}>
          <h3 style={{ color: "#fff", margin: 0, fontSize: 16, fontFamily: "'Space Grotesk', sans-serif" }}>{title}</h3>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.05)", border: "none", color: C.textMuted, cursor: "pointer", display: "flex", padding: 8, borderRadius: "50%", transition: "0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#fff"} onMouseLeave={(e) => e.currentTarget.style.color = C.textMuted}>
            <X size={20} />
          </button>
        </div>
        <div style={{ flex: 1, width: "100%" }}>
          <iframe src={src} style={{ width: "100%", height: "100%", border: "none" }} title={title} />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Modal khusus untuk memperbesar Gambar (Desain Grafis / Print / Other)
function ImageLightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
      onClick={onClose}
    >
      <button onClick={onClose} style={{ position: "absolute", top: 24, right: 24, background: "rgba(255,255,255,0.1)", border: `1px solid rgba(255,255,255,0.2)`, color: "#fff", width: 48, height: 48, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(8px)", zIndex: 10 }}>
        <X size={24} />
      </button>
      <motion.img 
        initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
        src={src} 
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 12, boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }} 
        onClick={(e) => e.stopPropagation()} 
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SUB-COMPONENTS (LAYOUTS)
───────────────────────────────────────────────────────── */

function CaseStudyLayout({ p, tabLabels, lang }: { p: Project; tabLabels: string[]; lang: Lang }) {
  const [activeTab, setActiveTab] = useState(0);
  const [pdfUrl, setPdfUrl] = useState<{url: string, title: string} | null>(null);

  if (!p.caseStudy) return null;

  const phases = [
    p.caseStudy.research,
    p.caseStudy.userFlow,
    p.caseStudy.wireframes,
    p.caseStudy.hifi,
    p.caseStudy.testing,
  ];
  const phase = phases[activeTab];

  return (
    <>
      <div style={{ padding: "0 clamp(16px,5vw,60px) 60px" }}>
        {/* Sticky meta row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, marginBottom: 32, borderRadius: 16, overflow: "hidden", border: `1px solid ${C.border}` }}>
          <div style={{ padding: "18px 22px", background: C.surface2 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", color: C.textFaint, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>YEAR</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{p.year}</div>
          </div>
          <div style={{ padding: "18px 22px", background: C.surface2 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.12em", color: C.textFaint, marginBottom: 6, fontFamily: "'Space Mono', monospace" }}>TOOLS</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <Figma size={18} color="#F24E1E" />
              <img src="https://cdn.worldvectorlogo.com/logos/whimsical.svg" alt="Whimsical" style={{ height: 18, objectFit: "contain" }} onError={(e) => e.currentTarget.style.display = "none"} />
            </div>
          </div>
        </div>

        {/* Tab bar (Scroll Horizontal) */}
        <div className="modal-tabs-container" style={{ display: "flex", gap: 6, marginBottom: 28, flexWrap: "nowrap", overflowX: "auto", WebkitOverflowScrolling: "touch", paddingBottom: 4 }}>
          {tabLabels.map((label, i) => (
            <button key={label} onClick={() => setActiveTab(i)} style={{
              padding: "7px 16px", borderRadius: 99, fontSize: 11, fontWeight: 600, cursor: "pointer",
              border: `1px solid ${activeTab === i ? p.accent : C.border}`,
              background: activeTab === i ? `${p.accent}15` : "transparent",
              color: activeTab === i ? p.accent : C.textMuted,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s",
              whiteSpace: "nowrap",
              flexShrink: 0
            }}>{label}</button>
          ))}
        </div>

        {/* Animated tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            <h4 style={{ fontSize: 18, fontWeight: 700, color: C.text, marginBottom: 10, fontFamily: "'Space Grotesk', sans-serif" }}>{phase.title}</h4>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: C.textMuted, marginBottom: 24 }}>{phase.desc}</p>
            
            {/* Tampilkan SATU gambar preview (jika ada) */}
            {phase.images && phase.images.length > 0 && (
              <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, marginBottom: 24 }}>
                <img src={phase.images[0]} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt={phase.title} />
              </div>
            )}

            {/* Tombol Lihat Detail Project -> Buka PDF */}
            <button 
              onClick={() => {
                const pdf = (phase as any).pdfUrl || (phase.images && phase.images[0]) || "";
                setPdfUrl({ url: pdf, title: `${p.title} - ${phase.title}` });
              }} 
              style={{ padding: "14px 28px", borderRadius: 99, background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, color: "#fff", border: "none", fontWeight: 700, fontSize: 14, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, boxShadow: `0 0 20px ${C.cyan}40`, transition: "0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              <FileText size={16} />
              {lang === "ID" ? "Lihat Detail Project" : "View Project Details"}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {pdfUrl && <PdfModal src={pdfUrl.url} title={pdfUrl.title} onClose={() => setPdfUrl(null)} />}
      </AnimatePresence>
    </>
  );
}

function SocialGallery({ p }: { p: Project }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
    <>
      <div style={{ padding: "0 clamp(16px,5vw,60px) 60px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: C.textMuted, marginBottom: 28 }}>{p.description}</p>
        {p.gallery && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {p.gallery.map((item, i) => (
              <div key={i} onClick={() => setSelectedImg(item.img)} style={{ cursor: "pointer", breakInside: "avoid", borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}`, position: "relative" }}>
                <img src={item.img} style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: item.aspect || "1/1", transition: "0.3s" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 12px 10px", background: "linear-gradient(to bottom, transparent, rgba(4,4,15,0.85))" }}>
                  <span style={{ fontSize: 10, color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>{selectedImg && <ImageLightbox src={selectedImg} onClose={() => setSelectedImg(null)} />}</AnimatePresence>
    </>
  );
}

function PrintGallery({ p }: { p: Project }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <div style={{ padding: "0 clamp(16px,5vw,60px) 60px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: C.textMuted, marginBottom: 32 }}>{p.description}</p>
        
        {p.gallery && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {p.gallery.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImg(item.img)} 
                style={{ 
                  cursor: "pointer", 
                  borderRadius: 14, 
                  overflow: "hidden", 
                  border: `1px solid ${C.border}`, 
                  position: "relative"
                }}
              >
                {/* Semua gambar otomatis main/full-width (100%) */}
                <img src={item.img} style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: item.aspect || "16/9" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 12px 10px", background: "linear-gradient(to bottom, transparent, rgba(4,4,15,0.85))" }}>
                  <span style={{ fontSize: 10, color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>{selectedImg && <ImageLightbox src={selectedImg} onClose={() => setSelectedImg(null)} />}</AnimatePresence>
    </>
  );
}

function OtherGallery({ p }: { p: Project }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  return (
    <>
      <div style={{ padding: "0 clamp(16px,5vw,60px) 60px" }}>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: C.textMuted, marginBottom: 28 }}>{p.description}</p>
        {p.gallery && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
            {p.gallery.map((item, i) => (
              <div key={i} onClick={() => setSelectedImg(item.img)} style={{ cursor: "pointer", borderRadius: 14, overflow: "hidden", border: `1px solid ${C.border}` }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img src={item.img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <span style={{ fontSize: 11, color: C.text, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>{selectedImg && <ImageLightbox src={selectedImg} onClose={() => setSelectedImg(null)} />}</AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN MODAL EXPORT
───────────────────────────────────────────────────────── */

interface ModalProps {
  project: Project;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  lang: Lang;
}

export default function ProjectModal({ project, onClose, onNext, onPrev, lang }: ModalProps) {
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handler); };
  }, [onClose]);

  const catLabel = t.projects.catLabels[project.category];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(2,2,10,0.88)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", maxWidth: 860, maxHeight: "90vh", borderRadius: 24, background: C.surface1, border: `1px solid ${C.borderCyan}`, boxShadow: `0 40px 80px rgba(0,0,0,0.8), 0 0 60px ${project.accent}12`, overflowY: "auto", display: "flex", flexDirection: "column" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px clamp(16px,5vw,40px)", background: "rgba(4,4,20,0.92)", backdropFilter: "blur(20px)", borderBottom: `1px solid ${C.border}` }}>
          <button onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 12, border: `1px solid ${C.borderCyan}`, background: "rgba(0,212,255,0.07)", cursor: "pointer", fontSize: 12, fontWeight: 600, color: C.cyan, fontFamily: "'Space Grotesk', sans-serif" }}>
            <ArrowLeft size={13} /> {t.modal.back}
          </button>
          <span style={{ fontSize: 9, letterSpacing: "0.14em", color: C.textFaint, fontFamily: "'Space Mono', monospace" }}>{catLabel.toUpperCase()}</span>
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={onPrev} style={{ padding: "7px 10px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", color: C.textMuted, display: "flex" }}><ChevronLeft size={14} /></button>
            <button onClick={onNext} style={{ padding: "7px 10px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", color: C.textMuted, display: "flex" }}><ChevronRight size={14} /></button>
            <button onClick={onClose} style={{ padding: "7px 10px", borderRadius: 10, border: `1px solid ${C.border}`, background: "transparent", cursor: "pointer", color: C.textMuted, display: "flex" }}><X size={14} /></button>
          </div>
        </div>

        {/* Hero */}
        <div className="modal-hero-image" style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
          <img src={project.heroImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,4,15,0.25), rgba(4,4,15,0.88))" }} />
          <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 30% 60%, ${project.accent}22 0%, transparent 60%)` }} />
          <div style={{ position: "absolute", bottom: 28, left: "clamp(16px,5vw,60px)", right: "clamp(16px,5vw,60px)" }}>
            <div style={{ display: "inline-block", padding: "3px 12px", borderRadius: 20, marginBottom: 10, background: `${project.accent}1a`, border: `1px solid ${project.accent}45`, fontSize: 9, letterSpacing: "0.14em", color: project.accent, fontFamily: "'Space Mono', monospace" }}>{project.year} · {catLabel.toUpperCase()}</div>
            <h2 style={{ fontSize: "clamp(20px,4vw,32px)", fontWeight: 800, color: "#fff", lineHeight: 1.15, fontFamily: "'Space Grotesk', sans-serif", textShadow: `0 0 30px ${project.accent}55` }}>{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div style={{ paddingTop: 32 }}>
          {project.category === "uiux" && project.caseStudy && (
            <CaseStudyLayout p={project} tabLabels={t.projects.caseStudyTabs as unknown as string[]} lang={lang} />
          )}
          {project.category === "social" && <SocialGallery p={project} />}
          {project.category === "print" && <PrintGallery p={project} />}
          {project.category === "other" && <OtherGallery p={project} />}
        </div>
      </motion.div>

      <style>{`
        .modal-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .modal-tabs-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .modal-hero-image {
          height: 260px;
        }
        @media (max-width: 768px) {
          .modal-hero-image {
            height: 180px;
          }
        }
      `}</style>
    </motion.div>
  );
}