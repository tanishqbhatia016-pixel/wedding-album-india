"use client";

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Our Video Gallery
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Premium Wedding Album Printing & Designing
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              className="w-full"
            >
              <source src="/video/video1.mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">
                Product Showcase
              </h3>

              <p className="text-gray-300 mt-3">
                Premium handcrafted wedding albums with luxurious finishes.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl">
            <video
              controls
              className="w-full"
            >
              <source src="/video/video2.mp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">
                Printing & Designing
              </h3>

              <p className="text-gray-300 mt-3">
                Discover our premium printing quality and elegant album designs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}