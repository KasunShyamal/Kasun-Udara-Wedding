"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: isClient ? timeLeft.days : 0 },
    { label: "Hours", value: isClient ? timeLeft.hours : 0 },
    { label: "Minutes", value: isClient ? timeLeft.minutes : 0 },
    { label: "Seconds", value: isClient ? timeLeft.seconds : 0 },
  ];

  return (
    <section id="countdown" className="w-full py-24 px-6 bg-gradient-to-b from-[#0A0A0A] via-[#1A0303] to-[#0A0A0A] text-center relative overflow-hidden">
      {/* Decorative center halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Title & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#D4AF37] tracking-wider uppercase">
            Counting Down To Forever
          </h2>
          <div className="flex items-center justify-center gap-3 text-[#F3E5AB]/80 font-serif text-sm italic">
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
            <span>Our unforgettable celebration begins in</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-current" />
          </div>
        </motion.div>

        {/* Time Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
        >
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center justify-center p-6 bg-black/70 backdrop-blur-md rounded-2xl border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group hover:border-[#D4AF37] transition-all duration-300"
            >
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#D4AF37]/80">
                {unit.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
