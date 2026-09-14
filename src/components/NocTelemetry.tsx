"use client";

import React, { useState, useEffect } from "react";

export default function NocTelemetry() {
  const [load, setLoad] = useState(9.0);
  const [temp, setTemp] = useState(32.0);
  const [pue, setPue] = useState(1.12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(prev => parseFloat((9.0 + (Math.random() * 0.08 - 0.04)).toFixed(2)));
      setTemp(prev => parseFloat((32.0 + (Math.random() * 0.4 - 0.2)).toFixed(1)));
      setPue(prev => parseFloat((1.12 + (Math.random() * 0.01 - 0.005)).toFixed(2)));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="telemetry" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#02050c] text-[10px] font-mono text-[#00e878] uppercase tracking-widest mb-3">
          LIVE OPERATIONAL VISIBILITY
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
          Enterprise <span className="text-[#00e878]">NOC Telemetry</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mt-2">
          Demonstrating operational precision, continuous monitoring, and infrastructure health across every deployed module.
        </p>
      </div>

      {/* NOC Console Box */}
      <div className="glass-panel p-6 sm:p-8 bg-[#02050c]/90 border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
        {/* NOC Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/[0.08] gap-4">
          <div className="flex items-center gap-3">
            <span className="telemetry-indicator" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              GIGABASE NODE 01 // TELEMETRY FEED
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-white/50">
            <span>UPTIME: 99.999%</span>
            <span>GRID FREQ: 60.00 Hz</span>
            <span className="px-2 py-0.5 rounded bg-[#00e878]/10 text-[#00e878] font-bold">
              ALL SYSTEMS NOMINAL
            </span>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-white/40 block mb-1">TOTAL ACTIVE IT LOAD</span>
            <span className="text-3xl font-black font-mono text-[#00e878]">{load.toFixed(2)} MW</span>
            <span className="text-[9px] font-mono text-white/40 block mt-1">PEAK CAPACITY: 9.60 MW</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-white/40 block mb-1">DIRECT-TO-CHIP SUPPLY</span>
            <span className="text-3xl font-black font-mono text-[#3daeff]">{temp.toFixed(1)}°C</span>
            <span className="text-[9px] font-mono text-white/40 block mt-1">RETURN TEMP: 44.5°C</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-white/40 block mb-1">FACILITY DESIGN PUE</span>
            <span className="text-3xl font-black font-mono text-white">{pue.toFixed(2)}</span>
            <span className="text-[9px] font-mono text-white/40 block mt-1">INDUSTRY AVERAGE: 1.55</span>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-mono text-white/40 block mb-1">POWER TRAIN STATUS</span>
            <span className="text-3xl font-black font-mono text-[#3daeff]">4 / 4</span>
            <span className="text-[9px] font-mono text-[#00e878] block mt-1">4N/3 FAULT TOLERANCE ONLINE</span>
          </div>
        </div>

        {/* NOC Bottom Timeline Bar */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-2">
          <span>MONITORING: 1,420 CONTINUOUS SENSOR CHANNELS</span>
          <span>LOCATION: GIGABASE MODULAR CAMPUS MATRIX</span>
        </div>
      </div>
    </section>
  );
}
