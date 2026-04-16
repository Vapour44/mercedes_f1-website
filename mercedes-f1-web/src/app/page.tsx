"use client";

import DriverLineup from "@/components/DriverLineup";
import RaceCountdown from "@/components/RaceCountdown";
import RaceCalendar from "@/components/RaceCalendar";
import HeroSection from "@/components/HeroSection";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

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

      {/* Standings Section */}
      <section id="standings" className="w-full py-24 px-4 md:px-8 xl:px-0 max-w-5xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase mb-16 text-center">
          2026 DRIVERS' STANDINGS <span className="opacity-60">(AFTER ROUND 3 - JAPAN GP)</span>
        </h2>
        
        <div className="w-full flex flex-col gap-8">
          {/* P1 Kimi Antonelli */}
          <div className="relative w-full border border-white/5 bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-10 shadow-2xl transition-all hover:bg-black/50 hover:border-white/10">
            {/* Left Decorative Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00A19C] shadow-[0_0_20px_#00A19C]" />
            
            <div className="w-full flex-1 flex flex-col md:flex-row items-center md:justify-between gap-8 pl-4">
              {/* Position */}
              <div className="text-6xl md:text-7xl font-black text-[#00A19C] drop-shadow-[0_0_15px_rgba(0,161,156,0.6)]">
                P1
              </div>
              
              {/* Driver Info */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                  KIMI ANTONELLI
                </h3>
                <div className="flex items-center gap-3 mt-3 text-mercedes-silver text-sm md:text-base font-bold tracking-widest uppercase">
                  <span className="flex items-center gap-1.5 border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">
                    <span className="text-lg leading-none">🇮🇹</span> ITA
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  MERCEDES-BENZ AMG F1
                </div>
              </div>
              
              {/* Points */}
              <div className="flex flex-col items-center md:items-end">
                <div className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter tabular-nums">
                  <AnimatedNumber value={72} />
                </div>
                <div className="text-[#00A19C] font-black tracking-widest uppercase mt-1 text-xl opacity-90">
                  PTS
                </div>
              </div>
            </div>
          </div>

          {/* P2 George Russell */}
          <div className="relative w-full border border-white/5 bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-10 shadow-2xl transition-all hover:bg-black/50 hover:border-white/10">
            {/* Right Decorative Line */}
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#00A19C] shadow-[0_0_20px_#00A19C]" />
            
            <div className="w-full flex-1 flex flex-col md:flex-row items-center md:justify-between gap-8 pr-4">
              {/* Position */}
              <div className="text-6xl md:text-7xl font-black text-[#00A19C] drop-shadow-[0_0_15px_rgba(0,161,156,0.6)]">
                P2
              </div>
              
              {/* Driver Info */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                  GEORGE RUSSELL
                </h3>
                <div className="flex items-center gap-3 mt-3 text-mercedes-silver text-sm md:text-base font-bold tracking-widest uppercase">
                  <span className="flex items-center gap-1.5 border border-white/10 px-2 py-0.5 rounded-sm bg-white/5">
                    <span className="text-lg leading-none">🇬🇧</span> GBR
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  MERCEDES-BENZ AMG F1
                </div>
              </div>
              
              {/* Points */}
              <div className="flex flex-col items-center md:items-end">
                <div className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter tabular-nums">
                  <AnimatedNumber value={63} />
                </div>
                <div className="text-[#00A19C] font-black tracking-widest uppercase mt-1 text-xl opacity-90">
                  PTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
