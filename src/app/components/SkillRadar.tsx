// src/components/SkillRadar.tsx
import React, { useEffect, useRef, useState } from 'react';
import { C } from '../config/theme';

const SKILLS = [
  { name: 'Figma', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Photoshop', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' },
  { name: 'React', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Notion', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },
];

const IDLE_SPEED = 5;       // derajat per detik, kecepatan muter pelan saat idle
const WAVE_AMPLITUDE = 6;   // naik-turun level titik, dalam persen
const WAVE_SPEED = 1.1;     // kecepatan gelombang (radian per detik)

export default function SkillRadar({ proficiencyLabel }: { proficiencyLabel?: string }) {
  const size = 500;
  const center = size / 2;
  const radius = 150;
  const totalSides = SKILLS.length;
  const waveSpread = (Math.PI * 2) / totalSides; // beda fase antar titik biar gelombang menjalar

  const svgRef = useRef<SVGSVGElement>(null);
  const startRef = useRef(performance.now());

  const [rotation, setRotation] = useState(0);
  const [time, setTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isDraggingRef = useRef(false);
  const rotationRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const dragStartRotationRef = useRef(0);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  // satu loop untuk auto-spin idle + gelombang titik skill (jalan terus, drag atau tidak)
  useEffect(() => {
    let rafId: number;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!isDraggingRef.current) {
        setRotation((r) => r + IDLE_SPEED * dt);
      }
      setTime((now - startRef.current) / 1000);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const getAngle = (clientX: number, clientY: number) => {
    const el = svgRef.current;
    if (!el) return 0;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    return Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI);
  };

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartAngleRef.current = getAngle(e.clientX, e.clientY);
    dragStartRotationRef.current = rotationRef.current;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDraggingRef.current) return;
    const angle = getAngle(e.clientX, e.clientY);
    const delta = angle - dragStartAngleRef.current;
    setRotation(dragStartRotationRef.current + delta);
  };

  const endDrag = (e: React.PointerEvent<SVGSVGElement>) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer sudah lepas duluan, aman diabaikan
    }
  };

  // level animasi tiap skill: nilai dasar + gelombang sinus, fase digeser tiap titik
  const animatedLevel = (skill: (typeof SKILLS)[number], i: number) => {
    const wave = WAVE_AMPLITUDE * Math.sin(time * WAVE_SPEED + i * waveSpread);
    return Math.max(4, Math.min(100, skill.level + wave));
  };

  const getPoint = (value: number, index: number, maxRadius: number) => {
    const angle = (Math.PI * 2 * index) / totalSides - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const gridPolygons = [20, 40, 60, 80, 100].map((level) => {
    const points = SKILLS.map((_, i) => {
      const pt = getPoint(level, i, radius);
      return `${pt.x},${pt.y}`;
    }).join(' ');
    return points;
  });

  const skillPolygon = SKILLS.map((skill, i) => {
    const pt = getPoint(animatedLevel(skill, i), i, radius);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div style={{ width: "100%", maxWidth: 550, position: "relative" }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{
          overflow: "visible",
          cursor: isDragging ? "grabbing" : "grab",
          touchAction: "none",
          userSelect: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.cyan} stopOpacity="0.25" />
            <stop offset="100%" stopColor={C.cyan} stopOpacity="0" />
          </radialGradient>
          {/* SVG Filter untuk shadow dihapus karena sering gagal render di Safari/Mobile WebKit */}
        </defs>

        <circle cx={center} cy={center} r={radius} fill="url(#radarGlow)" />

        <g transform={`rotate(${rotation} ${center} ${center})`}>
          {gridPolygons.map((points, index) => (
            <polygon
              key={index}
              points={points}
              fill="none"
              stroke={C.border}
              strokeWidth="1.5"
              strokeDasharray={index === 4 ? "0" : "4 6"}
              opacity={index === 4 ? 0.8 : 0.4}
            />
          ))}

          {SKILLS.map((_, i) => {
            const pt = getPoint(100, i, radius);
            return (
              <line key={i} x1={center} y1={center} x2={pt.x} y2={pt.y} stroke={C.border} strokeWidth="1" opacity="0.5" />
            );
          })}

          <polygon
            points={skillPolygon}
            fill={`${C.cyan}30`}
            stroke={C.cyan}
            strokeWidth="3"
            style={{ filter: `drop-shadow(0 0 12px ${C.cyan}60)`, transition: "fill 0.5s ease, stroke 0.5s ease" }}
          />

          {SKILLS.map((skill, i) => {
            const pt = getPoint(animatedLevel(skill, i), i, radius);
            return (
              <circle key={i} cx={pt.x} cy={pt.y} r="5" fill={C.bg} stroke={C.cyan} strokeWidth="2.5" />
            );
          })}

          {SKILLS.map((skill, i) => {
            const logoPt = getPoint(100, i, radius + 45);
            const iconSize = 40;

            return (
              <g key={i} transform={`rotate(${-rotation} ${logoPt.x} ${logoPt.y})`}>
                {/* Logo Asli */}
                <image
                  href={skill.logo}
                  xlinkHref={skill.logo} // Ditambahkan untuk dukungan menyeluruh di Mobile Browser/Safari
                  x={logoPt.x - (iconSize / 2)}
                  y={logoPt.y - (iconSize / 2)}
                  height={iconSize}
                  width={iconSize}
                  // Menggunakan CSS drop-shadow biasa yang lebih stabil di HP ketimbang SVG <filter>
                  style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.6))" }}
                  draggable={false}
                />

                {/* Text Label */}
                <text
                  x={logoPt.x}
                  y={logoPt.y + (iconSize / 2) + 16}
                  textAnchor="middle"
                  fill={C.textMuted}
                  fontSize="13"
                  fontWeight="500"
                  fontFamily="'Space Grotesk', sans-serif"
                >
                  {skill.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
