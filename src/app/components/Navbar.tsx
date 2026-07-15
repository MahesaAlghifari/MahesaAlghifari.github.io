// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu, Star } from "lucide-react";
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";

interface NavbarProps {
  lang: Lang;
}

export default function Navbar({ lang }: NavbarProps) {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoverNav, setHoverNav] = useState<string | null>(null);
  
  // State untuk mendeteksi apakah layar berukuran HP (kurang dari 768px)
  const [isMobile, setIsMobile] = useState(false);
  
  const t = TRANSLATIONS[lang];
  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" }, 
    { label: t.nav.projects, href: "#projects" },
  ];

  useEffect(() => {
    // Fungsi untuk memonitor scroll
    const onScroll = () => setNavScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);

    // Fungsi untuk memonitor ukuran layar (Responsive)
    const checkScreenSize = () => {
      const isMobileScreen = window.innerWidth < 768;
      setIsMobile(isMobileScreen);
      
      // Tutup otomatis menu HP jika layar dibesarkan ke mode laptop
      if (!isMobileScreen) {
        setMobileMenuOpen(false);
      }
    };
    
    // Cek ukuran layar saat pertama kali di-load
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav style={{ position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 100, width: "calc(100% - 40px)", maxWidth: 900 }}>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 20px",
        background: navScrolled ? "rgba(4,4,20,0.92)" : "rgba(4,4,20,0.5)",
        backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${navScrolled ? C.borderCyan : C.border}`,
        borderRadius: mobileMenuOpen ? "24px 24px 0 0" : 99,
        transition: "all 0.4s ease",
        boxShadow: navScrolled ? `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px ${C.borderCyan}` : "none",
      }}>
        
        {/* LOGO KIRI */}
        <a href="#hero">
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: `radial-gradient(circle at 40% 40%, ${C.cyan}, ${C.purple})`, boxShadow: `0 0 16px ${C.cyan}60`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Star size={13} fill="#04040f" color="#04040f" />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: C.text, fontFamily: "'Space Grotesk', sans-serif", whiteSpace: "nowrap" }}>Mahesa Portfolio</span>
        </div></a>

        {/* MENU TENGAH (Hanya Tampil di Mode Laptop/Desktop) */}
        {!isMobile && (
          <div style={{ display: "flex", gap: 2 }}>
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                onMouseEnter={() => setHoverNav(l.label)} onMouseLeave={() => setHoverNav(null)}
                style={{ padding: "6px 11px", borderRadius: 99, fontSize: 12, fontWeight: 500, color: hoverNav === l.label ? C.cyan : C.textMuted, textDecoration: "none", transition: "all 0.2s", background: hoverNav === l.label ? "rgba(0,212,255,0.08)" : "transparent", border: `1px solid ${hoverNav === l.label ? "rgba(0,212,255,0.2)" : "transparent"}`, whiteSpace: "nowrap" }}>
                {l.label}
              </a>
            ))}
          </div>
        )}

        {/* AREA KANAN (Tombol Let's Talk ATAU Hamburger Menu) */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          {!isMobile ? (
            // Tombol Let's Talk (Tampil di Laptop)
            <a href="#contact" style={{ padding: "8px 18px", borderRadius: 99, fontSize: 13, fontWeight: 700, background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, color: "#fff", textDecoration: "none", boxShadow: `0 0 18px ${C.cyan}40`, whiteSpace: "nowrap", fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.nav.cta}
            </a>
          ) : (
            // Tombol Hamburger (Tampil di HP)
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              style={{ width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.border}`, background: "rgba(8,8,28,0.7)", color: C.textMuted, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.cyan; el.style.color = C.cyan; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.border; el.style.color = C.textMuted; }}
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          )}
        </div>
      </div>

      {/* MENU DROPDOWN HP (Hanya Tampil Jika Hamburger Diklik) */}
      <AnimatePresence>
        {mobileMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden", background: "rgba(4,4,20,0.96)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", border: `1px solid ${C.borderCyan}`, borderTop: "none", borderRadius: "0 0 24px 24px", boxShadow: `0 16px 40px rgba(0,0,0,0.6)` }}
          >
            <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "11px 14px", borderRadius: 12, fontSize: 14, fontWeight: 500, color: C.textMuted, textDecoration: "none", display: "block", transition: "background 0.18s, color 0.18s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,212,255,0.07)"; el.style.color = C.cyan; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = C.textMuted; }}
                >{l.label}</a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ marginTop: 10, padding: "13px 20px", borderRadius: 99, fontSize: 14, fontWeight: 700, background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, color: "#fff", textDecoration: "none", textAlign: "center", boxShadow: `0 0 22px ${C.cyan}40`, fontFamily: "'Space Grotesk', sans-serif", display: "block" }}>
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}