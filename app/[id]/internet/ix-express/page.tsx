import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { IXExpressModule } from "@/modules/internet-module/IXExpressModule";

export const metadata: Metadata = generatePageMetadata({
  title: "IX Express",
  description:
    "Converge ICT Solutions IX Express delivers fast, private, and direct internet connectivity with direct IXP access and full IPL capacity ownership for enterprise networks.",
  path: "/connectivity/internet/ix-express",
});

export default async function IXExpressPage() {
  return <IXExpressModule />;
}
