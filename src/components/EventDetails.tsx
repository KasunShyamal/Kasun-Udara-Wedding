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
    <section id="details" className="w-full py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#7A5826] tracking-wider uppercase">
            Celebration Details
          </h2>
          <div className="w-20 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="font-serif italic text-[#6B5745] text-base max-w-lg mx-auto">
            All the key arrangements you need to celebrate our special day with us.
          </p>
        </motion.div>

        {/* Cathedral Arch Event Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl mx-auto rounded-t-[280px] rounded-b-3xl border-2 border-[#C5A059] bg-gradient-to-b from-[#FFFDF9] via-white to-[#F7EFE4] p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(197,160,89,0.18)] space-y-8"
        >
          {/* Header Inside Card */}
          <div className="pt-12 space-y-2">
            <span className="text-[11px] font-sans tracking-[0.3em] uppercase text-[#8C5E19] font-semibold">
              The Ceremony &amp; Reception
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3728] font-normal">
              {event.title}
            </h3>
            <div className="w-16 h-0.5 bg-[#C5A059]/60 mx-auto" />
          </div>

          {/* Date & Time Blocks */}
          <div className="space-y-6 py-4 border-y border-[#C5A059]/30 font-serif">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C7662] font-sans font-semibold">
                {event.dayOfWeek}
              </span>
              <span className="text-2xl sm:text-3xl font-normal text-[#7A5826]">
                {event.displayDate}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#C5A059]/40 bg-white/80 shadow-sm text-sm tracking-wider text-[#4A3728]">
              <Clock className="w-4 h-4 text-[#8C5E19]" />
              <span className="font-sans text-xs font-semibold">{event.time}</span>
            </div>
          </div>

          {/* Location Block */}
          <div className="space-y-3">
            <div className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#C5A059]/50 flex items-center justify-center mx-auto text-[#8C5E19] shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#3D2E22]">
              {event.venue}
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#7A695A] max-w-sm mx-auto leading-relaxed font-normal">
              {event.venueAddress}
            </p>
          </div>

          {/* Google Maps Button */}
          <div className="pt-4">
            <a
              href={event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B38728] via-[#C5A059] to-[#9C7020] text-white border border-[#C5A059] shadow-[0_6px_20px_rgba(197,160,89,0.25)] hover:scale-105 hover:shadow-[0_10px_25px_rgba(197,160,89,0.35)] transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] font-semibold"
            >
              <MapPin className="w-4 h-4 text-[#FFF6D1]" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
