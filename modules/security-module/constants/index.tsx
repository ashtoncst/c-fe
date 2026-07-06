import { LinkTypography } from '@/components/typographies/LinkTypography';
import { ContentCard } from '@/components/card/ContentCard';
import { SecurityCardImage } from '@/modules/security-module/components/SecurityCarousel';
import IpVpnImage from '../../../public/images/selling/image1.png';
import GponImage from '../../../public/images/selling/image2.png';
import MetroEthernetImage from '../../../public/images/selling/image3.png';
import DedicatedInternetAccessImage from '../../../public/images/selling/image4.png';
import { v4 as uuidv4 } from 'uuid';
export const SECURITY_CARDS_MOCK: SecurityCardImage[] = [
  {
    id: 1,
    titleMain: 'What is DDoS Attack?',
    descMain: (
      <>
        <span>
          A distributed denial-of-service (DDoS) attack is an attempt to exhaust
          network, server or application resources so that they are no longer
          available to intended users and in some cases an attempt to cover up
          or distract from other exfiltration or theft of data activities.
        </span>
        <span className=" block mt-5">
          <LinkTypography>{`Read more about DDOS attack >`}</LinkTypography>
        </span>
      </>
    ),
    customCard: (
      <div className="w-[584px]">
        <ContentCard
          id={uuidv4()}
          description="DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems referred to as “botnets” or “zombie armies” as sources of attack traffic which can include computers and other networked resources such as IoT devices."
          image="/images/security/ddos.png"
          descriptionClassName="text-black"
        />
      </div>
    ),
  },
  {
    id: 2,
    titleMain: 'What is DDoS Attack?',
    descMain: (
      <>
        <span>
          A distributed denial-of-service (DDoS) attack is an attempt to exhaust
          network, server or application resources so that they are no longer
          available to intended users and in some cases an attempt to cover up
          or distract from other exfiltration or theft of data activities.
        </span>
        <span className="block mt-5">
          <LinkTypography>{`Read more about DDOS attack >`}</LinkTypography>
        </span>
      </>
    ),
    customCard: (
      <div className="w-[584px]">
        <ContentCard
          id={uuidv4()}
          description="Motivations for DDoS attacks tend to be financial, philosophical or political in nature."
          image="/images/security/system.png"
          descriptionClassName="text-black"
        />
      </div>
    ),
  },
];

export const SECURITY_PRODUCTS_MOCK = [
  {
    id: 'Hybrid Anti-DDOS Solutions Strategy',
    name: 'Hybrid Anti-DDOS Solutions Strategy',
    description: [
      'Combines the agility of mitigating DDoS attacks through local scrubbing center (within Converge Network) and the capacity of Cloud DDoS protection for large volume attacks.',
    ],
    active: true,
    image: '/images/security/securityTouch.png',
  },
  {
    id: 'Dedicated Gateway',
    name: 'Dedicated Gateway',
    active: false,
    description: [<span key="0">Dedicated gateway for Anti-DDoS subscribers</span>],
    image: '/images/security/Internet_1.2.png',
  },
];
export const RELATED_SERVICE_SECURITY = [
  {
    id: 13,
    title: 'IP VPN',
    description:
      'Secure, reliable, and flexible connections to link your branches, offices, and data centers.',
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
      'Secure, reliable, and flexible connections to link your branches, offices, and data centers.',
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
export const SECURITY_PRODUCTS = [
  {
    id: 'traditional-satellite-internet',
    name: 'Traditional Satellite Internet',
    description: [
      'Uses a single geostationary satellite orbiting ~35,786 km above Earth',
      'This long distance causes high latency (600+ ms)',
      'Result: Poor performance for streaming, gaming, video calls',
    ],
    // active: true,
    image: '/images/satellite/big-rada.png',
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
    image: '/images/satellite/geo.png',
  },
];
