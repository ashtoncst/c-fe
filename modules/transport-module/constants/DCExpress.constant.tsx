import { CardImage } from "@/components/card/CardSlider";
import DataImage from "../../../public/images/ipvpn/data.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";

export const CARD_IMAGE_DC_EXPRESS: CardImage[] = [
  {
    id: 1,
    title: "IX Express on Company A",
    img: "/images/dcexpress/internet-string.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Ethernet",
    descMain:
      "Layer 2 capacity with offering up to 100Gbps with our interconnection to our global carrier partners, we can also connect you to key international data centers",
  },

  {
    id: 2,
    title: "Lara Vespera",
    img: "/images/dcexpress/light-string.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Fiber Channel",
    descMain:
      "For your storage area networking, our fiber channel offering is the best solution as we support FC800 (10G), FC1600 (20G), and FC3200 (40G).",
  },
  {
    id: 3,
    title: "Lara Vespera",
    img: "/images/dcexpress/optical-transport.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Optical Transport",
    descMain:
      "Optical Channel for customers who want to leverage and use their own network terminals afor their capacity requirements.",
  },
];
export const DC_EXPRESS_BENEFITS = [
  {
    id: 1,
    title: "Ethernet",
    desc: "Layer 2 capacity with offering of up to 100Gbps. With our interconnection to our global carrier partners, we can also connect you to key international Data Centers.",
  },
  {
    id: 2,
    title: "Fiber Channel",
    desc: "For your Storage Area Networking, our Fiber Channel offering is the best solution as we support FC800 (10G), FC1600 (20G), and FC3200 (40G).",
  },
  {
    id: 3,
    title: "Optical Transport",
    desc: "Optical channel for customers who want to leverage and use their own network terminals for their capacity requirements.",
  },
];
export const RELATED_SERVICES_DC_EXPRESS = [
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
