"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-transparent via-[#020409]/80 to-[#020409] text-white overflow-hidden pt-16 pb-12 px-4 sm:px-8 md:px-12">
      {/* Seamless Gradient Divider */}
      <div className="max-w-7xl mx-auto w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-16" />
      <div className="max-w-7xl mx-auto">
        {/* Top Categorized Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-10 gap-x-6 pb-16">
          
          {/* Col 1: AI DATA CENTERS */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                AI DATA CENTERS
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/ai/land" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Powered Land
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/ai/infrastructure" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Infrastructure
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/ai/development" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Development
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: AI INFRASTRUCTURE */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                AI INFRASTRUCTURE
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/gigapod" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  GigaPod
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/gigabase" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  GigaBase
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: TRANSFORMERS */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                TRANSFORMERS
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/3-phase-padmount-transformers" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  3-Phase Padmount Transformers
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/mv-substations" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Medium-Voltage Substations
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/hv-substations" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  High-Voltage Substations
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: DISTRIBUTION */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                DISTRIBUTION
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/ul-891-switchboards" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  UL891 Low Voltage Switchboards
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: BITCOIN MINING */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                BITCOIN MINING
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/giga-box-hydro" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Giga Box Hydro
                </a>
              </li>
              <li>
                <a href="https://www.gigaenergy.com/giga-box-air" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Giga Box Air
                </a>
              </li>
            </ul>
          </div>

          {/* Col 6: DEMAND RESPONSE */}
          <div>
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                DEMAND RESPONSE
              </span>
            </div>
            <ul className="space-y-3 text-sm font-normal text-white/90">
              <li>
                <a href="https://www.gigaenergy.com/giga-power-systems" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                  Giga Power Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Col 7: COMPANY (2 sub-columns in screenshot) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <div className="border-t border-white/20 pt-3 mb-5">
              <span className="text-[11px] font-mono font-bold tracking-wider text-white/50 uppercase block">
                COMPANY
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-normal text-white/90">
              <a href="https://www.gigaenergy.com/about" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                About
              </a>
              <a href="https://www.gigaenergy.com/factories" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Factories
              </a>
              <a href="https://www.gigaenergy.com/careers" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Careers
              </a>
              <a href="https://www.gigaenergy.com/contact" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Contact
              </a>
              <a href="https://www.gigaenergy.com/documents" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Documents
              </a>
              <a href="https://www.gigaenergy.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Privacy Policy
              </a>
              <a href="https://www.gigaenergy.com/cookies" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Cookies
              </a>
              <a href="https://www.gigaenergy.com/responsibility" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Responsibility
              </a>
              <a href="https://www.gigaenergy.com/site-origination-development" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5500] transition-colors">
                Sites
              </a>
            </div>
          </div>
        </div>

        {/* Giant Majestic GIGA Watermark Row */}
        <div className="w-full pt-10 pb-6 border-t border-white/[0.08] overflow-hidden pointer-events-none select-none">
          <div className="w-full max-w-3xl opacity-[0.14] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 1023 218"
              fill="none"
              className="text-white"
            >
              <path
                d="M0 108.966C0 169.037 48.5997 217.931 108.309 217.931H261.916V99.6917H151.681L210.737 159.106H108.309C80.8279 159.106 58.4711 136.613 58.4711 108.966C58.4711 81.3172 80.8279 58.8254 108.309 58.8254H261.916V0H108.309C48.5997 0 0 48.8943 0 108.966Z"
                fill="currentColor"
              />
              <path d="M361.281 0H302.811V218H361.281V0Z" fill="currentColor" />
              <path
                d="M497.485 217.931H651.094V99.6917H540.857L599.913 159.106H497.485C470.004 159.106 447.647 136.613 447.647 108.966C447.647 81.3172 470.004 58.8254 497.485 58.8254H651.094V0H497.485C437.776 0 389.176 48.8943 389.176 108.966C389.176 169.037 437.776 217.931 497.485 217.931Z"
                fill="currentColor"
              />
              <path
                d="M755.756 58.7237C756.785 58.5161 781.241 54.0176 795.856 69.3119L941.693 217.448H1023C1001.81 193.676 940.664 125.612 889.516 74.1913C826.194 10.5214 813.643 1.35156 761.223 1.35156H691.539V217.448H751.524V176.824H847.689L801.643 128.418H751.524V59.5196L755.718 58.7237H755.756Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {/* Clean, Non-Overlapping Copyright & Social Row */}
        <div className="pt-6 pb-2 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} Giga Energy Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/gigaenergy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819C12.4203 15.9681 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292C15.6567 17.399 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591C18.327 15.6296 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z" />
              </svg>
            </a>
            <a
              href="https://x.com/GigaEnergy_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
              aria-label="X"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
