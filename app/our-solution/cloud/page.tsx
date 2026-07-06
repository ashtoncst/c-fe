import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { CloudPage } from "@/modules/cloud/CloudPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Converge Cloud",
  description:
    "Running on the most advanced fiber network and the only operational data center in the Philippines with an active Uptime Tier III Design & Facility Certification for both Design & Facility.",
  path: "/our-solution/cloud",
});

export default function Page() {
  return <CloudPage />;
}
