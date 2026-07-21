import { notFound } from "next/navigation";
import { albums } from "@/app/data/albums";

export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        <img
          src={album.cover}
          alt={album.title}
          className="rounded-3xl w-full"
        />

        <div>

          <span className="text-yellow-400 uppercase">
            {album.category}
          </span>

          <h1 className="text-5xl font-bold mt-3">
            {album.title}
          </h1>

          <p className="mt-8 text-gray-300 leading-8">
            {album.description}
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-5">
            Features
          </h2>

          <ul className="space-y-3">
            {album.features.map((feature, index) => (
              <li key={index}>✓ {feature}</li>
            ))}
          </ul>

        </div>

      </div>
    </main>
  );
}