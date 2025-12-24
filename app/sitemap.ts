import type { MetadataRoute } from "next";

import { resourcePosts } from "@/lib/resources";
import { serviceCards } from "@/lib/serviceCards";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/resources`, lastModified: now },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCards.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resourcePosts.map((p) => ({
    url: `${baseUrl}/resources/${p.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...resourceRoutes];
}
