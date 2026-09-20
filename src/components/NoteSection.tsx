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
    <section className="w-full py-20 px-6 bg-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-black/80 border border-[#D4AF37]/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center space-y-6"
        >
          {/* Top Heart Icon */}
          <div className="w-12 h-12 rounded-full border border-[#D4AF37]/40 mx-auto flex items-center justify-center bg-[#4A0404]/30">
            <Heart className="w-5 h-5 text-[#D4AF37] fill-current" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] tracking-wider uppercase">
            A Note from the Couple
          </h3>
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-stone-400">
            With Love & Gratitude
          </p>

          <div className="relative">
            <p className="font-serif italic text-base sm:text-lg leading-relaxed text-[#F3E5AB]/90 text-justify sm:text-center">
              "{note}"
            </p>
          </div>

          <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col items-center">
            <span className="font-script text-3xl text-[#D4AF37]">
              {groomName} & {brideName}
            </span>
            <span className="text-xs uppercase tracking-widest text-stone-400 mt-1">
              With our warmest regards
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
