"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Quote } from "lucide-react";

interface NoteSectionProps {
  note: string;
  groomName: string;
  brideName: string;
}

export default function NoteSection({ note, groomName, brideName }: NoteSectionProps) {
  return (
    <section className="w-full py-20 px-6 bg-[#F5ECE0]/60 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-white/95 border border-[#C5A059]/40 shadow-[0_10px_35px_rgba(197,160,89,0.15)] text-center space-y-6"
        >
          {/* Top Heart Icon */}
          <div className="w-12 h-12 rounded-full border border-[#C5A059]/50 mx-auto flex items-center justify-center bg-[#FAF7F2] shadow-sm">
            <Heart className="w-5 h-5 text-[#C5A059] fill-current" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#7A5826] tracking-wider uppercase">
            A Note from the Couple
          </h3>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8C7662] font-semibold">
            With Love &amp; Gratitude
          </p>

          <div className="relative">
            <p className="font-serif italic text-base sm:text-lg leading-relaxed text-[#4A3728] text-justify sm:text-center">
              "{note}"
            </p>
          </div>

          <div className="pt-4 border-t border-[#C5A059]/30 flex flex-col items-center">
            <span className="font-script text-4xl text-[#8C5E19]">
              {groomName} &amp; {brideName}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#8C7662] mt-1 font-medium">
              With our warmest regards
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
