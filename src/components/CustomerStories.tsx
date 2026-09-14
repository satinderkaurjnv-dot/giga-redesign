"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface Story {
  id: string;
  tabLabel: string;
  clientType: string;
  location: string;
  quote: string;
  highlight: string;
  image: string;
  metrics: { label: string; value: string }[];
}

const STORIES: Story[] = [
  {
    id: "hyperscaler",
    tabLabel: "AI Hyperscaler",
    clientType: "Publicly Traded AI Hyperscaler",
    location: "USA CAMPUS",
    quote:
      "Giga\u2019s 7-week turnaround and custom engineering allowed us to scale up GPUs quickly.",
    highlight: "7-WEEK TURNAROUND",
    image: "/images/story_hyperscaler.avif",
    metrics: [
      { label: "DELIVERY SPEED", value: "7 Weeks" },
      { label: "WORKLOAD", value: "High-Density GPU Cluster" },
    ],
  },
  {
    id: "midwest",
    tabLabel: "Midwest Data Center",
    clientType: "Midwestern Data Center on a Tight Timeline",
    location: "MIDWEST, USA",
    quote:
      "The equipment not only arrived on the tight timeline, but we\u2019ve been extremely satisfied with the quality since the site was energized.",
    highlight: "ZERO SCHEDULE SLIPPAGE",
    image: "/images/story_midwest.avif",
    metrics: [
      { label: "TIMELINE INTEGRITY", value: "100% On-Time" },
      { label: "HARDWARE", value: "In-House Padmounts" },
    ],
  },
  {
    id: "texas",
    tabLabel: "10 MW AI Campus",
    clientType: "10 MW AI Campus in West Texas",
    location: "WEST TEXAS",
    quote:
      "Our electricians let us know multiple times how much they prefer the GIGA equipment to anything else they have installed. It\u2019s the best of any single piece of infrastructure we ordered.",
    highlight: "FIELD ELECTRICIAN PREFERRED",
    image: "/images/story_texas.webp",
    metrics: [
      { label: "CAPACITY", value: "10 MW Energized" },
      { label: "RELIABILITY", value: "Sub-Cycle Fault Clear" },
    ],
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per story

export default function CustomerStories() {
  const [activeIdx, setActiveIdx] = useState(0);

  // Uninterrupted continuous automatic cycling
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STORIES.length);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [activeIdx]);

  const nextStory = () => setActiveIdx((prev) => (prev + 1) % STORIES.length);
  const prevStory = () => setActiveIdx((prev) => (prev - 1 + STORIES.length) % STORIES.length);

  const current = STORIES[activeIdx];

  return (
    <section
      id="stories"
      className="relative w-full bg-transparent text-white pt-6 pb-10 sm:pt-8 sm:pb-14 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Ambient Multi-Spectrum Depth Lighting behind this section */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#0055ff]/[0.06] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/2 w-[550px] h-[450px] bg-[#00d2ff]/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00e878]/[0.025] rounded-full blur-[140px] pointer-events-none" />

      {/* Top Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-[#02050c]/80 mb-3 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#00e878] uppercase">
                CUSTOMER STORIES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] font-heading text-white">
              Satisfied Customers{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                Across the Country
              </span>
            </h2>
          </div>

          {/* Slider Controls + Autoplay State Indicator */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-[10px] font-mono text-white/50 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-ping" />
              <span className="tracking-wider">AUTO-CYCLING</span>
            </div>

            <button
              onClick={prevStory}
              aria-label="Previous customer story"
              className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextStory}
              aria-label="Next customer story"
              className="w-10 h-10 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/25 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Featured Case Study Hero Showcase */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#081224]/75 via-[#040915]/85 to-[#02050c]/95 border border-white/[0.08] border-t-white/[0.16] backdrop-blur-2xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.85),0_0_50px_rgba(61,174,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.06)] p-6 sm:p-9 lg:p-12">
          {/* Glowing Top Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.05] overflow-hidden">
            <motion.div
              key={activeIdx}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#3daeff] via-[#60b6ff] to-[#00e878] shadow-[0_0_12px_rgba(61,174,255,0.6)]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Client Story Quote & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Verified Pill Tag */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-7 h-7 rounded-lg bg-[#3daeff]/10 border border-[#3daeff]/30 text-[#3daeff] flex items-center justify-center shadow-[0_0_12px_rgba(61,174,255,0.2)]">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10.5px] font-mono font-semibold tracking-[0.2em] text-[#3daeff] uppercase">
                    VERIFIED CLIENT REVIEW
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Refined Quote Typography: lighter weight, spacious line height, beautiful elegance */}
                    <blockquote className="text-lg sm:text-xl lg:text-[23px] font-normal sm:font-light leading-[1.6] text-white/95 font-sans tracking-[-0.01em] mb-6">
                      &ldquo;{current.quote}&rdquo;
                    </blockquote>

                    <div className="mb-7">
                      <span className="text-sm sm:text-base font-semibold text-white/95 font-sans tracking-wide block">
                        {current.clientType}
                      </span>
                      <span className="text-[11px] font-mono text-[#3daeff]/80 tracking-[0.16em] uppercase mt-0.5 block">
                        {current.location}
                      </span>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/[0.08]">
                      {current.metrics.map((m, idx) => (
                        <div key={idx}>
                          <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.16em] block mb-1">
                            {m.label}
                          </span>
                          <span className="text-sm sm:text-base font-mono font-medium text-white tracking-tight">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right: Site / Hardware Image with Crossfade */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/[0.12] bg-[#02050c] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.image}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={current.clientType}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover brightness-[0.92]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050c]/80 via-transparent to-black/20" />
                  </motion.div>
                </AnimatePresence>

                {/* Badge Overlay */}
                <div className="absolute bottom-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-[#02050c]/85 border border-[#00e878]/35 backdrop-blur-md text-[9.5px] font-mono font-bold tracking-[0.14em] text-[#00e878] shadow-[0_0_12px_rgba(0,232,120,0.2)] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#00e878]" />
                  <span>{current.highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tab Selectors (Clean, Frosted Luxury Design) */}
          <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1">
              {STORIES.map((s, idx) => {
                const isActive = activeIdx === idx;

                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                      isActive
                        ? "bg-[#3daeff]/15 text-[#3daeff] border border-[#3daeff]/40 shadow-[0_0_16px_rgba(61,174,255,0.25)] font-semibold"
                        : "bg-white/[0.03] text-white/50 border border-white/[0.06] hover:bg-white/[0.07] hover:text-white/80 font-normal"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        isActive ? "bg-[#3daeff] shadow-[0_0_8px_#3daeff]" : "bg-white/25"
                      }`}
                    />
                    <span>
                      0{idx + 1} · {s.tabLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            <span className="text-[10px] font-mono text-white/40 tracking-wider hidden md:inline">
              CONTINUOUS AUTO-PLAY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
