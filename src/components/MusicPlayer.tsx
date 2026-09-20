"use client";

import React, { useEffect, useRef } from "react";
import { VolumeX, Volume2 } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  audioSrc: string;
}

export default function MusicPlayer({ isPlaying, onToggle, audioSrc }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Audio autoplay policy or playback error:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <button
        onClick={onToggle}
        aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
        className="group relative flex items-center justify-center p-3.5 rounded-full bg-white/95 backdrop-blur-md text-[#8C5E19] border border-[#C5A059] shadow-[0_6px_25px_rgba(197,160,89,0.3)] hover:scale-110 hover:bg-[#FAF7F2] transition-all duration-300"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-5 h-5 animate-pulse text-[#8C5E19]" />
            {/* Spinning decorative ring when playing */}
            <div className="absolute -inset-1 rounded-full border border-[#C5A059]/40 animate-spin" style={{ animationDuration: "6s" }} />
          </>
        ) : (
          <VolumeX className="w-5 h-5 text-[#8C7662]" />
        )}
      </button>
    </div>
  );
}
