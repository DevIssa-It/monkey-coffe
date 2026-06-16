"use client";

import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Coffee, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsCartOpen, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

        {/* Right Side: Nav links + Cart + Visit Us */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? "text-[#2A1E17]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Cart Icon */}
          <button
            id="cart-toggle-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
            className="relative p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            <ShoppingBag
              className={`h-5 w-5 transition-colors duration-300 ${
                isScrolled ? "text-[#7A4325]" : "text-white"
              }`}
            />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-[#f97316] text-white text-[10px] font-bold flex items-center justify-center leading-none">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          {/* Visit Us Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-[#7A4325] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#63351C] transition-colors duration-300"
          >
            Visit Us
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`h-5 w-5 ${isScrolled ? "text-[#2A1E17]" : "text-white"}`} />
            ) : (
              <MenuIcon className={`h-5 w-5 ${isScrolled ? "text-[#2A1E17]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-0 right-0 bg-[#F8F7F3]/98 backdrop-blur-md border-b border-[#E5DCD3] px-6 py-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2A1E17] font-medium text-sm py-2 border-b border-[#E5DCD3] last:border-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 bg-[#7A4325] text-white px-6 py-3 rounded-full text-sm font-medium text-center hover:bg-[#63351C] transition-colors"
            >
              Visit Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
