"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Factory, Users, Building, ShieldAlert } from "lucide-react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);
      const current = Math.floor(easeOutQuad(progress) * (to - from) + from);
      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrackRecordStats() {
  return (
    <section className="relative w-full bg-transparent text-white pt-6 pb-8 sm:pt-8 sm:pb-12 px-4 sm:px-8 md:px-12 overflow-hidden">
      {/* Top Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-3 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ff5500] uppercase">
              TRACK RECORD
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.02em] font-heading text-white mb-3">
            Speed doesn&apos;t take{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
              shortcuts.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
            One vertically integrated partner to energize all your sites. A resilient US supply chain, including our own factories and direct EPC teams, allows us to deliver what no one else can.
          </p>
        </div>

        {/* 5 Telemetry Metric Cards (Tight 2-col on mobile, 5-col on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Stat 1: 7+ GW */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#070e1c]/80 to-[#02050c]/90 border border-white/[0.08] hover:border-[#3daeff]/40 backdrop-blur-xl shadow-lg transition-all"
          >
            <div className="flex items-center justify-between text-[#3daeff] mb-2.5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase">ENERGIZED</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-1">
              <AnimatedCounter from={1} to={7} suffix=" + GW" />
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 font-sans">
              Delivered across utility interconnects
            </p>
          </motion.div>

          {/* Stat 2: 1,000+ Transformers */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#070e1c]/80 to-[#02050c]/90 border border-white/[0.08] hover:border-[#00e878]/40 backdrop-blur-xl shadow-lg transition-all"
          >
            <div className="flex items-center justify-between text-[#00e878] mb-2.5">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase">CAPACITY</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-1">
              <AnimatedCounter from={100} to={1000} suffix=" +" />
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 font-sans">
              Annual transformer production in Houston, TX
            </p>
          </motion.div>

          {/* Stat 3: 500+ Customers */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#070e1c]/80 to-[#02050c]/90 border border-white/[0.08] hover:border-[#ff5500]/40 backdrop-blur-xl shadow-lg transition-all"
          >
            <div className="flex items-center justify-between text-[#ff5500] mb-2.5">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase">GLOBAL</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-1">
              <AnimatedCounter from={50} to={500} suffix=" +" />
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 font-sans">
              Hyperscale & enterprise customers worldwide
            </p>
          </motion.div>

          {/* Stat 4: 175+ MW */}
          <motion.div
            whileHover={{ y: -3 }}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#070e1c]/80 to-[#02050c]/90 border border-white/[0.08] hover:border-[#38bdf8]/40 backdrop-blur-xl shadow-lg transition-all"
          >
            <div className="flex items-center justify-between text-[#38bdf8] mb-2.5">
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase">DEVELOPMENT</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-1">
              <AnimatedCounter from={25} to={175} suffix=" + MW" />
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 font-sans">
              AI data centers built and energized
            </p>
          </motion.div>

          {/* Stat 5: 500+ MW Pipeline (Centered on mobile 2-col) */}
          <motion.div
            whileHover={{ y: -3 }}
            className="col-span-2 sm:col-span-1 lg:col-span-1 p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#070e1c]/80 to-[#02050c]/90 border border-white/[0.08] hover:border-[#a855f7]/40 backdrop-blur-xl shadow-lg transition-all"
          >
            <div className="flex items-center justify-between text-[#a855f7] mb-2.5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[9px] font-mono font-bold text-white/40 uppercase">PIPELINE</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-1">
              <AnimatedCounter from={100} to={500} suffix=" + MW" />
            </div>
            <p className="text-[11px] sm:text-xs text-white/60 font-sans">
              Active powered land under development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
