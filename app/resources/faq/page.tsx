import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { FAQPageModule } from "@/modules/resources-module/FAQPageModule";
import { RESOURCES_FAQ_DATA } from "@/modules/resources-module/constants/ResourcesFAQ.constant";

export const metadata: Metadata = generatePageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Converge ICT Solutions' connectivity, internet access, data center services, managed solutions, and cloud offerings.",
  path: "/resources/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: RESOURCES_FAQ_DATA.flatMap((category) =>
    category.faq.map((item) => ({
      "@type": "Question",
      name: item.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.content,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <FAQPageModule />
    </>
  );
}
