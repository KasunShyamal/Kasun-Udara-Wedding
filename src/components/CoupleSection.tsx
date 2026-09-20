"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface CoupleSectionProps {
  groom: WeddingData["groom"];
  bride: WeddingData["bride"];
  coupleImage?: string;
}

export default function CoupleSection({ groom, bride, coupleImage = "/couple.png" }: CoupleSectionProps) {
  return (
    <section className="w-full py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] tracking-wider uppercase">
            The Happy Couple
          </h2>
          <div className="w-24 h-0.5 bg-[#6B0908] mx-auto rounded-full" />
          <p className="font-serif italic text-[#F3E5AB]/80 text-base max-w-lg mx-auto">
            "What began as a shared glance has blossomed into an eternal bond of love & friendship."
          </p>
        </motion.div>

        {/* Unified Portrait & Couple Names */}
        <div className="flex flex-col items-center space-y-12">
          
          {/* Centered Arched Frame for Kasun & Udara */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-t-[180px] rounded-b-3xl overflow-hidden border-2 border-[#D4AF37]/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group"
          >
            <img
              src={coupleImage}
              alt={`${groom.name} & ${bride.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Groom and Bride Details Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full text-center max-w-3xl"
          >
            {/* Groom Details */}
            <div className="space-y-2 p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/20 backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] tracking-wide">
                {groom.fullName}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#F3E5AB]">
                {groom.role}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-stone-400">
                {groom.parents}
              </p>
            </div>

            {/* Bride Details */}
            <div className="space-y-2 p-6 rounded-2xl bg-black/40 border border-[#D4AF37]/20 backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#D4AF37] tracking-wide">
                {bride.fullName}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#F3E5AB]">
                {bride.role}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-stone-400">
                {bride.parents}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
