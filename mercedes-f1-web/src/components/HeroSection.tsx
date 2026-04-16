"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-24 py-16 lg:py-0">
      {/* Left Column: Text & CTA */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 z-10 pt-10 lg:pt-0">
        <h1 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-none text-white drop-shadow-lg">
          W17: THE
          <br />
          <span className="text-mercedes-silver">NEW ERA</span>
        </h1>
        
        <p className="text-lg lg:text-2xl text-gray-400 font-medium max-w-xl uppercase tracking-widest border-l-2 border-petronas-green pl-4">
          Engineering the peak of 2026 performance.
        </p>

        <div className="mt-8">
          <button className="px-8 py-4 border border-mercedes-silver text-sm lg:text-base font-bold tracking-widest uppercase transition-all duration-300 ease-out hover:border-petronas-green hover:shadow-[0_0_20px_var(--color-petronas-green)] hover:text-white hover:scale-105 active:scale-95 bg-transparent cursor-pointer">
            Explore Telemetry
          </button>
        </div>
      </div>

      {/* Right Column: Hero Image with Framer Motion */}
      <div className="w-full lg:w-1/2 flex justify-center items-center mt-16 lg:mt-0 relative h-[45vh] lg:h-screen">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // smooth ease-out
          className="relative w-full h-full"
        >
          <Image
            src="/W17.jpg"
            alt="Mercedes W17 F1 Car"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 z-20">
        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-petronas-green animate-bounce"></div>
      </div>
    </section>
  );
}
