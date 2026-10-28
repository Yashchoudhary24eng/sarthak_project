"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

interface HeroPlayerProps {
  src: string;
  poster: string;
  title: string;
}

export default function HeroPlayer({ src, poster, title }: HeroPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    try {
      await video.play();
      setStarted(true);
    } catch {
      setStarted(true);
    }
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0c1024] border border-amber-300/40 shadow-inner">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain bg-black"
        playsInline
        controls={started}
        preload="metadata"
        poster={poster}
        controlsList="nodownload"
        disablePictureInPicture
        onPlay={() => setStarted(true)}
        onEnded={() => setStarted(false)}
        aria-label={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={startPlayback}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-300"
          aria-label={`Play ${title}`}
        >
          <span className="relative mb-4 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-400 text-slate-950 shadow-xl shadow-amber-500/40">
            <Play className="ml-1 h-7 w-7 sm:h-9 sm:w-9 fill-slate-950 text-slate-950" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg sm:text-2xl font-bold text-white">{title}</span>
        </button>
      )}
    </div>
  );
}
