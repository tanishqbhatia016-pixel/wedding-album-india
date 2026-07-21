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

        <div className="grid md:grid-cols-3 gap-8">

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

                <p className="text-gray-400 mt-3">
                  {album.description}
                </p>

                <div className="mt-6 flex justify-between items-center">

                  <span className="text-gray-300">
                    {album.size}
                  </span>

                  <Link
                    href={`/albums/${album.slug}`}
                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-full font-bold transition"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}