"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function BuildWithUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="build-with-us"
      className="relative w-full overflow-hidden bg-transparent text-white pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-8 md:px-12"
    >
      {/* Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />
      {/* ============================================================ */}
      {/* ILLUMINATED BLUEPRINT LAYER + AMBIENT BACKLIGHTS              */}
      {/* ============================================================ */}
      
      {/* Isometric Blueprint Infrastructure Illustration - Illuminated and Lighter */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-end">
        <div className="relative w-[850px] h-[480px] lg:w-[1150px] lg:h-[620px] translate-x-[10%] lg:translate-x-[2%] opacity-85 transition-opacity duration-500 hover:opacity-100">
          <Image
            src="/images/gigabase_vector_blueprint_blue.png"
            alt="GigaBase Modular Infrastructure Isometric Blueprint"
            fill
            sizes="100vw"
            className="object-contain object-right brightness-[2.3] contrast-[1.15]"
            priority
          />
        </div>
      </div>

      {/* Editorial Gradient Mask (Keeps Left Text 100% Readable, Reveals Right Blueprint) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04070f] via-[#04070f]/80 to-transparent z-[1] pointer-events-none w-full lg:w-[48%]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04070f] via-transparent to-[#04070f]/40 z-[1] pointer-events-none" />

      {/* Subtle Cyan / Blue Backlight to softly illuminate the Blueprint lines */}
      <div className="absolute top-1/2 right-[-50px] -translate-y-1/2 w-[550px] h-[350px] bg-[#0077ff]/[0.12] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-[-80px] w-[400px] h-[350px] bg-[#3daeff]/[0.08] rounded-full blur-[120px] pointer-events-none z-0" />

      {/* ============================================================ */}
      {/* CONTENT LAYER                                                */}
      {/* ============================================================ */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3daeff]/30 bg-[#3daeff]/10 mb-3.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#3daeff] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#3daeff] uppercase">
              TALK TO SALES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-white font-heading leading-[1.06] mb-3">
            Build with us
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed mb-6 max-w-xl">
            Share a few details and our AI infrastructure team will follow up within one business day. If you&apos;re close to Alameda, CA, ask about a tour of our Innovation Hub.
          </p>

          {/* Action Button & Tour Pill */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="https://www.gigaenergy.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-[#111315] font-mono text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.12)] hover:bg-[#3daeff] hover:text-[#02050c] hover:shadow-[0_10px_40px_rgba(61,174,255,0.35)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>CONTACT SALES</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
            </a>

            <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#3daeff]" />
              <span>INNOVATION HUB: ALAMEDA, CA</span>
            </div>
          </div>

          {/* Key Trust Signals */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-5 text-xs font-mono">
            <div>
              <span className="text-white/40 block mb-0.5">RESPONSE SLA</span>
              <span className="font-bold text-white tracking-wide">WITHIN 1 BUSINESS DAY</span>
            </div>
            <div>
              <span className="text-white/40 block mb-0.5">FACILITY TOURS</span>
              <span className="font-bold text-[#3daeff] tracking-wide">ALAMEDA INNOVATION HUB</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-white/40 block mb-0.5">INFRASTRUCTURE</span>
              <span className="font-bold text-[#3daeff] tracking-wide">9MW MODULAR BLOCKS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
