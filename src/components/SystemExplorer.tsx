"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ModuleData {
  id: number;
  order: string;
  name: string;
  tag: string;
  shortTag: string;
  category: "COMPUTE" | "POWER" | "COOLING" | "INFRA";
  accentColor: string;
  desc: string;
  hotspot: {
    left: string;
    top: string;
    labelPos?: "top" | "bottom" | "left" | "right";
  };
  metrics: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
    status: string;
  };
}

const MODULES: ModuleData[] = [
  {
    id: 1,
    order: "01",
    name: "GigaPod™",
    tag: "AI-01",
    shortTag: "GIGAPOD",
    category: "COMPUTE",
    accentColor: "#00e878",
    desc: "45-foot AI compute whitespace module with hot-aisle containment, direct-to-chip CDU loops, and 4N/3 redundant power. Supports high-density liquid-cooled and low-density air-cooled GPU racks, scalable to 90 or 135 feet.",
    hotspot: { left: "23.5%", top: "33.5%", labelPos: "bottom" },
    metrics: {
      label1: "RACK DENSITY",
      val1: "100 kW+ / Rack",
      label2: "COOLING ARCH",
      val2: "Direct-to-Chip D2C",
      label3: "SCALABILITY",
      val3: "45 / 90 / 135-ft",
      status: "AI ACCELERATORS ONLINE",
    },
  },
  {
    id: 2,
    order: "02",
    name: "MV Switchgear",
    tag: "M-01",
    shortTag: "MV SWITCHGEAR",
    category: "POWER",
    accentColor: "#38bdf8",
    desc: "24.9kV or 35kV medium-voltage distribution module connecting utility power to the campus with dual incoming feeders and 10 integrated vacuum circuit breakers for instantaneous fault clearance.",
    hotspot: { left: "48.5%", top: "13.5%", labelPos: "bottom" },
    metrics: {
      label1: "VOLTAGE RATING",
      val1: "24.9 kV / 35 kV",
      label2: "FEEDERS",
      val2: "Dual Utility A/B",
      label3: "ISOLATION",
      val3: "Sub-Cycle Tripping",
      status: "GRID FEED SYNCHRONIZED",
    },
  },
  {
    id: 3,
    order: "03",
    name: "UPS E-House",
    tag: "E-01",
    shortTag: "UPS E-HOUSE",
    category: "POWER",
    accentColor: "#3daeff",
    desc: "A 3.0 MW lithium-ion battery energy storage backup that keeps your compute online with sub-2ms handover during the gap between utility interruption and standby generator response.",
    hotspot: { left: "77.5%", top: "34.5%", labelPos: "left" },
    metrics: {
      label1: "RESERVE CAPACITY",
      val1: "3.0 MW Li-ion",
      label2: "HANDOVER TIME",
      val2: "< 2ms Seamless",
      label3: "CHEMISTRY",
      val3: "High-Rate LiFePO4",
      status: "RESERVE CELLS ARMED",
    },
  },
  {
    id: 4,
    order: "04",
    name: "Power Skid™",
    tag: "E-02",
    shortTag: "POWER SKID",
    category: "POWER",
    accentColor: "#f59e0b",
    desc: "Integrated 3.6 MVA transformers paired with 5,000A low-voltage switchboards that step down and regulate distribution voltage to the entire computing cluster.",
    hotspot: { left: "61.5%", top: "49.5%", labelPos: "top" },
    metrics: {
      label1: "TRANSFORMER",
      val1: "3.6 MVA Liquid-Filled",
      label2: "LV DISTRIBUTION",
      val2: "5,000A UL-891",
      label3: "BUSWAY",
      val3: "480V Regulated Bus",
      status: "STEP-DOWN ENERGIZED",
    },
  },
  {
    id: 5,
    order: "05",
    name: "Diesel Generator",
    tag: "DG-01",
    shortTag: "DIESEL GEN",
    category: "POWER",
    accentColor: "#f97316",
    desc: "3.3 MW standby diesel generation system providing 24-hour continuous backup power with integral belly fuel tanks, radiators, and level-2 sound attenuated enclosures.",
    hotspot: { left: "80.5%", top: "67.5%", labelPos: "left" },
    metrics: {
      label1: "STANDBY OUTPUT",
      val1: "3.3 MW Prime",
      label2: "FUEL RUNTIME",
      val2: "24h Belly Storage",
      label3: "SPIN-UP LATENCY",
      val3: "< 10s Fast Ramp",
      status: "STANDBY ACTIVE",
    },
  },
  {
    id: 6,
    order: "06",
    name: "4N/3 Electrical Glue™",
    tag: "G-03",
    shortTag: "4N/3 GLUE",
    category: "INFRA",
    accentColor: "#a855f7",
    desc: "Proprietary 5,000A solid copper electrical interconnect matrix. If any 1 of the 4 independent power trains drops, the remaining 3 instantly absorb and carry 100% of cluster load.",
    hotspot: { left: "35.5%", top: "70.5%", labelPos: "top" },
    metrics: {
      label1: "BUSBAR MATRIX",
      val1: "5,000A Solid Copper",
      label2: "TOPOLOGY",
      val2: "4N/3 Fault-Tolerant",
      label3: "DROP TAKEOVER",
      val3: "3 Carry 100% Load",
      status: "INTERCONNECT ARMED",
    },
  },
  {
    id: 7,
    order: "07",
    name: "Cooling Glue™",
    tag: "G-06",
    shortTag: "COOLING GLUE",
    category: "COOLING",
    accentColor: "#06b6d4",
    desc: "Pre-engineered mechanical piping loops that interconnect the central chiller loop with each GigaPod module, delivering precision chilled water at optimal thermal exchange rates.",
    hotspot: { left: "48.5%", top: "61.5%", labelPos: "right" },
    metrics: {
      label1: "LOOP DELIVERY",
      val1: "Dual Closed-Loop",
      label2: "HYDRAULIC LINK",
      val2: "Direct Chiller Bus",
      label3: "FLUID VELOCITY",
      val3: "Variable Flow VFD",
      status: "PUMP HYDRAULICS OPTIMAL",
    },
  },
  {
    id: 8,
    order: "08",
    name: "Air-cooled Chiller",
    tag: "M-02",
    shortTag: "CHILLER",
    category: "COOLING",
    accentColor: "#0284c7",
    desc: "2.0 MW Maglev frictionless magnetic-bearing chiller rejecting supercluster thermal loads while preserving sub-1.15 campus PUE across extreme ambient temperature regimes.",
    hotspot: { left: "56.5%", top: "91.5%", labelPos: "top" },
    metrics: {
      label1: "THERMAL REJECT",
      val1: "2.0 MW Magnetic",
      label2: "COMPRESSOR",
      val2: "Oil-Free Maglev",
      label3: "CAMPUS PUE",
      val3: "< 1.15 High-Efficiency",
      status: "COMPRESSORS ARMED",
    },
  },
];

export default function SystemExplorer() {
  const [selectedId, setSelectedId] = useState<number>(1); // Default 01 GigaPod

  const currentMod = MODULES.find((m) => m.id === selectedId) || MODULES[0];

  return (
    <section
      id="system"
      className="relative bg-transparent text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-12 flex items-center justify-center font-sans select-none overflow-hidden"
    >
      {/* Dynamic Ambient Background Glow based on active module accent */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: currentMod.accentColor }}
      />
      <div className="absolute -bottom-10 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] w-full mx-auto relative z-10">
        
        {/* Heading & Status Header positioned comfortably just before the image top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 pb-4 border-b border-white/[0.08] gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white tracking-tight font-heading leading-tight">
              The GigaBase Campus,{" "}
              <span className="text-[#3daeff]">Module by Module.</span>
            </h2>
          </div>

          {/* Telemetry Status Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs">
            <span className="text-white/40">INSPECTING:</span>
            <span className="font-bold text-white flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: currentMod.accentColor, boxShadow: `0 0 8px ${currentMod.accentColor}` }}
              />
              {currentMod.order} {currentMod.name}
            </span>
          </div>
        </div>

        {/* Main Grid: Left Stage (~60%) + Right Accordion Panel (~40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ============================================================ */}
          {/* LEFT: 3D PHOTOREALISTIC RAY-TRACED CAMPUS DIGITAL TWIN       */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative w-full">
            
            <div className="relative w-full aspect-[16/9] max-h-[min(540px,72vh)] rounded-2xl overflow-hidden border border-white/10 bg-[#030409] shadow-2xl group">
              
              {/* Ultra-Detailed 3D Digital Twin Render */}
              <Image
                src="/images/gigabase_campus_nextgen.jpg"
                alt="GigaBase 3D NextGen Digital Twin Campus"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />

              {/* High-Tech Vignette & Grid Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070e] via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(5,7,14,0.6)_100%)] pointer-events-none" />

              {/* 8 Interactive Radar Beacons over precise campus modules */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {MODULES.map((m) => {
                  const isActive = m.id === selectedId;

                  return (
                    <div
                      key={m.id}
                      style={{ left: m.hotspot.left, top: m.hotspot.top }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                      <button
                        onClick={() => setSelectedId(m.id)}
                        className="relative group/pin focus:outline-none flex items-center justify-center p-2"
                        aria-label={`Inspect ${m.name}`}
                      >
                        {/* Outer Radar Ripple Wave */}
                        <span
                          className={`absolute rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-8 h-8 animate-ping opacity-60"
                              : "w-5 h-5 group-hover/pin:w-7 group-hover/pin:h-7 opacity-30 group-hover/pin:opacity-50"
                          }`}
                          style={{ backgroundColor: m.accentColor }}
                        />

                        {/* Middle Glowing Ring */}
                        <span
                          className={`relative rounded-full transition-all duration-300 flex items-center justify-center ${
                            isActive
                              ? "w-6 h-6 ring-2 ring-white scale-110 shadow-lg"
                              : "w-4 h-4 ring-1 ring-white/60 group-hover/pin:scale-125"
                          }`}
                          style={{
                            backgroundColor: m.accentColor,
                            boxShadow: isActive ? `0 0 16px ${m.accentColor}` : `0 0 8px ${m.accentColor}`,
                          }}
                        >
                          <span className="font-mono text-[9px] font-extrabold text-black">
                            {m.order}
                          </span>
                        </span>

                        {/* Interactive Floating Hover Pill */}
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#05070e]/95 border text-[10px] font-mono tracking-wider transition-all duration-200 pointer-events-none z-30 shadow-xl backdrop-blur-md ${
                            m.hotspot.labelPos === "top"
                              ? "-top-8"
                              : "top-7"
                          } ${
                            isActive
                              ? "opacity-100 scale-100 border-white/30 text-white font-bold"
                              : "opacity-0 scale-95 group-hover/pin:opacity-100 group-hover/pin:scale-100 border-white/10 text-white/80"
                          }`}
                        >
                          <span style={{ color: m.accentColor }}>{m.tag}</span> · {m.shortTag}
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Digital Twin HUD Overlay Indicators */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[10px] text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e878] animate-pulse" />
                <span>3D ISOMETRIC TWIN // 9.0 MW POD</span>
              </div>

              <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-3 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md font-mono text-[10px] text-white/70">
                <span className="text-white/40">STATUS:</span>
                <span className="text-[#00e878] font-bold">ALL 8 SUBSYSTEMS NOMINAL</span>
              </div>

            </div>

            {/* Subtitle Under Stage */}
            <div className="flex items-center justify-between w-full mt-3 px-1 text-[10.5px] font-mono text-white/40">
              <span>EXPLODED HYPERSCALE CAMPUS ARCHITECTURE</span>
              <span>CLICK ANY BEACON TO HIGHLIGHT AND TELEMETER</span>
            </div>

          </div>

          {/* ============================================================ */}
          {/* RIGHT: ACCORDION & ACTIVE TELEMETRY CONTROLLER               */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="divide-y divide-white/[0.07] border-y border-white/[0.08] bg-[#080b15]/60 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 shadow-2xl">
              {MODULES.map((mod) => {
                const isActive = mod.id === selectedId;

                return (
                  <div
                    key={mod.id}
                    onClick={() => setSelectedId(mod.id)}
                    className={`cursor-pointer transition-all duration-200 ${
                      isActive
                        ? "bg-white/[0.04]"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* Module Item Header Row */}
                    <div className="py-3 px-4 sm:px-5 flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {/* Order Number Badge */}
                        <span
                          className={`w-6 h-6 rounded-md font-mono text-xs flex items-center justify-center transition-all ${
                            isActive
                              ? "font-extrabold text-black shadow-md"
                              : "bg-white/[0.05] text-white/40"
                          }`}
                          style={{
                            backgroundColor: isActive ? mod.accentColor : undefined,
                          }}
                        >
                          {mod.order}
                        </span>

                        {/* Title */}
                        <h3
                          className={`text-sm sm:text-base font-semibold tracking-tight transition-colors duration-200 ${
                            isActive ? "text-white font-bold" : "text-white/70"
                          }`}
                        >
                          {mod.name}
                        </h3>
                      </div>

                      {/* Right-side Category + Tag */}
                      <div className="flex items-center gap-2 font-mono text-xs">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider"
                          style={{
                            backgroundColor: `${mod.accentColor}18`,
                            color: mod.accentColor,
                          }}
                        >
                          {mod.tag}
                        </span>
                      </div>
                    </div>

                    {/* Expandable Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1">
                            {/* Detailed Description */}
                            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                              {mod.desc}
                            </p>

                            {/* 3 Real-time Telemetry Metrics */}
                            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                              <div>
                                <span className="text-[8.5px] font-mono text-white/40 uppercase block tracking-wider">
                                  {mod.metrics.label1}
                                </span>
                                <span className="text-xs font-mono font-bold text-white mt-0.5 block">
                                  {mod.metrics.val1}
                                </span>
                              </div>
                              <div>
                                <span className="text-[8.5px] font-mono text-white/40 uppercase block tracking-wider">
                                  {mod.metrics.label2}
                                </span>
                                <span
                                  className="text-xs font-mono font-bold mt-0.5 block"
                                  style={{ color: mod.accentColor }}
                                >
                                  {mod.metrics.val2}
                                </span>
                              </div>
                              <div>
                                <span className="text-[8.5px] font-mono text-white/40 uppercase block tracking-wider">
                                  {mod.metrics.label3}
                                </span>
                                <span className="text-xs font-mono font-bold text-white/90 mt-0.5 block">
                                  {mod.metrics.val3}
                                </span>
                              </div>
                            </div>

                            {/* Telemetry Status Line */}
                            <div className="mt-3 flex items-center justify-between text-[9px] font-mono text-white/40">
                              <span>SUBSYSTEM TELEMETRY:</span>
                              <span
                                className="font-bold tracking-wider"
                                style={{ color: mod.accentColor }}
                              >
                                {mod.metrics.status}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
