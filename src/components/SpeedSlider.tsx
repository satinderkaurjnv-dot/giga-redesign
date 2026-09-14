"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  TrendingUp,
  Factory,
  HardHat,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SpeedSlider() {
  const [currentMonth, setCurrentMonth] = useState(9);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play timer
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentMonth((prev) => {
          if (prev >= 24) {
            setIsPlaying(false);
            return 24;
          }
          return Math.min(24, Math.round((prev + 0.5) * 10) / 10);
        });
      }, 180);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePlayToggle = () => {
    if (currentMonth >= 24) {
      setCurrentMonth(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentMonth(0);
  };

  // Status computations based on scrubbed month
  const isGigaBaseOnline = currentMonth >= 9;
  const isTradOnline = currentMonth >= 24;

  // GigaBase progress (0 to 9 months = 100%)
  const gigaProgressPercent = Math.min(100, (currentMonth / 9) * 100);

  // Financial advantage metric: ~$1.4M / month compute revenue on a 9 MW IT campus
  const monthsAhead = Math.max(0, currentMonth - 9);
  const revenueGained = isGigaBaseOnline
    ? Math.min(21, Math.round(monthsAhead * 1.4 * 10) / 10)
    : 0;

  return (
    <section id="speed" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.06] relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 text-[10px] font-mono text-[#3daeff] uppercase tracking-widest mb-4 backdrop-blur-md">
          <Zap className="w-3 h-3 text-[#3daeff]" />
          <span>PARALLEL CONCURRENCY SIMULATOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white tracking-tight font-heading leading-tight">
          Energize in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-[#58c4ff] to-[#0091ff]">Half the Time</span>
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-2xl mt-3 font-normal leading-relaxed">
          Traditional data centers move sequentially through 10+ disjointed subcontractors.
          GigaBase pre-fabricates modules in cleanroom factories while civil ground preparation occurs in parallel.
        </p>
      </div>

      {/* Main Interactive Simulation Terminal Frame */}
      <div className="w-full rounded-2xl md:rounded-3xl bg-[#02050c]/90 border border-white/[0.12] backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.06)] p-4 sm:p-7 md:p-9 mb-16 relative overflow-hidden">
        
        {/* Top Control HUD Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
          
          {/* Playback Controls & Month Stepper */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayToggle}
              className="px-4 py-2 rounded-xl bg-[#3daeff] hover:bg-[#58c4ff] text-black font-mono font-bold text-xs flex items-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(61,174,255,0.4)] active:scale-95"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              <span>{isPlaying ? "PAUSE SIMULATION" : currentMonth >= 24 ? "REPLAY" : "PLAY TIMELAPSE"}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200"
              title="Reset to Month 0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <div className="h-6 w-[1px] bg-white/15 mx-1 hidden sm:block" />

            {/* Quick Milestones Jump */}
            <div className="hidden sm:flex items-center gap-1.5">
              {[
                { m: 0, tag: "Start" },
                { m: 6, tag: "Factory Delivery" },
                { m: 9, tag: "Month 9 (GigaBase)" },
                { m: 24, tag: "Month 24 (Trad)" },
              ].map((pill) => (
                <button
                  key={pill.m}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentMonth(pill.m);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all duration-200 ${
                    Math.round(currentMonth) === pill.m
                      ? "bg-white/20 text-white font-bold border border-white/30"
                      : "bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.08] border border-transparent"
                  }`}
                >
                  {pill.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Month Telemetry Meter */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                TIMELAPSE CLOCK
              </span>
              <span className="text-2xl font-black font-heading text-white tracking-tight">
                MONTH <span className="text-[#3daeff]">{currentMonth.toFixed(1)}</span>
                <span className="text-white/40 text-base font-normal"> / 24.0</span>
              </span>
            </div>

            <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isGigaBaseOnline ? "bg-[#00e878] animate-pulse" : "bg-[#ff5500]"}`} />
              <span className="text-white/80 font-bold">
                {isGigaBaseOnline ? "STATUS: REVENUE ACTIVE" : "STATUS: SITE BUILD"}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Scrub Track */}
        <div className="relative w-full mb-12">
          {/* Track Labels */}
          <div className="flex justify-between text-[10px] font-mono text-white/40 mb-2 px-1">
            <span>MONTH 0 (GROUNDBREAKING)</span>
            <span className="text-[#3daeff] font-bold">MONTH 9: GIGABASE ENERGIZED</span>
            <span className="text-red-400/80">MONTH 24: TRADITIONAL POWER</span>
          </div>

          {/* Interactive Range Input Slider */}
          <div className="relative flex items-center">
            <input
              type="range"
              min={0}
              max={24}
              step={0.1}
              value={currentMonth}
              onChange={(e) => {
                setIsPlaying(false);
                setCurrentMonth(parseFloat(e.target.value));
              }}
              className="w-full h-3 bg-white/[0.08] rounded-lg appearance-none cursor-pointer accent-[#3daeff] focus:outline-none"
            />

            {/* Visual Month 9 Flag */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#3daeff] pointer-events-none -translate-x-1/2"
              style={{ left: `${(9 / 24) * 100}%` }}
            >
              <div className="absolute -top-6 -translate-x-1/2 px-2 py-0.5 rounded bg-[#3daeff] text-black text-[9px] font-mono font-extrabold whitespace-nowrap shadow-[0_0_10px_rgba(61,174,255,0.8)]">
                ⚡ 9 MONTHS
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* DUAL COMPETING TIMELINE TRACKS (HIGH-IMPACT VISUAL)           */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 gap-6 mb-10">
          
          {/* TRACK 1: GIGABASE PARALLEL TURNKEY SYSTEM */}
          <div className={`p-5 sm:p-6 rounded-2xl transition-all duration-500 border relative overflow-hidden ${
            isGigaBaseOnline
              ? "bg-gradient-to-r from-[#021124] to-[#010814] border-[#3daeff]/40 shadow-[0_0_35px_rgba(61,174,255,0.15)]"
              : "bg-[#040915]/60 border-white/10"
          }`}>
            
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3daeff]/15 border border-[#3daeff]/30 flex items-center justify-center text-[#3daeff]">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3daeff]">
                      GIGABASE PARALLEL ENGINE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#3daeff]/15 text-[#3daeff] text-[9px] font-mono font-bold">
                      SINGLE MONOLITH SLA
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white font-heading">
                    9 Months To Energization
                  </h3>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {isGigaBaseOnline ? (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#00e878]/15 border border-[#00e878]/40 text-[#00e878] font-mono text-xs font-black shadow-[0_0_15px_rgba(0,232,120,0.2)]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>ENERGIZED & REVENUE ACTIVE</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[#3daeff] font-mono text-xs">
                    <Clock className="w-3.5 h-3.5 animate-spin" />
                    <span>PARALLEL FABRICATION ({Math.round(gigaProgressPercent)}%)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dynamic Progress Bar */}
            <div className="relative w-full h-4 rounded-full bg-white/[0.05] p-0.5 mb-4 overflow-hidden border border-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-[#3daeff] to-[#00e878] shadow-[0_0_15px_rgba(61,174,255,0.5)] flex items-center justify-end pr-2"
                style={{ width: `${Math.min(100, (currentMonth / 9) * 100)}%` }}
              >
                {isGigaBaseOnline && (
                  <span className="text-[9px] font-black text-black font-mono">100% ONLINE</span>
                )}
              </motion.div>
            </div>

            {/* Current Phase Narrative Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              <div className={`p-3 rounded-xl border transition-all ${
                currentMonth <= 3
                  ? "bg-[#3daeff]/10 border-[#3daeff]/40 text-white"
                  : currentMonth > 3
                  ? "bg-white/[0.02] border-white/10 text-white/50"
                  : "bg-white/[0.01] border-white/5 text-white/30"
              }`}>
                <span className="text-[10px] text-[#3daeff] font-bold block mb-1">PHASE 01: MO 0–3</span>
                <span className="font-sans font-medium text-white/90 block">Civil Pads + Cleanroom Factory Tooling</span>
                <span className="text-[10px] text-white/40 mt-1 block">Concurrent site & module launch</span>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${
                currentMonth > 3 && currentMonth <= 6
                  ? "bg-[#3daeff]/10 border-[#3daeff]/40 text-white"
                  : currentMonth > 6
                  ? "bg-white/[0.02] border-white/10 text-white/50"
                  : "bg-white/[0.01] border-white/5 text-white/30"
              }`}>
                <span className="text-[10px] text-[#3daeff] font-bold block mb-1">PHASE 02: MO 3–6</span>
                <span className="font-sans font-medium text-white/90 block">Factory Module Assembly (Off-Site)</span>
                <span className="text-[10px] text-white/40 mt-1 block">Zero weather or trade delays</span>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${
                currentMonth > 6
                  ? "bg-[#00e878]/10 border-[#00e878]/40 text-white"
                  : "bg-white/[0.01] border-white/5 text-white/30"
              }`}>
                <span className="text-[10px] text-[#00e878] font-bold block mb-1">PHASE 03: MO 6–9</span>
                <span className="font-sans font-medium text-white/90 block">Plug & Play Commissioning</span>
                <span className="text-[10px] text-[#00e878] mt-1 block font-bold">Energized & 9 MW Online</span>
              </div>
            </div>
          </div>

          {/* TRACK 2: TRADITIONAL WATERFALL (THE COMPETING ALTERNATIVE) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#03060f]/60 border border-white/[0.08] relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                      TRADITIONAL CONSTRUCTION
                    </span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[9px] font-mono">
                      10+ DISJOINTED SUBCONTRACTORS
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white/70 font-heading">
                    24+ Months Sequential Waterfall
                  </h3>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {isTradOnline ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 text-white/80 font-mono text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>MONTH 24: FINALLY ONLINE (15 MO LATE)</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-xs">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{currentMonth < 14 ? "CIVIL / PROCUREMENT BOTTLENECKS" : "FIELD ASSEMBLY & COMMISSIONING"}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Traditional Progress Bar */}
            <div className="relative w-full h-3 rounded-full bg-white/[0.05] p-0.5 mb-4 overflow-hidden border border-white/5">
              <motion.div
                className="h-full rounded-full bg-red-500/40"
                style={{ width: `${Math.min(100, (currentMonth / 24) * 100)}%` }}
              />
            </div>

            <p className="text-xs text-white/50 font-mono">
              {currentMonth < 9
                ? "Traditional status: Waiting on high-voltage transformer orders and permitting sign-offs..."
                : currentMonth < 24
                ? `Traditional status: Still in construction. GigaBase has already been energized for ${(currentMonth - 9).toFixed(1)} months while competitors are on-site building.`
                : "Traditional status: Finally energized at Month 24, after absorbing 15 months of delayed market access and subcontractor finger-pointing."}
            </p>
          </div>

        </div>

        {/* Bottom ROI & Revenue Delta Callout Banner */}
        <div className="p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#031526] via-[#020b18] to-[#031526] border border-[#3daeff]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00e878]/15 border border-[#00e878]/30 flex items-center justify-center text-[#00e878]">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00e878] font-bold">
                FIRST-MOVER CAPITAL ADVANTAGE
              </span>
              <h4 className="text-lg sm:text-xl font-black text-white font-heading">
                {isGigaBaseOnline
                  ? `~ $${revenueGained}M Early Compute Value Unlocked`
                  : "15 Months Earlier To First Compute Revenue"}
              </h4>
              <p className="text-xs text-white/60">
                90% less on-site labor • 100% pre-commissioned in controlled factory conditions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-around">
            <div className="flex flex-col text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#3daeff] font-heading">15 MO</span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Time Saved</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl sm:text-3xl font-black text-[#00e878] font-heading">-90%</span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Field Labor</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-2xl sm:text-3xl font-black text-white font-heading">4N/3</span>
              <span className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Redundancy</span>
            </div>
          </div>
        </div>

      </div>

      {/* Hyperscaler Partner Marquee */}
      <div className="w-full overflow-hidden border-y border-white/[0.06] py-6">
        <p className="text-center text-[10px] font-mono uppercase tracking-[0.25em] text-white/30 mb-6">
          TRUSTED BY HYPERSCALERS & ENTERPRISE COMPUTE OPERATORS
        </p>
        <div className="marquee-track items-center gap-16 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">COREWEAVE</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">VULTR</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">SUPERMICRO</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">CLEANSPARK</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">SOLUNA</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">WESCO</span>
          {/* Duplicate for seamless infinite loop */}
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">COREWEAVE</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">VULTR</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">SUPERMICRO</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">CLEANSPARK</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">SOLUNA</span>
          <span className="text-lg font-black tracking-widest text-white/80 font-heading">WESCO</span>
        </div>
      </div>
    </section>
  );
}
