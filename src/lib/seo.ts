import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/utils";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(siteConfig.siteUrl, path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
