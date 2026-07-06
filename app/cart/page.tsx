// TEMP: cart functionality disabled — restore by removing the notFound() call
// and re-exporting OnlineSellingPortalPage below.
import { notFound } from 'next/navigation';

export default function CartRouteDisabled() {
  notFound();
}

/* ORIGINAL — restore when cart is re-enabled
'use client';
import { MainLayout } from '@/components/layouts/MainLayout';
import { HeaderContactUs } from '@/modules/contact-us/components/header-base/HeaderBase';
import { OnlineSellingPortalModule } from '@/modules/online-selling-portal-module/OnlineSellingPortalModule';
import * as React from 'react';

export default function OnlineSellingPortalPage() {
  return (
    <MainLayout isDisplayBanner={true}>
      <div className="lg:hidden pb-10 md:block xs:hidden border-none">
        <HeaderContactUs isDarkLogo={true} />
      </div>
      <div className="md:hidden  block  border-none">
        <HeaderContactUs isDarkLogo={true} />
      </div>
      <OnlineSellingPortalModule />
    </MainLayout>
  );
}
*/
