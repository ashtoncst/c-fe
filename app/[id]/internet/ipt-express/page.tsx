import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { IPTExpressModule } from "@/modules/internet-module/IPTExpressModule";

export const metadata: Metadata = generatePageMetadata({
  title: "IPT Express",
  description:
    "Converge ICT Solutions IPT Express delivers fast, reliable IP transit for ISPs and businesses with their own AS and IP prefixes, with full BGP support and enhanced network control.",
  path: "/connectivity/internet/ipt-express",
});

export default async function IPTExpressPage() {
  return <IPTExpressModule />;
}
