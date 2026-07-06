import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesDIAPage } from "@/modules/our-services-dia/OurServicesDIAPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Dedicated Internet Access",
  description:
    "Power your business with exclusive, unshared fiber connectivity that delivers 100% committed symmetrical speeds with enterprise-grade reliability from Converge ICT Solutions.",
  path: "/our-services/dedicated-internet-access",
});

export default function Page() {
  return <OurServicesDIAPage />;
}
