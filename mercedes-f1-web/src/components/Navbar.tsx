"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navLinks = ["DRIVERS", "SCHEDULE", "STANDINGS"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.toLowerCase());
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Navbar height is 20 (80px), so check around 100px threshold
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      // Handle the case where we are at the very top
      if (window.scrollY === 0) {
        current = "";
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex justify-between items-center px-8 bg-black/70 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl md:text-2xl font-black text-mercedes-silver tracking-tighter uppercase cursor-pointer">
            MERCEDES-AMG F1
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center cursor-pointer">
          {navLinks.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a key={item} href={`#${item.toLowerCase()}`}>
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`text-xs md:text-sm font-semibold tracking-widest uppercase transition-all duration-300 cursor-pointer inline-block ${
                    isActive
                      ? "text-petronas-green drop-shadow-[0_0_8px_rgba(0,161,155,0.8)]"
                      : "text-mercedes-silver hover:text-petronas-green hover:drop-shadow-[0_0_8px_rgba(0,161,155,0.8)]"
                  }`}
                >
                  {item}
                </motion.span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-mercedes-silver hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 w-full bg-black/80 backdrop-blur-md z-40 border-b border-white/10 flex flex-col items-center py-8 gap-6 md:hidden shadow-lg"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`text-lg font-semibold tracking-widest uppercase transition-colors cursor-pointer inline-block ${
                      isActive ? "text-petronas-green" : "text-mercedes-silver hover:text-petronas-green"
                    }`}
                  >
                    {item}
                  </motion.span>
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
