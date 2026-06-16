"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MENU_ITEMS = [
  {
    id: "classic_espresso",
    name: "Classic Espresso",
    category: "Coffee",
    desc: "Rich, bold, and perfectly balanced single-origin espresso",
    image: "/images/Classic Espresso.jpg",
  },
  {
    id: "signature_latte",
    name: "Signature Latte",
    category: "Coffee",
    desc: "Smooth espresso with velvety steamed milk and latte art",
    image: "/images/Signature Latte.jpg",
  },
  {
    id: "creamy_espresso",
    name: "Creamy Espresso",
    category: "Coffee",
    desc: "Rich double shot espresso with a splash of cream",
    image: "/images/Artisan Cappuccino.jpg",
  },
  {
    id: "cold_brew",
    name: "Cold Brew Delight",
    category: "Coffee",
    desc: "Smooth cold brew with house-made vanilla cream",
    image: "/images/Cold Brew Delight.jpg",
  },
  {
    id: "specialty_drip",
    name: "Specialty Drip Cafe",
    category: "Coffee",
    desc: "Single origin drip coffee brewed with care",
    image: "/images/Coffee shop ambience 5.jpg",
  },
  {
    id: "breakfast_blend",
    name: "Breakfast Blend",
    category: "Coffee",
    desc: "Smooth and balanced coffee perfect for the morning",
    image: "/images/Vanilla Bean Latte.jpg",
  },
];

export default function Menu() {
  return (
    <section className="bg-white text-[#2A1E17] py-20 px-6" id="menu">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Our Craft
          </span>
          <h2 className="text-3xl md:text-5xl font-serif-custom mb-4 text-[#2A1E17]">
            Highlighted Signature
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            From classic espresso to signature blends, each cup tells a story
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto w-full">
          {MENU_ITEMS.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-2xl mb-5 aspect-[4/5] bg-gray-100 relative shadow-sm">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Body */}
              <div className="px-1 flex flex-col">
                <span className="text-[#f97316] text-xs font-semibold tracking-wider uppercase mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif mb-2 text-[#2A1E17] leading-tight">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center pt-6">
          <button
            onClick={() => alert("Our full menu contains over 40 varieties. This button is successfully connected!")}
            className="rounded-full bg-[#7A4325] hover:bg-[#63351C] text-white font-bold text-xs px-8 py-3.5 tracking-wider uppercase transition-colors shadow-md shadow-[#7A4325]/10"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
