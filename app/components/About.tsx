"use client";

import { Award, ShieldCheck, HeartHandshake, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#080808] via-black to-[#080808] py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative group">
            <img
              src="/images/hero.jpg.jpg"
              alt="Wedding Album India"
              className="rounded-3xl shadow-2xl border border-yellow-500/20 transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Right Content */}
          <div>

            <p className="uppercase tracking-[8px] text-yellow-400 text-sm">
              About Us
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Crafting Memories
              <br />
              <span className="text-yellow-400">
                That Last Forever
              </span>
            </h2>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              Founded by{" "}
              <span className="font-semibold text-yellow-400">
                Mr. Sandeep Bhatia
              </span>
              , Wedding Album India is dedicated to creating luxurious
              handcrafted wedding albums using premium materials,
              elegant finishes, and modern printing technology.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              With a passion for quality and attention to every detail,
              our founder established the company with the vision of
              preserving life's most precious memories through premium
              handcrafted albums. Today, Wedding Album India proudly
              serves photographers, studios, and families across India,
              delivering timeless craftsmanship and exceptional quality.
            </p>

            {/* Founder Section */}
            <div className="mt-8 border-l-4 border-yellow-400 pl-5">
              <p className="text-sm uppercase tracking-widest text-yellow-400">
                Founder
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Mr. Sandeep Bhatia
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Founder & Managing Director of Wedding Album India,
                committed to delivering premium handcrafted wedding
                albums with unmatched quality, elegant design, and
                customer satisfaction. His dedication and craftsmanship
                continue to inspire every album we create.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex items-center gap-4">
                <Award className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">
                    Premium Quality
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Finest Materials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">
                    Trusted Brand
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Across India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <HeartHandshake className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">
                    Customer First
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Dedicated Support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Star className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">
                    Luxury Finish
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Elegant Design
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <button className="mt-10 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400">
              Explore Collection →
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}