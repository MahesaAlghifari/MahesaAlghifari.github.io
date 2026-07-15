// src/sections/SkillsSection.tsx
import { motion } from "motion/react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";
import { radarTools, radarValues } from "../data/skills";
import SkillRadar from "../components/SkillRadar";

export default function SkillsSection({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="skills" style={{ padding: "80px clamp(20px,6vw,80px)" }}>
      <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.18em", color: C.cyan, marginBottom: 14, fontFamily: "'Space Mono', monospace" }}>{t.skills.tag}</div>
          <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, lineHeight: 1.1, fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.skills.h1}<span style={{ color: C.teal, textShadow: `0 0 20px ${C.teal}55` }}>{t.skills.hAccent}</span>
          </h2>
          <p style={{ fontSize: 14, color: C.textMuted, marginTop: 12, maxWidth: 480 }}>{t.skills.sub}</p>
        </div>

        {/* Content: Radar Chart & Progress Bars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <SkillRadar proficiencyLabel={t.skills.proficiency} />
          </div>
          <div>
            {radarTools.map((tool, i) => (
              <div key={tool.name} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: C.text, fontFamily: "'Space Grotesk', sans-serif" }}>{tool.name}</span>
                </div>
                <div style={{ height: 3, borderRadius: 99, background: "rgba(100,120,255,0.08)", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }} whileInView={{ width: `${radarValues[i]}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                    style={{ height: "100%", borderRadius: 99, background: `linear-gradient(90deg, ${tool.color}80, ${tool.color})`, boxShadow: `0 0 8px ${tool.color}55` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}