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
      <section id="calendar" className="w-full">
        <RaceCalendar />
      </section>
    </main>
  );
}
