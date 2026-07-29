// src/components/Footer.tsx (Opsi 2 - Floating Pill Web3 Style)
import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";

export default function Footer({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];

  return (
    <>
      <footer style={{ 
        padding: "clamp(20px, 4vw, 40px) clamp(16px, 4vw, 40px)", 
        background: "transparent",
        display: "flex",
        justifyContent: "center"
      }}>
        <div className="floating-footer">
          
          {/* Logo dengan efek Glassmorphism & Web3 Vibe */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ 
              width: 32, height: 32, 
              borderRadius: "50%", 
              background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`, 
              boxShadow: `inset 2px 2px 4px rgba(255,255,255,0.4), 0 0 20px ${C.cyan}60`,
              border: '1px solid rgba(255,255,255,0.2)'
            }} />
          </div>

          <div className="footer-content">
            <p style={{ fontSize: 11, color: C.textMuted, fontFamily: "'Space Mono', monospace" }}>
              {t.footer.copy}
            </p>
            
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: C.borderCyan, display: "inline-block" }} className="separator-dot" />

            <div style={{ display: "flex", gap: "clamp(12px, 3vw, 24px)" }}>
              {["LinkedIn"].map((s) => (
                <a key={s} href="#" className="footer-link">
                  {s}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

      <style>{`
        .floating-footer {
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-radius: 99px;
          background: rgba(8, 8, 28, 0.65);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 212, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05);
          gap: 20px;
        }

        .footer-content {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-link {
          font-size: 12px;
          font-weight: 600;
          color: ${C.textMuted};
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: ${C.cyan};
          text-shadow: 0 0 12px ${C.cyan}80;
        }

        /* Responsif untuk Mobile */
        @media (max-width: 768px) {
          .floating-footer {
            flex-direction: column;
            border-radius: 32px; /* Berubah jadi kotak membulat agar lebih rapi di HP */
            text-align: center;
            padding: 24px;
            gap: 16px;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 12px;
          }

          .separator-dot {
            display: none; /* Sembunyikan titik pemisah di layar HP */
          }
        }
      `}</style>
    </>
  );
}