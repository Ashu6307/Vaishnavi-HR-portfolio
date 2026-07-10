import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: absoluteUrl(siteConfig.siteUrl, "/sitemap.xml")
  };
}
