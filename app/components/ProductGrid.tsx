"use client";

import Link from "next/link";
import { albums } from "../data/albums";

export default function ProductGrid() {
  return (
    <section className="bg-[#080808] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[8px]">
            Our Collection
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Premium Wedding Albums
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {albums.map((album) => (
            <div
              key={album.id}
              className="rounded-3xl overflow-hidden bg-[#111] border border-yellow-500/20 hover:border-yellow-400 transition-all duration-500 hover:scale-105"
            >

              <img
                src={album.cover}
                alt={album.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <p className="text-yellow-400 text-sm uppercase">
                  {album.category}
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  {album.title}
                </h3>

                <p className="text-gray-400 mt-3 line-clamp-3">
                  {album.description}
                </p>

                <div className="mt-6">
                  <p className="text-yellow-400 font-semibold mb-2">
                    Available Sizes
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {album.sizes.map((size, index) => (
                      <span
                        key={index}
                        className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-3 py-1 rounded-full text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/albums/${album.slug}`}
                  className="block mt-8 text-center bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-full font-bold transition"
                >
                  View Details
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}