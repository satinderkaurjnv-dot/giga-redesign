"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FlippingLogos() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto flip every 4.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const LOGO_PAIRS = [
    {
      id: "pair-1",
      // Front: Vultr (Vibrant Electric Blue)
      front: (
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.98 3.5L4 32.5H13.6L19.98 20.8L26.36 32.5H36L19.98 3.5Z" fill="#007BFC" />
            <path d="M19.98 3.5L12.5 17.2L19.98 20.8L27.46 17.2L19.98 3.5Z" fill="#38BDF8" opacity="0.9" />
          </svg>
          <span className="text-xl sm:text-2xl font-black font-heading tracking-wider text-white">
            VULTR
          </span>
        </div>
      ),
      // Back: Soluna (Warm Golden Amber)
      back: (
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L35 33H5L20 5Z" stroke="#F59E0B" strokeWidth="3.5" strokeLinejoin="round" fill="rgba(245, 158, 11, 0.15)" />
            <circle cx="20" cy="22" r="4" fill="#FBBF24" />
          </svg>
          <span className="text-xl sm:text-2xl font-black font-heading tracking-[0.18em] text-white">
            SOLUNA
          </span>
        </div>
      ),
    },
    {
      id: "pair-2",
      // Front: CoreWeave (Electric Emerald / Mint Cyan)
      front: (
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L15 20L7 27" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 13L25 20L17 27" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27 13L35 20L27 27" stroke="#6EE7B7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg sm:text-xl font-black font-heading tracking-tight text-white">
            Core<span className="text-[#10B981]">Weave</span>
          </span>
        </div>
      ),
      // Back: Black Creek Digital (Cyber Cyan & Blue)
      back: (
        <div className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-[#00E5FF] flex items-center justify-center bg-[#00E5FF]/10 text-[#00E5FF] font-mono font-black text-sm">
            BC
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-black font-heading tracking-wider text-white leading-none">
              BLACK CREEK
            </span>
            <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#00E5FF] leading-tight">
              DIGITAL
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "pair-3",
      // Front: Supermicro (Vivid Green & Red Accent)
      front: (
        <div className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105">
          <svg className="w-9 h-7 sm:w-10 sm:h-8 flex-shrink-0" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="15" rx="22" ry="11" stroke="#00A859" strokeWidth="2.5" strokeDasharray="60 10" />
            <circle cx="39" cy="15" r="3" fill="#E51A24" />
          </svg>
          <span className="text-sm sm:text-base font-black font-heading tracking-wide text-white uppercase">
            SUPER<span className="text-[#00A859]">MICR</span><span className="text-[#E51A24]">O</span>
          </span>
        </div>
      ),
      // Back: Fluidstack (Vibrant Magenta / Violet Gradient)
      back: (
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5L33 12.5L20 20L7 12.5L20 5Z" fill="#A855F7" />
            <path d="M7 17.5L20 25L33 17.5" stroke="#C084FC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 25L20 32.5L33 25" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg sm:text-xl font-black font-heading tracking-tight text-white">
            Fluid<span className="text-[#C084FC]">stack</span>
          </span>
        </div>
      ),
    },
    {
      id: "pair-4",
      // Front: CleanSpark (Solar Orange Spark)
      front: (
        <div className="flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105">
          <span className="text-lg sm:text-xl font-black font-heading tracking-tight text-white">
            Clean<span className="text-[#FF7A00]">Spark</span>
          </span>
          <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2L18 12L28 15L18 18L15 28L12 18L2 15L12 12L15 2Z" fill="#FF7A00" />
            <circle cx="15" cy="15" r="2.5" fill="#FFE17D" />
          </svg>
        </div>
      ),
      // Back: Wesco (Fiery Racing Red)
      back: (
        <div className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
          <svg className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10L12 28L18 14L22 24L26 14L32 28L38 10" stroke="#EE3124" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white lowercase">
            <span className="text-[#EE3124]">w</span>esco
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-transparent py-8 sm:py-12 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Seamless Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

        {/* Subtle Category Micro-Eyebrow */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[9.5px] sm:text-[11px] font-mono font-bold tracking-[0.28em] text-white/40 uppercase">
            POWERING NEXT-GENERATION AI INFRASTRUCTURE
          </span>
        </div>

        {/* Single Row of 4 Flipping Logos (No Box, Pure Clean Floating Logos, Mobile Optimized) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center">
          {LOGO_PAIRS.map((pair, idx) => (
            <div
              key={pair.id}
              className="w-full flex items-center justify-center cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={() => setIsFlipped((prev) => !prev)}
              title="Click to flip logo"
            >
              <motion.div
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{
                  duration: 0.75,
                  delay: idx * 0.12,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-14 sm:h-16 flex items-center justify-center"
              >
                {/* FRONT LOGO */}
                <div
                  style={{ backfaceVisibility: "hidden" }}
                  className="absolute inset-0 flex items-center justify-center select-none"
                >
                  {pair.front}
                </div>

                {/* BACK LOGO (Flipped 180deg) */}
                <div
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateX(180deg)",
                  }}
                  className="absolute inset-0 flex items-center justify-center select-none"
                >
                  {pair.back}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Seamless Gradient Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mt-6 sm:mt-8" />
      </div>
    </section>
  );
}
