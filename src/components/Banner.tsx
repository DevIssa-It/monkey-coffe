"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="bg-[#F8F7F3] text-[#2A1E17] py-24 px-6 md:px-12 relative overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <span className="text-[#f97316] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8 block">
          About Us
        </span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[28px] md:text-5xl lg:text-6xl font-serif-custom text-[#302621] leading-tight md:leading-[1.3] mb-8 md:mb-10"
        >
          A place to connect, relax, <br />
          and create moments.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-500 text-sm md:text-base leading-relaxed md:leading-loose max-w-3xl mx-auto"
        >
          At Monkey Coffee, we believe every cup is an invitation to slow down and savor life's simple pleasures. Whether you're meeting a friend, working on your next big idea, or simply enjoying a quiet moment alone, our doors are open to those who appreciate the art of a well-crafted brew and the warmth of genuine community.
        </motion.p>
      </div>
    </section>
  );
}
