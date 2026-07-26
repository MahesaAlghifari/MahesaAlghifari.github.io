// src/sections/AboutSection.tsx
import { motion } from "motion/react";
import { MapPin, Mail, Layers, Eye, Sparkles } from "lucide-react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";
import { Images } from "../data/Image/image";
import SkillRadar from "../components/SkillRadar";

export default function AboutSection({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];
  
  const tagEl = (
    <div style={{ fontSize: 11, letterSpacing: "0.2em", color: C.cyan, marginBottom: 12, fontFamily: "'Space Mono', monospace" }}>
      {t.about.tag}
    </div>
  );

  const headingEl = (
    <h2 style={{ fontSize: "clamp(32px, 4vw, 40px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, fontFamily: "'Space Grotesk', sans-serif" }}>
      {t.about.h1} <span style={{ color: C.cyan, textShadow: `0 0 24px ${C.cyan}50` }}>{t.about.hAccent}</span>
    </h2>
  );

  const photoEl = (
    <div style={{ position: "relative", width: "100%", maxWidth: 500, margin: "0 auto" }}>
      <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 32, overflow: "hidden", border: `1px solid ${C.border}`, boxShadow: `0 20px 40px rgba(0,0,0,0.4)` }}>
        <img src={Images.FotoProfil} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} alt="Foto Profil" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(4,4,15,0.8))" }} />
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 80% 20%, rgba(0,212,255,0.15), transparent 50%)` }} />
      </div>

      {[
        { label: t.about.stat1, value: "10+", accent: C.cyan, pos: { top: "8%", left: "-6%" } },
        { label: t.about.stat2, value: "10+", accent: C.purple, pos: { bottom: "8%", right: "-6%" } },
      ].map(({ label, value, accent, pos }) => (
        <div key={label} className="hidden md:block" style={{ position: "absolute", ...pos, padding: "12px 18px", borderRadius: 16, background: "rgba(8,8,28,0.85)", border: `1px solid ${accent}40`, backdropFilter: "blur(12px)", boxShadow: `0 8px 32px rgba(0,0,0,0.5)` }}>
          <div style={{ fontSize: 9, color: C.textFaint, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 2 }}>{label.toUpperCase()}</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: accent, fontFamily: "'Space Grotesk', sans-serif" }}>{value}</div>
        </div>
      ))}
    </div>
  );

  const descEl = (
    <div style={{ marginBottom: "clamp(24px, 4vw, 40px)" }}>
      {[t.about.p1, t.about.p2].map((text, i) => (
        <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: C.textMuted, marginBottom: 16 }}>{text}</p>
      ))}
    </div>
  );

  const labelsEl = (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: 12 }}>
      {[
        { icon: <MapPin size={16} />, title: "Location", label: "Bogor, Indonesia" },
        { icon: <Mail size={16} />, title: "Email", label: "mahesawork.19@gmail.com" },
        { icon: <Layers size={16} />, title: "Expertise", label: "UI/UX · Graphic Design" },
        { icon: <Eye size={16} />, title: "Status", label: "Open to Work" },
      ].map(({ icon, title, label }) => (
        <div key={title} style={{ display: "flex", gap: 12, padding: "14px", borderRadius: 16, background: C.surface2, border: `1px solid ${C.border}`, alignItems: "center" }}>
          <span style={{ color: C.cyan, display: "flex", alignItems: "center", justifyContent: "center", minWidth: 34, height: 34, borderRadius: 10, background: `${C.cyan}15`, flexShrink: 0 }}>
            {icon}
          </span>
          <div style={{ overflow: "hidden" }}>
            <div style={{ fontSize: 9, color: C.textMuted, textTransform: "uppercase", letterSpacing: 1 }}>{title}</div>
            <div style={{ fontSize: 12, color: C.text, marginTop: 2, fontWeight: 500, whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>{label}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const radarEl = (
    <div style={{ 
      width: "100%", maxWidth: 500, margin: "0 auto", background: "rgba(8,8,28,0.6)", 
      border: `1px solid ${C.border}`, borderRadius: 28, padding: "28px clamp(16px, 4vw, 32px)", 
      display: "flex", flexDirection: "column", boxShadow: `0 20px 40px rgba(0,0,0,0.2)`
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, paddingBottom: 16, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ width: 36, height: 36, borderRadius: 12, background: `${C.cyan}15`, display: "flex", alignItems: "center", justifyContent: "center", color: C.cyan }}>
          <Sparkles size={18} />
        </div>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk', sans-serif" }}>
            {lang === "ID" ? "Keahlian Utama" : "Core Expertise"}
          </h3>
          <div style={{ fontSize: 12, color: C.textMuted }}>
            {lang === "ID" ? "Distribusi kemampuan teknis" : "Technical skill distribution"}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SkillRadar proficiencyLabel={t.skills?.proficiency || "Proficiency"} />
      </div>
    </div>
  );

  return (
    <>
      <section id="about" className="about-section">
        <div style={{ maxWidth: 1280, width: "100%", margin: "0 auto" }}>
          
          <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="col-span-6 flex flex-col w-full" style={{ gap: 28 }}>
              {photoEl}
              {labelsEl}
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="col-span-6 flex flex-col justify-center w-full h-full">
              {tagEl}
              {headingEl}
              {descEl}
              {radarEl}
            </motion.div>
          </div>

          <div className="flex lg:hidden flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {tagEl}
              {headingEl}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              {photoEl}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              {descEl}
              {labelsEl}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              {radarEl}
            </motion.div>
          </div>

        </div>
      </section>

      {/* CSS KHUSUS RESPONSIVE UNTUK ABOUT */}
      <style>{`
        .about-section {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px clamp(20px, 5vw, 60px);
        }

        @media (max-width: 768px) {
          .about-section {
            min-height: auto; /* Hilangkan paksaan 100vh */
            padding-top: 20px; /* Naikkan section ke atas agar lebih dekat dengan hero */
            padding-bottom: 60px; 
          }
        }
      `}</style>
    </>
  );
}