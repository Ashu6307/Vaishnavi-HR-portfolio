import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { canonicalUrl } from "@/lib/utils";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonicalUrl(siteConfig.siteUrl, path);
  const imageUrl = canonicalUrl(siteConfig.siteUrl, "/images/og-vaishnavi-jaiswal.png");

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
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Vaishnavi Jaiswal, Human Resources Executive"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}

export function jsonLd(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}
