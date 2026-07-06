import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { AboutUsModule } from "@/modules/about-us-module/AboutUs";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Learn about Converge ICT Solutions — our mission, vision, leadership, and commitment to delivering world-class fiber connectivity and digital infrastructure across the Philippines.",
  path: "/about-us",
});

export default function AboutUsPage() {
  return <AboutUsModule />;
}
