import IpVpnImage from '../../../public/images/selling/image1.png';
import GponImage from '../../../public/images/selling/image2.png';
import DedicatedInternetAccessImage from '../../../public/images/selling/image4.png';
import MetroEthernetImage from '../../../public/images/selling/image3.png';

import FastImage from '@/public/images/satellite/banner1.png';
import AnyWhereImage from '@/public/images/satellite/banner2.png';
import IntegrateImage from '@/public/images/satellite/satelliteIntegrate.png';
import Image from 'next/image';
export const SATELLITE_VALUES = [
  {
    id: 1,

    title: 'Fast',
    description: (
      <div className="flex flex-col  lg:flex-row items-center text-white">
        <div className={`flex lg:flex-row  flex-col items-center`}>
          <p className={`font-dm-sans`}>
            40-220+ Mbps <br /> Download
          </p>
          {/* Gạch ngăn giữa các phần */}
          <span className="mx-3 w-[25px] h-[1px] bg-white lg:w-[1px] md:mt-0 mt-3 lg:h-[36px]"></span>
        </div>

        <div className="flex lg:flex-row flex-col items-center md:mt-0 mt-3">
          <p className={`font-dm-sans`}>
            8-25+ Mbps <br /> Upload
          </p>
          <span className="mx-3 w-[25px] h-[1px] bg-white lg:w-[1px] md:mt-0 mt-3 lg:h-[36px]"></span>
        </div>

        <div>
          <p className={`font-dm-sans md:mt-0 mt-3`}>
            20-50ms <br /> Latency
          </p>
        </div>
      </div>
    ),
    image: FastImage,
  },
  {
    id: 2,

    title: 'Anywhere',
    description: (
      <span className="text-con-custom-green-bold">
        <span className={`font-dm-sanslg:block hidden `}>
          {' '}
          Connect almost any site in the <br /> <span>Philippines</span>
        </span>
        <span className={`font-dm-sanslg:hidden block`}>
          Connect almost any site in the Philippines
        </span>
      </span>
    ),
    image: AnyWhereImage,
  },
  {
    id: 3,

    title: 'Integrate',
    description: (
      <span>
        <span className={`font-dm-sans text-white`}>
          Seamless integration – Converge will take care of <br />
          everything from installation to monitoring & management
        </span>
      </span>
    ),
    image: IntegrateImage,
  },
];

export const WHO_ARE_WE_TALKING_TO = [
  {
    id: 1,

    title: 'Area',
    description: 'Locations with limited connectivity options',
    image: '/images/satellite/area.png',
  },
  {
    id: 2,

    title: 'Clients',
    description: 'Clients who wants redundancy',
    image: '/images/satellite/client.png',
  },
  {
    id: 3,

    title: 'Individual',
    description: 'Individuals who want dedicated satellite connections',
    image: '/images/satellite/individual.png',
  },
  {
    id: 4,

    title: 'Business',
    description:
      'Businesses with in-ocean operations that needs to be connected, 24/7',
    image: '/images/satellite/business.png',
  },
];

export const PRODUCTS = [
  {
    id: 'traditional-satellite-internet',
    name: 'Traditional Satellite Internet',
    description: [
      'Uses a single geostationary satellite orbiting ~35,786 km above Earth',
      'This long distance causes high latency (600+ ms)',
      'Result: Poor performance for streaming, gaming, video calls',
    ],
    // active: true,
    image: '/images/satellite/satellite-internet.png',
  },
  {
    id: 'starlink-approach',
    name: 'Starlink’s Approach',
    // active: false,
    description: [
      <span key="0">
        <span className="font-semibold">Low Earth orbit</span> for faster
        connectivity (550 km vs 35,000+ km)
      </span>,
      <span key="1">
        <span className="font-semibold">Lower latency </span> — around 25 ms vs
        600+ ms on traditional satellite internet
      </span>,
      ,
      <span key="2">
        <span className="font-semibold">Covers the entire globe,</span> even
        remote or hard-to-reach areas
      </span>,
      ,
    ],
    image: (
      <Image
        src="/images/satellite/geo.png"
        alt="geo"
        width={770}
        height={267}
        priority={true}
        fetchPriority="high"
      />
    ),
  },
  {
    id: 'advantages',
    name: 'The Advantages',
    // active: false,
    description: [
      <span key="0">
        <span className="font-semibold">FAST</span>
        <br />
        40-220+ Mbps Download | 8-25+ Mbps Upload | 20-60 MS Latency
      </span>,
      <span key="1">
        <span className="font-semibold">ANYWHERE</span>
        <br />
        Connect almost any site in the Philippines
      </span>,
      ,
      <span key="2">
        <span className="font-semibold">INTEGRATE</span>
        <br />
        Converge will take care of everything from installation to monitoring &
        management
      </span>,
      ,
    ],
    image: (
      <Image
        src="/images/satellite/starship.png"
        alt="starship"
        width={521}
        height={349}
        priority={true}
        fetchPriority="high"
      />
    ),
  },
];
export const SATELLITE_PRODUCTS = [
  {
    id: 49,
    title: 'Enterprise Kit',
    description:
      'Ideal for fixed-site use, with flexible installation, longer cables and support for custom router setups.',
    image: '/images/satellite/rada1.jpg',
  },
  {
    id: 50,
    title: 'Flat High Performance Kit',
    description:
      'Built for mobility and tough environments, offering wider coverage, better GPS, and reliable connectivity.',
    image: '/images/satellite/rada2.jpg',
  },
  {
    id: 51,
    title: 'Mini Kit',
    description:
      'A compact, portable kit that fits in a backpack and delivers fast, low-latency internet on the go.',
    image: '/images/satellite/rada3.jpg',
  },
];

export const SATELLITE_PRODUCTS_DESCRIPTION = [
  '40-220+ Mbps Download',
  '8-25+ Mbps Upload',
  '20-50ms Latency (Round trip time Kit to Gateway)',
  'Inclusive of Starlink Kits (variants available)',
];
export const SERVICE_OFFERINGS = [
  {
    id: 1,

    title: 'Proactive Monitoring of Service Lines',
    description:
      'We monitor service lines 24/7 and take immediate action on issues—no need for customers to file tickets. Updates are sent proactively.',
    image: '/images/satellite/newservice.svg',
  },
  {
    id: 2,

    title: 'Site Visit',
    description:
      'Includes 2 free site visits for on-site troubleshooting, repairs, or preventive maintenance, as needed.',
    image: '/images/satellite/service-2.png',
  },
  {
    id: 3,

    title: 'Usage Report',
    description:
      'Weekly reports show usage trends, helping optimize performance and recommend upgrades if required.',
    image: '/images/satellite/service-3.png',
  },
  {
    id: 4,

    title: 'Monthly SLA and Performance Report',
    description:
      'Monthly summary of service uptime and quality. Based on results, site visits may be advised to maintain peak performance.',
    image: '/images/satellite/service-4.png',
  },
];
export const RELATED_SERVICE_SATELLITE = [
  {
    id: 13,
    title: 'IP VPN',
    description:
      'A dedicated, private network connectivity service that securely links remote offices together using MPLS technology.',
    image: IpVpnImage,
  },
  {
    id: 2,
    title: 'Transport via GPON',
    description:
      'Secure, reliable, and flexible connections to link your branches, offices, and data centers.',
    image: GponImage,
  },
  {
    id: 9,
    title: 'Dedicated Internet Access',
    description:
      'Metro Ethernet delivers secure, high-capacity WAN connectivity for seamless, reliable business operations.',
    image: DedicatedInternetAccessImage,
  },
  {
    id: 12,
    title: 'Metro Ethernet',
    description:
      'Secure, reliable, and flexible connections to link your branches, offices, and data centers.',
    image: MetroEthernetImage,
  },
];
