"use client";

import React from "react";
import { Heart, Sparkles, Flower2, Stars } from "lucide-react";

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Top Left Floating Heart */}
      <div className="absolute top-16 left-6 md:left-12 text-[#D4AF37] opacity-25 animate-float">
        <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
      </div>

      {/* Top Right Sparkle */}
      <div className="absolute top-28 right-8 md:right-16 text-[#D4AF37] opacity-30 animate-pulse-gold">
        <Sparkles className="w-6 h-6 md:w-7 md:h-7" />
      </div>

      {/* Mid Left Flower Icon */}
      <div className="absolute top-1/2 left-4 md:left-10 text-[#D4AF37] opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Flower2 className="w-6 h-6 md:w-8 md:h-8" />
      </div>

      {/* Mid Right Stars */}
      <div className="absolute top-2/3 right-6 md:right-14 text-[#D4AF37] opacity-25 animate-pulse-gold" style={{ animationDelay: "1.5s" }}>
        <Stars className="w-5 h-5 md:w-7 md:h-7" />
      </div>

      {/* Bottom Floating Heart */}
      <div className="absolute bottom-24 left-10 md:left-24 text-[#D4AF37] opacity-20 animate-float" style={{ animationDelay: "3s" }}>
        <Heart className="w-4 h-4 md:w-5 md:h-5" />
      </div>
    </div>
  );
}
