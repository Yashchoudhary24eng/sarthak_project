import React from "react";
import { siteConfig } from "../config/siteConfig";
import { Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#04060e] border-t border-amber-500/15 py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-10 border-b border-white/5">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-[1px]">
                <div className="w-full h-full rounded-full bg-[#080b18] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                </div>
              </div>
              <span className="font-serif text-lg font-bold text-white">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="text-slate-300 text-sm font-serif italic">
              {siteConfig.tagline}
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Your journey begins with one conversation.
            </p>
          </div>

          <nav aria-label="Footer" className="space-y-1.5">
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#vsl-overview" className="hover:text-amber-300 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#client-testimonials" className="hover:text-amber-300 transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber-300 transition-colors">
                  Journey
                </a>
              </li>
              <li>
                <a href="#program-breakdown" className="hover:text-amber-300 transition-colors">
                  Program
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
          </p>
          <a
            href={siteConfig.bookingCtaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
          >
            {siteConfig.bookingCtaText}
          </a>
        </div>
      </div>
    </footer>
  );
}
