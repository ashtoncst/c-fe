import { MetadataRoute } from "next";
import { defaultSEO } from "@/config/seo";

const baseUrl = defaultSEO.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hospitality`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/our-msp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/our-partner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/digital-infrastructure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/distributed-setup`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet/fiber-broadband`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/resources/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/resources/press-release`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/resources/event`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },

    // Our Services
    { url: `${baseUrl}/our-services/data`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/dedicated-internet-access`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/secure-internet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/content-plus`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/cable-system`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/our-services/fiber-broadband`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Solutions — Connectivity
    { url: `${baseUrl}/connectivity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/connectivity/satellite`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet/fiber-board`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet/fiber-dedicated`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet/ipt-express`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/internet/ix-express`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/metro-ethernet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/optical-transport-network`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/dc-express`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/cloud-direct-connect`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/cls-express`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/ip-vpn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/ethernet-international-private-line`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/connectivity/transport/faster`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Solutions — Beyond Connectivity
    { url: `${baseUrl}/beyond-connectivity`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/beyond-connectivity/managed-services/sd-wan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/beyond-connectivity/managed-services/draas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/beyond-connectivity/managed-services/managed-wifi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/beyond-connectivity/managed-services/managed-surveillance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Solutions — Cloud, Data Centers & Cyber Security
    { url: `${baseUrl}/cloud-data-centers-and-cyber-security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/cloud-data-centers-and-cyber-security/content`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cloud-data-centers-and-cyber-security/colocation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/cloud-data-centers-and-cyber-security/security`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Solutions — Our Solutions
    { url: `${baseUrl}/our-solution/cloud`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  return staticRoutes;
}
