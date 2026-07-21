"use client";

import Link from "next/link";

const products = [
  {
    title: "Mini Book",
    size: "6×8",
    image: "/images/mini-album.jpg/cover1.jpg",
    slug: "mini-book",
  },
  {
    title: "Semi Mini Book",
    size: "8×10",
    image: "/images/semini-album.jpg/cover1.jpg",
    slug: "semi-mini-book",
  },
  {
    title: "Matt Cover Album",
    size: "12×36 • 18×24",
    image: "/images/matt-cover.jpg/cover1.jpg",
    slug: "matt-cover",
  },
  {
    title: "3D Cover Album",
    size: "12×36 • 18×24",
    image: "/images/3d-cover.jpg/cover1.jpg",
    slug: "3d-cover",
  },
  {
    title: "Sparkle Cover Album",
    size: "12×36 • 18×24",
    image: "/images/sparkel-cover.jpg/cover1.jpg",
    slug: "sparkle-cover",
  },
  {
    title: "Acrylic Cover Album",
    size: "12×36 • 18×24",
    image: "/images/Acrylic-cover.jpg/cover1.jpg",
    slug: "acrylic-cover",
  },
  {
    title: "Wooden Cover Album",
    size: "12×36 • 18×24",
    image: "/images/wooden-cover.jpg/cover1.jpg",
    slug: "wooden-cover",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#070707] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[8px] text-yellow-400">
          Featured Collection
        </p>

        <h2 className="text-center text-5xl font-bold text-white mt-4">
          Premium Wedding Albums
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {products.map((product) => (

            <div
              key={product.slug}
              className="bg-[#111] rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition duration-500"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover hover:scale-105 transition duration-500"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {product.title}
                </h3>

                <p className="text-yellow-400 mt-3">
                  Available Size
                </p>

                <p className="text-gray-300">
                  {product.size}
                </p>

                <Link
                  href={`/albums/${product.slug}`}
                  className="block mt-8 text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full"
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