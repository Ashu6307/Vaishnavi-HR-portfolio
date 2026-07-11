import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";
import { seoPages } from "@/data/seo";
import { siteConfig } from "@/data/site";
import { canonicalUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = seoPages.map((page) => ({
    url: canonicalUrl(siteConfig.siteUrl, page.path),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: page.path === "/" ? 1 : 0.8
  }));

  const caseRoutes = caseStudies.map((study) => ({
    url: canonicalUrl(siteConfig.siteUrl, `/work/${study.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...caseRoutes];
}
