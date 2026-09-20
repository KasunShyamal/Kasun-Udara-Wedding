"use client";

import React from "react";
import { Heart, Phone } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface FooterProps {
  data: WeddingData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full py-16 px-6 bg-gradient-to-b from-[#080808] via-[#150202] to-[#050505] text-[#F3E5AB] border-t border-[#D4AF37]/30 text-center relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Monogram Seal */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-14 h-14 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#4A0404]/30">
            <span className="font-serif text-lg tracking-wider text-[#D4AF37]">
              {data.groom.name.charAt(0)} & {data.bride.name.charAt(0)}
            </span>
          </div>
          <h3 className="font-script text-4xl text-[#D4AF37]">
            {data.groom.name} & {data.bride.name}
          </h3>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-stone-400">
            {data.hashtag}
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-4 border-y border-[#D4AF37]/10 text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-stone-300">{data.groom.name}: {data.groom.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-stone-300">{data.bride.name}: {data.bride.phone}</span>
          </div>
        </div>

        {/* Closing Note */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-stone-400 text-xs">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
            <span>for our beloved family & friends</span>
          </div>
          <p className="text-[11px] text-stone-500 uppercase tracking-widest">
            © 2026 Kasun & Udara Wedding Celebration
          </p>
        </div>

      </div>
    </footer>
  );
}
