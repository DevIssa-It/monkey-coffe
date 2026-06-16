"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/images/Coffee shop ambience 1.jpg", alt: "Interior Space", className: "md:col-span-2 md:row-span-2" },
    { src: "/images/Coffee shop ambience 2.jpg", alt: "Hands holding coffee", className: "" },
    { src: "/images/Coffee shop ambience 3.jpg", alt: "Plants and cups", className: "" },
    { src: "/images/Coffee shop ambience 4.jpg", alt: "Entrance door", className: "" },
    { src: "/images/Coffee shop ambience 5.jpg", alt: "Storefront", className: "" },
    { src: "/images/Coffee shop ambience 6.jpg", alt: "Bar Counter", className: "" },
  ];

  return (
    <section className="bg-[#F8F7F3] text-[#2A1E17] py-20 px-6 md:px-12" id="gallery">
      <div className="max-w-7xl mx-auto w-full">
        {/* Title & Description Block (Left-Aligned) */}
        <div className="mb-12 max-w-3xl">
          <span className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
            Ambience
          </span>
          <h2 className="text-[28px] md:text-5xl font-serif-custom text-[#302621] mb-6 leading-tight">
            Where Moments Happen
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            A space designed for those who appreciate the finer details. From the natural light that fills our space to the carefully curated seating arrangements, every element is crafted to create an atmosphere of comfort and inspiration.
          </p>
        </div>

        {/* Gallery Grid - Stacks on mobile, Bento on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`relative aspect-square overflow-hidden rounded-2xl bg-[#E5DCD3] group shadow-sm ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none rounded-2xl">
                <p className="text-white font-serif font-medium text-base">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
