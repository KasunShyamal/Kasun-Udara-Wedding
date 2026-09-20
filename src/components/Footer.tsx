"use client";

import React from "react";
import { Heart, Phone } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface FooterProps {
  data: WeddingData;
}

export default function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full py-16 px-6 bg-gradient-to-b from-[#FAF7F2] via-[#F4ECE1] to-[#EDE3D4] text-[#2C241E] border-t border-[#C5A059]/40 text-center relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Monogram Seal */}
        <div className="flex flex-col items-center space-y-3">
          <div className="w-14 h-14 rounded-full border border-[#C5A059]/60 flex items-center justify-center bg-white/80 shadow-sm">
            <span className="font-serif text-lg tracking-wider text-[#8C5E19]">
              {data.groom.name.charAt(0)} &amp; {data.bride.name.charAt(0)}
            </span>
          </div>
          <h3 className="font-script text-4xl text-[#7A5826]">
            {data.groom.name} &amp; {data.bride.name}
          </h3>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-[#8C7662] font-semibold">
            {data.hashtag}
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center items-center gap-8 py-4 border-y border-[#C5A059]/20 text-xs tracking-wider">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#8C5E19]" />
            <span className="text-[#5A4839] font-medium">{data.groom.name}: {data.groom.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#8C5E19]" />
            <span className="text-[#5A4839] font-medium">{data.bride.name}: {data.bride.phone}</span>
          </div>
        </div>

        {/* Closing Note */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#7A695A] text-xs">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-current" />
            <span>for our beloved family &amp; friends</span>
          </div>
          <p className="text-[11px] text-[#8C7662] uppercase tracking-widest font-medium">
            © 2027 Kasun &amp; Udara Wedding Celebration
          </p>
        </div>

      </div>
    </footer>
  );
}
