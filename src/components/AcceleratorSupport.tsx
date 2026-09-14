import React from "react";
import { Cpu, Server, Zap } from "lucide-react";

export default function AcceleratorSupport() {
  return (
    <section className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.04]">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#02050c] text-[10px] font-mono text-[#3daeff] uppercase tracking-widest mb-3">
          ACCELERATOR READINESS
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
          Chip-Agnostic. <span className="text-[#3daeff]">Architecture-Ready.</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mt-2">
          High-density infrastructure engineered to support current and next-generation NVIDIA accelerators with zero thermal throttling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Blackwell */}
        <div className="glass-panel p-6 flex flex-col justify-between">
          <div>
            <div className="w-full h-40 rounded-lg bg-gradient-to-br from-blue-900/30 to-black flex items-center justify-center mb-6 border border-white/[0.06] relative overflow-hidden">
              <Cpu className="w-12 h-12 text-[#3daeff] relative z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#3daeff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#3daeff] uppercase">PLATFORM 01</span>
            <h3 className="text-lg font-bold text-white mt-1">NVIDIA Blackwell B200</h3>
            <p className="text-xs text-white/50 mt-2 leading-relaxed">
              Supports 100kW+ rack thermal density with native direct-to-chip quick-disconnect coolant distribution manifolds.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-white/40 flex justify-between">
            <span>CDU LOOP: ACTIVE</span>
            <span className="text-[#00e878]">READY</span>
          </div>
        </div>

        {/* Grace Blackwell */}
        <div className="glass-panel p-6 flex flex-col justify-between border-[#3daeff]/30">
          <div>
            <div className="w-full h-40 rounded-lg bg-gradient-to-br from-cyan-900/30 to-black flex items-center justify-center mb-6 border border-white/[0.06] relative overflow-hidden">
              <Server className="w-12 h-12 text-[#58c4ff] relative z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#58c4ff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#58c4ff] uppercase">PLATFORM 02</span>
            <h3 className="text-lg font-bold text-white mt-1">Grace Blackwell GB200 NVL72</h3>
            <p className="text-xs text-white/50 mt-2 leading-relaxed">
              Engineered for extreme liquid-cooled NVLink fabrics, dense power busways, and vibration-damped structural containment.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-white/40 flex justify-between">
            <span>NVLINK FABRIC: OPTIMIZED</span>
            <span className="text-[#00e878]">READY</span>
          </div>
        </div>

        {/* Vera Rubin */}
        <div className="glass-panel p-6 flex flex-col justify-between">
          <div>
            <div className="w-full h-40 rounded-lg bg-gradient-to-br from-blue-950/40 to-black flex items-center justify-center mb-6 border border-white/[0.06] relative overflow-hidden">
              <Zap className="w-12 h-12 text-[#ff5500] relative z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#ff5500_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#ff5500] uppercase">PLATFORM 03</span>
            <h3 className="text-lg font-bold text-white mt-1">Next-Gen Vera Rubin</h3>
            <p className="text-xs text-white/50 mt-2 leading-relaxed">
              Future-proofed electrical capacity up to 140kW per rack footprint with modular expansion headers already provisioned.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-white/40 flex justify-between">
            <span>THERMAL SPEC: FUTURE-PROOF</span>
            <span className="text-[#ff5500]">COMPATIBLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
