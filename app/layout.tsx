import { SectionProvider } from "@/components/section-provider/SectionProvider";
import { JsonLd } from "@/components/JsonLd";
import { defaultSEO } from "@/config/seo";
import type { Metadata } from "next";
import { Inter, DM_Sans, Funnel_Display } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import Providers from "./providers";
import { StickyChat } from "@/components/chat/StickyChat";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});
const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-funnel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultSEO.siteUrl),
  title: {
    default: defaultSEO.defaultTitle,
    template: `%s | ${defaultSEO.siteName}`,
  },
  description: defaultSEO.defaultDescription,
  icons: {
    icon: "/icons/favicon.svg",
    apple: "/icons/favicon.svg",
  },
  openGraph: {
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    url: defaultSEO.siteUrl,
    siteName: defaultSEO.siteName,
    images: [
      {
        url: defaultSEO.defaultOGImage,
        width: 1200,
        height: 630,
        alt: defaultSEO.siteName,
      },
    ],
    locale: defaultSEO.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSEO.defaultTitle,
    description: defaultSEO.defaultDescription,
    images: [defaultSEO.defaultOGImage],
    site: defaultSEO.twitterHandle,
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: defaultSEO.siteName,
  url: defaultSEO.siteUrl,
  logo: `${defaultSEO.siteUrl}/icons/favicon.svg`,
  sameAs: [
    "https://www.linkedin.com/company/convergeglobal",
    "https://twitter.com/ConvergeICT",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: defaultSEO.siteName,
  url: defaultSEO.siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSans.variable} ${funnelDisplay.variable}`} suppressHydrationWarning>
        <JsonLd schema={organizationSchema} />
        <JsonLd schema={websiteSchema} />
        <SectionProvider>
          <Providers>
            {children}
            <StickyChat />
          </Providers>
        </SectionProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
          containerStyle={{
            zIndex: 99999999999,
          }}
        />
      </body>
    </html>
  );
}
