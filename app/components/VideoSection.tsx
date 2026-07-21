"use client";

export default function VideoSection() {
  return (
    <section
      id="videos"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-4">
          Our Video Gallery
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Premium Wedding Album Printing & Designing
        </p>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Video 1 */}
          <div className="bg-[#111] rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl hover:border-yellow-400 transition-all duration-300">
            <video
              controls
              preload="metadata"
              playsInline
              className="w-full h-[320px] object-cover"
            >
              <source src="/video/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                Product Showcase
              </h3>

              <p className="text-gray-300">
                Premium handcrafted wedding albums with luxurious finishes,
                elegant designs, and superior quality.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-[#111] rounded-2xl overflow-hidden border border-yellow-500/20 shadow-xl hover:border-yellow-400 transition-all duration-300">
           <video
  controls
  preload="metadata"
  className="w-full h-[320px] object-cover"
>
  <source src="/video/video1.mp4.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<video
  controls
  preload="metadata"
  className="w-full h-[320px] object-cover"
>
  <source  src="/video/video2.mp4" type="video/mp4" /> /
  Your browser does not support the video tag.
</video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400 mb-3">
                Printing & Designing
              </h3>

              <p className="text-gray-300">
                Discover our premium printing quality, precision craftsmanship,
                and elegant album designs.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}