import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ResourcesPressReleaseModule } from "@/modules/resources-module/ResourcesPressReleaseModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Press Releases",
  description:
    "Read the latest press releases from Converge ICT Solutions covering company milestones, partnerships, network expansions, and announcements across our enterprise services.",
  path: "/resources/press-release",
});

export default function PressReleasePage() {
  return <ResourcesPressReleaseModule />;
}
