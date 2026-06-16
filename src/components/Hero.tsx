"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Zoom */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 scale-110 md:scale-100 transition-transform duration-700"
        style={{
          backgroundImage: "url('/images/Hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif-custom text-white mb-6 leading-tight">
            Find Your Coffee, <br /> Bar &amp; Dining <br /> Escape
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-200 text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          A cozy space to sip, work, and connect.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#menu"
            className="inline-block bg-white text-[#2A1E17] px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-gray-100 transition-colors duration-300"
          >
            CHECK OUR MENUS
          </a>
        </motion.div>
      </div>

      {/* Elegant Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDFBF7] to-transparent z-20 pointer-events-none" />
    </section>
  );
}
