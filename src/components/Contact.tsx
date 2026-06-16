"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-white text-[#2A1E17] py-24 px-6 md:px-12" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl w-full mx-auto items-start">
        
        {/* Details Column */}
        <div className="flex flex-col justify-start">
          <div className="mb-12">
            <span className="text-[#f97316] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#302621]">
              Come say hello!
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-800 mb-2">Address</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-sans">
                Jl. Kh. A. Dahlan No.3, RW.5, Darat Sekip,<br />
                Kec. Pontianak Kota, Kota Pontianak, Kalimantan Barat<br />
                78117
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                Everyday: 06:00 AM - 02:00 AM
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-sans">
                <a href="tel:+6281234567890" className="hover:text-[#f97316] transition-colors">
                  +628 1234 5678 90
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Photo Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[500px] lg:h-[700px] rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm"
        >
          <Image
            src="/images/Coffee shop at night.jpg"
            alt="Suasana Kedai Kopi"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
