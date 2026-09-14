"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown, Clock, Zap, Hammer, ShieldCheck, RefreshCw } from "lucide-react";

const CAMERAS = [
  { id: "cam-1", name: "CAM 01: AISLE CONTAINMENT", src: "/videos/cam-1-aisle.mp4", desc: "Cold Aisle Glass Doors & Server Blades" },
  { id: "cam-2", name: "CAM 02: SERVER CORRIDOR", src: "/videos/cam-2-corridor.mp4", desc: "High-Density AI Compute Lineup" },
  { id: "cam-3", name: "CAM 03: NIGHT NOC FACILITY", src: "/videos/cam-3-night.mp4", desc: "Exterior 24/7 Facility Telemetry" },
];

export default function Hero() {
  const [activeCamIdx, setActiveCamIdx] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeCam = CAMERAS[activeCamIdx];

  const handleSwitchCam = (idx: number) => {
    if (idx === activeCamIdx) return;
    setIsVideoLoading(true);
    setActiveCamIdx(idx);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay handled by browser
      });
    }
  }, [activeCamIdx]);

  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 pt-20 pb-8 sm:pt-24 sm:pb-10 relative overflow-hidden">
      {/* High-Definition AI Infrastructure Video Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          ref={videoRef}
          key={activeCam.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoading(false)}
          className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-90 filter contrast-110 brightness-100 transition-opacity duration-700"
        >
          <source src={activeCam.src} type="video/mp4" />
        </video>

        {/* Clean Vignette Blending: Top navbar fade & Bottom transition fade */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#04070f] via-[#04070f]/75 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#04070f] via-[#04070f]/80 to-transparent"></div>

        {/* Cinematic Peripheral Vignette - subtle edge shadow only */}
        <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(4,7,15,0.75)]"></div>
      </div>

      {/* Interactive Live Camera Telemetry Dock (Positioned at Top-Right so it never collides with bottom metrics) */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-6 z-20 hidden md:flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#02050c]/85 border border-white/15 backdrop-blur-md text-[9.5px] font-mono text-white/80 shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e878] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e878]"></span>
          </span>
          <span className="font-bold tracking-wider text-[#00e878]">LIVE NOC FEED</span>
          <span className="text-white/40">|</span>
          <span className="text-white/60">720p HD</span>
          {isVideoLoading && <RefreshCw className="w-2.5 h-2.5 text-[#3daeff] animate-spin ml-1" />}
        </div>

        {/* Camera Switcher Buttons */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[#04070f]/90 border border-white/10 backdrop-blur-md shadow-xl">
          {CAMERAS.map((cam, idx) => (
            <button
              key={cam.id}
              onClick={() => handleSwitchCam(idx)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                activeCamIdx === idx
                  ? "bg-[#3daeff] text-black shadow-[0_0_10px_rgba(61,174,255,0.5)]"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              title={cam.desc}
            >
              {cam.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Eyebrow Pill */}
      <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/[0.15] bg-[#02050c]/80 mb-3 sm:mb-4 shadow-[0_4px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1),0_0_20px_rgba(61,174,255,0.12)] backdrop-blur-md">
        <span className="w-3.5 h-[2px] bg-[#ff5500] rounded-full"></span>
        <span className="text-[9.5px] font-bold text-white/95 tracking-[0.2em] uppercase font-mono">
          PRE-ENGINEERED AI INFRASTRUCTURE
        </span>
      </div>

      {/* Main Headline with Drop Shadows for Extreme Clarity */}
      <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight max-w-5xl leading-[1.08] mb-3 sm:mb-4 font-heading text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
        BUILD AI INFRASTRUCTURE<br className="hidden sm:inline" />
        IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3daeff] via-[#58c4ff] to-[#0091ff] drop-shadow-[0_2px_18px_rgba(61,174,255,0.4)]">MONTHS, NOT YEARS.</span>
      </h1>

      {/* Positioning Subtitle */}
      <p className="relative z-10 text-xs sm:text-sm md:text-base text-white/90 max-w-xl font-normal leading-relaxed mb-5 sm:mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
        GigaBase is a pre-engineered, vertically integrated data center system designed to take compute from concept to energized infrastructure in <strong className="text-white font-bold shadow-black">9 months flat</strong>.
      </p>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
        <a href="#configurator" className="btn-primary-glow w-full sm:w-auto text-xs sm:text-sm px-7 py-3.5 shadow-[0_4px_20px_rgba(61,174,255,0.35)]">
          <span>Configure a GigaBase</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
        <a href="#speed" className="btn-secondary-frosted w-full sm:w-auto text-xs sm:text-sm px-6 py-3.5 backdrop-blur-md bg-[#02050c]/60 hover:bg-[#02050c]/80 border-white/20">
          <span>Explore 9-Month Speed</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/80" />
        </a>
      </div>

      {/* Floating Hero Metric Capsule Dock (Fully contained within viewport, rounded all around) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-[20px] sm:rounded-[24px] py-3.5 px-3 sm:py-4 sm:px-6 md:py-4 md:px-8 grid grid-cols-2 md:grid-cols-4 items-center gap-2 sm:gap-3 backdrop-blur-xl bg-[#010409]/85 border border-white/15 shadow-[0_16px_45px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.06),0_0_25px_rgba(61,174,255,0.12)] hero-capsule-glow">
        
        {/* Metric 1 */}
        <div className="flex flex-col items-center text-center p-1.5 group cursor-default">
          <div className="text-[#3daeff] mb-1.5 transition-transform duration-300 group-hover:scale-110">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-heading">
            9 Months
          </span>
          <span className="text-[8.5px] md:text-[9px] font-mono font-bold text-white/60 tracking-widest uppercase mt-0.5">
            To Energization
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-1/4 top-1/2 -translate-y-1/2 w-[1px] h-9 bg-gradient-to-b from-transparent via-[#3daeff]/40 to-transparent"></div>

        {/* Metric 2 */}
        <div className="flex flex-col items-center text-center p-1.5 group cursor-default">
          <div className="text-[#3daeff] mb-1.5 transition-transform duration-300 group-hover:scale-110">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-heading">
            9 MW IT
          </span>
          <span className="text-[8.5px] md:text-[9px] font-mono font-bold text-white/60 tracking-widest uppercase mt-0.5">
            Building Block
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-2/4 top-1/2 -translate-y-1/2 w-[1px] h-9 bg-gradient-to-b from-transparent via-[#3daeff]/40 to-transparent"></div>

        {/* Metric 3 */}
        <div className="flex flex-col items-center text-center p-1.5 group cursor-default">
          <div className="text-[#3daeff] mb-1.5 transition-transform duration-300 group-hover:scale-110">
            <Hammer className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-heading">
            90% Less
          </span>
          <span className="text-[8.5px] md:text-[9px] font-mono font-bold text-white/60 tracking-widest uppercase mt-0.5">
            Field Labor
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-3/4 top-1/2 -translate-y-1/2 w-[1px] h-9 bg-gradient-to-b from-transparent via-[#3daeff]/40 to-transparent"></div>

        {/* Metric 4 */}
        <div className="flex flex-col items-center text-center p-1.5 group cursor-default">
          <div className="text-[#3daeff] mb-1.5 transition-transform duration-300 group-hover:scale-110">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-heading">
            4N/3
          </span>
          <span className="text-[8.5px] md:text-[9px] font-mono font-bold text-white/60 tracking-widest uppercase mt-0.5">
            Power Redundancy
          </span>
        </div>

      </div>
    </section>
  );
}
