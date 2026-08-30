import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { albums } from "@/app/data/albums";

const siteUrl = "https://weddingalbumindia.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `${album.title} | Premium Wedding Albums in Delhi`,
    description: `${album.description} Explore premium ${album.title.toLowerCase()} from Wedding Album India, with luxury finishing, premium printing and professional craftsmanship.`,

    alternates: {
      canonical: `${siteUrl}/albums/${album.slug}`,
    },

    openGraph: {
      title: `${album.title} | Wedding Album India`,
      description: album.description,
      url: `${siteUrl}/albums/${album.slug}`,
      type: "website",
      images: [
        {
          url: `${siteUrl}${album.cover}`,
          alt: `${album.title} - Wedding Album India`,
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function AlbumPage({ params }: Props) {
  const { slug } = await params;

  const album = albums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

        {/* Album Image */}
        <div>
          <img
            src={album.cover}
            alt={`${album.title} - Premium Wedding Album`}
            className="w-full rounded-3xl"
          />
        </div>

        {/* Album Information */}
        <div>

          <span className="uppercase text-yellow-400">
            {album.category}
          </span>

          <h1 className="mt-3 text-5xl font-bold">
            {album.title}
          </h1>

          <p className="mt-8 leading-8 text-gray-300">
            {album.description}
          </p>

          {/* Features */}
          <h2 className="mb-5 mt-10 text-2xl font-bold">
            Features
          </h2>

          <ul className="space-y-3 text-gray-300">
            {album.features.map((feature, index) => (
              <li key={index}>
                ✓ {feature}
              </li>
            ))}
          </ul>

          {/* Sizes */}
          <h2 className="mb-5 mt-10 text-2xl font-bold">
            Available Sizes
          </h2>

          <div className="flex flex-wrap gap-3">
            {album.sizes.map((size) => (
              <span
                key={size}
                className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-5 py-2 text-yellow-400"
              >
                {size}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-400"
          >
            Get a Quote
          </a>

        </div>
      </div>
    </main>
  );
}