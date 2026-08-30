"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/album1.jpg",
  "/images/album2.jpg",
  "/images/album3.jpg",
  "/images/album4.jpg",
  "/images/album5.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      aria-label="Premium wedding albums from Wedding Album India"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={
            index === 0
              ? "Premium wedding photo album designed and printed by Wedding Album India"
              : `Luxury wedding album design ${index + 1}`
          }
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2500ms] ${
            current === index
              ? "scale-110 opacity-100"
              : "scale-100 opacity-0"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        <p className="mb-6 text-xs font-semibold uppercase tracking-[8px] text-yellow-400 md:text-sm">
          Premium Wedding Album Printing & Designing
        </p>

<h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
  Premium Wedding Album
  <br />
  <span className="text-yellow-400">
    Printing & Designing in Delhi
  </span>
</h1>

        <div className="mt-8 h-1 w-32 rounded-full bg-yellow-400" />

       <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-2xl">
  Wedding Album India creates premium handcrafted wedding albums
  with luxury finishes, high-quality printing and elegant designs.
  We provide wedding album printing and designing for photographers,
  studios and families in Delhi and across India.
</p>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <a
            href="#collections"
            aria-label="Explore our wedding album collection"
            className="rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-black shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Explore Collection
          </a>

          <a
            href="#contact"
            aria-label="Get a quote for a wedding album"
            className="rounded-full border border-yellow-400 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:text-black"
          >
            Get Quote
          </a>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 animate-bounce flex-col items-center">
        <span className="mt-2 text-xs uppercase tracking-[5px] text-white">
          Scroll
        </span>
      </div>
    </section>
  );
}