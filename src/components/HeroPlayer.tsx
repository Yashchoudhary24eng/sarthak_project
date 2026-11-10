"use client";

import React from "react";
import WistiaPlayer from "./WistiaPlayer";

interface HeroPlayerProps {
  mediaId: string;
  aspect: number;
  title: string;
}

export default function HeroPlayer({ mediaId, aspect, title }: HeroPlayerProps) {
  return (
    <WistiaPlayer
      mediaId={mediaId}
      aspect={aspect}
      title={title}
      roundedClassName="rounded-xl"
    />
  );
}
