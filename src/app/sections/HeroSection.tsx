// src/sections/HeroSection.tsx
import { motion } from "motion/react";
import { Dribbble, Linkedin, Instagram, Github, MapPin } from "lucide-react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";

import HeroBackground from "../components/HeroBackground";
import HeroEarthMask from "../components/HeroEarthMask";

export default function HeroSection({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];

  const SOCIAL_LINKS = [
    { icon: <Dribbble size={18} />, label: "Dribbble", url: "#" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", url: "#" },
    { icon: <Instagram size={18} />, label: "Instagram", url: "#" },
    { icon: <Github size={18} />, label: "Github", url: "#" }
  ];

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Komponen Visual Eksternal */}
        <HeroBackground />
        <HeroEarthMask />

        {/* KONTEN UTAMA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%", maxWidth: 880 }}
        >
          {/* Badge Ketersediaan */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(8px, 2vw, 14px)", marginBottom: "clamp(20px, 4vw, 28px)" }}>
            <div style={{ height: 1, width: "clamp(20px, 4vw, 44px)", background: `linear-gradient(90deg, transparent, ${C.cyan}70)`, borderRadius: 99 }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 99, background: "rgba(0,212,255,0.07)", border: `1px solid ${C.borderCyan}` }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}`, animation: "cosmicPulse 2s ease-in-out infinite", flexShrink: 0 }} />
              <span style={{ fontSize: "clamp(10px, 2vw, 11px)", color: C.textMuted, fontFamily: "'Space Mono', monospace", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                {t.hero.badge}
              </span>
            </div>
            <div style={{ height: 1, width: "clamp(20px, 4vw, 44px)", background: `linear-gradient(270deg, transparent, ${C.cyan}70)`, borderRadius: 99 }} />
          </div>

          {/* Nama Header */}
          <h1 style={{
            fontSize: "clamp(28px, 8vw, 64px)",
            fontWeight: 1500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(12px, 3vw, 18px)",
            fontFamily: "'integral', sans-serif",
            background: `linear-gradient(160deg, #ffffff 15%, ${C.cyan} 62%, ${C.purple} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            MAHESA AL GHIFARI
          </h1>

          {/* Job Title / Role */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: "clamp(18px, 4vw, 22px)" }}>
            <div style={{ height: 1, width: "clamp(16px, 3vw, 28px)", background: `linear-gradient(90deg, transparent, ${C.cyan})`, borderRadius: 99 }} />
            <span style={{ fontSize: "clamp(12px, 2vw, 15px)", color: C.cyan, fontWeight: 600, letterSpacing: "0.06em", fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.hero.role}
            </span>
            <div style={{ height: 1, width: "clamp(16px, 3vw, 28px)", background: `linear-gradient(270deg, transparent, ${C.cyan})`, borderRadius: 99 }} />
          </div>

          {/* Deskripsi */}
          <p style={{
            fontSize: "clamp(14px, 2vw, 15px)",
            lineHeight: 1.85,
            color: C.textMuted,
            maxWidth: 520,
            margin: "0 auto 12px", // Margin bawah dikurangi agar dekat dengan lokasi
            padding: "0 10px"
          }}>
            {/* Note: Pastikan kamu menghapus kalimat "Based in Bogor" di file translations.ts */}
            {t.hero.desc}
          </p>

          {/* Lokasi Terpisah (Base in Bogor) */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            color: C.textMuted,
            marginBottom: "clamp(28px, 5vw, 38px)",
            fontSize: "clamp(13px, 1.4vw, 15px)"
          }}>
            <MapPin size={16} />
            <span>Bogor, Indonesia</span>
          </div>

          {/* Call to Actions */}
          <div className="hero-cta-container">
            <a href="#projects" className="hero-btn hero-btn-primary">
              {t.hero.cta1}
            </a>
            <a href="#contact" className="hero-btn hero-btn-secondary">
              {t.hero.cta2}
            </a>
          </div>
        </motion.div>

        {/* Social Links (Kini dipisah dari motion div agar bisa diposisi absolute di Desktop) */}
        <div className="hero-social-container">
          {SOCIAL_LINKS.map(({ icon, label, url }) => (
            <a key={label} href={url} title={label} className="hero-social-link">
              {icon}
            </a>
          ))}
        </div>

      </section>

      {/* ==========================================
          CSS INJECTION (RESPONSIVITAS & HOVER)
      =========================================== */}
      <style>{`
        /* Kontainer Utama Hero */
 .hero-section {
    min-height: 100dvh; /* Menggunakan dvh lebih akurat untuk mobile */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(80px, 10vh, 160px) 20px;
    overflow: hidden; /* MEMUTUS KEBOCORAN ELEMEN */
  }

        /* Kontainer Tombol Utama */
        .hero-cta-container {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        /* Gaya Dasar Tombol */
        .hero-btn {
          padding: 14px 34px;
          border-radius: 99px;
          font-size: 14px;
          font-family: 'Space Grotesk', sans-serif;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .hero-btn-primary {
          font-weight: 700;
          background: linear-gradient(135deg, ${C.cyan}, ${C.purple});
          color: #fff;
          box-shadow: 0 0 28px ${C.cyan}40, 0 8px 24px rgba(0,0,0,0.4);
        }
        .hero-btn-primary:hover {
          box-shadow: 0 0 40px ${C.cyan}70, 0 8px 24px rgba(0,0,0,0.5);
          transform: translateY(-2px);
        }

        .hero-btn-secondary {
          font-weight: 600;
          background: transparent;
          border: 1px solid ${C.borderCyan};
          color: ${C.cyan};
        }
        .hero-btn-secondary:hover {
          background: ${C.cyan}15;
          box-shadow: 0 0 20px ${C.cyan}20;
          transform: translateY(-2px);
        }

        /* Container Social Links: DESKTOP (Kanan Tengah) */
        .hero-social-container {
          position: absolute;
          right: clamp(20px, 4vw, 40px);
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 16px;
          z-index: 20;
        }

        .hero-social-link {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid ${C.border};
          color: ${C.textMuted};
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .hero-social-link:hover {
          border-color: ${C.cyan};
          color: ${C.cyan};
          background: rgba(0, 212, 255, 0.05);
          box-shadow: 0 0 20px ${C.cyan}40;
          transform: translateY(-3px) scale(1.05);
        }

        /* Responsivitas Layar HP Kecil (< 768px) */
  @media (max-width: 768px) {
    .hero-section {
      height: 100dvh; /* Kunci tinggi Hero tepat 1 layar */
      padding-top: 160px;
      padding-bottom: 20px;
      justify-content: flex-start; /* Konten Hero berkumpul di atas */
    }
  
          .hero-cta-container {
            flex-direction: column;
            padding: 0 20px;
          }
          .hero-btn {
            width: 100%;
          }
          
          /* Kembalikan Social Link ke tengah bawah khusus di Mobile */
          .hero-social-container {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            margin-top: 24px;
            gap: clamp(10px, 2.5vw, 14px);
          }
          .hero-social-link {
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  );
}