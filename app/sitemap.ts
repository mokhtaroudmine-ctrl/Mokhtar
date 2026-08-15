import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return [
      {
              url: `${SITE_URL}/fr`,
              lastModified: now,
              changeFrequency: "weekly",
              priority: 1,
      },
      {
              url: `${SITE_URL}/en`,
              lastModified: now,
              changeFrequency: "weekly",
              priority: 0.9,
      },
        ];
}
