"use client";

import React from "react";
import { Coffee, Wifi, Heart, Clock } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: Coffee,
    title: "Crafted Beverages",
    desc: "Every drink is meticulously crafted by our expert baristas using premium beans",
  },
  {
    icon: Wifi,
    title: "Cozy Workspace",
    desc: "Fast WiFi, comfortable seating, and the perfect ambiance for productivity",
  },
  {
    icon: Heart,
    title: "All-Day Dining",
    desc: "From breakfast pastries to evening treats, we've got you covered",
  },
  {
    icon: Clock,
    title: "Open Late",
    desc: "Extended hours to accommodate your schedule and lifestyle",
  },
];

export default function Features() {
  return (
    <section className="bg-[#F8F7F3] text-[#2A1E17] py-24 px-6 md:px-12" id="features">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#f97316] text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            What We Serve
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#302621] mb-4">
            More Than Coffee
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto w-full">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Wrapper */}
                <div className="w-20 h-20 rounded-full bg-[#efebe4] flex items-center justify-center mb-6 text-[#6b4c3a]">
                  <Icon className="h-8 w-8 stroke-[2]" />
                </div>
                <h3 className="text-xl font-serif text-[#302621] mb-3">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
