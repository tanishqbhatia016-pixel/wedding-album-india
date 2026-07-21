"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-4">

              <Image
                src="/logo/logo.png.png"
                alt="Wedding Album India"
                width={60}
                height={60}
                className="rounded-full"
              />

              <div>

                <h2 className="text-2xl font-bold text-yellow-400">
                  Wedding Album India
                </h2>

                <p className="text-gray-400 text-sm">
                  Premium Luxury Albums
                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-7">
              Creating handcrafted premium wedding albums that preserve
              your memories for generations with elegance and luxury.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#collections" className="hover:text-yellow-400">Collections</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
              <li><a href="#about" className="hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>

            </ul>

          </div>

          {/* Hours */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Business Hours
            </h3>

            <p className="text-gray-400">
              Monday – Saturday
            </p>

            <p className="text-gray-400 mt-2">
              10:00 AM – 7:00 PM
            </p>

            <button className="mt-8 rounded-full bg-yellow-500 px-8 py-3 font-bold text-black hover:bg-yellow-400 transition">

              Get Quote

            </button>

          </div>

        </div>

        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-gray-500">

          © 2026 Wedding Album India • All Rights Reserved

        </div>

      </div>

    </footer>
  );
}