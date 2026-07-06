import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { InternetPage } from "@/modules/internet/InternetPage";

export const metadata: Metadata = generatePageMetadata({
  title: "Internet Services",
  description:
    "Explore Converge ICT Solutions' comprehensive internet service portfolio — fiber broadband, dedicated access, IPT Express, and IX Express for enterprise and SME.",
  path: "/connectivity/internet",
});

export default async function ServiceDetailPage() {
  return <InternetPage />;
}
