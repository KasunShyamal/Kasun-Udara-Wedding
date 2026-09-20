"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface DressCodeSectionProps {
  dressCode: WeddingData["dressCode"];
}

export default function DressCodeSection({ dressCode }: DressCodeSectionProps) {
  return (
    <section id="dresscode" className="w-full py-20 px-6 bg-[#0E0E0E] text-center relative overflow-hidden">
      <div className="max-w-2xl mx-auto space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase">Attire Guidance</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#D4AF37] tracking-wider uppercase">
            {dressCode.title}
          </h2>
          <div className="w-20 h-0.5 bg-[#6B0908] mx-auto rounded-full" />
          <p className="font-serif italic text-sm sm:text-base text-[#F3E5AB]/80 max-w-md mx-auto">
            {dressCode.description}
          </p>
        </motion.div>

        {/* Color Palette Swatches */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 pt-2"
        >
          {dressCode.palette.map((color, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-2 group">
              <div
                className="w-14 h-14 rounded-full border-2 border-[#D4AF37]/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: color.hex }}
              />
              <span className="font-sans text-[10px] tracking-wider uppercase text-stone-400">
                {color.name}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
