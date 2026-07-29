// src/sections/ContactSection.tsx
import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="contact" style={{ padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)" }}>
      <div style={{ maxWidth: 1000, width: "100%", margin: "0 auto", textAlign: "center" }}>
        
        {/* Header Text */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.18em", color: C.cyan, marginBottom: 14, fontFamily: "'Space Mono', monospace" }}>
            {t.contact.tag}
          </div>
          <h2 style={{ 
            fontSize: "clamp(28px, 5vw, 48px)", 
            fontWeight: 800, 
            lineHeight: 1.1, 
            marginBottom: 18, 
            fontFamily: "'Space Grotesk', sans-serif" 
          }}>
            {t.contact.h1}<span style={{ color: C.cyan, textShadow: `0 0 20px ${C.cyan}60` }}>{t.contact.hAccent}</span>
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: C.textMuted, marginBottom: "clamp(40px, 6vw, 60px)", maxWidth: 600, marginInline: "auto" }}>
            {t.contact.sub}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ 
            display: "grid", 
            // Otomatis menyesuaikan: 3 kolom di Desktop, 2/1 kolom di Tablet, 1 kolom di HP
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
            gap: "clamp(16px, 3vw, 24px)",
            textAlign: "left"
          }}
        >
          {[
            { icon: <Mail size={18} />, label: t.contact.lEmail, value: "mahesawork.19@gmail.com" },
            { icon: <Phone size={18} />, label: t.contact.lPhone, value: "+62 813 8112 9744" },
            { icon: <MapPin size={18} />, label: t.contact.lLoc, value: "Bogor, West Java, Indonesia" },
          ].map(({ icon, label, value }) => (
            <div key={label} 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: 16, 
                padding: "20px", 
                borderRadius: 16, 
                background: "rgba(8,8,28,0.6)", 
                border: `1px solid ${C.border}`,
                wordBreak: "break-word",
                transition: "transform 0.2s, background 0.2s",
              }}
              // Tambahan efek hover biar card-nya terasa lebih interaktif
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(8,8,28,0.9)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = C.cyan;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(8,8,28,0.6)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = C.border;
              }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,212,255,0.08)", border: `1px solid ${C.borderCyan}`, color: C.cyan }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: 10, color: C.textFaint, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", marginBottom: 4 }}>
                  {label.toUpperCase()}
                </div>
                <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>
                  {value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}