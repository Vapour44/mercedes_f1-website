"use client";

import { useMemo } from "react";
import { raceData } from "@/data/raceData";

export default function RaceCalendar() {
  const currentDate = new Date(); // Environment states it's around 2026-04-16

  // Annotate the calendar data with status
  const annotatedCalendar = useMemo(() => {
    let nextRaceFound = false;

    return raceData.map((race) => {
      const raceDate = new Date(race.date);
      let status: "Completed" | "Next" | "Upcoming" = "Upcoming";

      if (raceDate < currentDate) {
        status = "Completed";
      } else if (!nextRaceFound) {
        status = "Next";
        nextRaceFound = true;
      }

      return { ...race, status };
    });
  }, [currentDate]);

  return (
    <section className="w-full px-6 lg:px-24 py-24 bg-mercedes-obsidian relative z-10 border-t border-mercedes-silver/10">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-mercedes-silver mb-12 border-l-4 border-petronas-green pl-6">
          2026 Race Calendar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {annotatedCalendar.map((race) => {
            const isCompleted = race.status === "Completed";
            const isNext = race.status === "Next";

            return (
              <div
                key={race.round}
                className={`relative flex flex-col p-6 rounded-xl transition-all duration-300
                  ${
                    isCompleted
                      ? "opacity-50 bg-[#0a0a0a] border border-mercedes-silver/10 grayscale hover:grayscale-0"
                      : isNext
                      ? "bg-[#1a1a1a] border-petronas-green shadow-[0_0_20px_rgba(0,161,155,0.4)] animate-[pulse_4s_ease-in-out_infinite]"
                      : "bg-[#1a1a1a] border border-mercedes-silver/20 hover:border-mercedes-silver/60"
                  }
                `}
                style={isNext ? { borderWidth: '2px' } : {}}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-center mb-6">
                  <span className={`font-mono text-xs lg:text-sm font-bold tracking-widest ${isNext ? "text-petronas-green" : "text-mercedes-silver"}`}>
                    R{race.round.toString().padStart(2, '0')}
                  </span>
                  {isNext && (
                    <span className="text-[10px] font-black tracking-widest text-[#1a1a1a] bg-petronas-green px-2 py-1 rounded-sm uppercase">
                      Next Race
                    </span>
                  )}
                  {isCompleted && (
                    <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                      Finished
                    </span>
                  )}
                </div>

                {/* Country & Circuit */}
                <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 ${isCompleted ? 'text-gray-400' : 'text-white'}`}>
                  {race.country}
                </h3>
                <p className="text-xs text-gray-500 font-medium tracking-wide flex-1 mb-6">
                  {race.title || race.circuit}
                </p>

                {/* Date */}
                <div className="mt-auto border-t border-mercedes-silver/10 pt-4">
                  <span className={`font-mono text-sm tracking-[0.2em] font-bold ${isNext ? "text-petronas-green" : "text-gray-400"}`}>
                    {race.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
