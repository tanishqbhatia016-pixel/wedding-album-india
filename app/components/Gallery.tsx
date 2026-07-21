"use client";

const galleryImages = [
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-yellow-400 uppercase tracking-[6px] text-center">
          Our Gallery
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-4">
          Memories That Last Forever
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mt-6 mb-16">
          Every album is handcrafted with premium printing, elegant finishing,
          and luxury materials to preserve your unforgettable memories.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {galleryImages.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-yellow-500/20 group"
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}