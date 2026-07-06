import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { IPLIPModule } from "@/modules/internet-module/IPLIPModule";

export const metadata: Metadata = generatePageMetadata({
  title: "International Private Line + IP",
  description: "Placeholder description.",
  path: "/[id]/internet/ipl-ip",
});

export default function IPLIPPage() {
  return <IPLIPModule />;
}
