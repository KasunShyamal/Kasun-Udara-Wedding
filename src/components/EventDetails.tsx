"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Calendar as CalendarIcon, ExternalLink } from "lucide-react";
import { WeddingData } from "@/data/weddingData";

interface EventDetailsProps {
  event: WeddingData["event"];
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <section id="details" className="w-full py-24 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] tracking-wider uppercase">
            Celebration Details
          </h2>
          <div className="w-24 h-0.5 bg-[#6B0908] mx-auto rounded-full" />
          <p className="font-serif italic text-[#F3E5AB]/80 text-base max-w-lg mx-auto">
            All the key arrangements you need to celebrate our special day with us.
          </p>
        </motion.div>

        {/* Cathedral Arch Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl mx-auto rounded-t-[280px] rounded-b-3xl border-2 border-[#D4AF37]/60 bg-gradient-to-b from-[#1E0505] via-black to-[#120303] p-8 sm:p-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-8"
        >
          {/* Header Inside Card */}
          <div className="pt-12 space-y-2">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#D4AF37]">
              The Ceremony & Reception
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F3E5AB] font-light">
              {event.title}
            </h3>
            <div className="w-16 h-0.5 bg-[#D4AF37]/50 mx-auto" />
          </div>

          {/* Date & Time Blocks */}
          <div className="space-y-6 py-4 border-y border-[#D4AF37]/20 font-serif">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase tracking-[0.3em] text-stone-400 font-sans">
                {event.dayOfWeek}
              </span>
              <span className="text-2xl sm:text-3xl font-normal text-[#D4AF37]">
                {event.displayDate}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-black/40 text-sm tracking-wider text-[#F3E5AB]">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* Location Block */}
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#4A0404]/50 border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#F3E5AB]">
              {event.venue}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-stone-400 max-w-sm mx-auto leading-relaxed">
              {event.venueAddress}
            </p>
          </div>

          {/* Google Maps Button */}
          <div className="pt-4">
            <a
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#6B0908] hover:bg-[#8B0D0B] text-white border border-[#D4AF37]/50 shadow-lg hover:scale-105 transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
