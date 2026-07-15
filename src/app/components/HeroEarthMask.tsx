// src/components/HeroEarthMask.tsx
import React from 'react';
import { Images } from "../data/Image/image";

export default function HeroEarthMask() {
    return (
        <>
            <div className="earth-wrapper">
                {/* 1. GAMBAR BUMI */}
                <div className="earth-img-container">
                    <img
                        src={Images.Earth}
                        alt="Earth"
                        className="earth-img"
                    />
                </div>

                {/* 2. SVG GLOW ATMOSFER */}
                <svg viewBox="0 0 1440 720" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" className="earth-svg">
                    <defs>
                        <filter id="hAtmo" x="-4%" y="-120%" width="108%" height="500%">
                            <feGaussianBlur stdDeviation="11" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                        <filter id="hAtmoM" x="-4%" y="-100%" width="108%" height="400%">
                            <feGaussianBlur stdDeviation="5" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    {/* SVG Paths atmosfer di sini */}
                </svg>
            </div>

            {/* CSS KHUSUS RESPONSIVE UNTUK BUMI */}
            <style>{`
                /* ====================================================
                   TAMPILAN DESKTOP
                ==================================================== */
                .earth-wrapper {
                    position: absolute;
                    bottom: 0; /* Menempel tepat di batas bawah agar efek pudar tidak terpotong (Hard Cut) */
                    left: 0;
                    right: 0;
                    height: clamp(300px, 45vh, 480px); /* Membatasi tinggi efek mask */
                    pointer-events: none;
                    z-index: 3;
                    /* Gradien mask: bagian paling bawah (100%) dibuat transparansi penuh (0) */
                    mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
                    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
                    display: flex;
                    justify-content: center;
                    overflow: hidden; 
                }

                .earth-img-container {
                    position: absolute;
                    /* Mendorong gambar ke bawah di dalam wrapper agar kurva tetap landai dan besar seperti asli */
                    bottom: clamp(-200px, -20vh, -300px); 
                    left: 0;
                    width: 100%;
                    height: clamp(580px, 70vh, 780px); /* Ukuran gambar aslinya */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .earth-img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                    opacity: 1;
                    transition: transform 0.4s ease;
                }

                .earth-svg {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2;
                }

                /* ====================================================
                   TAMPILAN MOBILE
                ==================================================== */
                @media (max-width: 768px) {
                    .earth-wrapper {
                        height: 350px;
                    }
                    .earth-img-container {
                        bottom: -260px; 
                    }
                    .earth-img {
                        transform: scale(2.2); 
                        transform-origin: bottom center; 
                    }
                }
            `}</style>
        </>
    );
}