"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ConfigOption {
  mw: number;
  racks: string;
  skids: string;
  mo: string;
}

const CONFIG_MAP: Record<number, ConfigOption> = {
  9: { mw: 9, racks: "90–120 Racks", skids: "4 Skids", mo: "9 Months" },
  18: { mw: 18, racks: "180–240 Racks", skids: "8 Skids", mo: "10 Months" },
  36: { mw: 36, racks: "360–480 Racks", skids: "16 Skids", mo: "12 Months" },
  72: { mw: 72, racks: "720–960 Racks", skids: "32 Skids", mo: "14 Months" },
};

export default function CampusConfigurator() {
  const [selectedMw, setSelectedMw] = useState<number>(9);
  const current = CONFIG_MAP[selectedMw] || CONFIG_MAP[9];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your GigaBase deployment inquiry has been received. An engineer will follow up within 1 business day.");
  };

  return (
    <section id="configurator" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      <div className="glass-panel p-8 sm:p-12 md:p-16 relative overflow-hidden bg-gradient-to-br from-[#060b18] via-[#03060d] to-[#010408] border-[#3daeff]/30 shadow-[0_0_60px_rgba(61,174,255,0.1)]">
        {/* Background Grid Highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(#3daeff_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left: Pitch & Configurator */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-black/60 text-[10px] font-mono text-[#ff5500] uppercase tracking-widest mb-4">
              CAMPUS ESTIMATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading leading-tight mb-4">
              Your Next AI Campus<br />
              <span className="text-[#3daeff]">Starts Here.</span>
            </h2>
            <p className="text-sm text-white/60 mb-8 leading-relaxed max-w-xl">
              From powered land reserves to energized liquid-cooled compute, GigaBase provides the pre-engineered infrastructure to deploy at AI speed.
            </p>

            {/* Interactive Capacity Selector */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase text-white/50 tracking-wider mb-3">
                SELECT TARGET IT CAPACITY:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[9, 18, 36, 72].map((mw) => {
                  const isActive = mw === selectedMw;
                  return (
                    <button
                      key={mw}
                      type="button"
                      onClick={() => setSelectedMw(mw)}
                      className={`py-3 px-4 rounded-xl border font-mono font-bold text-sm text-center transition-all ${
                        isActive
                          ? "border-[#3daeff] bg-[#3daeff]/20 text-white shadow-[0_0_15px_rgba(61,174,255,0.3)]"
                          : "border-white/[0.08] bg-white/[0.02] hover:border-[#3daeff]/40 text-white/80"
                      }`}
                    >
                      {mw === 72 ? "72 MW+" : `${mw} MW`}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimated Spec Readout */}
            <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <span className="text-[9px] font-mono text-white/40 block">TARGET POWER</span>
                <span className="text-xs sm:text-sm font-bold text-[#3daeff]">{selectedMw} MW Capacity</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 block">D2C RACKS</span>
                <span className="text-xs sm:text-sm font-bold text-white">{current.racks}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 block">POWER SKIDS</span>
                <span className="text-xs sm:text-sm font-bold text-white">{current.skids}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-white/40 block">TIME TO FIRST COMPUTE</span>
                <span className="text-xs sm:text-sm font-bold text-[#00e878]">{current.mo}</span>
              </div>
            </div>
          </div>

          {/* Right: Direct Lead Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#02050c] border border-white/[0.1] shadow-2xl">
            <h3 className="text-xl font-bold text-white font-heading mb-2">Speak to Infrastructure Team</h3>
            <p className="text-xs text-white/50 mb-6">
              Our senior engineers will return an initial deployment blueprint within one business day.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] font-mono text-white/40 uppercase mb-1">WORK EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="alex@hyperscaler.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#3daeff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/40 uppercase mb-1">COMPANY / OPERATOR</label>
                <input
                  type="text"
                  required
                  placeholder="Organization Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#3daeff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/40 uppercase mb-1">TARGET REGION / TIMELINE</label>
                <input
                  type="text"
                  placeholder="e.g. West Texas / Q3 2027"
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.1] text-sm text-white focus:outline-none focus:border-[#3daeff] transition-colors"
                />
              </div>

              <button type="submit" className="btn-primary-glow w-full py-4 text-sm mt-2">
                <span>Talk to Giga — Get Deployment Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
