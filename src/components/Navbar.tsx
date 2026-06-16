"use client";

import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center px-6 md:px-12 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#E5DCD3] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-center leading-none select-none py-1">
          <Coffee className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-[#7A4325]" : "text-white"}`} />
          <span className={`font-serif text-[10px] font-black tracking-[0.15em] uppercase mt-1 transition-colors duration-300 ${isScrolled ? "text-[#7A4325]" : "text-white"}`}>
            COFFEE
          </span>
          <span className={`font-sans text-[7px] font-bold tracking-[0.25em] uppercase mt-0.5 transition-colors duration-300 ${isScrolled ? "text-[#7A4325]/70" : "text-white/70"}`}>
            — SHOP —
          </span>
        </a>

        {/* Visit Us Button */}
        <a
          href="#contact"
          className="bg-[#7A4325] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#63351C] transition-colors duration-300"
        >
          Visit Us
        </a>
      </div>
    </header>
  );
}
