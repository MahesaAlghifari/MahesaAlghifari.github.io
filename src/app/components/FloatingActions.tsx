// src/components/FloatingActions.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import { C } from "../config/theme";
import type { Lang } from "../config/translations";
import LangSwitch from "./LangSwitch";

interface FloatingActionsProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function FloatingActions({ lang, setLang }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Menampilkan tombol panah ke atas jika scroll > 400px
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "clamp(20px, 4vw, 40px)",
      right: "clamp(20px, 4vw, 40px)",
      display: "flex",
      alignItems: "center",
      gap: 12,
      zIndex: 99,
    }}>
      
      {/* Wrapper untuk Language Switcher agar terlihat glassmorphism menyatu dengan tema */}
      <div style={{
        background: "rgba(4,4,20,0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: `1px solid ${C.border}`,
        borderRadius: 99,
        padding: "4px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
      }}>
        <LangSwitch lang={lang} setLang={setLang} />
      </div>

      {/* Tombol Scroll to Top dengan Animasi Muncul/Hilang */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
              border: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: `0 8px 24px ${C.cyan}50`,
              outline: "none"
            }}
            title="Scroll to top"
          >
            <ArrowUp size={22} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}