import { C } from "../config/theme";
import type { Lang } from "../config/translations";

export default function LangSwitch({ lang, setLang, size = "sm" }: { lang: Lang; setLang: (l: Lang) => void; size?: "sm" | "lg" }) {
  const w = size === "lg" ? 96 : 80;
  const h = size === "lg" ? 34 : 28;
  
  return (
    <div role="group" aria-label="Language" style={{
      position: "relative", display: "inline-flex", alignItems: "center",
      padding: 3, borderRadius: 99, flexShrink: 0,
      width: w, height: h,
      background: "rgba(4,4,20,0.72)",
      border: `1px solid ${C.borderCyan}`,
      backdropFilter: "blur(14px)",
    }}>
      <div style={{
        position: "absolute", top: 3,
        left: lang === "ID" ? 3 : `calc(50% + 1px)`,
        width: `calc(50% - 4px)`, height: `calc(100% - 6px)`,
        borderRadius: 99,
        background: `linear-gradient(135deg, ${C.cyan}, ${C.purple})`,
        boxShadow: `0 0 10px ${C.cyan}55, 0 0 20px ${C.purple}25`,
        transition: "left 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "none",
      }} />
      {(["ID", "EN"] as Lang[]).map((opt) => (
        <button key={opt} onClick={() => setLang(opt)} style={{
          flex: 1, position: "relative", zIndex: 1,
          height: "100%", border: "none", background: "transparent", cursor: "pointer",
          fontSize: size === "lg" ? 11 : 10, fontWeight: 700,
          color: lang === opt ? "#fff" : C.textMuted,
          fontFamily: "'Space Mono', monospace",
          letterSpacing: "0.06em",
          opacity: lang === opt ? 1 : 0.52,
          transition: "color 0.25s, opacity 0.25s",
          borderRadius: 99,
        }}
        onMouseEnter={(e) => { if (lang !== opt) { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.85"; el.style.color = C.cyan; } }}
        onMouseLeave={(e) => { if (lang !== opt) { const el = e.currentTarget as HTMLElement; el.style.opacity = "0.52"; el.style.color = C.textMuted; } }}
        >{opt}</button>
      ))}
    </div>
  );
}