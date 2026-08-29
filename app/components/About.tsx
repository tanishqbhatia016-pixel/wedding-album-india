"use client";

import { Award, ShieldCheck, HeartHandshake, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-gradient-to-b from-[#080808] via-black to-[#080808] py-20 text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}
          <div className="relative group">
            <img
              src="/images/hero.jpg.jpg"
              alt="Luxury handcrafted wedding photo album by Wedding Album India"
              className="rounded-3xl border border-yellow-500/20 shadow-2xl transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div>

            <p className="text-sm uppercase tracking-[8px] text-yellow-400">
              About Wedding Album India
            </p>

            <h2
              id="about-heading"
              className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
            >
              Premium Wedding Albums
              <br />
              <span className="text-yellow-400">
                Made to Preserve Memories
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Founded by{" "}
              <span className="font-semibold text-yellow-400">
                Mr. Sandeep Bhatia
              </span>
              , Wedding Album India creates premium handcrafted wedding
              albums using quality materials, elegant finishes and modern
              photo printing technology.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              We provide premium wedding album designing and printing
              solutions for photographers, studios and families. From
              elegant matt and acrylic covers to luxurious wooden,
              3D and sparkle finishes, our albums are created to preserve
              wedding memories with lasting quality.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Based in Delhi, Wedding Album India serves customers across
              India with professionally crafted photo albums, premium
              printing and attention to detail at every stage of production.
            </p>

            {/* Founder */}
            <div className="mt-8 border-l-4 border-yellow-400 pl-5">
              <p className="text-sm uppercase tracking-widest text-yellow-400">
                Founder
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Mr. Sandeep Bhatia
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Founder & Managing Director of Wedding Album India,
                committed to premium quality, elegant album design and
                customer satisfaction.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="flex items-center gap-4">
                <Award className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">Premium Quality</h4>
                  <p className="text-sm text-gray-400">
                    Quality Materials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">Trusted Service</h4>
                  <p className="text-sm text-gray-400">
                    Serving Across India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <HeartHandshake className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">Customer First</h4>
                  <p className="text-sm text-gray-400">
                    Dedicated Support
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Star className="text-yellow-400" size={34} />
                <div>
                  <h4 className="font-bold">Luxury Finish</h4>
                  <p className="text-sm text-gray-400">
                    Elegant Designs
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#collections"
              className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-400"
            >
              Explore Wedding Albums →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}