import { MetadataRoute } from "next";
import { defaultSEO } from "@/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/api/", "/_next/"],
      },
    ],
    sitemap: `${defaultSEO.siteUrl}/sitemap.xml`,
  };
}
