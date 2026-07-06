import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { LandingPage } from "@/modules/landing-page/LandingPage";

export const metadata: Metadata = generatePageMetadata({
  path: "/",
});

export default function Home() {
  return <LandingPage />;
}
