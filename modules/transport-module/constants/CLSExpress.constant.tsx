import { CardImage } from "@/components/card/CardSlider";
import DataImage from "../../../public/images/ipvpn/data.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";

export const CARD_IMAGE_CLS_EXPRESS: CardImage[] = [
  {
    id: 1,
    title: "IX Express on Company A",
    img: "/images/clsexpress/seamless-transport.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Seamless Transport via DWDM Network",
    descMain:
      "Ensures stable and high-capacity connectivity between landing stations.",
  },
  {
    id: 2,
    title: "Lara Vespera",
    img: "/images/clsexpress/ethernet-service.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Dedicated Ethernet Service",
    descMain: "Offers exclusivity and high reliability for enterprise needs.",
  },
  {
    id: 3,
    title: "Lara Vespera",
    img: "/images/clsexpress/strategic-transit.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Strategic Transit through the Philippines",
    descMain:
      "Ideal for customers utilizing PH as a transit hub to Asia and the US.",
  },
  {
    id: 4,
    title: "Lara Vespera",
    img: "/images/clsexpress/cable-owner.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Secure, Scalable Ethernet Technology",
    descMain:
      "Designed specifically for clients with existing cable infrastructure.",
  },
];
export const RELATED_SERVICES_CLS_EXPRESS = [
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
