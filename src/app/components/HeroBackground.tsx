// src/components/HeroBackground.tsx
import React from 'react';
import { motion } from 'motion/react'; 

export default function HeroBackground() {
  return (
    <>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
        {/* Glow & Gradients */}
        <div style={{ position: "absolute", top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "min(860px,110vw)", height: 560, background: "radial-gradient(ellipse at center, rgba(0,70,180,0.18) 0%, rgba(70,0,180,0.08) 38%, transparent 66%)" }} />
        <div style={{ position: "absolute", top: "-5%", right: "-10%", width: "55vw", height: "48vw", background: "radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 65%)", animation: "nebulaDrift 28s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-12%", width: "58vw", height: "50vw", background: "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 62%)", animation: "nebulaDrift 22s ease-in-out 8s infinite" }} />
        <div style={{ position: "absolute", left: "clamp(-40px,-2vw,50px)", top: "clamp(15px,3%,75px)", width: "clamp(340px,48vw,660px)", height: "clamp(420px,60vw,820px)", background: "radial-gradient(ellipse at 42% 40%, rgba(0,65,200,0.14) 0%, rgba(100,0,220,0.06) 45%, transparent 72%)", borderRadius: "50%", animation: "floatY 10s ease-in-out infinite" }} />
        
        {/* ASTRONOT INTERAKTIF */}
        <div className="astro-container">
          <motion.div
            drag
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragElastic={0.4}
            whileHover={{ scale: 1.05, cursor: "grab" }}
            whileDrag={{ scale: 1.1, rotate: 12, cursor: "grabbing" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ width: "100%", height: "100%" }}
          >
            <svg viewBox="0 0 380 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible", filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.3))" }}>
              <defs>
                <linearGradient id="rSuit" x1="15%" y1="0%" x2="85%" y2="100%">
                  <stop offset="0%" stopColor="#eef2ff" /><stop offset="48%" stopColor="#d0d8f4" /><stop offset="100%" stopColor="#8090c0" />
                </linearGradient>
                <radialGradient id="rSun" cx="18%" cy="12%" r="68%">
                  <stop offset="0%" stopColor="#f8faff" stopOpacity="0.9" /><stop offset="55%" stopColor="#e0e8ff" stopOpacity="0.35" /><stop offset="100%" stopColor="#8090c0" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="rEarth" cx="78%" cy="88%" r="55%">
                  <stop offset="0%" stopColor="#2080ff" stopOpacity="0.38" /><stop offset="100%" stopColor="#2080ff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="rVisor" x1="20%" y1="10%" x2="80%" y2="90%">
                  <stop offset="0%" stopColor="#000b14" /><stop offset="55%" stopColor="#00060f" /><stop offset="100%" stopColor="#001c30" />
                </linearGradient>
                <linearGradient id="rPLSS" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c4d0f0" /><stop offset="100%" stopColor="#6070a8" />
                </linearGradient>
                <filter id="rGlw"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <filter id="rSoft"><feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <ellipse cx="190" cy="295" rx="160" ry="215" fill="rgba(0,70,200,0.07)" filter="url(#rSoft)" />
              <rect x="116" y="228" width="88" height="132" rx="14" fill="url(#rPLSS)" />
              <rect x="116" y="244" width="32" height="62" rx="8" fill="#8090b8" />
              <line x1="116" y1="268" x2="204" y2="268" stroke="#9898c8" strokeWidth="1.5" opacity="0.45" />
              <line x1="116" y1="308" x2="204" y2="308" stroke="#9898c8" strokeWidth="1.5" opacity="0.38" />
              <path d="M 134 242 C 94 250 62 252 36 246" stroke="url(#rSuit)" strokeWidth="36" strokeLinecap="round" fill="none" />
              <path d="M 134 242 C 94 250 62 252 36 246" stroke="url(#rSun)" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.7" />
              <path d="M 134 246 C 94 254 62 256 36 250" stroke="rgba(20,40,120,0.28)" strokeWidth="28" strokeLinecap="round" fill="none" />
              <ellipse cx="32" cy="244" rx="18" ry="14" fill="#c0cce8" /><ellipse cx="32" cy="242" rx="11" ry="8" fill="#8090b8" /><ellipse cx="52" cy="246" rx="10" ry="5" fill="#d8e4f8" />
              <path d="M 246 240 C 288 230 318 228 346 236" stroke="url(#rSuit)" strokeWidth="36" strokeLinecap="round" fill="none" />
              <path d="M 246 240 C 288 230 318 228 346 236" stroke="url(#rSun)" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.65" />
              <path d="M 246 244 C 288 234 318 232 346 240" stroke="rgba(30,50,120,0.22)" strokeWidth="28" strokeLinecap="round" fill="none" />
              <ellipse cx="350" cy="234" rx="18" ry="14" fill="#c0cce8" /><ellipse cx="350" cy="232" rx="11" ry="8" fill="#8090b8" /><ellipse cx="330" cy="237" rx="10" ry="5" fill="#d8e4f8" />
              <path d="M 118 232 C 118 210 140 196 190 194 C 240 196 262 210 262 232 L 268 374 C 268 388 250 396 190 396 C 130 396 112 388 112 374 Z" fill="url(#rSuit)" />
              <path d="M 118 232 C 118 210 140 196 190 194 C 240 196 262 210 262 232 L 268 374 C 268 388 250 396 190 396 C 130 396 112 388 112 374 Z" fill="url(#rSun)" />
              <path d="M 242 198 C 260 216 264 232 262 242 L 268 374 C 268 388 254 396 224 396 L 220 194 Z" fill="rgba(20,40,120,0.18)" />
              <path d="M 112 360 L 112 374 C 112 388 130 396 190 396 C 250 396 268 388 268 374 L 268 360 Z" fill="rgba(0,30,100,0.22)" />
              <path d="M 118 232 C 118 210 140 196 190 194 C 240 196 262 210 262 232 L 268 374 C 268 388 250 396 190 396 C 130 396 112 388 112 374 Z" fill="url(#rEarth)" />
              <ellipse cx="134" cy="238" rx="22" ry="9" fill="#d8e4f8" opacity="0.9" />
              <ellipse cx="246" cy="238" rx="22" ry="9" fill="#d8e4f8" opacity="0.9" />
              <rect x="110" y="370" width="158" height="14" rx="6" fill="#d0daf4" />
              <rect x="152" y="255" width="76" height="74" rx="8" fill="#060614" />
              <rect x="156" y="259" width="68" height="66" rx="6" fill="#090920" />
              <rect x="160" y="263" width="60" height="26" rx="3" fill="#000e18" />
              <rect x="163" y="266" width="38" height="7" rx="2" fill="#00aad0" fillOpacity="0.42" />
              <rect x="163" y="276" width="26" height="4" rx="2" fill="#00ff88" fillOpacity="0.32" />
              <rect x="163" y="282" width="32" height="3" rx="1.5" fill="#ffb347" fillOpacity="0.28" />
              <circle cx="165" cy="300" r="3.5" fill="#00d4ff" filter="url(#rGlw)" /><circle cx="176" cy="300" r="3.5" fill="#00ff88" /><circle cx="187" cy="300" r="3.5" fill="#ffb347" /><circle cx="198" cy="300" r="3.5" fill="#ff4040" /><circle cx="209" cy="300" r="3" fill="#e040fb" />
              <rect x="160" y="314" width="60" height="10" rx="3" fill="#0a0a28" />
              <circle cx="174" cy="319" r="3.5" fill="#8090c0" /><circle cx="190" cy="319" r="3.5" fill="#8090c0" /><circle cx="206" cy="319" r="3.5" fill="#8090c0" />
              <ellipse cx="190" cy="200" rx="46" ry="12" fill="#c8d4f4" /><ellipse cx="190" cy="196" rx="42" ry="9" fill="#dce8ff" /><ellipse cx="190" cy="192" rx="38" ry="7" fill="#e8f0ff" />
              <ellipse cx="190" cy="116" rx="74" ry="78" fill="url(#rSuit)" />
              <ellipse cx="190" cy="116" rx="74" ry="78" fill="url(#rSun)" />
              <path d="M 222 42 Q 258 60 266 116 Q 266 170 240 190" stroke="rgba(20,40,120,0.28)" strokeWidth="20" strokeLinecap="round" fill="none" />
              <ellipse cx="190" cy="180" rx="60" ry="22" fill="rgba(0,80,200,0.14)" />
              <ellipse cx="153" cy="77" rx="32" ry="24" fill="white" fillOpacity="0.14" transform="rotate(-25,153,77)" />
              <ellipse cx="143" cy="68" rx="14" ry="10" fill="white" fillOpacity="0.22" transform="rotate(-25,143,68)" />
              <path d="M 144 87 C 140 74 145 52 162 46 C 180 40 212 44 222 56 C 234 68 236 90 230 106 C 218 128 164 134 154 128 C 144 122 148 100 144 87 Z" fill="rgba(180,140,0,0.1)" />
              <ellipse cx="186" cy="107" rx="50" ry="45" fill="url(#rVisor)" />
              <ellipse cx="186" cy="107" rx="46" ry="41" fill="#000106" />
              <circle cx="208" cy="88" r="1.6" fill="white" fillOpacity="0.5" /><circle cx="220" cy="97" r="1.0" fill="white" fillOpacity="0.35" /><circle cx="213" cy="77" r="1.2" fill="white" fillOpacity="0.42" /><circle cx="226" cy="110" r="0.8" fill="white" fillOpacity="0.3" />
              <path d="M 158 91 C 170 109 174 123 170 141" stroke="#0090ff" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.48" />
              <path d="M 150 99 C 158 109 160 119 156 133" stroke="#00c4ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.32" />
              <ellipse cx="180" cy="141" rx="30" ry="10" fill="rgba(30,140,255,0.18)" filter="url(#rGlw)" />
              <ellipse cx="210" cy="120" rx="24" ry="20" fill="#7c3aed" fillOpacity="0.1" />
              <ellipse cx="186" cy="107" rx="50" ry="45" fill="none" stroke="#d0dcf8" strokeWidth="3.5" />
              <ellipse cx="186" cy="103" rx="55" ry="50" fill="none" stroke="rgba(180,140,0,0.16)" strokeWidth="5" />
              <rect x="196" y="50" width="20" height="12" rx="4" fill="#7080a0" /><rect x="201" y="46" width="10" height="8" rx="3" fill="#606090" /><circle cx="206" cy="50" r="3.5" fill="#202840" />
              <rect x="120" y="97" width="9" height="6" rx="2.5" fill="#d0dcf8" />
              <line x1="216" y1="42" x2="230" y2="22" stroke="#c0cce8" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="232" cy="20" r="5" fill="#00d4ff" filter="url(#rGlw)" /><circle cx="232" cy="20" r="2.5" fill="white" />
              <ellipse cx="158" cy="394" rx="26" ry="10" fill="#d0d8f4" /><ellipse cx="222" cy="394" rx="26" ry="10" fill="#d0d8f4" />
              <path d="M 155 402 C 146 438 138 466 130 502" stroke="url(#rSuit)" strokeWidth="40" strokeLinecap="round" fill="none" />
              <path d="M 155 402 C 146 438 138 466 130 502" stroke="url(#rSun)" strokeWidth="26" strokeLinecap="round" fill="none" opacity="0.58" />
              <path d="M 155 406 C 146 442 138 470 130 506" stroke="rgba(20,40,120,0.24)" strokeWidth="32" strokeLinecap="round" fill="none" />
              <rect x="119" y="432" width="26" height="20" rx="4" fill="rgba(180,200,240,0.42)" />
              <ellipse cx="128" cy="508" rx="24" ry="13" fill="#9aaad0" /><ellipse cx="128" cy="504" rx="18" ry="9" fill="#b8c8e8" />
              <path d="M 225 402 C 234 438 242 466 250 502" stroke="url(#rSuit)" strokeWidth="40" strokeLinecap="round" fill="none" />
              <path d="M 225 402 C 234 438 242 466 250 502" stroke="url(#rSun)" strokeWidth="26" strokeLinecap="round" fill="none" opacity="0.48" />
              <path d="M 225 398 C 234 434 242 462 250 498" stroke="rgba(30,60,140,0.18)" strokeWidth="26" strokeLinecap="round" fill="none" />
              <rect x="236" y="432" width="26" height="20" rx="4" fill="rgba(180,200,240,0.42)" />
              <ellipse cx="252" cy="508" rx="24" ry="13" fill="#9aaad0" /><ellipse cx="252" cy="504" rx="18" ry="9" fill="#b8c8e8" />
            </svg>
          </motion.div>
        </div>

        {/* Planet Statis */}
        <div style={{ position: "absolute", right: "clamp(10px,4vw,60px)", top: "clamp(55px,8%,120px)", width: "clamp(80px,12vw,170px)", zIndex: 2, animation: "floatY 14s ease-in-out 2s infinite" }}>
          {/* SVG PLANET (Sama seperti sebelumnya) */}
          {/* <svg viewBox="0 0 180 210" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", overflow: "visible" }}>
            <defs>
              <radialGradient id="pGrad" cx="34%" cy="30%" r="62%">
                <stop offset="0%" stopColor="#5820a8" /><stop offset="45%" stopColor="#28086a" /><stop offset="100%" stopColor="#0a0228" />
              </radialGradient>
              <filter id="pGlw"><feGaussianBlur stdDeviation="9" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              <filter id="pRing"><feGaussianBlur stdDeviation="1.8" /></filter>
            </defs>
            <ellipse cx="90" cy="90" rx="82" ry="82" fill="#5820ff" fillOpacity="0.16" filter="url(#pGlw)" />
            <ellipse cx="90" cy="90" rx="62" ry="62" fill="url(#pGrad)" />
            <ellipse cx="90" cy="78" rx="59" ry="12" fill="rgba(120,50,220,0.2)" /><ellipse cx="90" cy="106" rx="56" ry="9" fill="rgba(80,20,180,0.16)" />
            <ellipse cx="74" cy="72" rx="25" ry="19" fill="white" fillOpacity="0.08" transform="rotate(-18,74,72)" />
            <ellipse cx="90" cy="148" rx="92" ry="17" fill="none" stroke="rgba(160,90,255,0.36)" strokeWidth="5" filter="url(#pRing)" />
            <ellipse cx="90" cy="148" rx="80" ry="14" fill="none" stroke="rgba(140,70,240,0.22)" strokeWidth="2.5" />
            <ellipse cx="90" cy="90" rx="62" ry="62" fill="url(#pGrad)" />
            <path d="M 8 148 A 82 14 0 0 0 172 148" fill="none" stroke="rgba(160,90,255,0.36)" strokeWidth="5" filter="url(#pRing)" />
            <path d="M 10 148 A 80 14 0 0 0 170 148" fill="none" stroke="rgba(140,70,240,0.22)" strokeWidth="2.5" />
            <ellipse cx="74" cy="72" rx="25" ry="19" fill="white" fillOpacity="0.08" transform="rotate(-18,74,72)" />
          </svg> */}
        </div>
      </div>

      {/* CSS KHUSUS RESPONSIVE UNTUK ASTRONAUT */}
      <style>{`
        .astro-container {
          position: absolute;
          z-index: 2; /* Di belakang bumi */
          animation: floatY 10s ease-in-out infinite;
          pointer-events: auto;
          /* Tampilan Desktop: Ukuran lebih kecil */
          left: clamp(-40px, -2vw, 50px);
          top: clamp(8px, 2%, 65px);
          width: clamp(260px, 35vw, 520px);
          opacity: 0.25;
        }

        /* Saat di Layar HP (Mobile) */
        @media (max-width: 768px) {
          .astro-container {
            top: 45%; 
            left: -10px;
            width: 250px; /* Ukuran lebih kecil untuk mobile */
            opacity: 0.15; 
          }
        }
      `}</style>
    </>
  );
}