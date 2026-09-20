"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface HeroSectionProps {
  data: WeddingData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const scrollToNext = () => {
    const nextElem = document.getElementById("countdown");
    if (nextElem) {
      nextElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 py-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background Graphic / Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6B0908]/25 via-black/80 to-[#0A0A0A] pointer-events-none" />

      {/* Top Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 pt-4"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md">
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
          <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#F3E5AB]">
            We Are Getting Married
          </span>
          <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
        </div>
      </motion.div>

      {/* Main Center Calligraphy Names */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center my-auto space-y-6"
      >
        <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.2)] whitespace-nowrap">
          {data.groom.name} <span className="text-3xl sm:text-5xl md:text-6xl text-[#D4AF37]/90 font-serif italic mx-2">&amp;</span> {data.bride.name}
        </h1>

        <div className="flex items-center justify-center gap-4 max-w-sm mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
          <p className="font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-[#F3E5AB] font-light">
            {data.event.displayDate}
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
        </div>

        <p className="font-sans text-xs md:text-sm tracking-[0.25em] text-[#D4AF37]/80 uppercase">
          {data.event.venue.split(",")[0]}
        </p>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center cursor-pointer"
        onClick={scrollToNext}
      >
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#F3E5AB]/60 font-sans mb-1">
          Scroll to explore
        </span>
        <div className="animate-bounce">
          <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </motion.div>
    </section>
  );
}
