"use client";

import React, { useState } from "react";
import { Cpu } from "lucide-react";

interface LayerData {
  layer: string;
  name: string;
  badge: string;
  voltage: string;
  desc: string;
}

const ARCH_LAYERS: LayerData[] = [
  {
    layer: "01",
    name: "Power Infrastructure",
    badge: "SUBSTATION & MV",
    voltage: "35 kV",
    desc: "Grid-interconnected 24.9kV/35kV utility supply with dual redundant feed lines, fast-acting vacuum breakers, and integrated step-down transformation."
  },
  {
    layer: "02",
    name: "Power Distribution",
    badge: "5,000A BUSBARS",
    voltage: "480 V / 5000A",
    desc: "3.6 MVA Power Skids directly coupled with 4N/3 electrical glue. Power is distributed continuously across independent parallel trains with zero downtime."
  },
  {
    layer: "03",
    name: "Cooling Infrastructure",
    badge: "CLOSED-LOOP D2C",
    voltage: "32°C SUPPLY",
    desc: "2MW Maglev frictionless chillers and pre-engineered stainless cooling glue headers delivering 32°C coolant directly to compute rack CDUs."
  },
  {
    layer: "04",
    name: "AI Compute Supercluster",
    badge: "100kW+ DENSITY",
    voltage: "NVLINK READY",
    desc: "Modular GigaPods engineered to house NVIDIA Blackwell B200 and Vera Rubin racks with optimized optical fabric pathways and isolated hot aisles."
  }
];

export default function ArchitectureFlow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = ARCH_LAYERS[activeIdx];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#02050c] text-[10px] font-mono text-[#3daeff] uppercase tracking-widest mb-3">
          END-TO-END CONTINUUM
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
          From Power to <span className="text-[#0091ff]">AI Compute</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mt-2">
          An unbroken chain of vertically integrated hardware designed for large-scale GPU cluster density.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 4 Step Layers Stack */}
        <div className="lg:col-span-6 space-y-4">
          {ARCH_LAYERS.map((layer, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={layer.layer}
                onClick={() => setActiveIdx(idx)}
                className={`arch-step-item glass-panel p-5 cursor-pointer transition-all ${
                  isActive ? "border-l-4 border-l-[#3daeff] bg-[#3daeff]/[0.03]" : "hover:border-l-4 hover:border-l-[#3daeff]"
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-mono text-[#3daeff] font-bold">
                    {layer.layer} / {layer.name.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">{layer.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{layer.name}</h3>
                <p className="text-xs text-white/50 mt-1">{layer.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Right: Animated Schematic Viewer */}
        <div className="lg:col-span-6 glass-panel p-8 min-h-[460px] flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-[#060b18] to-[#02050c]">
          {/* Top Telemetry Status */}
          <div className="flex justify-between items-center pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="telemetry-indicator"></span>
              <span className="text-xs font-mono text-[#3daeff] font-bold">{current.badge}</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 uppercase">LIVE STACK SIMULATOR</span>
          </div>

          {/* Middle Vector Animation Canvas */}
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full border border-[#3daeff]/40 flex items-center justify-center relative mb-6 shadow-[0_0_30px_rgba(61,174,255,0.2)]">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#3daeff]/30 animate-orbit-cw"></div>
              <Cpu className="w-10 h-10 text-[#3daeff]" />
            </div>
            <h4 className="text-2xl font-black text-white font-heading">{current.name}</h4>
            <p className="text-sm text-white/60 max-w-md mt-2 leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Bottom Metric Ticker */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-3 text-center">
            <div>
              <span className="text-xs font-mono text-white/40 block">CONTINUITY</span>
              <span className="text-sm font-bold text-[#00e878]">99.999%</span>
            </div>
            <div>
              <span className="text-xs font-mono text-white/40 block">LINE LOSS</span>
              <span className="text-sm font-bold text-white">&lt; 1.8%</span>
            </div>
            <div>
              <span className="text-xs font-mono text-white/40 block">OPERATING SPEC</span>
              <span className="text-sm font-bold text-[#3daeff]">{current.voltage}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
