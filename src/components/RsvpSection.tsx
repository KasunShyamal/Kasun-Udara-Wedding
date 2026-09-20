"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Heart, Send, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { WeddingData } from "@/data/weddingData";

interface RsvpSectionProps {
  event: WeddingData["event"];
}

export default function RsvpSection({ event }: RsvpSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Fire celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#6B0908", "#FFFFFF", "#F3E5AB"],
    });
  };

  // Google Calendar URL generator
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    event.calendarDetails.title
  )}&dates=${event.calendarDetails.startDate}/${event.calendarDetails.endDate}&details=${encodeURIComponent(
    event.calendarDetails.description
  )}&location=${encodeURIComponent(event.calendarDetails.location)}&sf=true&output=xml`;

  return (
    <section id="rsvp" className="w-full py-24 px-6 bg-[#080808] relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] tracking-wider uppercase">
            RSVP
          </h2>
          <div className="w-24 h-0.5 bg-[#6B0908] mx-auto rounded-full" />
          <p className="font-serif italic text-[#F3E5AB]/80 text-sm sm:text-base">
            We eagerly look forward to celebrating with you! Kindly let us know of your presence.
          </p>
        </motion.div>

        {/* RSVP Card Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/90 border border-[#D4AF37]/50 rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        >
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4A0404]/50 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#D4AF37]">
                Thank You, {formData.name}!
              </h3>
              <p className="font-sans text-sm text-stone-300">
                Your response has been received with love. We can't wait to see you!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#D4AF37] underline pt-4 hover:text-[#F3E5AB]"
              >
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Fernando"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#121212] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-[#F3E5AB] placeholder-stone-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  Will You Attend? *
                </label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full bg-[#121212] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                >
                  <option value="yes">Joyfully Accepts (I will be there!)</option>
                  <option value="no">Regretfully Declines (Sending blessings)</option>
                </select>
              </div>

              {/* Number of Guests */}
              {formData.attending === "yes" && (
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#121212] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-[#F3E5AB] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              )}

              {/* Message to Couple */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-2 font-medium">
                  Warm Wishes / Message
                </label>
                <textarea
                  rows={3}
                  maxLength={300}
                  placeholder="Leave a lovely wish or blessing for Kasun & Udara..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#121212] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-[#F3E5AB] placeholder-stone-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6B0908] to-[#4A0404] hover:from-[#8B0D0B] hover:to-[#5A0505] text-[#F3E5AB] border border-[#D4AF37] font-semibold text-xs tracking-[0.25em] uppercase shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>Confirm RSVP with Love</span>
              </button>

            </form>
          )}

          {/* Add to Google Calendar Option */}
          <div className="mt-6 pt-6 border-t border-[#D4AF37]/20">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" />
              <span>Add to Google Calendar</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
