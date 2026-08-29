import type { MetadataRoute } from "next";
import { albums } from "./data/albums";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://weddingalbumindia.com";

  const albumUrls = albums.map((album) => ({
    url: `${baseUrl}/albums/${album.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...albumUrls,
  ];
}