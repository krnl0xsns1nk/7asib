import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
          url: "https://7asib.vercel.app/ar",
          lastModified: new Date(),
        },
    {
          url: "https://7asib.vercel.app/fr",
          lastModified: new Date(),
        },
  ];
}
