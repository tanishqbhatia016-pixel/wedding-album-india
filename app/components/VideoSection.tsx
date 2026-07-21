"use client";

export default function VideoSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-yellow-400 mb-12">
          Our Video Gallery
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <video
            src="/video/video1.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl"
          />

          <video
            src="/video/video2.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-2xl"
          />

        </div>

      </div>
    </section>
  );
}