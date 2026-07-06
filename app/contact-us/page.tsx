"use client";

import { StickyHeader } from "@/components/layouts/StickyHeader";
import { FooterDark } from "@/components/layouts/FooterDark";
import { ContactUsModule } from "@/modules/contact-us/ContactUsModule";

export default function ContactUsPage() {
  return (
    <div className="w-full flex justify-center bg-[#F5F5F5] min-h-screen">
      <div className="w-full max-w-[1920px] bg-white flex flex-col relative overflow-hidden shadow-2xl">
        <StickyHeader forceDarkLogo={true} isAlwaysWhite={true} noShadow={true} />
        <main className="flex-grow w-full">
          <ContactUsModule />
        </main>
        <FooterDark hideCTA={true} />
      </div>
    </div>
  );
}
