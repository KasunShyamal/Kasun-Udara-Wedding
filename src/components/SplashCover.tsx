"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

interface SplashCoverProps {
  isOpen: boolean;
  onOpen: () => void;
  groomName: string;
  brideName: string;
}

export default function SplashCover({ isOpen, onOpen, groomName, brideName }: SplashCoverProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2] text-[#2C241E] overflow-hidden select-none"
        >
          {/* Subtle Background Lighting and Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F4EDE2] via-[#FAF7F2] to-[#EFE7D8]/60 pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center justify-between min-h-[580px] text-center">
            
            {/* Top Seal / Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#C5A059]/60 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_rgba(197,160,89,0.18)]">
                <span className="font-serif text-xl tracking-wider text-[#8C5E19]">
                  {groomName.charAt(0)} &amp; {brideName.charAt(0)}
                </span>
              </div>
              <p className="mt-4 text-[11px] tracking-[0.35em] uppercase text-[#8C5E19] font-sans font-medium">
                Wedding &amp; Homecoming
              </p>
            </motion.div>

            {/* Middle Couple Names & Monogram graphic */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="my-auto space-y-4"
            >
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl gold-gradient-text drop-shadow-sm whitespace-nowrap">
                {groomName} &amp; {brideName}
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]/60" />
                <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-current opacity-80" />
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]/60" />
              </div>
              <p className="text-sm font-serif italic text-[#6B5745] tracking-wide">
                Together with their families, cordially invite you
              </p>
            </motion.div>

            {/* Bottom Button to Open */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full flex flex-col items-center space-y-3"
            >
              <button
                onClick={onOpen}
                className="group relative px-10 py-3.5 rounded-full bg-gradient-to-r from-[#B38728] via-[#C5A059] to-[#9C7020] text-white border border-[#C5A059] shadow-[0_8px_25px_rgba(197,160,89,0.3)] hover:scale-105 hover:shadow-[0_12px_30px_rgba(197,160,89,0.4)] transition-all duration-300 font-sans text-xs tracking-[0.25em] uppercase font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#FFF6D1] transition-transform group-hover:rotate-12" />
                <span>View Invitation</span>
              </button>
              <span className="text-[10px] tracking-widest uppercase text-[#8C7662]">
                Tap to open &amp; play music
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
