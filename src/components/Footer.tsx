"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2A1A0B] w-full pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand Column */}
          <div className="max-w-sm">
            <h2 className="text-4xl md:text-5xl font-serif text-[#f4f1ec] mb-4 leading-none">
              Monkey Coffee
            </h2>
            <p className="text-[#d4c9bd] text-sm leading-relaxed font-sans">
              Crafting moments, one cup at a time.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
            <div>
              <h3 className="text-[#f4f1ec] text-xs font-semibold tracking-widest uppercase mb-6">
                Menu
              </h3>
              <ul className="space-y-4 text-[#d4c9bd] text-sm font-sans" role="list">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Our Signatures</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Non Coffee</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Food</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pastry</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-[#f4f1ec] text-xs font-semibold tracking-widest uppercase mb-6">
                Connect
              </h3>
              <ul className="space-y-4 text-[#d4c9bd] text-sm font-sans" role="list">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Whatsapp</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#4a3628] pt-8 flex items-center justify-between">
          <p className="text-[#a89b8d] text-sm font-sans">
            &copy; {currentYear} Monkey Coffee. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
