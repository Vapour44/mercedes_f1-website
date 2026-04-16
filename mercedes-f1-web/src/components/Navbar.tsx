"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = ["DRIVERS", "CALENDAR", "TELEMETRY"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 flex justify-between items-center px-8 bg-black/70 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <Link href="/">
        <span className="text-xl md:text-2xl font-black text-mercedes-silver tracking-tighter uppercase cursor-pointer">
          MERCEDES-AMG F1
        </span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 items-center cursor-pointer">
        {navLinks.map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`}>
            <motion.span
              whileHover={{ y: -2 }}
              className="text-xs md:text-sm font-semibold tracking-widest text-mercedes-silver uppercase transition-colors duration-300 hover:text-petronas-green hover:drop-shadow-[0_0_8px_rgba(0,161,155,0.8)] cursor-pointer inline-block"
            >
              {item}
            </motion.span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
