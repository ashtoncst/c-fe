/**
 * Our Services section: content-driven tab data.
 * Tab id → screenshot asset filename mapping (for reference):
 *   data     — (existing Data content)
 *   dia      — DIA-7f640564-2bab-4393-81e2-2f947140a394.png
 *   fiber    — Fiber_Broadband-1a3e63f3-4255-48fc-b5c5-071da36628dc.png
 *   secure   — Satellite_Internet-118d685b-f158-4721-b348-a92eafc7c65b.png
 *   cable    — Cable_System-57a3263c-6185-45c3-82a4-7a9f305ae0b8.png
 *   content  — Content_Plus-01ac716b-56ec-4a6e-a5ea-7814328238aa.png
 *   security — Security-83f59d02-775c-4411-a674-4505ccf2dcf1.png
 */

export interface ServiceCTA {
  label: string;
  href?: string;
}

export interface ServiceCardContent {
  title: string;
  description?: string;
  imageSrc: string;
  listItems?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  /** For cards that should span multiple grid columns (e.g. Remote IX spans 2 of 3) */
  colSpan?: number;
  /**
   * High-level image render mode for the card:
   * - 'logo'     → logo/icon centered on solid background using contain + strong inner padding
   * - 'photo'    → full-bleed photo that fills the tile using cover with no internal padding
   * - 'ott-tile' → white tile background with artwork contained and scaled up to ~90% of the frame
   *
   * This is the preferred way to control image behavior. The low-level fields below act as overrides.
   */
  imageMode?: 'logo' | 'photo' | 'ott-tile';
  /** 'cover' fills the frame (default). 'contain' centers logo/icon images with padding. */
  imageObjectFit?: 'cover' | 'contain';
  /** Tailwind bg class for the image container, e.g. 'bg-black' or 'bg-white'. */
  imageBg?: string;
  /** CSS padding value for the image in 'contain' mode — controls visible logo size. Default: '24px' */
  imagePadding?: string;
  /** Optional Tailwind scale class applied to the Next.js Image for subtle always-on zoom, e.g. 'scale-[1.05]'. */
  imageScaleClass?: string;
  /** Per-card image container height override (Tailwind classes). Takes precedence over section-level imageHeight. */
  imageHeight?: string;
  /** Optional route to link the entire card to a detail page */
  href?: string;
}

export interface ServiceSection {
  sectionTitle?: string;
  cards: ServiceCardContent[];
  /** Number of columns on desktop. Default: 2 */
  cols?: 2 | 3;
  /** Tailwind class(es) for the image container height. Default: 'h-[200px] md:h-[240px]' */
  imageHeight?: string;
}

export interface ServiceTabContent {
  tabLabel: string;
  heroTitle: string;
  heroDescription: string;
  primaryCTA: ServiceCTA;
  secondaryCTA?: ServiceCTA;
  sections: ServiceSection[];
}

export const SERVICES_TAB_CONTENT_MAP: Record<string, ServiceTabContent> = {
  data: {
    tabLabel: 'Data',
    heroTitle: 'Data',
    heroDescription:
      'Future-proof your multi-site operations with MEF certified, high-capacity fiber connectivity designed for seamless performance and absolute reliability.',
    primaryCTA: { label: 'Learn More', href: '/our-services/data' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        sectionTitle: 'International Data Solutions',
        // cols defaults to 2, imageHeight defaults to 'h-[200px] md:h-[240px]'
        cards: [
          {
            title: 'IPLC/IEPL',
            description:
              'Our dedicated connectivity for your international branch offices and sites with Converge Ethernet - International Private Line. With Trans-Asia and Trans-Pacific cable systems, you get the security of multiple routing and the simplicity and cost-effectiveness of Ethernet technology.',
            imageSrc: '/images/our-services/data/converge-data-iplc-iepl-international-private-line.webp',
            href: '/connectivity/transport/ethernet-international-private-line',
          },
          {
            title: 'Cloud Direct Connect',
            description:
              'Converge Ethernet Direct Cloud Connect service provides a private, dedicated & high-throughput network connection between enterprise private networks and public Cloud Service Providers (CSP). The service offers enterprise customers an Internet with more robust performance, higher availability and lower latency.',
            imageSrc: '/images/our-services/data/converge-data-cloud-direct-connect.webp',
            href: '/connectivity/transport/cloud-direct-connect',
          },
        ],
      },
      {
        sectionTitle: 'Domestic Data Solutions',
        cards: [
          {
            title: 'eLine, eLAN, eTree, and eAccess',
            description:
              'A dedicated, private network connectivity service that securely links various offices together using MPLS technology, running on layer 2.',
            imageSrc: '/images/our-services/data/converge-data-eline-elan-etree-eaccess.webp',
            href: '/connectivity/transport/metro-ethernet',
          },
          {
            title: 'IP VPN (Layer 3)',
            description:
              'A dedicated, private network connectivity service that securely links remote offices together using MPLS technology, running on layer 3.',
            imageSrc: '/images/our-services/data/converge-data-ip-vpn.webp',
            href: '/connectivity/transport/ip-vpn',
          },
          {
            // Transport via GPON detail page is hidden (for future use) — no clickable link.
            title: 'Transport via GPON',
            description:
              "A dedicated point-to-point network offer, a secure and private WAN connection to customers' branches or remote sites using our pure fiber GPON network.",
            imageSrc: '/images/our-services/data/converge-data-transport-via-gpon.webp',
          },
        ],
      },
      {
        sectionTitle: 'Optical Transport Network Solutions',
        cards: [
          {
            title: 'Metro Lambda',
            description:
              'A mid-to-high capacity DWDM (Dense Wavelength Division Multiplexing) which provides high-capacity and secure data connectivity between geographically separated sites, ensures that your business continuity and guarantees highest quality. The consistent and reliable connectivity of the point-to-point service enables seamless collaboration across different locations.',
            imageSrc: '/images/our-services/data/converge-data-metro-lambda.webp',
            href: '/connectivity/transport/optical-transport-network',
          },
          {
            title: 'Data Center Express',
            description:
              'DC Express supports different protocols to connect data centers to the host IT Services and Network Elements.',
            imageSrc: '/images/our-services/data/converge-data-center-express.webp',
            href: '/connectivity/transport/dc-express',
          },
          {
            title: 'Cable Landing Express',
            description:
              'This is a dedicated ethernet service running over the DWDM network for continuous database network connections between cable landing stations. It is a specialized product catered primarily to submarine cable capacity to use inside the landing stations into the POI.',
            imageSrc: '/images/our-services/data/converge-data-cable-landing-express.webp',
            href: '/connectivity/transport/cls-express',
          },
        ],
      },
    ],
  },

  dia: {
    tabLabel: 'Dedicated Internet Access',
    heroTitle: 'Dedicated Internet Access',
    heroDescription:
      'Power your business with exclusive, unshared fiber connectivity that delivers 100% committed symmetrical speeds designed to support latency-sensitive applications and mission-critical operations.',
    primaryCTA: { label: 'Learn More', href: '/our-services/dedicated-internet-access' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 3,
        imageHeight: 'h-[200px] md:h-[230px]',
        cards: [
          {
            title: 'DIA Premium',
            description:
              'Converge DIA Premium delivers enterprise-grade, always-on internet with multiple upstream IPs and intelligent best-route optimization. Enjoy low latency, superior redundancy, and reliable global reach—perfect for mission-critical operations.',
            imageSrc: '/images/dedicatedinternetaccess/diapremium.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/dia-premium',
          },
          {
            title: 'DIA Basic',
            description:
              'Converge DIA Basic is an economical dedicated internet solution for businesses needing reliable connectivity. With one to two IP upstreams and best-route optimization, it provides stable performance and essential redundancy—ideal for cost-conscious enterprises requiring dependable internet for daily operations.',
            imageSrc: '/images/dedicatedinternetaccess/diabasic.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/dia-basic',
          },
          {
            title: 'DIA Bandwidth-on-Demand',
            description:
              'Allows customers to have access to precious bandwidth based on their dynamic demands. This gives customers the capability to burst up to 2x their subscribed bandwidth whenever they need it.',
            imageSrc: '/images/dedicatedinternetaccess/diabandwidthondemand.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/dia-bandwidth-on-demand',
          },
          {
            title: 'DIA Clean Pipe (with Anti-DDoS)',
            description:
              'Guarantees safe and secure browsing for all your enterprise sites, ensuring no loss of business at all times.',
            imageSrc: '/images/dedicatedinternetaccess/diacleanpipe.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/dia-clean-pipe',
          },
          {
            title: 'International Private Line + Internet Protocol',
            description: '',
            imageSrc: '/images/dedicatedinternetaccess/internationalprivateline.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/ipl-ip',
          },
          {
            title: 'IPT Express',
            description:
              'IPT Express is designed for ISPs and enterprises that own their own Autonomous System (AS) number and IP prefixes. It delivers high-performance IP Transit connectivity, enabling direct internet routing control, optimized traffic management, and scalable global reach.',
            imageSrc: '/images/dedicatedinternetaccess/iptransport.png',
            imageScaleClass: 'scale-[1.15]',
            href: '/connectivity/internet/ipt-express',
          },
          {
            title: 'IX Express',
            description:
              'IX Express lets customers connect directly and instantly to major local and international Internet Exchanges like JPIX, Equinix, AMS-IX, and more. Enjoy faster routing, lower latency, and optimized global traffic for critical internet and cloud applications.',
            imageSrc: '/images/dedicatedinternetaccess/remoteix.png',
            imageObjectFit: 'contain',
            imageBg: 'bg-[#024645]',
            imagePadding: '12px',
            imageHeight: 'h-[280px] md:h-[320px]',
            colSpan: 2,
            href: '/connectivity/internet/ix-express',
          },
        ],
      },
    ],
  },

  fiber: {
    tabLabel: 'Fiber Broadband',
    heroTitle: 'Fiber Broadband',
    heroDescription:
      'Power your daily operations with high-speed, 100% fiber connectivity designed for consistent performance and business-grade reliability.',
    primaryCTA: { label: 'Learn More', href: '/our-services/fiber-broadband' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 2,
        imageHeight: 'h-[240px] md:h-[280px]',
        cards: [
          {
            title: 'Business Fiber Internet',
            description: '',
            imageSrc: '/images/our-services/fiber-broadband/converge-fiber-broadband-business-internet.webp',
            href: '/connectivity/internet/fiber-board',
          },
          {
            title: 'Business Fiber Work-from-Home',
            description: '',
            imageSrc: '/images/our-services/fiber-broadband/converge-fiber-broadband-work-from-home.webp',
            href: '/connectivity/internet/fiber-work-from-home',
          },
        ],
      },
    ],
  },

  secure: {
    tabLabel: 'Satellite Internet',
    heroTitle: 'Satellite Internet',
    heroDescription:
      'Starlink is a satellite internet service powered by SpaceX, using low Earth orbit (LEO) satellites to deliver high-speed, low-latency internet ideal for streaming, video calls, gaming, and more, even in remote or underserved areas.',
    primaryCTA: { label: 'Learn More', href: '/connectivity/satellite' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 3,
        imageHeight: 'h-[360px] md:h-[420px]',
        cards: [
          {
            title: 'Connectivity Anywhere, Anytime',
            imageSrc: '/images/our-services/satellite-internet/converge-satellite-internet-connectivity-anywhere.webp',
            href: '/connectivity/satellite/connectivity-anywhere',
            listItems: [
              'Delivers high-speed, low-latency satellite internet in remote, underserved, or hard-to-reach locations.',
              'Enables operations in mining sites, offshore facilities, rural branches, and disaster-prone areas without relying on terrestrial infrastructure.',
            ],
          },
          {
            title: 'Business Continuity & Redundancy',
            imageSrc: '/images/our-services/satellite-internet/converge-satellite-internet-business-continuity.webp',
            href: '/connectivity/satellite/business-continuity',
            listItems: [
              'Acts as a powerful failover or backup link to fiber networks.',
              'Ensures uninterrupted operations, protects revenue, and strengthens disaster recovery strategies.',
            ],
          },
          {
            title: 'Rapid Deployment & Scalability',
            imageSrc: '/images/our-services/satellite-internet/converge-satellite-internet-rapid-deployment.webp',
            href: '/connectivity/satellite/rapid-deployment',
            listItems: [
              'Quick to install and easy to scale across multiple sites globally.',
              'Accelerates expansion plans and supports agile enterprise growth.',
            ],
          },
        ],
      },
    ],
  },

  cable: {
    tabLabel: 'Cable System',
    heroTitle: 'Cable System',
    heroDescription:
      "The world moves faster when you're fully connected. Converge empowers global carriers and enterprises with advanced subsea and fiber solutions, paving the way for seamless, scalable, and high-performance communication between Asia, the USA, and beyond.",
    primaryCTA: { label: 'Learn More', href: '/our-services/cable-system' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 2,
        imageHeight: 'h-[220px] md:h-[240px]',
        cards: [
          {
            // Bifrost detail page is hidden (for future use) — no clickable link.
            title: 'Bifrost',
            description:
              'Direct, high-capacity connectivity between the Philippines, Singapore, Indonesia, and the USA—a game-changer for transpacific data demands. Experience ultra-low latency and future-ready bandwidth for next-gen applications.',
            imageSrc: '/images/our-services/cable-system/converge-cable-system-bifrost.webp',
          },
          {
            // SEA-H2X detail page is hidden (for future use) — no clickable link.
            title: 'SEA-H2X',
            description:
              "Build your intra-Asia backbone with a submarine cable system spanning key economies. Unlock reliable, high-speed routes to meet Asia's explosive digital growth.",
            imageSrc: '/images/our-services/cable-system/converge-cable-system-sea-h2x.webp',
          },
        ],
      },
    ],
  },

  content: {
    tabLabel: 'Content Plus',
    heroTitle: 'Content Plus',
    heroDescription:
      'More than internet, Converge Content Plus is a resilient, high-performance digital ecosystems that empower you to exceed guest expectations and drive operational excellence.',
    primaryCTA: { label: 'Learn More', href: '/our-services/content-plus' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 3,
        imageHeight: 'h-[200px] md:h-[220px]',
        cards: [
          {
            imageMode: 'logo',
            title: 'Live Channel Packages',
            description:
              'Choice of Basic Channels or Premium Channels. Watch your favorite live tv shows: Kids, Sports, News, and General Entertainment',
            imageSrc: '/images/our-services/content-plus/converge-content-plus-live-channel-packages.webp',
            imageBg: 'bg-black',
            imagePadding: '16%',
            href: '/our-services/content-plus/live-channels',
          },
          {
            imageMode: 'logo',
            title: 'Secure Chromecast',
            description:
              'No need for other equipment (dongle). Stream your current movies and series on the hotel TV.',
            imageSrc: '/images/our-services/content-plus/converge-content-plus-secure-chromecast.webp',
            imageBg: 'bg-black',
            imagePadding: '16%',
            href: '/our-services/content-plus/secure-chromecast',
          },
          {
            imageMode: 'photo',
            title: 'In Room Dining',
            description:
              'Virtually Host Your Menu Instant food ordering with real-time kitchen notification.',
            imageSrc: '/images/our-services/content-plus/converge-content-plus-in-room-dining.png',
            imageScaleClass: 'scale-[1.05]',
            href: '/our-services/content-plus/in-room-dining',
          },
          {
            imageMode: 'ott-tile',
            title: 'OTT Apps',
            description:
              "Netflix, Disney+, Youtube, and the like - all in one. Auto logout feature after guest check out or configurable on the interface. Quick log-in via OTT app QR.",
            imageSrc: '/images/our-services/content-plus/converge-content-plus-ott-apps.png',
            imageBg: 'bg-white',
            imagePadding: '1%',
            href: '/our-services/content-plus/ott-apps',
          },
          {
            title: 'E-commerce Integration',
            description:
              'Sleek digital in-room dining menu ordering seamlessly-delivered instantly to the kitchen via printer, email, or POS that can be integrated with the hotel property management system.',
            imageSrc: '/images/our-services/content-plus/converge-content-plus-ecommerce-integration.webp',
            href: '/our-services/content-plus/ecommerce-integration',
          },
          {
            imageMode: 'photo',
            title: 'Hotel Information',
            description:
              'Inform Guest About the Hotel Display floor guides, restaurant and facility information, running bills, special promotions, and live flight and weather updates-all customizable on the TV.',
            imageSrc: '/images/our-services/content-plus/converge-content-plus-hotel-information.png',
            href: '/our-services/content-plus/hotel-information',
          },
        ],
      },
    ],
  },

  security: {
    tabLabel: 'Security',
    heroTitle: 'Security',
    heroDescription:
      'Achieve your digital transformation goals with scalable, regulatory compliant & AI-ready cloud operations, and rapidly build AI-enhanced, cross-platform applications with proactive security across your entire organization.',
    primaryCTA: { label: 'Learn More', href: '/our-services/security' },
    secondaryCTA: { label: 'Inquire for Pricing' },
    sections: [
      {
        cols: 3,
        imageHeight: 'h-[360px] md:h-[420px]',
        cards: [
          {
            title: 'On-Premises Defenses',
            imageSrc: '/images/our-services/security/converge-security-on-premises-defenses.webp',
            href: '/our-services/security/on-premises',
            listItems: [
              'Quick, simple mitigation.',
              'Local scrubbing center, faster recovery.',
              '40Gbps mitigation capacity',
            ],
          },
          {
            title: 'Hybrid Defenses',
            imageSrc: '/images/our-services/security/converge-security-hybrid-defenses.webp',
            href: '/our-services/security/hybrid',
            listItems: [
              'Integrated Solution',
              'Fastest Time to Mitigation',
              'Defeats Largest DDoS Attacks',
            ],
          },
          {
            title: 'Cloud Defenses',
            imageSrc: '/images/our-services/security/converge-security-cloud-defenses.webp',
            href: '/our-services/security/cloud',
            listItems: [
              'Advance Mitigation',
              'Global Cloud Scrubbing Centers',
              'Defeats Largest DDoS Attacks',
            ],
          },
        ],
      },
    ],
  },
};
