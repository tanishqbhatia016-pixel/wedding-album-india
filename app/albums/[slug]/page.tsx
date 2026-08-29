import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { albums } from "@/app/data/albums";

const BASE_URL = "https://weddingalbumindia.com";

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
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${album.title} | Premium Wedding Album`;

  const description =
    `${album.description} Explore ${album.title} from Wedding Album India, ` +
    `with premium wedding album printing and designing.`;

  return {
    title,
    description,

    keywords: [
      album.title,
      `${album.title} Delhi`,
      "wedding album",
      "wedding album Delhi",
      "wedding album printing",
      "wedding album designing",
      "premium wedding album",
      "luxury wedding album",
      "custom wedding album",
    ],

    alternates: {
      canonical: `${BASE_URL}/albums/${album.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `${BASE_URL}/albums/${album.slug}`,
      siteName: "Wedding Album India",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}${album.cover}`,
          width: 1200,
          height: 1200,
          alt: album.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}${album.cover}`],
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

  const otherAlbums = albums.filter(
    (item) => item.slug !== album.slug
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: album.title,
    description: album.description,
    image: album.images.map(
      (image) => `${BASE_URL}${image}`
    ),
    category: album.category,
    brand: {
      "@type": "Brand",
      name: "Wedding Album India",
    },
    url: `${BASE_URL}/albums/${album.slug}`,
  };

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">

      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-sm text-gray-400"
        >
          <Link
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <span className="text-gray-200">
            {album.title}
          </span>
        </nav>

        {/* Main Product Section */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Images */}
          <div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={album.cover}
                alt={`${album.title} premium wedding album`}
                className="w-full"
              />
            </div>

            {/* Additional Images */}
            {album.images.length > 1 && (
              <div className="mt-5 grid grid-cols-2 gap-4">
                {album.images.slice(1).map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${album.title} wedding album detail ${index + 2}`}
                    className="w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            )}

          </div>

          {/* Information */}
          <div>

            <p className="uppercase tracking-widest text-yellow-400">
              {album.category}
            </p>

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

            <ul className="space-y-3 text-gray-200">
              {album.features.map((feature) => (
                <li key={feature}>
                  <span className="mr-2 text-yellow-400">
                    ✓
                  </span>
                  {feature}
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
                  className="rounded-full border border-white/20 px-4 py-2 text-gray-200"
                >
                  {size}
                </span>
              ))}
            </div>

            {/* Contact CTA */}
            <Link
              href="/#contact"
              className="mt-10 inline-block rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-400"
            >
              Enquire About This Album →
            </Link>

          </div>
        </div>

        {/* SEO Content */}
        <section className="mt-24 border-t border-white/10 pt-16">

          <h2 className="text-3xl font-bold">
            {album.title} Wedding Album in Delhi
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-gray-300">
            Looking for a premium {album.title.toLowerCase()} for your
            wedding memories? Wedding Album India provides professionally
            designed and printed wedding photo albums for photographers,
            studios and families. Our albums combine quality materials,
            premium printing, elegant finishes and durable binding.
          </p>

          <p className="mt-5 max-w-4xl leading-8 text-gray-400">
            Whether you need a luxury wedding album, custom photo album
            or premium album for your photography studio, our collection
            offers different cover styles and sizes to suit your
            requirements.
          </p>

        </section>

        {/* Other Albums */}
        <section className="mt-24 border-t border-white/10 pt-16">

          <h2 className="text-3xl font-bold">
            Explore Other Wedding Albums
          </h2>

          <p className="mt-4 text-gray-400">
            Discover more premium wedding album designs from our collection.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {otherAlbums.map((otherAlbum) => (
              <Link
                key={otherAlbum.slug}
                href={`/albums/${otherAlbum.slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-yellow-400/50"
              >

                <img
                  src={otherAlbum.cover}
                  alt={`${otherAlbum.title} wedding album`}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-5">

                  <p className="text-sm text-yellow-400">
                    {otherAlbum.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {otherAlbum.title}
                  </h3>

                  <span className="mt-4 inline-block text-sm text-gray-400 group-hover:text-yellow-400">
                    View Album →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}