// src/components/ui/GlassCard.tsx
import React from "react";
import { C } from "../config/theme";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export default function GlassCard({ children, style, className }: Props) {
  return (
    <div className={className} style={{ 
      background: "rgba(8,8,28,0.65)", 
      backdropFilter: "blur(20px)", 
      WebkitBackdropFilter: "blur(20px)", 
      border: `1px solid ${C.border}`, 
      borderRadius: 20, 
      ...style 
    }}>
      {children}
    </div>
  );
}