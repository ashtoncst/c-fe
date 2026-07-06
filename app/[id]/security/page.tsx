import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SecurityPageRedesign } from "@/modules/security-page/SecurityPageRedesign";

export const metadata: Metadata = generatePageMetadata({
  title: "Cybersecurity Solutions",
  description:
    "Converge ICT Solutions cybersecurity services protect your enterprise with managed threat detection, firewall management, and compliance-ready security frameworks.",
  path: "/cloud-data-centers-and-cyber-security/security",
});

export default function SecurityPage() {
  return <SecurityPageRedesign />;
}
