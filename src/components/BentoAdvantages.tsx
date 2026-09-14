import React from "react";
import { Gauge, Layers, Factory, Shield, Box, Cpu } from "lucide-react";

export default function BentoAdvantages() {
  return (
    <section id="advantages" className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12 sm:mb-16" />
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#02050c] text-[10px] font-mono text-[#3daeff] uppercase tracking-widest mb-3">
          ENGINEERED ADVANTAGES
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
          Why GigaBase for <span className="text-[#3daeff]">AI Development</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mt-2">
          Six pillars engineered to eliminate risk, protect timelines, and maximize GPU cluster availability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tile 1: Speed */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#3daeff]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#3daeff] font-heading">01</span>
              <Gauge className="w-6 h-6 text-[#3daeff]/60 group-hover:text-[#3daeff] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">9 Months to Power</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Energize compute in half the time of conventional builds. Turnkey parallel execution eliminates months of multi-vendor schedule slip.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#3daeff] tracking-wider uppercase mt-4">
            TIME TO POWER → 9 MO
          </span>
        </div>

        {/* Tile 2: Integration */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#ff5500]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#ff5500] font-heading">02</span>
              <Layers className="w-6 h-6 text-[#ff5500]/60 group-hover:text-[#ff5500] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">One Single Partner</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              One contract, one master warranty, zero finger-pointing. We originate the land, build the transformers, and commission the site.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#ff5500] tracking-wider uppercase mt-4">
            VERTICAL INTEGRATION → 100%
          </span>
        </div>

        {/* Tile 3: Factory Built */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#3daeff]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#3daeff] font-heading">03</span>
              <Factory className="w-6 h-6 text-[#3daeff]/60 group-hover:text-[#3daeff] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">90% Less Field Labor</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Modules are engineered and tested in factory environments before dispatch, drastically reducing job-site risks and weather delays.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#3daeff] tracking-wider uppercase mt-4">
            PRE-COMMISSIONED → 10X LABOUR REDUCTION
          </span>
        </div>

        {/* Tile 4: 4N/3 Resilience */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#ff5500]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#ff5500] font-heading">04</span>
              <Shield className="w-6 h-6 text-[#ff5500]/60 group-hover:text-[#ff5500] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">4N/3 Redundancy</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Four independent power trains supply every pod. If any single train drops, the remaining three carry the full workload without loss.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#ff5500] tracking-wider uppercase mt-4">
            FAULT TOLERANCE → TIER III STANDARD
          </span>
        </div>

        {/* Tile 5: Scale */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#3daeff]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#3daeff] font-heading">05</span>
              <Box className="w-6 h-6 text-[#3daeff]/60 group-hover:text-[#3daeff] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">9MW Building Blocks</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Standardized modular blocks allow linear expansion from 9MW to 100MW+ campuses with predictable cost certainty.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#3daeff] tracking-wider uppercase mt-4">
            EXPANSION CADENCE → MODULAR
          </span>
        </div>

        {/* Tile 6: AI Ready */}
        <div className="glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[260px] group hover:border-[#00e878]/40 transition-all">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl font-black text-[#00e878] font-heading">06</span>
              <Cpu className="w-6 h-6 text-[#00e878]/60 group-hover:text-[#00e878] transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Blackwell & Rubin Ready</h3>
            <p className="text-xs text-white/50 leading-relaxed">
              Engineered natively for direct-to-chip CDU liquid cooling, high busbar ampacity, and ultra-low latency InfiniBand topologies.
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#00e878] tracking-wider uppercase mt-4">
            GPU ARCHITECTURE → DIRECT LIQUID
          </span>
        </div>
      </div>
    </section>
  );
}
