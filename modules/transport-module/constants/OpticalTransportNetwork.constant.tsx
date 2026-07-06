import { CardImage } from "@/components/card/CardSlider";
import DataImage from "../../../public/images/ipvpn/data.png";
import IpVpnImage from "../../../public/images/selling/image1.png";
import GponImage from "../../../public/images/selling/image2.png";
import DedicatedInternetAccessImage from "../../../public/images/selling/image4.png";

export const CARD_IMAGE_OPTICAL_TRANSPORT_NETWORK: CardImage[] = [
  {
    id: 1,
    title: "IX Express on Company A",
    img: "/images/opticaltransportnetwork/shutterstock_1289954.jpg",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Secure and Clear Channel",
    descMain:
      "Provides a dedicated, interference-free transmission path, ensuring secure data delivery.",
  },
  {
    id: 2,
    title: "Lara Vespera",
    img: "/images/opticaltransportnetwork/shutterstock_584696.png",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "High Bandwidth",
    descMain:
      "Delivers high-speed data transmission, supporting large-scale data transfers and real-time applications.",
  },
  {
    id: 3,
    title: "Lara Vespera",
    img: "/images/opticaltransportnetwork/shutterstock_701393.jpg",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Reliable and Low Latency",
    descMain:
      "Ensures minimal delay and high reliability, critical for real-time applications and business continuity.",
  },
  {
    id: 4,
    title: "Lara Vespera",
    img: "/images/opticaltransportnetwork/shutterstock_256732.jpg",
    desc: "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    titleMain: "Advanced Optical Technology",
    descMain:
      "Powered by Dense Wavelength Division Multiplexing (DWDM) — enabling multiple data streams over a single fiber for efficiency and speed.",
  },
];
export const RELATED_SERVICES_OPTICAL_TRANSPORT_NETWORK = [
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
