import { CheckIcon } from "@/components/icon-coms/CheckIcon";
import CloseIcon from "@/public/icons/CloseIcon";
import ContentPlusImage from "../../../public/images/content-plus.png";
import MultipleImage from "../../../public/images/multitask.jpg";
import SatelliteImage from "../../../public/images/satellite.png";
import TransportImage from "../../../public/images/transport1.png";
import { v4 as uuidv4 } from "uuid";
import { CardImage } from "@/components/card/CardSlider";
import { UserTrustIcon } from "@/public/icons/UserTrurthIcon";
import BlockIcon from "@/public/icons/BlockIcon";
import ShakeHandIcon from "@/public/icons/ShakeHandIcon";
import BagIcon from "@/public/icons/BagIcon";

export const SDWAN_PLANS = [
  {
    id: uuidv4(),
    name: "Connectivity",
    categories: [
      {
        name: "Primary",
        services: [
          {
            id: uuidv4(),
            service: "Fiber Broadband",
            basic_value: <div className="md:h-full h-[33.6px]">25 Mps</div>,
            premium_value: <div className="md:h-full h-[33.6px]">50 Mps</div>,
            basic_isCheck: <CloseIcon />,
            premium_isCheck: <CloseIcon />,
          },
        ],
      },
      {
        name: "Back up",
        services: [
          {
            id: uuidv4(),
            service:
              "4G/LTE: 3rd Party Wireless Broadband (Starlink Optional Backup)",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[117.6px]">
                <CheckIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[117.6px]">
                <CheckIcon />
              </div>
            ),
          },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    name: "SD-WAN",
    categories: [
      {
        name: "Branch",
        services: [
          {
            id: uuidv4(),
            service: "SD-WAN CPE with 4GE LAN, Wi-Fi & LTE",
            basic_value: <div className="md:h-full h-[84px]">Huawei, H3C</div>,
            premium_value: (
              <div className="md:h-full h-[84px]">FORTINET, CISCO</div>
            ),
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
          },
        ],
      },
      {
        name: "Head Office",
        services: [
          {
            id: uuidv4(),
            service: "Hub/Head Office SD-WAN Backhaul Router HA Setup",
            basic_value: <div className="md:h-full h-[100.8px]">Cloud</div>,
            premium_value: (
              <div className="md:h-full h-[100.8px]">Cloud/On Prem</div>
            ),
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
          },
        ],
      },
      {
        name: "Controller",
        services: [
          {
            id: uuidv4(),
            service: "SD-WAN Controller (Hardware, Software & Licenses)",
            basic_value: "",
            premium_value: "",
            basic_isCheck: "",
            premium_isCheck: "",
          },
        ],
      },
    ],
  },

  {
    id: uuidv4(),
    name: "Service Management",
    categories: [
      {
        name: "Service Management",
        services: [
          {
            id: uuidv4(),
            service: "Network Design",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[67.2px]">
                <CheckIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[67.2px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: (
              <div>
                WAN Network Configuration/
                <p className="md:hidden block h-0">
                  <br />
                </p>
                Commissioning
              </div>
            ),
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "NOC Monitoring",
            basic_value: <div className="md:h-full h-[33.6px]">24x7</div>,
            premium_value: <div className="md:h-full h-[33.6px]">24x7</div>,
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "SLA Review & Reporting, Service Improvement Plan",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[100.8px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[100.8px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "Telco Coordination (3rd party WAN Issue)",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[84px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[84px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "Software Upgrade/Update",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "Service Delivery Manager",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[50.4px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[50.4px]">
                <CheckIcon />
              </div>
            ),
          },
        ],
      },
      {
        name: "Incident Management",
        services: [
          {
            id: uuidv4(),
            service: "Onsite Support",
            basic_value: <div className="md:h-full h-[33.6px]">8x5</div>,
            premium_value: <div className="md:h-full h-[33.6px]">24x7</div>,
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "RMA/Device Replacement",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[33.6px]">
                <CheckIcon />
              </div>
            ),
          },
          {
            id: uuidv4(),
            service: "Scheduled Maintenance/Event Support",
            basic_value: "",
            premium_value: "",
            basic_isCheck: (
              <div className="md:h-full h-[50.4px]">
                <CloseIcon />
              </div>
            ),
            premium_isCheck: (
              <div className="md:h-full h-[50.4px]">
                <CheckIcon />
              </div>
            ),
          },
        ],
      },
    ],
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
export const TRURST_SDWAN = [
  {
    id: 1,
    icon: (
      <div className="md:w-[48px] w-[38px] md:h-[75px] h-[59px]">
        <UserTrustIcon className="md:w-[48px] w-[38px] md:h-[75px] h-[59px]" />
      </div>
    ),
    title: "Solution Driven",
    description:
      "Offering the solution with the best performance and the best price.",
    className: "bg-con-custom-green",
  },
  {
    id: 2,
    icon: <BlockIcon className="md:w-[58px] w-[48px] md:h-[81px] h-[68px]" />,
    title: "Secured Data",
    description:
      "We make sure that you’re protected through robust security measures.",
    className: "bg-con-custom-teal",
  },
  {
    id: 3,
    icon: (
      <ShakeHandIcon className="md:w-[80px] w-[73px] md:h-[53px] h-[49px]" />
    ),
    title: "Service Distinction",
    description:
      "Solution that will work perfectly with our pure fiber network & quality service.",
    className: "bg-con-custom-teal md:order-2 order-1",
  },
  {
    id: 4,
    icon: <BagIcon className="md:w-[66px] w-[58px] md:h-[60px] h-[52px]" />,
    title: "Strategically Diverse",
    description:
      "You'll be covered wherever you are with our strong nationwide presence.",
    className: "bg-con-custom-green md:order-1 order-2",
  },
];
export const CARD_IMAGE: CardImage[] = [
  {
    id: 1,
    title: (
      <div className="lg:mt-0 md:mt-[-40px] text-con-custom-green-bold">
        Smarter Traffic,
        <br /> Stronger Security
      </div>
    ),
    img: "/images/sdwan/technology-earth1.png",
    desc: (
      <p className="!md:w-full !w-[179px] md:ml-0 ml-11">
        Optimize performance, cut costs, and secure your WAN.
      </p>
    ),
    titleMain: "SD-WAN (Software-Defined WAN)",
    descMain:
      "is a modern network technology that optimizes network performance, security, and costs by intelligently routing traffic across multiple connections (MPLS, broadband, LTE, 5G).",
  },
];
export const RELATED_SERVICES_SDWAN = [
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
