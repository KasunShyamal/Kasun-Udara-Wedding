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
    <section className="w-full py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#7A5826] tracking-wider uppercase">
            The Happy Couple
          </h2>
          <div className="w-20 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="font-serif italic text-[#6B5745] text-base max-w-lg mx-auto">
            "What began as a shared glance has blossomed into an eternal bond of love &amp; friendship."
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
            className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] rounded-t-[180px] rounded-b-3xl overflow-hidden border-2 border-[#C5A059] shadow-[0_15px_40px_rgba(197,160,89,0.22)] group bg-white"
          >
            <img
              src={coupleImage}
              alt={`${groom.name} & ${bride.name}`}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
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
            <div className="space-y-2 p-6 rounded-2xl bg-white/90 border border-[#C5A059]/30 shadow-[0_4px_20px_rgba(197,160,89,0.1)] backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#7A5826] tracking-wide">
                {groom.fullName}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C5E19] font-semibold">
                {groom.role}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#7A695A]">
                {groom.parents}
              </p>
            </div>

            {/* Bride Details */}
            <div className="space-y-2 p-6 rounded-2xl bg-white/90 border border-[#C5A059]/30 shadow-[0_4px_20px_rgba(197,160,89,0.1)] backdrop-blur-sm">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#7A5826] tracking-wide">
                {bride.fullName}
              </h3>
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#8C5E19] font-semibold">
                {bride.role}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#7A695A]">
                {bride.parents}
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
