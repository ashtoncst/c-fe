import { CardImage } from "@/components/card/CardSlider";
import BagIcon from "@/public/icons/BagIcon";
import BlockIcon from "@/public/icons/BlockIcon";
import ShakeHandIcon from "@/public/icons/ShakeHandIcon";
import { UserTrustIcon } from "@/public/icons/UserTrurthIcon";
import MultipleImage from "../../../public/images/multitask.jpg";
import ContentPlusImage from "../../../public/images/content-plus.png";
import SatelliteImage from "../../../public/images/satellite.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import MetroEthernetImage from "../../../public/images/selling/image3.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";
import TransportImage from "../../../public/images/transport1.png";
export const DRAAS = [
  {
    id: 1,
    name: "Lara Vespera",
    country: "Lorem Ipsum, Country",
    img: "/images/fiberdedicated/new-avt.svg",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Anna Smith",
    country: "Lorem Ipsum, Country",
    img: "/images/fiberdedicated/new-avt.svg",
    desc: "Lorem ipsum dolor sit amet",
  },
];
export const QUESTION = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 3,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 4,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 5,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 6,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 7,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
  {
    id: 8,
    content: "Lorem ipsum dolor sit amet est simplement du faux texte employe?",
  },
];

export const RELATED_SERVICES = [
  {
    id: 1,
    title: "IP VPN",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: IpVpnImage,
  },
  {
    id: 2,
    title: "Transport via GPON",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: GponImage,
  },
  {
    id: 3,
    title: "Metro Ethernet",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: MetroEthernetImage,
  },
  {
    id: 4,
    title: "Dedicated Internet Access",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: DedicatedInternetAccessImage,
  },
];
export const CARDS = [
  {
    id: 1,
    name: "Lara Vespera",
    country: "Lorem Ipsum, Country",
    img: "/images/fiberdedicated/new-avt.svg",
    desc: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Anna Smith",
    country: "Lorem Ipsum, Country",
    img: "/images/fiberdedicated/new-avt.svg",
    desc: "Lorem ipsum dolor sit amet",
  },
];
export const CARD_IMAGE: CardImage[] = [
  {
    id: 1,
    title: (
      <div className="lg:mt-0 md:mt-[-40px] text-con-custom-green-bold">
        Instant Recovery,
        <br /> Zero Downtime
      </div>
    ),
    img: "/images/draas/male-check-computer.jpg",
    desc: "Stay resilient with in-country DRaaS powered by Continuous Data Protection.",
    titleMain: "Disaster Recovery as a Service (DRaaS)",
    descMain:
      "An in-country cloud computing solution that ensures business continuity and data protection using Continuous Data Protection (CDP) technology during disasters, outages, or cyber attacks, available through an OPEX model.",
  },
];
export const INFORMATION_CARD = [
  {
    id: 1,
    title: "Standard",
    desc: "It is a premium service using Metro-Ethernet as the access technology to deliver dedicated high-performance internet connectivity for any bandwidth requirements. Internet traffic is dynamically routed to multiple local and global IX and CDNs.",
  },
  {
    id: 2,
    title: "Economy",
    desc: "Balances performance and cost while delivering enterprise-grade service, allowing customers to do their transactions and activities over the internet. It’s designed for customers who require dedicated but basic internet access.",
  },
  {
    id: 3,
    title: "Time of Day",
    desc: "offers variable bandwidth based on the pre-set time of day. Get the same quality of premium internet service with double the subscribed bandwidth when you really need it – either day or night.",
  },
  {
    id: 4,
    title: "Bandwith on Demand",
    desc: "Allows customers to have access to precious bandwidth based on their dynamic demands. This gives customers the capability to burst up to 2x their subscribed bandwidth whenever they need it.",
  },
  {
    id: 5,
    title: "Upload",
    desc: "Offers asymmetric download and upload bandwidth allocation, best for any outbound traffic-intensive business operations.",
  },
  {
    id: 6,
    title: "Anti-DDoS Protection",
    desc: "Guarantees safe and secure browsing for all your enterprise sites, ensuring no loss of business at all times.",
  },
];

export const TRURST_DRAAS = [
  {
    id: 1,
    icon: (
      <div className="md:w-[48px] w-[38px] md:h-[75px] h-[59px]">
        <UserTrustIcon className="md:w-[48px] w-[38px] md:h-[75px] h-[59px]" />
      </div>
    ),
    title: "Scalable Pricing",
    description: "Powering connection across the nation",
    className: "bg-con-custom-green",
  },
  {
    id: 2,
    icon: <BlockIcon className="md:w-[58px] w-[48px] md:h-[81px] h-[68px]" />,
    title: "Data Sovereignty",
    description: "Bringing fast, reliable internet to Filipino families",
    className: "bg-con-custom-teal",
  },
  {
    id: 3,
    icon: (
      <ShakeHandIcon className="md:w-[80px] w-[73px] md:h-[53px] h-[49px]" />
    ),
    title: "No Hidden Costs",
    description: "Bridging both urban centers and rural towns",
    className: "bg-con-custom-teal md:order-2 order-1",
  },
  {
    id: 4,
    icon: <BagIcon className="md:w-[66px] w-[58px] md:h-[60px] h-[52px]" />,
    title: "Zero Maintenance",
    description: "Building with purpose from day one",
    className: "bg-con-custom-green md:order-1 order-2",
  },
];
export const RELATED_SERVICES_DRAAS = [
  {
    id: 2,
    title: "Transport",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: TransportImage,
  },
  {
    id: 3,
    title: "Satellite",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: SatelliteImage,
  },
  {
    id: 4,
    title: "Content Plus",
    description:
      "Secure, reliable, and flexible connections to link your branches, offices, and data centers.",
    image: ContentPlusImage,
  },
  {
    id: 5,
    title: "Anti-DDoS",
    description:
      "The evolution of enterprise connectivity, delivering dedicated and secure internet access.",
    image: MultipleImage,
  },
];
