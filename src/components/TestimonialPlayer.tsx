"use client";

import React from "react";
import WistiaPlayer from "./WistiaPlayer";

interface TestimonialPlayerProps {
  mediaId: string;
  aspect: number;
  label: string;
  isActive: boolean;
  onPlay: () => void;
}

export default function TestimonialPlayer({
  mediaId,
  aspect,
  label,
  isActive,
  onPlay,
}: TestimonialPlayerProps) {
  return (
    <WistiaPlayer
      mediaId={mediaId}
      aspect={aspect}
      title={label}
      roundedClassName="rounded-2xl"
      className="shadow-lg shadow-amber-950/10"
      isActive={isActive}
      onPlay={onPlay}
    />
  );
}
