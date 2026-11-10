"use client";

import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";

interface WistiaPlayerProps {
  mediaId: string;
  aspect: number;
  title: string;
  className?: string;
  roundedClassName?: string;
  isActive?: boolean;
  onPlay?: () => void;
}

export default function WistiaPlayer({
  mediaId,
  aspect,
  title,
  className = "",
  roundedClassName = "rounded-xl",
  isActive = true,
  onPlay,
}: WistiaPlayerProps) {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const paddingTop = `${(1 / aspect) * 100}%`;
  const swatchUrl = `https://fast.wistia.com/embed/medias/${mediaId}/swatch`;
  const embedUrl = `https://fast.wistia.net/embed/iframe/${mediaId}?autoPlay=true&playsinline=true&seo=false&videoFoam=true&preload=none`;

  // Stop inactive testimonial players so only one streams at a time.
  useEffect(() => {
    if (!isActive && mounted) {
      setMounted(false);
      setIsLoading(false);
    }
  }, [isActive, mounted]);

  const startPlayback = () => {
    if (isLoading || mounted) return;
    setIsLoading(true);
    onPlay?.();
    setMounted(true);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-[#0c1024] border border-amber-300/40 shadow-inner ${roundedClassName} ${className}`}
      style={{ paddingTop }}
    >
      {!mounted ? (
        <button
          type="button"
          onClick={startPlayback}
          disabled={isLoading}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-300"
          aria-label={`Play ${title}`}
          style={{
            backgroundImage: `linear-gradient(rgba(10,14,30,0.28), rgba(10,14,30,0.45)), url('${swatchUrl}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="relative mb-3 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-400 text-slate-950 shadow-xl shadow-amber-500/40">
            <Play className="ml-0.5 h-6 w-6 sm:h-7 sm:w-7 fill-slate-950 text-slate-950" aria-hidden="true" />
          </span>
          <span className="px-3 text-center font-serif text-sm sm:text-base font-bold text-white drop-shadow">
            {isLoading ? "Loading video..." : title}
          </span>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          onLoad={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}
