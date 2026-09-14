"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface BuildStage {
  id: string;
  stageNum: string;
  month: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: {
    label: string;
    pos: string; // Tailwind positioning
  }[];
  stat: {
    value: string;
    label: string;
  };
}

const BUILD_STAGES: BuildStage[] = [
  {
    id: "stage-01",
    stageNum: "01",
    month: "MO. 0-2",
    title: "SITE DESIGN",
    subtitle: "Turnkey Computational Engineering",
    description:
      "Giga's engineering and design team plans your site around your specific compute, cooling, and density requirements.",
    image: "/images/build_01_design.avif",
    tags: [
      { label: "SITE POWER PLANNING", pos: "top-6 left-6" },
      { label: "3D CIVIL MOCKUPS", pos: "bottom-8 left-8" },
      { label: "CUSTOM DENSITY", pos: "top-10 right-6" },
    ],
    stat: {
      value: "60 DAYS",
      label: "Architecture & Interconnect Packet",
    },
  },
  {
    id: "stage-02",
    stageNum: "02",
    month: "MO. 1–6",
    title: "SITE DEVELOPMENT & MANUFACTURING",
    subtitle: "Parallel Execution Workstreams",
    description:
      "Giga manages utility interconnection, ground prep, and building construction, all while your modules are built and tested in our factories.",
    image: "/images/build_02_manufacturing.avif",
    tags: [
      { label: "UTILITY INTERCONNECT", pos: "top-6 left-6" },
      { label: "CONCURRENT FACTORY BUILD", pos: "bottom-8 left-8" },
      { label: "ZERO SITE BOTTLENECK", pos: "top-12 right-8" },
    ],
    stat: {
      value: "100% PARALLEL",
      label: "Civil & Factory Modules in Lockstep",
    },
  },
  {
    id: "stage-03",
    stageNum: "03",
    month: "MO. 6–9",
    title: "MODULES PLACED ON-SITE",
    subtitle: "Precision Modular Installation",
    description:
      "Giga manufactures, tests, and commissions your data center infrastructure. Modules arrive ready to connect, reducing field labor by 10x.",
    image: "/images/build_03_placed.avif",
    tags: [
      { label: "FACTORY COMMISSIONED", pos: "top-6 left-6" },
      { label: "10X LESS FIELD LABOR", pos: "bottom-8 left-8" },
      { label: "RAPID PAD MOUNTING", pos: "top-10 right-6" },
    ],
    stat: {
      value: "10X LESS",
      label: "Field Labor vs Conventional Builds",
    },
  },
  {
    id: "stage-04",
    stageNum: "04",
    month: "MO. 9",
    title: "ENERGIZATION",
    subtitle: "Full Grid Sync & Compute Go-Live",
    description:
      "Modules arrive pre-tested and ready to go. Power flows, cooling connects, and your site is rack-ready in 9 months.",
    image: "/images/build_04_energization.avif",
    tags: [
      { label: "POWER ENERGIZED", pos: "top-6 left-6" },
      { label: "THERMAL CLOSED-LOOP", pos: "bottom-8 left-8" },
      { label: "RACK READY", pos: "top-10 right-6" },
    ],
    stat: {
      value: "9 MONTHS",
      label: "From First Draft to Rack-Ready",
    },
  },
];

const AUTO_ROTATE_INTERVAL = 6000; // 6 seconds per stage

export default function BuildProcess() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Auto-advance loop with progress bar
  useEffect(() => {
    if (isPaused) return;

    const stepTime = 50; // update progress every 50ms
    const totalSteps = AUTO_ROTATE_INTERVAL / stepTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount += 1;
      setProgress((stepCount / totalSteps) * 100);

      if (stepCount >= totalSteps) {
        stepCount = 0;
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % BUILD_STAGES.length);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const handleSelectStage = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const activeStage = BUILD_STAGES[activeIndex];

  return (
    <section
      id="build-process"
      className="relative w-full py-20 sm:py-28 bg-transparent text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Seamless Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12 sm:mb-16" />
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#0091ff]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0091ff] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#3daeff] uppercase">
                CONSTRUCTION TIMELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading leading-[1.1]">
              Our 9-Month{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-[#60b6ff] to-[#0091ff]">
                Build Process
              </span>
            </h2>
          </div>

          <p className="text-sm text-white/50 max-w-md font-sans leading-relaxed">
            Standardized engineering modules arrive pre-tested from our factories, eliminating on-site delays and turning years of traditional construction into single-digit months.
          </p>
        </div>

        {/* Interactive usdatacenters.ai style Layout: Image Box (Left) & Stepper Info (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ============================================================ */}
          {/* LEFT SIDE: DYNAMIC IMAGE CONTAINER WITH FLOATING TAGS        */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#070c18] border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] group">
              
              {/* Image Crossfade Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeStage.image}
                    alt={activeStage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                    className="object-cover object-center brightness-[0.88] contrast-[1.05]"
                  />
                  
                  {/* Subtle Vignette & Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/90 via-[#04070f]/20 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04070f]/40 via-transparent to-[#04070f]/40 pointer-events-none" />
                  
                  {/* Cyber Grid Overlay */}
                  <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#3daeff_1px,transparent_1px),linear-gradient(to_bottom,#3daeff_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Interactive Floating Glass Pills (as seen in reference) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`tags-${activeStage.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="absolute inset-0 pointer-events-none p-4 sm:p-6"
                >
                  {activeStage.tags.map((tag, tagIdx) => (
                    <div
                      key={tagIdx}
                      className={`absolute ${tag.pos} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#030712]/80 backdrop-blur-md border border-[#3daeff]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff] shadow-[0_0_8px_#3daeff] animate-ping" />
                      <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase">
                        {tag.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Bottom Integrated Stat Strip */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 flex items-center justify-between border-t border-white/[0.08] bg-black/40 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#3daeff]/10 border border-[#3daeff]/20 flex items-center justify-center text-[#3daeff]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider block">
                      SCHEDULE MILESTONE
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      {activeStage.month} — {activeStage.title}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-[#3daeff] uppercase tracking-wider block">
                    {activeStage.stat.label}
                  </span>
                  <span className="text-sm sm:text-base font-mono font-black text-white tracking-tight">
                    {activeStage.stat.value}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: VERTICAL STEPPER LIST (USDATACENTERS.AI STYLE)   */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative pl-7 sm:pl-8">
              
              {/* Stepper Continuous Guide Line */}
              <div className="absolute left-[11px] sm:left-[13px] top-4 bottom-4 w-[2px] bg-white/[0.08]" />

              {/* Steps List */}
              <div className="flex flex-col gap-6 sm:gap-7">
                {BUILD_STAGES.map((stage, idx) => {
                  const isActive = idx === activeIndex;

                  return (
                    <div
                      key={stage.id}
                      onClick={() => handleSelectStage(idx)}
                      className={`group relative cursor-pointer text-left transition-all duration-300 rounded-xl p-3 -ml-3 ${
                        isActive
                          ? "bg-white/[0.03] border border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                          : "hover:bg-white/[0.015] border border-transparent"
                      }`}
                    >
                      {/* Vertical Indicator Dot on the Rail */}
                      <div className="absolute -left-[23px] sm:-left-[24px] top-6 -translate-y-1/2 flex items-center justify-center">
                        <div
                          className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                            isActive
                              ? "w-5 h-5 bg-[#0091ff]/20 border border-[#0091ff]"
                              : "w-2.5 h-2.5 bg-white/20 group-hover:bg-white/40"
                          }`}
                        >
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-[#3daeff] shadow-[0_0_10px_#3daeff]" />
                          )}
                        </div>
                      </div>

                      {/* Header Row: Number + Month Badge */}
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs font-mono font-bold tracking-wider transition-colors duration-200 ${
                              isActive ? "text-[#3daeff]" : "text-white/40 group-hover:text-white/60"
                            }`}
                          >
                            {stage.stageNum}
                          </span>
                          <span
                            className={`text-xs font-mono tracking-widest px-2 py-0.5 rounded transition-all duration-200 ${
                              isActive
                                ? "bg-[#3daeff]/15 text-[#60b6ff] border border-[#3daeff]/30"
                                : "bg-white/[0.05] text-white/40 group-hover:text-white/60 border border-white/[0.04]"
                            }`}
                          >
                            {stage.month}
                          </span>
                        </div>

                        {/* Visual indicator arrow when active */}
                        {isActive && (
                          <span className="text-[10px] font-mono text-[#3daeff] flex items-center gap-1">
                            ACTIVE
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      {/* Stage Title */}
                      <h3
                        className={`text-base sm:text-lg font-black font-heading tracking-wide uppercase transition-colors duration-200 ${
                          isActive
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/80"
                        }`}
                      >
                        {stage.title}
                      </h3>

                      {/* Stage Subtitle / Description */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive ? "max-h-36 opacity-100 mt-2" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans">
                          {stage.description}
                        </p>

                        {/* Progress Bar for the active auto-advancing stage */}
                        <div className="w-full h-1 bg-white/[0.08] rounded-full overflow-hidden mt-3">
                          <div
                            className="h-full bg-gradient-to-r from-[#3daeff] to-[#0091ff] rounded-full transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Note below stepper */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-white/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3daeff]" />
                <span>ALL WORK UNDER SINGLE MASTER WARRANTY</span>
              </div>
              <span className="hidden sm:inline-block">
                {isPaused ? "PAUSED (HOVERED)" : "AUTO-CYCLE ACTIVE"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
