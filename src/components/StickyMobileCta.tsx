"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "../config/siteConfig";
import BookingCta from "./BookingCta";

export default function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted || !isVisible) return null;

  return createPortal(
    <div
      className="md:hidden"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.75rem",
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom, 0px))",
        backgroundColor: "rgba(8, 11, 25, 0.98)",
        borderTop: "1px solid rgba(245, 158, 11, 0.25)",
        boxShadow: "0 -8px 24px rgba(0, 0, 0, 0.28)",
      }}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-amber-300">
            {siteConfig.brandName}
          </p>
          <p className="truncate text-[10px] text-slate-400">
            {siteConfig.tagline}
          </p>
        </div>
        <BookingCta size="sm" label={siteConfig.bookingCtaShortText} />
      </div>
    </div>,
    document.body
  );
}
