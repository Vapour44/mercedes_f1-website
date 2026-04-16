"use client";

import { useEffect, useState } from "react";

const RACE_DATE = new Date("2026-05-03T15:00:00").getTime();

export default function RaceCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = RACE_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-6 lg:px-24 py-24 bg-mercedes-obsidian relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-mercedes-silver mb-12 border-l-4 border-petronas-green pl-6">
          Next Race
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1a1a1a]/80 backdrop-blur-xl border border-mercedes-silver/20 rounded-2xl p-8 lg:p-16 gap-12 lg:gap-8 shadow-2xl relative overflow-hidden group transition-all duration-500 hover:border-petronas-green/50 hover:shadow-[0_0_40px_rgba(0,161,155,0.15)]">
          
          {/* Subtle background glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-petronas-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Left: Info */}
          <div className="flex flex-col flex-1 gap-4 z-10 w-full text-center lg:text-left">
            <span className="text-petronas-green font-bold tracking-widest text-sm lg:text-base uppercase flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-ineos-red animate-pulse" />
              Upcoming Event
            </span>
            <h3 className="text-3xl lg:text-4xl text-white font-black uppercase tracking-tight leading-tight">
              FORMULA 1 CRYPTO.COM <br className="hidden lg:block" /> MIAMI GRAND PRIX 2026
            </h3>
            <p className="text-mercedes-silver text-lg uppercase tracking-wider font-medium mt-2">
              Miami International Autodrome
            </p>
            <p className="text-gray-500 font-mono tracking-widest">03 MAY 2026</p>
          </div>

          {/* Right: Countdown */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-8 z-10">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((block, idx) => (
              <div key={idx} className="flex flex-col items-center min-w-[80px] lg:min-w-[100px]">
                <div className="text-5xl lg:text-7xl font-mono font-bold text-petronas-green drop-shadow-[0_0_12px_rgba(0,161,155,0.6)]">
                  {block.value}
                </div>
                <div className="text-xs lg:text-sm font-bold tracking-[0.2em] text-mercedes-silver uppercase mt-2">
                  {block.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
