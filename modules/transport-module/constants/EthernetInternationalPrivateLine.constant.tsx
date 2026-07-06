import { CardImage } from "@/components/card/CardSlider";
import DataImage from "../../../public/images/ipvpn/data.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";
export const CARD_IMAGE_ETHERNET_INTERNATIONAL_PRIVATE_LINE: CardImage[] = [
  {
    id: 1,
    title: "IX Express on Company A",
    img: "/images/exthernetinternationalprivateline/dedicated-global.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Dedicated International Connectivity",
    descMain:
      "Provides a secure and reliable private line between international branch offices and sites.",
  },
  {
    id: 2,
    title: "Lara Vespera",
    img: "/images/exthernetinternationalprivateline/layer.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Layer 2 WAN Architecture",
    descMain:
      "Delivers simplified yet efficient network routing with enhanced control and performance.",
  },
  {
    id: 3,
    title: "Lara Vespera",
    img: "/images/exthernetinternationalprivateline/trans-asia.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Trans-Asia and Trans-Pacific Coverage",
    descMain:
      "Leverages major subsea cable systems for wide regional and global reach.",
  },
  {
    id: 4,
    title: "Lara Vespera",
    img: "/images/exthernetinternationalprivateline/ex-technology.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Secure, Scalable Ethernet Technology",
    descMain:
      "Combines the security of traditional private lines with the flexibility and ease of Ethernet infrastructure.",
  },
];
export const RELATED_SERVICES_ETHERNET_INTERNATIONAL_PRIVATE_LINE = [
  {
    id: 1,
    title: "IP VPN",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mi.",
    image: IpVpnImage,
  },
  {
    id: 2,
    title: "Transport via GPON",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mi.",
    image: GponImage,
  },
  {
    id: 3,
    title: "Metro Ethernet",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mi.",
    image: DedicatedInternetAccessImage,
  },
  {
    id: 4,
    title: "Optical Transport Network",
    description: "A secure, low-latency Layer 1 service delivered via DWDM.",
    image: DataImage,
  },
];
