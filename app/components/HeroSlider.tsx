"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/album.jpg.jpg",
  "/images/album2.jpg.jpg",
  "/images/album3.jpg.jpg",
  "/images/album4.jpg.jpg",
  "/images/album5.jpg.jpg",
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
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Wedding Album ${index + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2500ms] ${
            current === index
              ? "opacity-100 scale-110"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Tagline */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[8px] text-yellow-400 md:text-sm">
          Every Memory Deserves a Masterpiece
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Wedding Album
          <br />
          <span className="text-yellow-400">
            India
          </span>
        </h1>

        {/* Gold Divider */}
        <div className="mt-8 h-1 w-32 rounded-full bg-yellow-400"></div>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 sm:text-lg md:text-2xl">
          Premium handcrafted wedding albums designed for photographers,
          studios and families who want every special moment preserved
          with timeless elegance and unmatched craftsmanship.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <a
            href="#collections"
            className="rounded-full bg-yellow-500 px-10 py-4 text-lg font-bold text-black shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
          >
            Explore Collection
          </a>

          <a
            href="#contact"
            className="rounded-full border border-yellow-400 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
          >
            Get Quote
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 animate-bounce flex-col items-center">

        <span className="text-3xl text-yellow-400">
          ↓
        </span>

        <span className="mt-2 text-xs uppercase tracking-[5px] text-white">
          Scroll
        </span>

      </div>

    </section>
  );
}