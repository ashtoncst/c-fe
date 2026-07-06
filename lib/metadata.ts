import type { Metadata } from "next";
import { defaultSEO } from "@/config/seo";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  type = "website",
}: GenerateMetadataOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${defaultSEO.siteName}`
    : defaultSEO.defaultTitle;
  const metaDescription = description || defaultSEO.defaultDescription;
  const canonical = `${defaultSEO.siteUrl}${path}`;
  const image = ogImage || defaultSEO.defaultOGImage;

  return {
    title: fullTitle,
    description: metaDescription,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical,
      siteName: defaultSEO.siteName,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
      locale: defaultSEO.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [image],
      site: defaultSEO.twitterHandle,
    },
  };
}
