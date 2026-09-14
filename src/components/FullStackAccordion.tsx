"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PhaseItem {
  id: string;
  phaseNum: string;
  category: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const PHASES: PhaseItem[] = [
  {
    id: "land",
    phaseNum: "01",
    category: "01 / LAND & POWER",
    title: "Powered Land",
    description:
      "A large and growing portfolio of powered sites. Low-cost power markets. Lots of acreage. Strategic locations. Fiber access. High-voltage infrastructure available.",
    ctaText: "See Powered Land",
    ctaLink: "https://www.gigaenergy.com/contact",
    image: "/images/accordion_01_land.avif",
  },
  {
    id: "equipment",
    phaseNum: "02",
    category: "02 / EQUIPMENT",
    title: "AI Infrastructure",
    description:
      "We manufacture all the infrastructure between the utility and the rack — transformers, switchboards, and power and cooling modules.",
    ctaText: "See AI Infrastructure",
    ctaLink: "https://www.gigaenergy.com/gigabase",
    image: "/images/accordion_02_equipment.avif",
  },
  {
    id: "construction",
    phaseNum: "03",
    category: "03 / CONSTRUCTION",
    title: "Site Development",
    description:
      "We build build-to-suit data centers using our own infrastructure or on behalf of customers — on their land or ours. Flexible deal structures. Faster, cheaper, and more cost-certain than the multi-vendor norm.",
    ctaText: "See Construction & Development",
    ctaLink: "https://www.gigaenergy.com/contact",
    image: "/images/accordion_03_construction.avif",
  },
  {
    id: "operations",
    phaseNum: "04",
    category: "04 / OPERATIONS",
    title: "Colocation",
    description:
      "We offer colocation data centers on our own powered land. Purpose-built for high-density GPU deployments and operated by the same team that built them.",
    ctaText: "See Colocation",
    ctaLink: "https://www.gigaenergy.com/contact",
    image: "/images/accordion_04_operations.avif",
  },
];

export default function FullStackAccordion() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="full-stack"
      className="relative w-full bg-transparent text-white pt-8 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#ff5500]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 lg:mb-10 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#ff5500] uppercase">
                FULL-STACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-semibold tracking-tight leading-[1.06] font-heading text-white">
              One partner.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                Every phase.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm sm:text-base text-white/60 font-sans leading-relaxed">
              Most data centers are assembled from a chain of 12+ separate companies. Giga owns the entire value chain — origination, manufacturing, development, operations — under one roof.
            </p>
          </div>
        </div>

        {/* Horizontal Expandable Accordion (Desktop) */}
        <div className="hidden lg:flex w-full h-[480px] rounded-3xl overflow-hidden border border-white/[0.1] bg-[#02050c]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {PHASES.map((item, idx) => {
            const isOpen = idx === activeTab;

            return (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`relative h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden border-r last:border-r-0 border-white/[0.08] ${
                  isOpen
                    ? "flex-grow-[4] bg-gradient-to-br from-[#070e1c] to-[#03060e]"
                    : "flex-grow-[0.45] hover:bg-white/[0.03] bg-[#02050c]"
                }`}
              >
                {/* Collapsed Rail View */}
                {!isOpen && (
                  <div className="w-full h-full flex flex-col items-center justify-between py-10 px-2 select-none">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#ff5500] uppercase rotate-90 origin-center whitespace-nowrap mt-8">
                      {item.category}
                    </span>
                    <span className="text-sm font-black font-heading tracking-wider uppercase rotate-90 origin-center whitespace-nowrap mb-12 text-white/50 group-hover:text-white transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/30">
                      {item.phaseNum}
                    </span>
                  </div>
                )}

                {/* Expanded Full View */}
                {isOpen && (
                  <div className="w-full h-full flex items-stretch">
                    {/* Left Details Column */}
                    <div className="w-1/2 p-8 sm:p-12 flex flex-col justify-between relative z-10">
                      <div>
                        <div className="inline-flex items-center gap-2 mb-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                          <span className="text-[10px] font-mono font-bold text-[#ff5500] tracking-widest uppercase">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight mb-4">
                          {item.title}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <p className="text-sm text-white/70 leading-relaxed font-sans max-w-md">
                          {item.description}
                        </p>

                        <a
                          href={item.ctaLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#ff5500] text-xs font-mono font-bold uppercase tracking-wider text-white border border-white/10 hover:border-[#ff5500] transition-all shadow-sm group"
                        >
                          <span>{item.ctaText}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
                        </a>
                      </div>
                    </div>

                    {/* Right Media Image */}
                    <div className="w-1/2 relative h-full bg-[#04070f] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        priority
                        className="object-cover object-center brightness-[0.88] contrast-[1.05]"
                        sizes="40vw"
                      />
                      {/* Dark Vignette Overlay for Seamless Theme Blending */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#070e1c] via-transparent to-black/40 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/90 via-transparent to-transparent pointer-events-none" />
                      {/* Tech Grid Pattern */}
                      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#3daeff_1px,transparent_1px),linear-gradient(to_bottom,#3daeff_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet View */}
        <div className="lg:hidden flex flex-col gap-4">
          {PHASES.map((item, idx) => {
            const isOpen = idx === activeTab;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-white/[0.08] bg-[#02050c]/90 overflow-hidden shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? -1 : idx)}
                  className="w-full p-5 flex items-center justify-between text-left border-b border-white/[0.06]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#ff5500]">
                      {item.phaseNum}
                    </span>
                    <span className="text-base font-black font-heading text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-white/40 uppercase">
                    {isOpen ? "CLOSE -" : "OPEN +"}
                  </span>
                </button>

                {isOpen && (
                  <div className="flex flex-col">
                    <div className="relative w-full h-56 bg-[#04070f]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover brightness-90"
                        sizes="100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02050c] via-transparent to-transparent" />
                    </div>
                    <div className="p-6 space-y-4 bg-[#02050c]">
                      <span className="text-[10px] font-mono font-bold text-[#ff5500] uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <p className="text-xs text-white/70 leading-relaxed font-sans">
                        {item.description}
                      </p>
                      <a
                        href={item.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff5500]"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
