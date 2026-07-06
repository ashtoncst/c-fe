import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { ComingSoonModule } from "@/modules/coming-soon-module/ComingSoonModule";

export const metadata: Metadata = generatePageMetadata({
  title: "Coming Soon",
  description:
    "Something new is on the way from Converge ICT Solutions. Stay tuned for exciting new services and digital solutions.",
  path: "/coming-soon",
});

export default function ComingSoonPage() {
  return <ComingSoonModule />;
}
