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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#070707] text-[#F3E5AB] overflow-hidden select-none"
        >
          {/* Subtle Background Lighting and Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4A0404]/30 via-[#070707] to-black pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md px-6 py-12 flex flex-col items-center justify-between min-h-[580px] text-center">
            
            {/* Top Seal / Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-[#4A0404]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <span className="font-serif text-xl tracking-wider text-[#D4AF37]">
                  {groomName.charAt(0)} & {brideName.charAt(0)}
                </span>
              </div>
              <p className="mt-4 text-[11px] tracking-[0.35em] uppercase text-[#D4AF37]/80 font-sans">
                Wedding & Homecoming
              </p>
            </motion.div>

            {/* Middle Couple Names & Monogram graphic */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="my-auto space-y-4"
            >
              <h1 className="font-script text-6xl md:text-7xl gold-gradient-text drop-shadow-md">
                {groomName} & {brideName}
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
                <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current opacity-80" />
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
              </div>
              <p className="text-sm font-serif italic text-[#F3E5AB]/70 tracking-wide">
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
                className="group relative px-10 py-3.5 rounded-full bg-gradient-to-r from-[#6B0908] to-[#4A0404] text-[#F3E5AB] border border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:scale-105 hover:bg-[#D4AF37] hover:text-[#4A0404] transition-all duration-300 font-sans text-xs tracking-[0.25em] uppercase font-semibold flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37] group-hover:text-[#4A0404] transition-colors" />
                <span>View Invitation</span>
              </button>
              <span className="text-[10px] tracking-widest uppercase text-stone-400 opacity-60">
                Tap to open & play music
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
