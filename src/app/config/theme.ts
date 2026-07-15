// src/config/theme.ts

/* ─────────────────────────────────────────────────────────
   COSMIC DESIGN TOKENS
───────────────────────────────────────────────────────── */
export const C = {
  bg: "#04040f",
  surface1: "#080818",
  surface2: "#0d0d25",
  surface3: "#111135",
  cyan: "#00d4ff",
  purple: "#7c3aed",
  pink: "#e040fb",
  green: "#00ff88",
  amber: "#ffb347",
  red: "#ff4757",
  teal: "#22d3ee",
  text: "#e8ecff",
  textMuted: "rgba(170,180,255,0.5)",
  textFaint: "rgba(130,145,255,0.3)",
  border: "rgba(100,130,255,0.1)",
  borderCyan: "rgba(0,212,255,0.18)",
  borderPurple: "rgba(124,58,237,0.2)",
};

/* ─────────────────────────────────────────────────────────
   DETERMINISTIC STAR FIELD DATA
───────────────────────────────────────────────────────── */
export function seededRng(seed: number) {
  const x = Math.sin(seed + 1) * 43758.5453;
  return x - Math.floor(x);
}

export const STARS = Array.from({ length: 220 }, (_, i) => ({
  x: seededRng(i * 13.7) * 100,
  y: seededRng(i * 7.3 + 1) * 100,
  size: 0.4 + seededRng(i * 3.1 + 2) * 1.6,
  opacity: 0.15 + seededRng(i * 11.9 + 3) * 0.65,
  duration: 2.5 + seededRng(i * 5.7 + 4) * 5,
  delay: seededRng(i * 9.3 + 5) * 9,
  layer: Math.floor(seededRng(i * 2.2 + 6) * 3),
}));

export const SHOOTING_STARS = Array.from({ length: 5 }, (_, i) => ({
  startX: 20 + seededRng(i * 17) * 60,
  startY: 5 + seededRng(i * 23) * 30,
  delay: i * 6 + seededRng(i * 4) * 4,
  duration: 1.2 + seededRng(i * 8) * 0.8,
}));

/* ─────────────────────────────────────────────────────────
   GLOBAL COSMIC STYLES
───────────────────────────────────────────────────────── */
export const COSMIC_STYLES = `
  @keyframes twinkle {
    0%,100% { opacity: var(--op, 0.3); transform: scale(1); }
    50% { opacity: 1; transform: scale(1.3); }
  }
  @keyframes cosmicPulse {
    0%,100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  @keyframes orbitCW {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes orbitCCW {
    from { transform: rotate(0deg); }
    to   { transform: rotate(-360deg); }
  }
  @keyframes shootingStar {
    0%   { opacity: 0; transform: translateX(0) translateY(0) scaleX(1); }
    8%   { opacity: 1; }
    100% { opacity: 0; transform: translateX(-380px) translateY(190px) scaleX(0.1); }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-12px); }
  }
  @keyframes glowPulse {
    0%,100% { box-shadow: 0 0 20px rgba(0,212,255,0.2), 0 0 0 2px rgba(0,212,255,0.3); }
    50%     { box-shadow: 0 0 50px rgba(0,212,255,0.45), 0 0 100px rgba(0,212,255,0.15), 0 0 0 2px rgba(0,212,255,0.5); }
  }
  @keyframes nebulaDrift {
    0%,100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); }
    33%     { transform: translate(-50%,-50%) scale(1.06) rotate(2deg); }
    66%     { transform: translate(-50%,-50%) scale(0.97) rotate(-1.5deg); }
  }
  html { scroll-behavior: smooth; background: #04040f; }
  body { background: #04040f; }
  ::placeholder { color: rgba(130,145,255,0.25); }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #04040f; }
  ::-webkit-scrollbar-thumb { background: rgba(0,212,255,0.25); border-radius: 99px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(0,212,255,0.5); }
  @media (min-width: 768px) { .mobile-nav-dropdown { display: none !important; } }
  @keyframes langSlide { 0%,100% {} }
`;