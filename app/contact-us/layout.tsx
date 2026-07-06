import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Converge ICT Solutions. Reach our sales team, technical support, and customer service for enterprise connectivity, data centers, and managed services.",
  path: "/contact-us",
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
