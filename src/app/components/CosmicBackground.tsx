import { C, STARS, SHOOTING_STARS } from "../config/theme";

export default function CosmicBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden", background: C.bg }}>
      <div style={{ position: "absolute", top: "8%", right: "-6%", width: 700, height: 700, background: "radial-gradient(ellipse, rgba(100,20,200,0.32) 0%, rgba(60,0,140,0.1) 45%, transparent 70%)", borderRadius: "50%", animation: "nebulaDrift 18s ease-in-out infinite", filter: "blur(2px)", transform: "translate(-50%,-50%)" }} />
      <div style={{ position: "absolute", top: "8%", right: "-6%", width: 700, height: 700, background: "radial-gradient(ellipse, rgba(100,20,200,0.32) 0%, rgba(60,0,140,0.1) 45%, transparent 70%)", borderRadius: "50%", filter: "blur(1px)" }} />
      <div style={{ position: "absolute", bottom: "5%", left: "-10%", width: 800, height: 600, background: "radial-gradient(ellipse, rgba(0,90,180,0.25) 0%, rgba(0,50,120,0.08) 50%, transparent 70%)", borderRadius: "50%", animation: "nebulaDrift 24s ease-in-out 6s infinite", filter: "blur(2px)" }} />
      <div style={{ position: "absolute", top: "50%", left: "25%", width: 600, height: 500, background: "radial-gradient(ellipse, rgba(120,0,180,0.1) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(3px)" }} />
      <div style={{ position: "absolute", top: "65%", right: "8%", width: 500, height: 450, background: "radial-gradient(ellipse, rgba(0,180,200,0.08) 0%, transparent 65%)", borderRadius: "50%", filter: "blur(2px)" }} />
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: "absolute", left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: "50%",
          background: s.layer === 2 ? "#a8c8ff" : s.layer === 1 ? "#d0e4ff" : "#ffffff",
          opacity: s.opacity,
          animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          boxShadow: s.size > 1.6 ? `0 0 ${s.size * 3}px rgba(180,210,255,0.6)` : "none",
        }} />
      ))}
      {SHOOTING_STARS.map((ss, i) => (
        <div key={i} style={{
          position: "absolute", top: `${ss.startY}%`, left: `${ss.startX}%`,
          width: 100, height: 1,
          background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,220,255,0.8) 60%, rgba(255,255,255,1) 100%)",
          borderRadius: 99,
          animation: `shootingStar ${ss.duration}s linear ${ss.delay}s infinite`,
          transformOrigin: "right center", opacity: 0,
        }} />
      ))}
      <div style={{ position: "absolute", top: "-15%", right: "-10%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, rgba(80,0,160,0.55) 0%, rgba(20,0,60,0.92) 55%, rgba(4,4,15,1) 80%)", boxShadow: "0 0 60px rgba(100,0,200,0.2), 0 0 120px rgba(60,0,120,0.1)" }} />
      <div style={{ position: "absolute", top: "22%", right: "14%", width: 52, height: 52, borderRadius: "50%", background: "radial-gradient(circle at 38% 35%, rgba(200,200,255,0.7), rgba(80,60,140,0.85))", boxShadow: "0 0 20px rgba(150,130,255,0.3)", animation: "floatY 8s ease-in-out infinite" }} />
    </div>
  );
}