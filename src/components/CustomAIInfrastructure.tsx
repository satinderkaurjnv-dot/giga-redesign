"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Zap, ShieldCheck, Check, Cpu, Server, Droplets } from "lucide-react";

interface PillFeature {
  text: string;
  iconType: "shield" | "server" | "check" | "cooling" | "cpu" | "zap";
  pos: string; // Tailwind coordinate classes matching Image 2
}

interface InfraSlide {
  num: string;
  title: string;
  category: string;
  badge: string;
  desc: string;
  img: string;
  specs: string[];
  ctaText: string;
  ctaLink: string;
  features: PillFeature[];
}

const INFRA_ITEMS: InfraSlide[] = [
  {
    num: "01",
    title: "Transformers",
    category: "MEDIUM & HIGH VOLTAGE",
    badge: "UP TO 138 kV / 100 MVA",
    desc: "3-phase padmount and substation transformers. In-stock inventory or fast-turnaround custom builds manufactured in Houston, TX.",
    img: "/images/infra_transformers.avif",
    specs: [
      "Up to 46 kV & 10,000 kVA",
      "Substations to 138 kV / 100 MVA",
      "In-Stock US Inventory",
    ],
    ctaText: "Shop Transformers",
    ctaLink: "https://www.gigaenergy.com/3-phase-padmount-transformers",
    features: [
      { text: "MEDIUM & HIGH VOLTAGE", iconType: "zap", pos: "top-[-10px] left-[0%] lg:left-[-4%]" },
      { text: "HOUSTON, TX BUILT", iconType: "shield", pos: "top-[16%] right-[0%] lg:right-[-2%]" },
      { text: "IN-STOCK US INVENTORY", iconType: "server", pos: "bottom-[20%] left-[0%] lg:left-[-4%]" },
      { text: "99.99% RELIABLE", iconType: "check", pos: "bottom-[2%] right-[0%] lg:right-[8%]" },
    ],
  },
  {
    num: "02",
    title: "AI Power & Cooling",
    category: "WHITESPACE COMPUTE",
    badge: "GIGAPOD™ D2C COOLING",
    desc: "GigaPod™ hydro-cooled AI compute modules that drop into data center halls. Engineered for high-density 100 kW+ Blackwell & Vera Rubin clusters.",
    img: "/images/infra_gigapod.webp",
    specs: [
      "Direct-to-Chip D2C Liquid Cooling",
      "100 kW+ Per Rack Density",
      "4N/3 Power Redundancy",
    ],
    ctaText: "Explore GigaPod",
    ctaLink: "https://www.gigaenergy.com/gigapod",
    features: [
      { text: "WHITESPACE COMPUTE", iconType: "cpu", pos: "top-[-10px] left-[0%] lg:left-[-4%]" },
      { text: "D2C LIQUID COOLED", iconType: "cooling", pos: "top-[16%] right-[0%] lg:right-[-2%]" },
      { text: "100 kW+/RACK DENSITY", iconType: "zap", pos: "bottom-[20%] left-[0%] lg:left-[-4%]" },
      { text: "BLACKWELL READY", iconType: "shield", pos: "bottom-[2%] right-[0%] lg:right-[8%]" },
    ],
  },
  {
    num: "03",
    title: "Power Distribution",
    category: "LOW VOLTAGE GEAR",
    badge: "UL 891 CERTIFIED",
    desc: "Highly customizable modular power distribution solutions built and delivered on fast turnarounds. Certified UL891 switchboards.",
    img: "/images/infra_switchboard.avif",
    specs: [
      "UL 891 Certified Distribution",
      "Instantaneous Fault Clearance",
      "Custom Modular Busbars",
    ],
    ctaText: "View Switchboards",
    ctaLink: "https://www.gigaenergy.com/ul-891-switchboards",
    features: [
      { text: "LOW VOLTAGE GEAR", iconType: "shield", pos: "top-[-10px] left-[0%] lg:left-[-4%]" },
      { text: "UL 891 CERTIFIED", iconType: "shield", pos: "top-[16%] right-[0%] lg:right-[-2%]" },
      { text: "SUB-CYCLE FAULT CLEAR", iconType: "zap", pos: "bottom-[20%] left-[0%] lg:left-[-4%]" },
      { text: "CUSTOM MODULAR BUSBARS", iconType: "server", pos: "bottom-[2%] right-[0%] lg:right-[8%]" },
    ],
  },
];

function PillBadge({
  feature,
  delay,
  active,
}: {
  feature: PillFeature;
  delay: number;
  active: boolean;
}) {
  const renderIcon = (type: string) => {
    switch (type) {
      case "zap":
        return <Zap className="w-3 h-3 stroke-[2.5]" />;
      case "cooling":
        return <Droplets className="w-3 h-3 stroke-[2.5]" />;
      case "cpu":
        return <Cpu className="w-3 h-3 stroke-[2.5]" />;
      case "server":
        return <Server className="w-3 h-3 stroke-[2.5]" />;
      case "shield":
        return <ShieldCheck className="w-3 h-3 stroke-[2.5]" />;
      case "check":
        return <Check className="w-3 h-3 stroke-[2.5]" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute z-20 pointer-events-none transition-all duration-700 ease-out hidden sm:block ${feature.pos}`}
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0px) scale(1)" : "translateY(10px) scale(0.92)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="flex items-center gap-2 px-3.5 py-[7px] rounded-full bg-[#040916]/90 border border-[#3daeff]/40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6),0_0_14px_rgba(61,174,255,0.3)] animate-label-premium"
        style={{ animationDelay: `${delay}ms, ${delay + 400}ms` }}
      >
        <span className="text-[#3daeff] flex-shrink-0">
          {renderIcon(feature.iconType)}
        </span>
        <span className="text-[9.5px] font-mono font-bold text-white/90 tracking-[0.16em] uppercase whitespace-nowrap">
          {feature.text}
        </span>
      </div>
    </div>
  );
}

function TimelineDot({ active }: { active: boolean }) {
  return (
    <div className="absolute -left-[29px] top-[4px] w-[14px] h-[14px] flex items-center justify-center">
      {active && (
        <div className="absolute w-[26px] h-[26px] rounded-full border border-[#3daeff]/70 animate-timeline-ping pointer-events-none" />
      )}
      <div
        className={`rounded-full transition-all duration-500 ease-out flex items-center justify-center ${
          active
            ? "w-[12px] h-[12px] bg-[#3daeff]"
            : "w-[8px] h-[8px] bg-white/20 group-hover:bg-[#3daeff]/50"
        }`}
        style={{
          boxShadow: active
            ? "0 0 16px rgba(61,174,255,0.95), 0 0 32px rgba(61,174,255,0.5)"
            : "none",
        }}
      >
        {active && <div className="w-[3.5px] h-[3.5px] bg-white rounded-full" />}
      </div>
    </div>
  );
}

export default function CustomAIInfrastructure() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for viewport entry
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Continuous auto-cycling every 4.5s
  useEffect(() => {
    if (!inView) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % INFRA_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [inView, activeIdx]);

  return (
    <section
      id="infrastructure"
      ref={sectionRef}
      className="w-full relative overflow-hidden bg-transparent text-white pt-8 pb-8 sm:pt-12 sm:pb-12 px-4 sm:px-8 md:px-12"
    >
      {/* CSS Keyframe Animations for Floating Glow Labels & Stepper Pulsing */}
      <style jsx global>{`
        @keyframes labelFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes labelGlow {
          0%, 100% {
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), 0 0 8px rgba(61, 174, 255, 0.25);
            border-color: rgba(61, 174, 255, 0.3);
          }
          50% {
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), 0 0 18px rgba(61, 174, 255, 0.55);
            border-color: rgba(61, 174, 255, 0.65);
          }
        }
        .animate-label-premium {
          animation: labelFloat 4s ease-in-out infinite, labelGlow 3s ease-in-out infinite;
        }
        @keyframes timelinePulse {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .animate-timeline-ping {
          animation: timelinePulse 2.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }
      `}</style>

      {/* Atmospheric ambient glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[600px] h-[400px] bg-[#3daeff]/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] left-[20%] w-[320px] h-[320px] bg-cyan-500/[0.03] rounded-full blur-[110px] pointer-events-none" />

      {/* Top Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8 sm:mb-10" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div className="max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.12] bg-[#02050c]/80 mb-3.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff] animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#3daeff] uppercase">
                INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.02em] font-heading text-white mb-4">
              Custom AI energy infrastructure,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-[#60b6ff] to-[#0091ff]">
                delivered faster.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
              We&apos;ve delivered more than <strong className="text-white font-bold">6.5 GW</strong> of transformers, switchboards, power, and cooling AI infrastructure built in Houston, TX and Long Beach, CA.
            </p>
          </div>

          {/* 3 Core Guarantees Pills */}
          <div className="flex flex-col gap-2 font-mono text-xs text-white/70">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#00e878]/20 text-[#00e878] flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>Fast lead times on in-stock inventory & made-to-order</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#3daeff]/20 text-[#3daeff] flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>Flexible engineering for custom AI campuses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#ff5500]/20 text-[#ff5500] flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>Responsive 24/7 US-based engineering & support</span>
            </div>
          </div>
        </div>

        {/* Split Showcase Layout (matching Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (col-span-7): Hardware Showcase with Floating Neon Pills */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center py-4 sm:py-6">
            {/* Central Hardware Visualizer Frame */}
            <div
              className="relative mx-auto w-full sm:w-[88%] aspect-[1.2] max-w-[560px] rounded-2xl overflow-hidden bg-[#02050c] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(61,174,255,0.12)]"
            >
              {/* Hardware Photography Crossfade Layers */}
              {INFRA_ITEMS.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={item.num}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      zIndex: isActive ? 5 : 1,
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={`${item.title} infrastructure`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-center transition-transform duration-1000 ease-out brightness-[0.94]"
                      style={{
                        transform: isActive ? "scale(1)" : "scale(0.97)",
                      }}
                      priority={idx === 0}
                    />
                  </div>
                );
              })}

              {/* Vignette Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050c]/85 via-transparent to-black/30 pointer-events-none z-10" />

              {/* Bottom Specs Tag */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff] animate-pulse" />
                  <span className="text-[10px] font-mono font-bold tracking-wider text-white/90 uppercase">
                    {INFRA_ITEMS[activeIdx].badge}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#3daeff] font-bold tracking-wider">
                  STAGE 0{activeIdx + 1} / 03
                </div>
              </div>
            </div>

            {/* Floating Neon Badge Pills Around the Hardware Showcase */}
            {INFRA_ITEMS.map((item, slideIdx) => {
              const isActive = activeIdx === slideIdx;
              return (
                <div
                  key={`stage-badges-${item.num}`}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.6s ease-in-out",
                  }}
                >
                  {item.features.map((feature, fIdx) => (
                    <PillBadge
                      key={`feat-${slideIdx}-${fIdx}`}
                      feature={feature}
                      delay={100 * fIdx}
                      active={isActive}
                    />
                  ))}
                </div>
              );
            })}
          </div>

          {/* Right Column (col-span-5): Vertical Interactive Timeline Stepper */}
          <div className="lg:col-span-5 relative pl-8 lg:pl-10 pt-2">
            {/* Continuous Vertical Connecting Line */}
            <div
              className="absolute left-1 top-2 bottom-6 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(61,174,255,0.5) 0%, rgba(61,174,255,0.2) 75%, transparent 100%)",
              }}
            />

            {INFRA_ITEMS.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={item.num}
                  onClick={() => setActiveIdx(idx)}
                  className="relative mb-10 last:mb-0 cursor-pointer group select-none transition-all duration-300"
                >
                  {/* Glowing Animated Indicator Dot on the Line */}
                  <TimelineDot active={isActive} />

                  {/* Step Number */}
                  <span
                    className={`text-[11px] font-mono font-bold tracking-[0.2em] block mb-1.5 transition-all duration-300 ${
                      isActive ? "text-[#3daeff]" : "text-white/25"
                    }`}
                  >
                    {item.num}
                  </span>

                  {/* Step Title */}
                  <h3
                    className={`text-lg sm:text-xl font-bold font-heading tracking-wide uppercase mb-2 transition-all duration-300 ${
                      isActive
                        ? "text-[#3daeff]"
                        : "text-white/40 group-hover:text-white/80"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className={`text-xs sm:text-[13px] leading-[1.75] max-w-sm font-sans mb-3.5 transition-all duration-300 ${
                      isActive ? "text-white/80" : "text-white/40"
                    }`}
                  >
                    {item.desc}
                  </p>

                  {/* Active Step Details Drawer (Specs & CTA) */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: isActive ? "160px" : "0px",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="pt-2 pb-3 space-y-2 border-t border-white/[0.08]">
                      {item.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-[11.5px] font-mono text-white/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3daeff]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={item.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 mt-1 rounded-lg bg-[#3daeff]/10 hover:bg-[#3daeff] text-[#3daeff] hover:text-[#02050c] border border-[#3daeff]/40 hover:border-[#3daeff] font-mono text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(61,174,255,0.2)] transition-all duration-300 group/btn"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
