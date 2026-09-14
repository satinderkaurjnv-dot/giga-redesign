"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#04070f]/80 backdrop-blur-xl border-b border-white/[0.08] text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Official GIGA Wordmark Logo */}
        <div className="flex items-center gap-8">
          <a href="https://www.gigaenergy.com" className="flex items-center text-white hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="20" viewBox="0 0 96 20" fill="none" className="h-5 w-auto fill-current">
              <path d="M0 9.99685C0 15.5079 4.56068 19.9936 10.1639 19.9936H24.5786V9.14603H14.234L19.7759 14.5968H10.1639C7.58502 14.5968 5.48702 12.5333 5.48702 9.99685C5.48702 7.4603 7.58502 5.39683 10.1639 5.39683H24.5786V0H10.1639C4.56068 0 0 4.48572 0 9.99685Z" fill="currentColor"></path>
              <path d="M33.903 0H28.416V20H33.903V0Z" fill="currentColor"></path>
              <path d="M46.6844 19.9936H61.0993V9.14603H50.7545L56.2964 14.5968H46.6844C44.1055 14.5968 42.0075 12.5333 42.0075 9.99685C42.0075 7.4603 44.1055 5.39683 46.6844 5.39683H61.0993V0H46.6844C41.0812 0 36.5205 4.48572 36.5205 9.99685C36.5205 15.5079 41.0812 19.9936 46.6844 19.9936Z" fill="currentColor"></path>
              <path d="M70.9217 5.38758C71.0183 5.36853 73.3132 4.95583 74.6848 6.35898L88.3704 19.9495H96.0003C94.012 17.7685 88.2738 11.5241 83.4739 6.80663C77.5317 0.965353 76.3539 0.124084 71.4347 0.124084H64.8955V19.9495H70.5245V16.2225H79.5489L75.2278 11.7816H70.5245V5.4606L70.9181 5.38758H70.9217Z" fill="currentColor"></path>
            </svg>
          </a>

          {/* Center Navigation Links (Exact from website: AI DATA CENTERS, PRODUCTS, SOLUTIONS, RESOURCES, COMPANY) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono font-bold tracking-wider uppercase">
            
            {/* 1. AI DATA CENTERS Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setActiveDropdown("datacenters")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#ff5500] transition-colors focus:outline-none">
                <span>AI Data Centers</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "datacenters" ? "rotate-180 text-[#ff5500]" : "text-white/60"}`} />
              </button>

              {activeDropdown === "datacenters" && (
                <div className="absolute top-full left-0 w-64 bg-[#141613] border border-white/10 rounded-xl p-3 shadow-2xl space-y-1">
                  <a href="https://www.gigaenergy.com/ai/land" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">Powered Land</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Sites with utility power interconnects</span>
                    </div>
                  </a>
                  <a href="https://www.gigaenergy.com/ai/infrastructure" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">Infrastructure</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Transformers, switchboards & cooling</span>
                    </div>
                  </a>
                  <a href="https://www.gigaenergy.com/ai/development" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">Development</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Build-to-suit AI campuses</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 2. PRODUCTS Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#ff5500] transition-colors focus:outline-none">
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "products" ? "rotate-180 text-[#ff5500]" : "text-white/60"}`} />
              </button>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 w-72 bg-[#141613] border border-white/10 rounded-xl p-3 shadow-2xl space-y-1">
                  <a href="/#system" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">GigaBase System</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">9MW turnkey modular block</span>
                    </div>
                  </a>
                  <a href="https://www.gigaenergy.com/gigapod" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">GigaPod</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">High-density liquid-cooled compute pod</span>
                    </div>
                  </a>
                  <a href="https://www.gigaenergy.com/3-phase-padmount-transformers" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">Padmount Transformers</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Up to 46 kV & 10,000 kVA</span>
                    </div>
                  </a>
                  <a href="https://www.gigaenergy.com/ul-891-switchboards" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">UL-891 Switchboards</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Low voltage distribution</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 3. SOLUTIONS Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#ff5500] transition-colors focus:outline-none">
                <span>Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#ff5500]" : "text-white/60"}`} />
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-64 bg-[#141613] border border-white/10 rounded-xl p-3 shadow-2xl space-y-1">
                  <a href="/#build-process" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">9-Month Build Process</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">Fastest time-to-power</span>
                    </div>
                  </a>
                  <a href="/#full-stack" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">Full-Stack Delivery</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">From land to energized compute</span>
                    </div>
                  </a>
                  <a href="/#competitor-comparison" className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors">
                    <div>
                      <span className="block font-sans font-bold text-white text-sm">VS Competitors</span>
                      <span className="block font-sans text-xs text-white/50 normal-case font-normal">1 single partner vs 12 vendors</span>
                    </div>
                  </a>
                </div>
              )}
            </div>

            {/* 4. RESOURCES */}
            <a href="https://www.gigaenergy.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors py-6">
              Resources
            </a>

            {/* 5. COMPANY */}
            <a href="https://www.gigaenergy.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors py-6">
              Company
            </a>
          </nav>
        </div>

        {/* Right Actions: Exact buttons from Giga Energy (CONTACT SALES, BUILD A QUOTE) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.gigaenergy.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md border border-white/20 bg-transparent hover:bg-white/10 text-xs font-mono font-bold uppercase tracking-wider text-white transition-all"
          >
            CONTACT SALES
          </a>
          <a
            href="https://www.gigaenergy.com/build-a-quote"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-md bg-[#004eeb] hover:bg-[#003ec0] text-xs font-mono font-bold uppercase tracking-wider text-white transition-all shadow-[0_2px_10px_rgba(0,78,235,0.3)]"
          >
            BUILD A QUOTE
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white hover:text-[#ff5500]"
          aria-label="Open navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#04070f]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col gap-5 text-sm font-mono font-bold uppercase tracking-wider">
          <a onClick={() => setMobileOpen(false)} href="#system" className="hover:text-[#ff5500]">
            The GigaBase System
          </a>
          <a onClick={() => setMobileOpen(false)} href="#build-process" className="hover:text-[#ff5500]">
            9-Month Build Process
          </a>
          <a onClick={() => setMobileOpen(false)} href="#full-stack" className="hover:text-[#ff5500]">
            Full-Stack Phases
          </a>
          <a onClick={() => setMobileOpen(false)} href="#competitor-comparison" className="hover:text-[#ff5500]">
            VS Competitors
          </a>
          <a onClick={() => setMobileOpen(false)} href="https://www.gigaenergy.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500]">
            About Giga
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://www.gigaenergy.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-md border border-white/20 text-white"
            >
              CONTACT SALES
            </a>
            <a
              href="https://www.gigaenergy.com/build-a-quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-md bg-[#004eeb] text-white"
            >
              BUILD A QUOTE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
