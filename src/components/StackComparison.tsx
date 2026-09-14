import React from "react";
import { CheckCircle } from "lucide-react";

export default function StackComparison() {
  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-12 sm:mb-16" />
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-[#02050c] text-[10px] font-mono text-red-400 uppercase tracking-widest mb-3">
          FRICTION VS INTEGRATION
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-heading">
          Compressing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-[#ff5500] to-[#3daeff]">the Stack</span>
        </h2>
        <p className="text-white/50 text-sm max-w-xl mt-2">
          10 vendor handoffs mean 10 places your project can stall. We eliminate those gaps and protect your timeline.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Traditional Approach (10 Fragmented Vendors) */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 border-red-500/20 bg-red-950/[0.08]">
          <div className="flex items-center justify-between pb-4 border-b border-red-500/20 mb-6">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
              TRADITIONAL APPROACH
            </span>
            <span className="text-[10px] font-mono text-red-400/60">10 SEPARATE CONTRACTS</span>
          </div>

          <div className="space-y-2 text-xs font-mono text-white/60">
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>01. Real Estate & Land Broker</span>
              <span className="text-red-400 font-semibold">MARGIN STACK</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>02. Environmental & Legal Counsel</span>
              <span className="text-red-400 font-semibold">DELAY RISK</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>03. Permitting Consultants</span>
              <span className="text-red-400 font-semibold">UNCERTAIN</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>04. Owner's Representative Firm</span>
              <span className="text-red-400 font-semibold">OVERHEAD</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>05. General Contractor (GC)</span>
              <span className="text-red-400 font-semibold">FIELD LABOR</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>06. EPC Engineering Firm</span>
              <span className="text-red-400 font-semibold">WATERFALL</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>07. 3rd-Party Transformer Supplier</span>
              <span className="text-red-400 font-semibold">2-YEAR LEAD TIME</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>08. 3rd-Party Switchgear Vendor</span>
              <span className="text-red-400 font-semibold">LEAD TIME RISK</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>09. Utility Coordination Bureaucracy</span>
              <span className="text-red-400 font-semibold">DISCONNECTED</span>
            </div>
            <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
              <span>10. 3rd-Party Commissioning Agent</span>
              <span className="text-red-400 font-semibold">FINGER-POINTING</span>
            </div>
          </div>
        </div>

        {/* Right Column: Giga Energy Monolith */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 border-[#3daeff]/30 bg-gradient-to-br from-[#060e22] to-[#02050c] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#3daeff]/30 mb-6">
              <span className="text-xs font-mono font-bold text-[#3daeff] uppercase tracking-wider">
                GIGA ENERGY VERTICAL INTEGRATION
              </span>
              <span className="text-[10px] font-mono text-[#00e878]">ONE MASTER RELATIONSHIP</span>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#3daeff]/[0.06] border border-[#3daeff]/20">
                <h4 className="text-xl font-bold text-white font-heading mb-2">
                  Everything from Site to Energization Under One Roof
                </h4>
                <p className="text-xs text-white/70 leading-relaxed">
                  Giga Energy owns powered land reserves, manufactures padmount transformers and switchboards in our own facilities, builds the GigaPods, pre-fabricates the electrical and cooling glue, and manages utility energization.
                </p>
              </div>

              <ul className="space-y-3 text-xs font-mono text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00e878]" />
                  <span>Zero supplier markups & margin stacking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00e878]" />
                  <span>In-house transformer supply secures your energization date</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00e878]" />
                  <span>Single point of accountability under a unified SLA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00e878]" />
                  <span>Save &gt; 15 months vs. the traditional multi-vendor norm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-white/40">RESULTING TIMELINE</span>
            <span className="text-xl font-black text-[#3daeff] font-heading">9 MONTHS TURNKEY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
