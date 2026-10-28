"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#080b19]/95 backdrop-blur-lg border-t border-amber-500/25 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0">
          <p className="text-[11px] text-amber-300 font-semibold truncate">
            {siteConfig.brandName}
          </p>
          <p className="text-[10px] text-slate-400 truncate">
            {siteConfig.tagline}
          </p>
        </div>
        <BookingCta size="sm" label={siteConfig.bookingCtaShortText} />
      </div>
    </div>
  );
}
