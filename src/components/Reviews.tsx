"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Reviews() {
  return (
    <section className="bg-white text-[#2A1E17] py-16 px-6" id="reviews">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Stars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-1.5 text-[#F15E01]"
          aria-label="5 out of 5 stars"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-[#F15E01] stroke-none" />
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl lg:text-4xl font-normal leading-tight text-[#2A1E17]"
        >
          Loved by Coffee Lovers &amp; Creatives
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#7C6E65] text-xs md:text-sm font-sans"
        >
          Top-rated hangout spot in the city
        </motion.p>
      </div>
    </section>
  );
}
