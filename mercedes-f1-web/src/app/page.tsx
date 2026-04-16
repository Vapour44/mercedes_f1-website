"use client";

import DriverLineup from "@/components/DriverLineup";
import RaceCountdown from "@/components/RaceCountdown";
import RaceCalendar from "@/components/RaceCalendar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-mercedes-obsidian text-mercedes-silver min-h-screen flex flex-col items-center w-full overflow-hidden pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Driver Lineup Section */}
      <section id="drivers" className="w-full">
        <DriverLineup />
      </section>

      {/* Race Countdown Section */}
      <RaceCountdown />

      {/* Race Calendar Section */}
      <section id="schedule" className="w-full">
        <RaceCalendar />
      </section>

      {/* Standings Section (Placeholder) */}
      <section id="standings" className="w-full py-20 flex justify-center items-center h-64 border-t border-white/10">
        <h2 className="text-2xl md:text-4xl font-black text-mercedes-silver tracking-tighter uppercase opacity-50">
          STANDINGS (COMING SOON)
        </h2>
      </section>
    </main>
  );
}
