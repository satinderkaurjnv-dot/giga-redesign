"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Zap } from "lucide-react";

interface TimelineRowData {
  id: string;
  name: string;
  stageCode: string;
  // Expressed in months (out of 16 total months)
  optimized: { start: number; end: number; duration: number };
  traditional: { start: number; end: number; duration: number };
  description: string;
}

const TIMELINE_ROWS: TimelineRowData[] = [
  {
    id: "design",
    name: "Site Design",
    stageCode: "01",
    optimized: { start: 0, end: 2, duration: 2 },
    traditional: { start: 0, end: 3, duration: 3 },
    description: "Standardized modular blueprints eliminate custom redesign cycles.",
  },
  {
    id: "permitting",
    name: "Permitting",
    stageCode: "02",
    optimized: { start: 1, end: 3, duration: 2 },
    traditional: { start: 3, end: 6, duration: 3 },
    description: "Pre-certified electrical packets expedite local AHJ approvals.",
  },
  {
    id: "development",
    name: "Site Development",
    stageCode: "03",
    optimized: { start: 2, end: 6, duration: 4 },
    traditional: { start: 6, end: 10, duration: 4 },
    description: "Civil grading, pads, and medium-voltage duct banks prepared concurrently.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    stageCode: "04",
    optimized: { start: 2, end: 6, duration: 4 },
    traditional: { start: 9, end: 13, duration: 4 },
    description: "Built in factory cleanrooms in parallel with site ground work.",
  },
  {
    id: "commissioning",
    name: "Testing & Commissioning",
    stageCode: "05",
    optimized: { start: 6, end: 8, duration: 2 },
    traditional: { start: 13, end: 16, duration: 3 },
    description: "100% factory pre-tested before arrival. Plug-and-energize on-site.",
  },
];

const MONTH_TICKS = [0, 2, 4, 6, 8, 10, 12, 14, 16];
const KEY_MONTH_TICKS = [0, 2, 4, 6, 10, 12, 16];

export default function DeploymentTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll tracking across the sticky scroll container (320vh for generous locking)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out progress slightly for silky engineering feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  // Derived animation phases:
  // As soon as section sticks (0.02 -> 0.82), progress marker travels across month 0 to 16
  const markerLeft = useTransform(smoothProgress, [0.02, 0.82], ["0%", "100%"]);
  const currentMonthValue = useTransform(smoothProgress, [0.02, 0.82], [0, 16]);

  // Phase 2 (0.75 -> 0.92): Final comparison callout activation
  const summaryOpacity = useTransform(smoothProgress, [0.75, 0.90], [0, 1]);
  const summaryScale = useTransform(smoothProgress, [0.75, 0.90], [0.96, 1]);
  const summaryY = useTransform(smoothProgress, [0.75, 0.90], [14, 0]);

  // Track live numeric value for the month counter
  const [displayMonth, setDisplayMonth] = useState(0);
  const [activeRowIdx, setActiveRowIdx] = useState(0);

  useEffect(() => {
    const unsubscribe = currentMonthValue.on("change", (latest) => {
      const clamped = Math.max(0, Math.min(16, latest));
      setDisplayMonth(Math.round(clamped * 10) / 10);

      // Determine active row based on month
      if (clamped < 2) setActiveRowIdx(0);
      else if (clamped < 3.5) setActiveRowIdx(1);
      else if (clamped < 6) setActiveRowIdx(2);
      else if (clamped < 8) setActiveRowIdx(4);
      else setActiveRowIdx(4);
    });
    return () => unsubscribe();
  }, [currentMonthValue]);

  return (
    <div
      ref={containerRef}
      id="timeline"
      className="relative w-full h-[320vh] bg-[#04070f] text-white"
    >
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12">
        
        {/* Subtle Background Radial Grid Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Content Layout: 2 Columns on Desktop, Stacked on Mobile */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-14 py-6">
          
          {/* ============================================================ */}
          {/* LEFT SIDE: FIXED TEXT & STAT CALLOUT                         */}
          {/* ============================================================ */}
          <div className="w-full lg:w-[38%] flex flex-col justify-between py-2 lg:py-6">
            <div>
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-5 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ff5500] uppercase">
                  TIMELINE
                </span>
              </div>

              {/* Main Section Title */}
              <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight text-white font-heading leading-[1.08] mb-5">
                Energize in<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-[#60b6ff] to-[#0091ff]">
                  half the time
                </span>
              </h2>

              {/* Exact Description Wording */}
              <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed mb-8 max-w-lg">
                Site construction and module manufacturing happen in parallel, not sequentially.
                Competitors move the same work through a waterfall of vendors, adding months at every handoff.
              </p>
            </div>

            {/* Bottom Stat Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#02050c]/70 border border-white/[0.08] backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#3daeff]">
                  FASTER TIME TO POWER
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  MONTH {displayMonth.toFixed(0)} / 16
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                  &gt; 6 Months Saved
                </span>
              </div>
              <p className="text-xs text-white/50 mt-1">
                Energize in 8 months vs. 16+ month traditional industry average.
              </p>
            </div>

            {/* Scroll Indicator Hint */}
            <div className="hidden lg:flex items-center gap-2 mt-6 text-[10px] font-mono text-white/40 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff] animate-pulse" />
              <span>Scroll to drive timeline simulation</span>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDE: INTERACTIVE PROGRESSIVE TIMELINE CHART (DESKTOP) */}
          {/* ============================================================ */}
          <div className="hidden md:flex flex-1 w-full lg:w-[62%] flex-col p-6 sm:p-8 rounded-2xl bg-[#02050c]/85 border border-white/[0.10] backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden">
            
            {/* Legend & Status Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-6">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-[3px] bg-[#3daeff] shadow-[0_0_8px_rgba(61,174,255,0.4)]" />
                  <span className="text-xs font-mono font-bold tracking-wider text-white">
                    OPTIMIZED PARALLEL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-[3px] bg-[#475569]/60 border border-white/10" />
                  <span className="text-xs font-mono tracking-wider text-white/50">
                    TRADITIONAL WATERFALL
                  </span>
                </div>
              </div>

              {/* Telemetry Precision Coordinate */}
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/[0.03] border border-white/[0.08] font-mono text-[11px]">
                <span className="text-white/40">T-INDEX:</span>
                <span className="text-[#3daeff] font-bold">M{displayMonth.toFixed(1)}</span>
              </div>
            </div>

            {/* Main Gantt Grid Canvas */}
            <div className="relative w-full">
              
              {/* Axis Header: MONTHS 0 / 2 / 4 / 6 / 10 / 12 / 16 */}
              <div className="relative w-full h-8 flex items-center mb-4 pl-36">
                <span className="absolute left-0 text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">
                  MONTHS
                </span>
                
                {/* Horizontal scale track */}
                <div className="relative w-full h-full flex items-center">
                  {MONTH_TICKS.map((m) => {
                    const isKey = KEY_MONTH_TICKS.includes(m);
                    const leftPos = (m / 16) * 100;
                    return (
                      <div
                        key={m}
                        className="absolute -translate-x-1/2 flex flex-col items-center"
                        style={{ left: `${leftPos}%` }}
                      >
                        <span
                          className={`text-[10px] font-mono font-bold transition-colors duration-200 ${
                            isKey
                              ? displayMonth >= m
                                ? "text-[#3daeff]"
                                : "text-white/60"
                              : "text-white/25 text-[8.5px]"
                          }`}
                        >
                          {m}
                        </span>
                        <div
                          className={`w-[1px] mt-1 ${
                            isKey ? "h-2 bg-white/20" : "h-1 bg-white/10"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Vertical Grid Background Guidelines */}
              <div className="absolute top-10 bottom-0 left-36 right-0 pointer-events-none">
                {MONTH_TICKS.map((m) => {
                  const leftPos = (m / 16) * 100;
                  return (
                    <div
                      key={`grid-${m}`}
                      className={`absolute top-0 bottom-0 w-[1px] ${
                        m === 8
                          ? "border-r border-dashed border-[#3daeff]/30"
                          : m === 16
                          ? "border-r border-dashed border-white/20"
                          : "border-r border-white/[0.04]"
                      }`}
                      style={{ left: `${leftPos}%` }}
                    />
                  );
                })}
              </div>

              {/* ============================================================ */}
              {/* TIMELINE ROWS (5 PHASES)                                      */}
              {/* ============================================================ */}
              <div className="flex flex-col gap-5 relative z-10 py-2">
                {TIMELINE_ROWS.map((row, idx) => {
                  const isCurrentActive = activeRowIdx === idx;
                  const optStartPercent = (row.optimized.start / 16) * 100;
                  const optWidthPercent = (row.optimized.duration / 16) * 100;

                  const tradStartPercent = (row.traditional.start / 16) * 100;
                  const tradWidthPercent = (row.traditional.duration / 16) * 100;

                  // Normalized scroll milestones for drawing bars
                  // Progress starts filling immediately as section sticks (0.02 -> 0.82)
                  const scrollSpan = 0.80; // from 0.02 to 0.82
                  const rowStartNorm = 0.02 + (row.optimized.start / 16) * scrollSpan;
                  const rowEndNorm = 0.02 + (row.optimized.end / 16) * scrollSpan;
                  
                  const tradStartNorm = 0.02 + (row.traditional.start / 16) * scrollSpan;
                  const tradEndNorm = 0.02 + (row.traditional.end / 16) * scrollSpan;

                  return (
                    <TimelineRowItem
                      key={row.id}
                      row={row}
                      isCurrentActive={isCurrentActive}
                      optStartPercent={optStartPercent}
                      optWidthPercent={optWidthPercent}
                      tradStartPercent={tradStartPercent}
                      tradWidthPercent={tradWidthPercent}
                      smoothProgress={smoothProgress}
                      rowStartNorm={rowStartNorm}
                      rowEndNorm={rowEndNorm}
                      tradStartNorm={tradStartNorm}
                      tradEndNorm={tradEndNorm}
                      prefersReducedMotion={prefersReducedMotion ?? false}
                    />
                  );
                })}
              </div>

              {/* ============================================================ */}
              {/* THIN PRECISION BLUE PROGRESS MARKER (TRAVELS WITH SCROLL)     */}
              {/* ============================================================ */}
              {!prefersReducedMotion && (
                <div className="absolute top-8 bottom-0 left-36 right-0 pointer-events-none z-30">
                  <motion.div
                    className="absolute top-0 bottom-0 w-[1.5px] bg-[#3daeff] shadow-[0_0_10px_rgba(61,174,255,0.7)] flex flex-col items-center"
                    style={{
                      left: markerLeft,
                    }}
                  >
                    {/* Top Precision Head Pin */}
                    <div className="w-2.5 h-2.5 -translate-y-1.5 rounded-full bg-[#3daeff] border border-white shadow-[0_0_8px_rgba(61,174,255,0.9)] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-white" />
                    </div>

                    {/* Bottom Fine Line Glow */}
                    <div className="w-1.5 h-1.5 translate-y-full rounded-full bg-[#3daeff]" />
                  </motion.div>
                </div>
              )}
            </div>

            {/* ============================================================ */}
            {/* FINAL COMPARISON REVEAL (TRANSITIONS AT SCROLL CONCLUSION)   */}
            {/* ============================================================ */}
            <motion.div
              style={{
                opacity: prefersReducedMotion ? 1 : summaryOpacity,
                scale: prefersReducedMotion ? 1 : summaryScale,
                y: prefersReducedMotion ? 0 : summaryY,
              }}
              className="mt-6 pt-5 border-t border-white/[0.08] grid grid-cols-3 items-center gap-4 bg-[#010409]/90 rounded-xl p-4 border border-white/[0.06] shadow-2xl relative z-40"
            >
              {/* Metric 1: Traditional */}
              <div className="flex flex-col">
                <span className="text-[9.5px] font-mono font-bold text-white/40 uppercase tracking-widest">
                  TRADITIONAL
                </span>
                <span className="text-xl sm:text-2xl font-black text-white/50 font-heading tracking-tight mt-0.5 line-through decoration-white/30">
                  16 MONTHS
                </span>
                <span className="text-[10px] text-white/40 mt-0.5">Sequential Waterfall</span>
              </div>

              {/* Metric 2: Optimized */}
              <div className="flex flex-col border-l border-white/[0.08] pl-4">
                <span className="text-[9.5px] font-mono font-bold text-[#3daeff] uppercase tracking-widest">
                  OPTIMIZED
                </span>
                <span className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight mt-0.5 text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] to-[#58c4ff]">
                  8 MONTHS
                </span>
                <span className="text-[10px] text-[#00e878] font-mono mt-0.5">Parallel Concurrency</span>
              </div>

              {/* Metric 3: Delta Callout */}
              <div className="flex flex-col items-end justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00e878]/15 border border-[#00e878]/30 shadow-[0_0_15px_rgba(0,232,120,0.15)]">
                  <Zap className="w-3.5 h-3.5 text-[#00e878]" />
                  <span className="text-sm font-black text-[#00e878] font-heading tracking-tight">
                    50% FASTER
                  </span>
                </div>
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider mt-1 text-right">
                  Energized in half the time
                </span>
              </div>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* MOBILE RESPONSIVE ADAPTATION (VERTICAL PARALLEL TIMELINE)    */}
          {/* ============================================================ */}
          <div className="flex md:hidden flex-col gap-4 w-full p-4 rounded-xl bg-[#02050c]/90 border border-white/[0.10]">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-mono font-bold text-[#3daeff]">STAGE OVERVIEW</span>
              <span className="text-xs font-mono text-[#00e878] font-bold">50% FASTER</span>
            </div>

            <div className="flex flex-col gap-3">
              {TIMELINE_ROWS.map((row) => (
                <div
                  key={row.id}
                  className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#3daeff]">
                        {row.stageCode}
                      </span>
                      <span className="text-xs font-bold text-white">{row.name}</span>
                    </div>
                  </div>

                  {/* Visual Parallel Comparison Track */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#3daeff]">Optimized: M{row.optimized.start}–{row.optimized.end}</span>
                      <span className="text-white/40">Trad: M{row.traditional.start}–{row.traditional.end}</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/[0.05] relative overflow-hidden">
                      {/* Traditional Grey Base */}
                      <div
                        className="absolute h-full bg-[#475569]/50 rounded-full"
                        style={{
                          left: `${(row.traditional.start / 16) * 100}%`,
                          width: `${(row.traditional.duration / 16) * 100}%`,
                        }}
                      />
                      {/* Optimized Blue Active */}
                      <div
                        className="absolute h-full bg-[#3daeff] rounded-full shadow-[0_0_8px_rgba(61,174,255,0.6)]"
                        style={{
                          left: `${(row.optimized.start / 16) * 100}%`,
                          width: `${(row.optimized.duration / 16) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Summary Box */}
            <div className="p-3 rounded-lg bg-[#010409] border border-white/[0.08] flex items-center justify-between mt-1">
              <div>
                <span className="text-[9px] font-mono text-white/40 uppercase block">OPTIMIZED RESULT</span>
                <span className="text-base font-black text-white">8 MONTHS <span className="text-xs font-normal text-white/40 line-through">16 MO</span></span>
              </div>
              <span className="text-xs font-black text-[#00e878] px-2.5 py-1 rounded bg-[#00e878]/10 border border-[#00e878]/25 font-mono">
                50% FASTER
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Sub-component for each row to safely call useTransform hooks per row
function TimelineRowItem({
  row,
  isCurrentActive,
  optStartPercent,
  optWidthPercent,
  tradStartPercent,
  tradWidthPercent,
  smoothProgress,
  rowStartNorm,
  rowEndNorm,
  tradStartNorm,
  tradEndNorm,
  prefersReducedMotion,
}: {
  row: TimelineRowData;
  isCurrentActive: boolean;
  optStartPercent: number;
  optWidthPercent: number;
  tradStartPercent: number;
  tradWidthPercent: number;
  smoothProgress: any;
  rowStartNorm: number;
  rowEndNorm: number;
  tradStartNorm: number;
  tradEndNorm: number;
  prefersReducedMotion: boolean;
}) {
  const blueScale = useTransform(smoothProgress, [rowStartNorm, rowEndNorm], [0, 1], {
    clamp: true,
  });

  const greyScale = useTransform(smoothProgress, [tradStartNorm, tradEndNorm], [0, 1], {
    clamp: true,
  });

  const dotOpacity = useTransform(smoothProgress, [rowStartNorm, rowStartNorm + 0.03], [0, 1], {
    clamp: true,
  });

  return (
    <div className="relative flex items-center group">
      {/* Left Row Label */}
      <div className="w-36 flex items-center gap-2.5 pr-4 flex-shrink-0">
        <span
          className={`text-[9px] font-mono transition-colors duration-300 ${
            isCurrentActive ? "text-[#3daeff] font-bold" : "text-white/30"
          }`}
        >
          {row.stageCode}
        </span>
        <span
          className={`text-xs font-semibold tracking-wide transition-colors duration-300 truncate ${
            isCurrentActive
              ? "text-white font-bold"
              : "text-white/60 group-hover:text-white/80"
          }`}
          title={row.name}
        >
          {row.name}
        </span>
      </div>

      {/* Right Gantt Bars Track */}
      <div className="relative flex-1 h-9 flex flex-col justify-center">
        {/* 1. Optimized Blue Bar (Foreground) */}
        <div
          className="absolute h-[11px] rounded-sm flex items-center z-20"
          style={{
            left: `${optStartPercent}%`,
            width: `${optWidthPercent}%`,
            top: "3px",
          }}
        >
          <motion.div
            className={`h-full w-full rounded-sm bg-gradient-to-r from-[#3daeff] to-[#0088ff] flex items-center justify-between px-1.5 shadow-[0_2px_8px_rgba(61,174,255,0.25)] ${
              isCurrentActive ? "ring-1 ring-white/40 brightness-110" : ""
            }`}
            style={{
              scaleX: prefersReducedMotion ? 1 : blueScale,
              transformOrigin: "left center",
            }}
          >
            {/* Start Pin Indicator */}
            <motion.span
              style={{ opacity: prefersReducedMotion ? 1 : dotOpacity }}
              className="w-1 h-1 rounded-full bg-white shadow-[0_0_4px_white]"
            />
            {/* End Pin Indicator */}
            <motion.span
              style={{ opacity: prefersReducedMotion ? 1 : dotOpacity }}
              className="w-1 h-1 rounded-full bg-white shadow-[0_0_4px_white]"
            />
          </motion.div>
        </div>

        {/* 2. Traditional Grey Bar (Waterfall Background) */}
        <div
          className="absolute h-[8px] rounded-sm z-10"
          style={{
            left: `${tradStartPercent}%`,
            width: `${tradWidthPercent}%`,
            top: "18px",
          }}
        >
          <motion.div
            className="h-full w-full rounded-sm bg-[#475569]/45 border border-white/[0.06]"
            style={{
              scaleX: prefersReducedMotion ? 1 : greyScale,
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

