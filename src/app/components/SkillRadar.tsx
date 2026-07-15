// src/components/SkillRadar.tsx
import React from 'react';
import { C } from '../config/theme';

const SKILLS = [
  { name: 'Figma', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Photoshop', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg' }, 
  { name: 'React', level: 75, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Tailwind', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Notion', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },
];

export default function SkillRadar({ proficiencyLabel }: { proficiencyLabel?: string }) {
  const size = 500;
  const center = size / 2;
  const radius = 150;
  const totalSides = SKILLS.length;

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
    const pt = getPoint(skill.level, i, radius);
    return `${pt.x},${pt.y}`;
  }).join(' ');

  return (
    <div style={{ width: "100%", maxWidth: 550, position: "relative" }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={C.cyan} stopOpacity="0.25" />
            <stop offset="100%" stopColor={C.cyan} stopOpacity="0" />
          </radialGradient>
          {/* SVG Filter untuk shadow dihapus karena sering gagal render di Safari/Mobile WebKit */}
        </defs>

        <circle cx={center} cy={center} r={radius} fill="url(#radarGlow)" />

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
          style={{ filter: `drop-shadow(0 0 12px ${C.cyan}60)`, transition: "all 0.5s ease" }}
        />

        {SKILLS.map((skill, i) => {
          const pt = getPoint(skill.level, i, radius);
          const logoPt = getPoint(100, i, radius + 45);
          const iconSize = 40; 

          return (
            <g key={i}>
              {/* Point Indicator */}
              <circle cx={pt.x} cy={pt.y} r="5" fill={C.surface} stroke={C.cyan} strokeWidth="2.5" />

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
      </svg>
    </div>
  );
}