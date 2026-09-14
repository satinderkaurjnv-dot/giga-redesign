"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

export default function CompetitorComparison() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="competitor-comparison"
      className="relative w-full bg-transparent text-white pt-6 pb-10 sm:pt-8 sm:pb-12 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#ff5500]/[0.03] rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header (Compact) */}
        <div className="mb-6 sm:mb-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-2.5 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#ff5500] uppercase">
              INFRASTRUCTURE EXCELLENCE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-[1.1] font-heading text-white mb-2">
            What makes Giga better for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-white to-[#3daeff]">
              AI development?
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
            Stay ahead of the curve with our vertically integrated AI infrastructure — built faster, cheaper, and with complete single-vendor accountability.
          </p>
        </div>

        {/* ============================================================ */}
        {/* CLEAN BENTO GRID (WITHOUT CROSS LINES TEXT)                   */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          
          {/* ------------------------------------------------------------ */}
          {/* CARD 1: 01. SPEED & RAPID DEPLOYMENT (Col 12/Lg 6)           */}
          {/* ------------------------------------------------------------ */}
          <div
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-6 relative rounded-2xl bg-gradient-to-b from-[#070e1c]/90 via-[#030712]/90 to-[#02050c]/90 border border-white/[0.08] hover:border-[#3daeff]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_35px_rgba(61,174,255,0.12)] flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#3daeff]/[0.08] rounded-full blur-2xl group-hover:bg-[#3daeff]/[0.16] transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#3daeff] tracking-tight">
                  1.
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/60 uppercase">
                  RAPID DEPLOYMENT
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight mb-1">
                We deploy in under 9 months.
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans mb-4 max-w-md">
                Parallel site prep and factory fabrication compress total schedule by 50% compared to traditional field construction.
              </p>
            </div>

            {/* Visual: Clean Giga Deployment Progress Slider */}
            <div className="pt-3 border-t border-white/[0.08] bg-white/[0.02] -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4">
              <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                <span className="text-[#3daeff] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#3daeff] stroke-[3]" />
                  GIGA INFRASTRUCTURE
                </span>
                <span className="text-[#3daeff] font-black tracking-wider font-mono">
                  UNDER 9 MONTHS (50% FASTER)
                </span>
              </div>
              <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden flex items-center p-0.5 border border-[#3daeff]/30">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#0091ff] to-[#3daeff] rounded-full shadow-[0_0_10px_rgba(61,174,255,0.8)]"
                />
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 2: 02. VERTICAL INTEGRATION (Col 12/Lg 6)               */}
          {/* ------------------------------------------------------------ */}
          <div
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-6 relative rounded-2xl bg-gradient-to-b from-[#070e1c]/90 via-[#030712]/90 to-[#02050c]/90 border border-white/[0.08] hover:border-[#3daeff]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_35px_rgba(61,174,255,0.12)] flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#00ffa3]/[0.08] rounded-full blur-2xl group-hover:bg-[#00ffa3]/[0.15] transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#3daeff] tracking-tight">
                  2.
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/60 uppercase">
                  WHO BUILDS IT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-8">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight mb-1">
                    We manufacture everything.
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    From white-space compute to medium voltage power. Transformers, switchboards, and pods built under one roof.
                  </p>
                </div>

                {/* 3D Isometric Data Cube Graphic */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 rounded-xl blur-lg" />
                    <svg className="w-18 h-18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 50L50 30L90 50L50 70L10 50Z" stroke="#3daeff" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
                      <path d="M50 20L75 33V58L50 45V20Z" fill="#0091ff" opacity="0.8" />
                      <path d="M50 20L25 33V58L50 45V20Z" fill="#0066cc" opacity="0.9" />
                      <path d="M50 20L75 33L50 45L25 33L50 20Z" fill="#3daeff" />
                      <circle cx="50" cy="33" r="3" fill="#ffffff" />
                      <path d="M25 50L38 57V68L25 61V50Z" fill="#ff5500" opacity="0.8" />
                      <path d="M75 50L88 57V68L75 61V50Z" fill="#3daeff" opacity="0.6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 3: 03. TRUE FACTORY PRE-FAB (Col 12/Lg 6)               */}
          {/* ------------------------------------------------------------ */}
          <div
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-6 relative rounded-2xl bg-gradient-to-b from-[#070e1c]/90 via-[#030712]/90 to-[#02050c]/90 border border-white/[0.08] hover:border-[#3daeff]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_35px_rgba(61,174,255,0.12)] flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#ff5500]/[0.08] rounded-full blur-2xl group-hover:bg-[#ff5500]/[0.15] transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#3daeff] tracking-tight">
                  3.
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/60 uppercase">
                  PRE-FABRICATION
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-8">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight mb-1">
                    Factory built instead of field.
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    Pre-tested and fully commissioned modules reduce jobsite labor by 10x, avoiding weather bottlenecks and local trade shortages.
                  </p>
                </div>

                {/* Concentric Radar / Sonar Wave Sensor Graphic */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="45" stroke="#3daeff" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" />
                      <circle cx="50" cy="50" r="32" stroke="#3daeff" strokeWidth="1.2" opacity="0.45" />
                      <circle cx="50" cy="50" r="18" stroke="#3daeff" strokeWidth="1.5" opacity="0.75" />
                      <circle cx="50" cy="50" r="6" fill="#3daeff" />
                      <circle cx="50" cy="50" r="10" stroke="#3daeff" strokeWidth="1" opacity="0.4" className="animate-ping" />
                      <circle cx="28" cy="38" r="3" fill="#ff5500" />
                      <circle cx="70" cy="58" r="2.5" fill="#38bdf8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 4: 04. SINGLE VENDOR (Col 12/Lg 6)                     */}
          {/* ------------------------------------------------------------ */}
          <div
            onMouseEnter={() => setActiveCard(3)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-6 relative rounded-2xl bg-gradient-to-b from-[#070e1c]/90 via-[#030712]/90 to-[#02050c]/90 border border-white/[0.08] hover:border-[#3daeff]/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_35px_rgba(61,174,255,0.12)] flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-[#0091ff]/[0.08] rounded-full blur-2xl group-hover:bg-[#0091ff]/[0.16] transition-all duration-500 pointer-events-none" />

            <div>
              <div className="flex items-baseline gap-2.5 mb-2">
                <span className="text-2xl sm:text-3xl font-black font-heading text-[#3daeff] tracking-tight">
                  4.
                </span>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/60 uppercase">
                  SINGLE VENDOR SLA
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-8">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white tracking-tight mb-1">
                    Our integration = Fewer handoffs.
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    One unified master warranty, single point of accountability, and direct engineer-to-client support. Zero finger-pointing.
                  </p>
                </div>

                {/* High-Tech Glowing Shield Vector */}
                <div className="sm:col-span-4 flex items-center justify-center">
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#0091ff]/15 rounded-full blur-lg" />
                    <svg className="w-18 h-18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="42" stroke="#3daeff" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                      <path
                        d="M50 18L74 28V52C74 68 50 82 50 82C50 82 26 68 26 52V28L50 18Z"
                        stroke="#3daeff"
                        strokeWidth="2"
                        fill="rgba(61,174,255,0.08)"
                      />
                      <path
                        d="M50 25L68 33V51C68 64 50 75 50 75C50 75 32 64 32 51V33L50 25Z"
                        stroke="#00ffa3"
                        strokeWidth="1.5"
                        fill="rgba(0,255,163,0.05)"
                      />
                      <path d="M42 50L48 56L60 44" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Bar (Tightened) */}
        <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="font-bold tracking-wider text-white/80 uppercase">
              100% FACTORY FABRICATED & COMMISIONED
            </span>
          </div>
          <a
            href="https://www.gigaenergy.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider text-[#ff5500] hover:text-[#ff7733] transition-colors uppercase"
          >
            <span>Schedule an Innovation Hub Tour</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
