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
    <section id="rsvp" className="w-full py-24 px-6 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-xl mx-auto space-y-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#7A5826] tracking-wider uppercase">
            RSVP
          </h2>
          <div className="w-20 h-0.5 bg-[#C5A059] mx-auto rounded-full" />
          <p className="font-serif italic text-[#6B5745] text-sm sm:text-base">
            We eagerly look forward to celebrating with you! Kindly let us know of your presence.
          </p>
        </motion.div>

        {/* RSVP Card Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-[#C5A059]/40 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(197,160,89,0.18)]"
        >
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C5A059] flex items-center justify-center mx-auto text-[#8C5E19]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#7A5826]">
                Thank You, {formData.name}!
              </h3>
              <p className="font-sans text-sm text-[#6B5745]">
                Your response has been received with love. We can't wait to see you!
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs uppercase tracking-widest text-[#8C5E19] font-semibold underline pt-4 hover:text-[#7A5826]"
              >
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7A5826] mb-2 font-semibold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun Fernando"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-[#2C241E] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                />
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7A5826] mb-2 font-semibold">
                  Will You Attend? *
                </label>
                <select
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-[#2C241E] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
                >
                  <option value="yes">Joyfully Accepts (I will be there!)</option>
                  <option value="no">Regretfully Declines (Sending blessings)</option>
                </select>
              </div>

              {/* Number of Guests */}
              {formData.attending === "yes" && (
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-[#7A5826] mb-2 font-semibold">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-[#2C241E] focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm"
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
                <label className="block text-xs uppercase tracking-[0.2em] text-[#7A5826] mb-2 font-semibold">
                  Warm Wishes / Message
                </label>
                <textarea
                  rows={3}
                  maxLength={300}
                  placeholder="Leave a lovely wish or blessing for Kasun & Udara..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#C5A059]/40 rounded-xl px-4 py-3 text-[#2C241E] placeholder-stone-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B38728] via-[#C5A059] to-[#9C7020] hover:shadow-[0_10px_25px_rgba(197,160,89,0.35)] text-white border border-[#C5A059] font-semibold text-xs tracking-[0.25em] uppercase shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#FFF6D1]" />
                <span>Confirm RSVP with Love</span>
              </button>

            </form>
          )}

          {/* Add to Google Calendar Option */}
          <div className="mt-6 pt-6 border-t border-[#C5A059]/30">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F3EBE0] text-[#7A5826] border border-[#C5A059]/50 text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#8C5E19]" />
              <span>Add to Google Calendar</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
