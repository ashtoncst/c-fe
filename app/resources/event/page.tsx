import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ResourcesEventModule } from "@/modules/resources-module/ResourcesEventModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Events",
  description:
    "Stay updated with Converge ICT Solutions' upcoming events, conferences, and industry showcases. Connect with our team and learn about the latest in enterprise connectivity and digital infrastructure.",
  path: "/resources/event",
});

export default function EventPage() {
  return <ResourcesEventModule />;
}
