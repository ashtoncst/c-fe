import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { OurServicesSecurityPage } from "@/modules/our-services-security/OurServicesSecurityPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Cybersecurity Services",
  description:
    "Achieve your digital transformation goals with scalable, regulatory-compliant and AI-ready cloud security operations from Converge ICT Solutions.",
  path: "/our-services/security",
});

export default function Page() {
  return <OurServicesSecurityPage />;
}
