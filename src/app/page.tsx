import React from "react";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <Reviews />
        <Menu />
        <Features />
        <Gallery />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
