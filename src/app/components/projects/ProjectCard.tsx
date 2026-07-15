// src/components/projects/ProjectCard.tsx
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { C } from "../../config/theme";
import type { Project } from "../../data/projects";
import type { Lang } from "../../config/translations";

interface Props {
  project: Project;
  onClick: () => void;
  viewLabel: string;
  lang: Lang;
}

export default function ProjectCard({ project: p, onClick, viewLabel, lang }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", border: `1px solid ${C.border}`, background: "rgba(8,8,28,0.65)", backdropFilter: "blur(16px)", transition: "border-color 0.3s, box-shadow 0.3s", display: "flex", flexDirection: "column" }}
      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${p.accent}50`; el.style.boxShadow = `0 0 40px ${p.accent}22`; }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.border; el.style.boxShadow = "none"; }}
    >
      {/* Thumbnail */}
      <div style={{ height: 220, background: p.mockupBg, position: "relative", overflow: "hidden", flexShrink: 0 }}>
        <img
          src={p.heroImage}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)", transformOrigin: "center" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,4,15,0.1) 0%, rgba(4,4,15,0.55) 100%)" }} />
        {/* Accent glow on hover */}
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at 40% 60%, ${p.accent}30, transparent 65%)`, pointerEvents: "none" }} />
        {/* Category badge */}
        <div style={{ position: "absolute", top: 12, left: 12, padding: "3px 10px", borderRadius: 20, background: `${p.accent}1a`, border: `1px solid ${p.accent}45`, fontSize: 9, letterSpacing: "0.12em", color: p.accent, fontFamily: "'Space Mono', monospace" }}>
          {p.category.toUpperCase()}
        </div>
        {/* Year badge */}
        <div style={{ position: "absolute", top: 12, right: 12, padding: "3px 10px", borderRadius: 20, background: "rgba(8,8,28,0.75)", border: `1px solid ${C.border}`, fontSize: 9, color: C.textMuted, fontFamily: "'Space Mono', monospace" }}>
          {p.year}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>{p.title}</h3>
        <p style={{ fontSize: 12, color: C.textMuted, lineHeight: 1.65, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.description}</p>
        {/* Tool tags */}
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {p.tags.slice(0, 3).map((tag) => (
            <span key={tag} style={{ padding: "2px 9px", borderRadius: 99, fontSize: 9, background: `${p.accent}10`, color: p.accent, border: `1px solid ${p.accent}28`, fontFamily: "'Space Mono', monospace" }}>{tag}</span>
          ))}
        </div>
        {/* CTA */}
        <button
          style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, padding: "9px 16px", borderRadius: 10, border: `1px solid ${p.accent}40`, background: `${p.accent}0d`, color: p.accent, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", transition: "background 0.2s, box-shadow 0.2s" }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.accent}20`; el.style.boxShadow = `0 0 16px ${p.accent}30`; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = `${p.accent}0d`; el.style.boxShadow = "none"; }}
        >
          {viewLabel} <ArrowRight size={13} />
        </button>
      </div>
    </motion.div>
  );
}