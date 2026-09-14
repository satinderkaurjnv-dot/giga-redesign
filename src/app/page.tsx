import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlippingLogos from "@/components/FlippingLogos";
import SystemExplorer from "@/components/SystemExplorer";
import FullStackAccordion from "@/components/FullStackAccordion";
import CustomAIInfrastructure from "@/components/CustomAIInfrastructure";
import TrackRecordStats from "@/components/TrackRecordStats";
import CompetitorComparison from "@/components/CompetitorComparison";
import CustomerStories from "@/components/CustomerStories";
import BuildWithUs from "@/components/BuildWithUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#02050c] text-white relative selection:bg-[#3daeff]/30 selection:text-white overflow-x-hidden">
      {/* ============================================================ */}
      {/* ULTRA-LUXURY ATMOSPHERIC GLOBAL CANVAS SYSTEM                */}
      {/* ============================================================ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Precision Micro-Dot Matrix (Replaces harsh grid with refined linear/apple tech texture) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_45%,#000_30%,transparent_100%)] opacity-60" />
        
        {/* Soft Volumetric Aurora Blooms */}
        <div className="glow-orb top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[750px] bg-[#0052cc]/[0.08]" />
        <div className="glow-orb top-[16%] left-[-12%] w-[800px] h-[800px] bg-[#00a6ff]/[0.04]" />
        <div className="glow-orb top-[26%] right-[-10%] w-[850px] h-[850px] bg-[#0055ff]/[0.05]" />
        <div className="glow-orb top-[44%] left-[-8%] w-[700px] h-[700px] bg-[#ff5500]/[0.025]" />
        <div className="glow-orb top-[56%] right-[-6%] w-[800px] h-[800px] bg-[#0088ff]/[0.035]" />
        <div className="glow-orb top-[70%] left-[8%] w-[850px] h-[850px] bg-[#00d2ff]/[0.03]" />
        <div className="glow-orb bottom-[-8%] right-[-12%] w-[950px] h-[750px] bg-[#ff5500]/[0.035]" />
        <div className="glow-orb bottom-[8%] left-[-12%] w-[750px] h-[750px] bg-[#0048ff]/[0.045]" />

        {/* Global Cinematic Perimeter Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,#02050c_95%)] pointer-events-none" />
      </div>

      <Navbar />
      <Hero />
      <FlippingLogos />
      <SystemExplorer />
      <FullStackAccordion />
      <CustomAIInfrastructure />
      <TrackRecordStats />
      <CompetitorComparison />
      <CustomerStories />
      <BuildWithUs />
      <Footer />
    </main>
  );
}

