"use client";

import React, { useState } from "react";
import SplashCover from "@/components/SplashCover";
import MusicPlayer from "@/components/MusicPlayer";
import FloatingParticles from "@/components/FloatingParticles";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import CoupleSection from "@/components/CoupleSection";
import NoteSection from "@/components/NoteSection";
import EventDetails from "@/components/EventDetails";
import DressCodeSection from "@/components/DressCodeSection";
import RsvpSection from "@/components/RsvpSection";
import Footer from "@/components/Footer";
import { weddingData } from "@/data/weddingData";

export default function WeddingPage() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    setIsPlayingMusic(true);
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic((prev) => !prev);
  };

  return (
    <main className="min-h-screen bg-[#080808] text-[#F3E5AB] relative overflow-hidden">
      {/* 1. Splash Screen / Envelope Cover */}
      <SplashCover
        isOpen={isCoverOpen}
        onOpen={handleOpenInvitation}
        groomName={weddingData.groom.name}
        brideName={weddingData.bride.name}
      />

      {/* 2. Floating Ambient Particles */}
      <FloatingParticles />

      {/* 3. Floating Background Music Controller */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
        audioSrc={weddingData.musicUrl}
      />

      {/* 4. Main Invitation Content */}
      <div className={`transition-opacity duration-1000 ${isCoverOpen ? "opacity-100" : "opacity-0"}`}>
        <HeroSection data={weddingData} />
        <CountdownTimer targetDate={weddingData.event.date} />
        <CoupleSection groom={weddingData.groom} bride={weddingData.bride} />
        <NoteSection
          note={weddingData.loveStoryNote}
          groomName={weddingData.groom.name}
          brideName={weddingData.bride.name}
        />
        <EventDetails event={weddingData.event} />
        <DressCodeSection dressCode={weddingData.dressCode} />
        <RsvpSection event={weddingData.event} />
        <Footer data={weddingData} />
      </div>
    </main>
  );
}
