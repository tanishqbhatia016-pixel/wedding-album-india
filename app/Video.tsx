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

        <p className="text-center text-gray-400 mb-14">
          Premium Wedding Album Printing & Designing
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Video 1 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl hover:border-yellow-400 transition duration-300">

            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-[350px] object-cover"
            >
              <source src="/video/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">
                Product Showcase
              </h3>

              <p className="text-gray-300 mt-3">
                Premium handcrafted wedding albums with elegant finishing and luxurious quality.
              </p>
            </div>

          </div>

          {/* Video 2 */}
          <div className="bg-[#111] rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl hover:border-yellow-400 transition duration-300">

            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-[350px] object-cover"
            >
              <source src="/video/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-yellow-400">
                Printing & Designing
              </h3>

              <p className="text-gray-300 mt-3">
                Experience premium HD printing, elegant craftsmanship and luxury album finishing.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}