"use client";

const products = [
  {
    title: "Mini Book",
    size: "6×8",
    image: "/images/products/mini-book/cover.jpg",
  },
  {
    title: "Semi Mini Book",
    size: "8×10",
    image: "/images/products/semi-mini-book/cover.jpg",
  },
  {
    title: "Matt Cover Album",
    size: "12×36 • 18×24",
    image: "/images/products/matt-cover/cover.jpg",
  },
  {
    title: "3D Cover Album",
    size: "12×36 • 18×24",
    image: "/images/products/3d-cover/cover.jpg",
  },
  {
    title: "Sparkle Cover Album",
    size: "12×36 • 18×24",
    image: "/images/products/sparkle-cover/cover.jpg",
  },
  {
    title: "Acrylic Cover Album",
    size: "12×36 • 18×24",
    image: "/images/products/acrylic-cover/cover.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="bg-[#070707] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[8px] text-yellow-400 mb-4">
          Featured Products
        </p>

        <h2 className="text-center text-5xl md:text-6xl font-bold text-white">
          Premium Wedding Album Collection
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          Crafted with premium materials, luxury printing and elegant finishing
          to preserve your unforgettable memories forever.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {products.map((product, index) => (

            <div
              key={index}
              className="group bg-[#111] rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2 shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-7">

                <h3 className="text-3xl font-bold text-white">
                  {product.title}
                </h3>

                <p className="text-yellow-400 mt-3 font-semibold">
                  Available Size
                </p>

                <p className="text-gray-300 mt-2">
                  {product.size}
                </p>

                <button
                  className="mt-8 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-full transition"
                >
                  View Collection
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}