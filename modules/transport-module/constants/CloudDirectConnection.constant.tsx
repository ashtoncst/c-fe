import { CardImage } from "@/components/card/CardSlider";
import DataImage from "../../../public/images/ipvpn/data.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";
export const CARD_IMAGE_CLOUD_DIRECT_CONNECT: CardImage[] = [
  {
    id: 1,
    title: "IX Express on Company A",
    img: "/images/clouddirectconnect/sercure-internet.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Private and Dedicated Connection",
    descMain:
      "Ensures secure and exclusive access between enterprise and cloud providers.",
  },
  {
    id: 2,
    title: "Lara Vespera",
    img: "/images/clouddirectconnect/fast-speed.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "High Throughput Performance",
    descMain:
      "Delivers fast and reliable data transfer to support enterprise workloads.",
  },
  {
    id: 3,
    title: "Lara Vespera",
    img: "/images/clouddirectconnect/brain.png",

    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Direct Cloud Integration",
    descMain:
      "Allows interaction with CSPs as if they are part of your internal network.",
  },
  {
    id: 4,
    title: "Lara Vespera",
    img: "/images/clouddirectconnect/electric-towel.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "WAN Extension Capability",
    descMain: "Seamlessly extends enterprise WAN to public cloud environments.",
  },
];
export const RELATED_SERVICES_CLOUD_DIRECT_CONNECT = [
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
