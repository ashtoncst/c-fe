import IpVpnImage from "../public/images/selling/image1.png";
import GponImage from "../public/images/selling/image2.png";
import MetroEthernetImage from "../public/images/selling/image3.png";
import DedicatedInternetAccessImage from "../public/images/selling/image4.png";
export const MENU = [
  {
    name: "Products",
    link: "#",
    subMenu: [
      { name: "Data", link: "/our-services/data" },
      { name: "Dedicated Internet Access", link: "/our-services/dedicated-internet-access" },
      { name: "Fiber Broadband", link: "/our-services/fiber-broadband" },
      { name: "Satellite Internet", link: "/connectivity/satellite" },
      { name: "Cable System", link: "/our-services/cable-system" },
      { name: "Content Plus", link: "/our-services/content-plus" },
      { name: "Security", link: "/our-services/security" },
      { name: "Managed Services", link: "/connectivity/managed-services" },
      { name: "Cloud", link: "/our-solution/cloud" },
      { name: "Data Center", link: "/data-center" },
    ],
  },
  {
    name: "Partners",
    link: "/our-partner",
    subMenu: [],
  },
  {
    name: "Resources",
    link: "/resources",
    subMenu: [
      { name: "Newsroom", link: "https://corporate.convergeict.com/newsroom" },
      { name: "Events", link: "/coming-soon" },
      // Wave Newsletter: external redirect to the LinkedIn Newsletter follow page
      { name: "Wave Newsletter", link: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7355782116405637120" },
      { name: "FAQs", link: "/resources/faq" },
    ],
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    subMenu: [],
  },
  {
    name: "About Us",
    link: "https://corporate.convergeict.com/",
    subMenu: [],
  },
];
export const SOLUTION_PACKAGE = [
  {
    title: <span className="lg:pb-2">{"Connectivity"}</span>,
    description:
      "Empower your teams with high-speed connectivity designed for uninterrupted collaboration and success.",
    link: "/connectivity",
  },

  {
    title: (
      <span>
        Beyond <br className="lg:block hidden" /> Connectivity
      </span>
    ),
    description:
      "Move from connectivity to capability with holistic digital services designed to elevate every part of your business.",
    link: "/beyond-connectivity",
  },
  {
    title: "Cloud, Data Centers, and Cybersecurity",
    description:
      "Enable remote work, business continuity, and rapid deployment with secure, scalable cloud environments.",
    link: "/cloud-data-centers-and-cyber-security",
  },
];

export const SERVICE_CATEGORIES = [
  {
    id: "1",
    name: "Internet",
    link: "internet",
    title: "Internet",
  },
  {
    id: "2",
    name: "Transport",
    link: "transport",
    title: "Transport",
  },
  {
    id: "3",
    name: "Satellite",
    link: "satellite",
    title: "Starlink for Business",
  },
  {
    id: "4",
    name: "Content",
    link: "content",
    title: "Content Plus",
  },
  {
    id: "5",
    name: "Security",
    link: "security",
    title: "Anti-Ddos",
  },
  {
    id: "6",
    name: "Managed Services",
    link: "managed-services",
    title: "Managed Services",
  },
  {
    id: "7",
    name: "Colocation",
    link: "colocation",
    title: "Colocation",
  },
];

export const INTERNET_PRODUCTS = [
  {
    title: "Internet",
    description:
      "High-speed internet, reliable, with dedicated & priority support.",
    image: "/images/image.png",
  },
  {
    title: "IPT Express",
    description: "For ISPs and businesses with their own AS and IP prefixes.",
    image: "/images/image2.png",
  },
  {
    title: "IX Express",
    description:
      "Connectivity benefits of an ISP with international presence and capacity",
    image: "/images/image3.png",
  },
  {
    title: "Metro Ethernet",
    description:
      "High-speed internet, reliable, with dedicated & priority support.",
    image: "/images/landing/landing-Metro.png",
  },
  {
    title: "Cloud Direct Connect",
    description: "For ISPs and businesses with their own AS and IP prefixes.",
    image: "/images/landing/landing-CDCS.png",
  },
  {
    title: "DC Express",
    description:
      "Connectivity benefits of an ISP with international presence and capacity",
    image: "/images/landing/landing-DCs.png",
  },
];
export const NEW_INTERNET_PRODUCTS = [
  {
    id: "8",
    title: "Fiber Broadband",
    description:
      "High-speed internet, reliable, with dedicated & priority support.",
    image: "/images/internet-img/fiber.png",
    link: "/fiber-broadband",
  },
  {
    id: "9",
    title: "Fiber Dedicated",
    description: "For ISPs and businesses with their own AS and IP prefixes.",
    image: "/images/internet-img/dedicated.png",
    link: "/connectivity/internet/fiber-dedicated",
  },
  {
    id: "10",
    title: "IX Express",
    description:
      "Connectivity benefits of an ISP with international presence and capacity",
    image: "/images/internet-img/ix.png",
    link: "/connectivity/internet/ix-express",
  },
  {
    id: "11",
    title: "IPT Express",
    description: "For ISPs and businesses with their own AS and IP prefixes.",
    image: "/images/internet-img/ipt.png",
    link: "/connectivity/internet/ipt-express",
  },
];
export const TRANSPORT_PRODUCTS = [
  {
    id: "12",
    title: "Metro Ethernet",
    description:
      "Secure, high-capacity WAN connectivity for seamless collaboration across locations.",
    image: "/images/selling/image4.png",
    link: "/connectivity/transport/metro-ethernet",
  },
  {
    id: "13",
    title: "IP VPN",
    description:
      "A dedicated, private network connectivity service that securely links remote offices together using MPLS technology.",
    image: "/images/selling/image1.png",
    link: "/connectivity/transport/ip-vpn",
  },
  {
    id: "14",
    title: "FASTER",
    description:
      "A dedicated, private network connectivity service that securely links remote offices together using MPLS technology.",
    image: "/images/landing/landing-faster.png",
    link: "/connectivity/transport/faster",
  },
  {
    id: "15",
    title: "Optical Transport Network",
    description:
      "Secure, scalable, reliable, and flexible optical transport network",
    image: "/images/landing/landing-OptocalTransportNetwork.png",
    link: "/connectivity/transport/optical-transport-network",
  },
  {
    id: "16",
    title: "Cloud Direct Connect",
    description:
      "Private, high-throughput link between your enterprise network and public cloud providers (CSP), enabling secure, WAN-like integration.",
    image: "/images/landing/landing-CDC.png",
    link: "/connectivity/transport/cloud-direct-connect",
  },
  {
    id: "17",
    title: "DC Express",
    description:
      "DC Express supports different protocols to connect data centers that host your IT services and network elements.",
    image: "/images/landing/landing-DC.png",
    link: "/connectivity/transport/dc-express",
  },
  {
    id: "18",
    title: "Ethernet International Private Line",
    description:
      "Secure, scalable Layer 2 WAN connectivity for your global offices via Trans-Asia and Trans-Pacific cables.",
    image: "/images/landing/landing-Metro.png",
    link: "/connectivity/transport/ethernet-international-private-line",
  },
  {
    id: "19",
    title: "CLS Express",
    description:
      "Dedicated Ethernet over DWDM for seamless connectivity between cable landing stations.",
    image: "/images/landing/landing-CDCS.png",
    link: "/connectivity/transport/cls-express",
  },
];
export const CONTENT_PRODUCTS = [
  {
    id: "20",
    title: "Customizable Interface",
    description: "Custom-fit solutions for every setup.",
    image: "/images/contents/content-1.png",
    link: "/",
  },
  {
    id: "21",
    title: "Apps",
    description:
      "Seamlessly connects with various content platforms to match all your needs.",
    image: "/images/contents/content-2.png",
    link: "/",
  },
  {
    id: "23",
    title: "E-Commerce",
    description:
      "Offer guests more than live TV, unlock more services with built-in eCommerce.",
    image: "/images/contents/content-4.png",
    link: "/",
  },
  {
    id: "24",
    title: "In Room Dining",
    description: "Virtually host your menu, and more on the guest’s screen.",
    image: "/images/contents/content-5.png",
    link: "/",
  },
  {
    id: "25",
    title: "Hotel Information",
    description:
      "Turn every screen into a showcase of your hotel’s personality, perks, and charm.",
    image: "/images/contents/content-6.png",
    link: "/",
  },
];

export const FIREBOARD_SERVICE_CATEGORIES = [
  {
    name: "PEAK",
    displayName: "Broadband PEAK",
    description:
      "Fast, reliable internet for home and business. With priority support and always-on connection, you’re covered anytime, anywhere.",
    link: "#",
  },
  {
    name: "PEAK with IP",
    displayName: "Broadband PEAK with IP",
    description:
      "Fast, reliable internet for home and business. With priority support and always-on connection, you’re covered anytime, anywhere.",
    link: "#",
  },
  {
    name: "DAY",
    displayName: "Broadband DAY",
    description:
      "Fast, reliable internet for home and business. With priority support and always-on connection, you’re covered anytime, anywhere.",
    link: "#",
  },
];
export const FIREBOARD_INTERNET_PRODUCTS_PEAK = [
  {
    id: "43",
    title: "Fiber Broadband 50-100 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image.png",
  },
  {
    id: "34",
    title: "Fiber Broadband 100-200 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image1.png",
  },
  {
    id: "35",
    title: "Fiber Broadband 200-400 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image2.png",
  },
  {
    id: "36",
    title: "Fiber Broadband 300-600 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image3.png",
  },
  {
    id: "37",
    title: "Fiber Broadband 400-800 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image4.png",
  },
  {
    id: "38",
    title: "Fiber Broadband 500-1000 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image5.png",
  },
];
export const FIREBOARD_INTERNET_PRODUCTS_DAY = [
  {
    id: "43",
    title: "Fiber Broadband 50-100 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image.png",
  },
  {
    id: "44",
    title: "Fiber Broadband 100-200 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image1.png",
  },
  {
    id: "45",
    title: "Fiber Broadband 200-400 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image2.png",
  },
  {
    id: "46",
    title: "Fiber Broadband 300-600 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image3.png",
  },
  {
    id: "47",
    title: "Fiber Broadband 400-800 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image4.png",
  },
  {
    id: "48",
    title: "Fiber Broadband 500-1000 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/image5.png",
  },
];
export const FIREBOARD_INTERNET_PRODUCTS_IP = [
  {
    id: "38",
    title: "Fiber Broadband 120 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé  ",
    image: "/images/fiberboard/120.png",
  },
  {
    id: "39",
    title: "Fiber Broadband 250 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/250.png",
  },
  {
    id: "40",
    title: "Fiber Broadband 500 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/500.png",
  },
  {
    id: "41",
    title: "Fiber Broadband 700 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/700.png",
  },
  {
    id: "42",
    title: "Fiber Broadband 1000 mbps",
    description: "Le Lorem Ipsum est simplement du faux texte employé ",
    image: "/images/fiberboard/1000.png",
  },
];

export const SECURITY_PRODUCTS = [
  {
    title: "On-Premises Defenses",
    description: [
      "Quick, simple mitigation",
      "Local scrubbing center, faster recovery",
      "40Gbps mitigation capacity",
    ],
    image: "/images/security/security-1.1.png",
  },
  {
    title: "Hybrid Defenses",
    description: [
      "Integrated Solution",
      "Fastest Time to Mitigation",
      "Defeats Largest DDoS Attacks",
    ],
    image: "/images/security/security-2.1.png",
  },
  {
    title: "Cloud Defenses",
    description: [
      "Advance Mitigation",
      "Global Cloud Scrubbing Centers",
      "Defeats the Largest DDoS Attacks",
    ],
    image: "/images/security/security-3.1.png",
  },
];

export const SECURITY_PRODUCTS_CARD = [
  {
    id: "1",
    title: "On-Premises Defenses",
    description: [
      "Quick, simple mitigation",
      "Local scrubbing center, faster recovery",
      "40Gbps mitigation capacity",
    ],
    image: "/images/security/security-1.1.png",
  },
  {
    id: "2",
    title: (
      <span>
        Hybrid
        <br /> Defenses
      </span>
    ),
    description: [
      "Integrated Solution",
      "Fastest Time to Mitigation",
      "Defeats Largest DDoS Attacks",
    ],
    image: "/images/security/security-2.1.png",
  },
  {
    id: "3",
    title: (
      <span>
        Cloud
        <br /> Defenses
      </span>
    ),
    description: [
      "Advance Mitigation",
      "Global Cloud Scrubbing Centers",
      "Defeats the Largest DDoS Attacks",
    ],
    image: "/images/security/security-3.1.png",
  },
];

export const MANAGED_SERVICES_PRODUCTS = [
  {
    id: "29",
    title: "DRaaS",
    description:
      "An in-country cloud service that safeguards your data with continuous protection and ensures business continuity during disasters, outages, or cyber attacks—all through an OPEX model.",
    image: "/images/management/management-1.png",
    link: "/connectivity/managed-services/draas",
  },
  {
    id: "30",
    title: "SD-WAN",
    description:
      "A connectivity that works for you. Stabilize & secure your network across multiple locations.",
    image: "/images/transport.jpg",
    link: "/connectivity/managed-services/sd-wan",
  },
  {
    id: "31",
    title: "Managed Wi-Fi",
    description:
      "Seamless and consistent Wi-Fi that’s expertly managed. Simple, fast & reliable.",
    image: "/images/management/management-2.jpg",
    link: "/connectivity/managed-services/managed-wifi",
  },
  {
    id: "32",
    title: "Managed Surveillance",
    description:
      "Converge Managed Surveillance offers smart, AI-powered security to protect your property, business, and people—boosting efficiency and awareness with global-standard compliance and scalable design.",
    image: "/images/management/management-3.jpg",
    link: "/connectivity/managed-services/managed-surveillance",
  },
];
export const questions = [
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
export const RELATED_SERVICE = [
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
