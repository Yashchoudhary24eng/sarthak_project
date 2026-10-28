"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface TestimonialPlayerProps {
  src: string;
  poster: string;
  label: string;
  isActive: boolean;
  onPlay: () => void;
}

export default function TestimonialPlayer({
  src,
  poster,
  label,
  isActive,
  onPlay,
}: TestimonialPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!isActive && !video.paused) {
      video.pause();
    }
  }, [isActive]);

  const startPlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    onPlay();
    try {
      await video.play();
      setStarted(true);
    } catch {
      setStarted(true);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-slate-950 border border-amber-300/40 shadow-lg shadow-amber-950/10">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        controls={started}
        preload="metadata"
        poster={poster}
        controlsList="nodownload"
        disablePictureInPicture
        onPlay={() => {
          setStarted(true);
          onPlay();
        }}
        onEnded={() => setStarted(false)}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={startPlayback}
          className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-amber-300"
          aria-label={`Play ${label}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-400 text-slate-950 shadow-xl shadow-black/40">
            <Play className="ml-0.5 h-7 w-7 fill-slate-950 text-slate-950" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
