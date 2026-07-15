// src/sections/ExperienceSection.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  X,
  Calendar,
  MapPin,
  Briefcase,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { C } from "../config/theme";
import { TRANSLATIONS } from "../config/translations";
import type { Lang } from "../config/translations";
import { experiences } from "../data/experiences";

export default function ExperienceSection({
  lang,
}: {
  lang: Lang;
}) {
  const t = TRANSLATIONS[lang];

  const detailLabel =
    lang === "ID" ? "Lihat Detail" : "View Details";

  const [expIdx, setExpIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const active = experiences[expIdx];

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? 40 : -40,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? -40 : 40,
    }),
  };

  const goto = (index: number) => {
    if (index === expIdx) return;
    setDirection(index > expIdx ? 1 : -1);
    setExpIdx(index);
  };

  const handlePrev = () => {
    if (expIdx > 0) {
      setDirection(-1);
      setExpIdx(expIdx - 1);
    }
  };

  const handleNext = () => {
    if (expIdx < experiences.length - 1) {
      setDirection(1);
      setExpIdx(expIdx + 1);
    }
  };

  return (
    <>
      <section
        id="experience"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px clamp(24px,6vw,90px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            right: -200,
            top: -200,
            width: 550,
            height: 550,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(123,92,255,.18), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1180,
            width: "100%",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 40 }}
          >
            <div
              style={{
                color: C.cyan,
                fontSize: 12,
                letterSpacing: ".25em",
                fontFamily: "'Space Mono', monospace",
                marginBottom: 18,
              }}
            >
              // {t.experience.tag}
            </div>

            <h2
              style={{
                fontSize: "clamp(42px,6vw ,48px)",
                fontWeight: 800,
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                marginBottom: 20,
              }}
            >
              {t.experience.h1}{" "}
              <span
                style={{
                  color: C.purple,
                  textShadow: "0 0 30px rgba(123,92,255,.5)",
                }}
              >
                {t.experience.hAccent}
              </span>
            </h2>

            <p
              style={{
                color: C.textMuted,
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 640,
              }}
            >
              {lang === "ID"
                ? "Perjalanan membangun produk digital melalui desain, riset, dan kolaborasi dengan developer."
                : "A journey of solving problems, designing meaningful experiences and shipping digital products."}
            </p>
          </motion.div>

          {/* MAIN GLASS CARD */}
          <div
            className="experience-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "90px 1fr",
              gap: 48,
              padding: "48px clamp(28px,4vw,54px)",
              borderRadius: 34,
              background:
                "linear-gradient(180deg, rgba(18,18,38,.72), rgba(8,8,22,.72))",
              backdropFilter: "blur(24px)",
              border: `1px solid ${C.border}`,
              boxShadow: `
                0 30px 80px rgba(0,0,0,.45),
                inset 0 1px rgba(255,255,255,.05)
              `,
            }}
          >
            {/* ===========================================
                LEFT TIMELINE
            =========================================== */}
            <div
              className="timeline"
              style={{
                position: "relative",
                minHeight: 420,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Vertical Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,.18), transparent)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  zIndex: 2,
                }}
              >
                {experiences.map((exp, index) => {
                  const activeItem = index === expIdx;

                  return (
                    <motion.div
                      key={exp.id}
                      onClick={() => goto(index)}
                      whileHover={{ scale: activeItem ? 1.05 : 1.02 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 22,
                      }}
                      style={{
                        position: "relative",
                        height: 72,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      {activeItem ? (
                        <>
                          <motion.div
                            layoutId="timelineGlow"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 24,
                            }}
                            style={{
                              position: "absolute",
                              inset: -8,
                              borderRadius: "50%",
                              background: `${exp.accent}22`,
                              filter: "blur(18px)",
                            }}
                          />
                          <motion.div
                            layoutId="timelineCircle"
                            transition={{
                              type: "spring",
                              stiffness: 320,
                              damping: 24,
                            }}
                            style={{
                              width: 62,
                              height: 62,
                              borderRadius: "50%",
                              background: exp.accent,
                              border: `2px solid ${exp.accent}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: `0 0 28px ${exp.accent}70`,
                              position: "relative",
                              zIndex: 3,
                            }}
                          >
                            <span
                              style={{
                                fontSize: 24,
                                fontWeight: 800,
                                color: "#08111F",
                                fontFamily: "'Space Grotesk', sans-serif",
                              }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </motion.div>
                        </>
                      ) : (
                        <motion.div
                          whileHover={{ opacity: 0.75, x: -4 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: "absolute",
                            left: 8,
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            opacity: 0.35,
                          }}
                        >
                          <span
                            style={{
                              width: 24,
                              textAlign: "right",
                              fontSize: 15,
                              fontWeight: 700,
                              color: C.textMuted,
                              fontFamily: "'Space Grotesk', sans-serif",
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* ===========================================
                CONTENT WRAPPER
            =========================================== */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
              }}
            >
              {/* Animasi Transisi Card Teks */}
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ width: "100%", paddingBottom: 24 }}
                  >
                    {/* Badge */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "8px 18px",
                        borderRadius: 999,
                        background: `${active.accent}18`,
                        border: `1px solid ${active.accent}55`,
                        color: active.accent,
                        fontSize: 12,
                        marginBottom: 28,
                        fontFamily: "'Space Mono', monospace",
                      }}
                    >
                      <Briefcase size={14} />
                      EXPERIENCE
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: "clamp(34px,4vw,40px)",
                        fontWeight: 800,
                        marginBottom: 10,
                        lineHeight: 1.05,
                        color: C.text,
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {active.role}
                    </h3>

                    {/* Company */}
                    <div
                      style={{
                        color: active.accent,
                        fontSize: 16,
                        fontWeight: 700,
                        marginBottom: 16,
                      }}
                    >
                      {active.company}
                    </div>

                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        fontSize: 12,
                        gap: 14,
                        flexWrap: "wrap",
                        marginBottom: 28,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 14px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.04)",
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        <Calendar size={15} />
                        <span>{active.period}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "8px 14px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,.04)",
                          border: `1px solid ${C.border}`,
                        }}
                      >
                        <MapPin size={15} />
                        <span>{active.location}</span>
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: 1,
                        width: "100%",
                        marginBottom: 30,
                        background: `linear-gradient(90deg, ${active.accent}70, transparent)`,
                      }}
                    />

                    {/* Description (Di-hide via CSS Class untuk mobile) */}
                    <p
                      className="exp-desc"
                      style={{
                        fontSize: 17,
                        lineHeight: 1.9,
                        color: C.textMuted,
                        maxWidth: 720,
                        marginBottom: 0,
                      }}
                    >
                      {active.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ===========================================
                  BOTTOM CONTROLS (DI LUAR ANIMASI)
              =========================================== */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 20,
                  marginTop: "auto",
                }}
              >
                {/* Container Navigasi: Panah Kiri, Titik Progress, Panah Kanan */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  {/* Tombol Panah Kiri (Hanya Mobile) */}
                  <button
                    className="mobile-nav-arrow"
                    onClick={handlePrev}
                    disabled={expIdx === 0}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.04)",
                      border: `1px solid ${C.border}`,
                      color: C.text,
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: expIdx === 0 ? "not-allowed" : "pointer",
                      opacity: expIdx === 0 ? 0.3 : 1,
                      transition: "0.2s",
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {/* Progress Bar Indicators */}
                  <div style={{ display: "flex", gap: 8 }}>
                    {experiences.map((_, i) => (
                      <motion.div
                        key={i}
                        onClick={() => goto(i)}
                        style={{
                          height: 8,
                          borderRadius: 99,
                          cursor: "pointer",
                        }}
                        animate={{
                          width: i === expIdx ? 34 : 8,
                          background:
                            i === expIdx
                              ? active.accent
                              : "rgba(255,255,255,.12)",
                        }}
                        transition={{ duration: 0.25 }}
                      />
                    ))}
                  </div>

                  {/* Tombol Panah Kanan (Hanya Mobile) */}
                  <button
                    className="mobile-nav-arrow"
                    onClick={handleNext}
                    disabled={expIdx === experiences.length - 1}
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,.04)",
                      border: `1px solid ${C.border}`,
                      color: C.text,
                      alignItems: "center",
                      justifyContent: "center",
                      cursor:
                        expIdx === experiences.length - 1
                          ? "not-allowed"
                          : "pointer",
                      opacity: expIdx === experiences.length - 1 ? 0.3 : 1,
                      transition: "0.2s",
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                {/* Button Details */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setShowModal(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 26px",
                    borderRadius: 999,
                    cursor: "pointer",
                    border: `1px solid ${active.accent}55`,
                    background: `${active.accent}15`,
                    color: active.accent,
                    fontWeight: 700,
                    fontSize: 15,
                    transition: ".25s",
                  }}
                >
                  {detailLabel}
                  <ArrowRight size={17} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
          DETAIL MODAL
      ================================================ */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowModal(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 500,
              background: "rgba(0,0,0,.72)",
              backdropFilter: "blur(18px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            {/* CLOSE BUTTON FIXED POSISI LUAR CARD MODAL */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              style={{
                position: "absolute",
                right: "clamp(16px, 4vw, 32px)",
                top: "clamp(16px, 4vw, 32px)",
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: `1px solid rgba(255,255,255,0.1)`,
                background: "rgba(10,10,20,0.8)",
                backdropFilter: "blur(12px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                cursor: "pointer",
                zIndex: 501,
              }}
            >
              <X size={20} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%",
                maxWidth: 820,
                maxHeight: "88vh",
                overflowY: "auto",
                position: "relative",
                borderRadius: 32,
                padding: "clamp(24px, 5vw, 42px)",
                background: "linear-gradient(180deg,#111326,#090914)",
                border: `1px solid ${active.accent}55`,
                boxShadow: `
                  0 40px 120px rgba(0,0,0,.55),
                  0 0 80px ${active.accent}22
                `,
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  right: -120,
                  top: -120,
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background: `${active.accent}20`,
                  filter: "blur(90px)",
                  pointerEvents: "none",
                }}
              />

              {/* Badge */}
              <div
                style={{
                  display: "inline-flex",
                  gap: 10,
                  alignItems: "center",
                  padding: "8px 18px",
                  borderRadius: 999,
                  background: `${active.accent}18`,
                  border: `1px solid ${active.accent}40`,
                  color: active.accent,
                  marginBottom: 28,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                }}
              >
                <Briefcase size={14} />
                EXPERIENCE
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "clamp(30px,5vw,52px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginBottom: 10,
                  color: C.text,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {active.role}
              </h2>

              <div
                style={{
                  color: active.accent,
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 30,
                }}
              >
                {active.company}
              </div>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  marginBottom: 34,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: `1px solid ${C.border}`,
                    background: "rgba(255,255,255,.04)",
                  }}
                >
                  <Calendar size={15} />
                  {active.period}
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    alignItems: "center",
                    padding: "10px 16px",
                    borderRadius: 999,
                    border: `1px solid ${C.border}`,
                    background: "rgba(255,255,255,.04)",
                  }}
                >
                  <MapPin size={15} />
                  {active.location}
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  marginBottom: 34,
                  background: `linear-gradient(90deg, ${active.accent}, transparent)`,
                }}
              />

              {/* Deskripsi */}
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.9,
                  color: C.textMuted,
                  marginBottom: 36,
                }}
              >
                {active.desc}
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {active.highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ x: 8 }}
                    style={{
                      display: "flex",
                      gap: 18,
                      padding: "20px 24px",
                      borderRadius: 18,
                      border: `1px solid ${C.border}`,
                      background: "rgba(255,255,255,.03)",
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        marginTop: 7,
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: active.accent,
                        boxShadow: `0 0 18px ${active.accent}`,
                      }}
                    />
                    <div
                      style={{
                        color: C.textMuted,
                        lineHeight: 1.8,
                      }}
                    >
                      {item}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          KEYBOARD NAVIGATION & RESPONSIVE STYLES
      =========================================== */}
      <style>{`
        /* Sembunyikan panah secara default (untuk Desktop) */
        .mobile-nav-arrow {
          display: none !important;
        }

        @media (max-width: 900px) {
          /* Layout utama menjadi 1 kolom (tumpuk) */
          #experience .experience-layout {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
          }

          /* Menyembunyikan kiri (angka timeline) */
          #experience .timeline {
            display: none !important;
          }

          /* Menyembunyikan deskripsi di awal */
          #experience .exp-desc {
            display: none !important;
          }

          /* Tampilkan panah navigasi di responsif */
          .mobile-nav-arrow {
            display: flex !important;
          }
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,.18);
          border-radius: 99px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </>
  );
}