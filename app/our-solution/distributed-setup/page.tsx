import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { DistributedSetupPage } from "@/modules/distributed-setup/DistributedSetupPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Distributed Network Setup",
  description:
    "Converge ICT Solutions' distributed network architecture delivers seamless, resilient connectivity across multiple sites with unified management and enterprise-grade reliability.",
  path: "/our-solution/distributed-setup",
});

export default function Page() {
  return <DistributedSetupPage />;
}
