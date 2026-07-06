import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OutPartnerModule } from "@/modules/our-partner/OutPartnerModule";
import * as React from "react";

export const metadata: Metadata = generatePageMetadata({
  title: "Partner Program",
  description:
    "Join the Converge ICT Solutions partner ecosystem and grow your business with industry-leading fiber connectivity, managed services, and digital infrastructure solutions.",
  path: "/our-partner",
});

export default function OurPartnerPage() {
  return <OutPartnerModule />;
}
