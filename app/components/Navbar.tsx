"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5">

        <a href="#home" className="flex items-center gap-3">

          <Image
            src="/logo/logo.png.png"
            alt="Logo"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>

            <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
              Wedding Album India
            </h1>

            <p className="text-xs tracking-[3px] text-gray-300 uppercase">
              Premium Luxury Albums
            </p>

          </div>

        </a>

        {/* Desktop */}

        <ul className="hidden lg:flex gap-8 text-white">

          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#collections" className="hover:text-yellow-400">Collections</a></li>
          <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>

        </ul>

        <button className="hidden lg:block rounded-full bg-yellow-500 px-6 py-3 font-bold text-black hover:bg-yellow-400 transition">
          Get Quote
        </button>

        {/* Mobile */}

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>

      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl">

          <a href="#home" className="block p-5 border-b border-gray-800 text-white">Home</a>
          <a href="#collections" className="block p-5 border-b border-gray-800 text-white">Collections</a>
          <a href="#gallery" className="block p-5 border-b border-gray-800 text-white">Gallery</a>
          <a href="#about" className="block p-5 border-b border-gray-800 text-white">About</a>
          <a href="#contact" className="block p-5 text-white">Contact</a>

        </div>
      )}

    </nav>
  );
}