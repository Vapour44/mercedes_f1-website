"use client";

import { useEffect, useState } from "react";
import { raceData, type Race } from "@/data/raceData";

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day} ${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

type TimeLeft = { days: string; hours: string; minutes: string; seconds: string };

export default function RaceCountdown() {
  const [nextRace, setNextRace] = useState<Race | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const now = new Date();
    const upcoming = raceData.find(
      (race) => new Date(race.date + "T15:00:00Z") > now
    ) ?? null;
    setNextRace(upcoming);
  }, []);

  useEffect(() => {
    if (!nextRace) return;

    const raceTime = new Date(nextRace.date + "T15:00:00Z").getTime();

    const tick = () => {
      const distance = raceTime - Date.now();

      if (distance <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const pad = (n: number) => String(n).padStart(2, "0");
      setTimeLeft({
        days: pad(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: pad(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [nextRace]);

  const raceTitle = nextRace
    ? nextRace.title ?? `FORMULA 1 ${nextRace.country.toUpperCase()} GRAND PRIX 2026`
    : "—";

  const raceCircuit = nextRace?.circuit ?? "—";
  const raceDate = nextRace ? formatDate(nextRace.date) : "—";

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
              {raceTitle}
            </h3>
            <p className="text-mercedes-silver text-lg uppercase tracking-wider font-medium mt-2">
              {raceCircuit}
            </p>
            <p className="text-gray-500 font-mono tracking-widest">{raceDate}</p>
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
                <div className="text-5xl lg:text-7xl font-mono font-bold text-teal-400 drop-shadow-[0_0_12px_rgba(0,161,155,0.6)]">
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
