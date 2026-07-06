import Image from "next/image";

export const ITEM_LIST = [
  {
    id: "1",
    title: "Connectivity - Solution Package",
    subtitle: "Features Included:",
    featureList: [
      {
        title: "Internet Package Features",
        subList: [
          "Fiber Broadband",
          "Fiber Dedicated",
          "IPT Express",
          "IX Express",
        ],
      },
      {
        title: "Transport Package Features",
        subList: [
          "IP VPN",
          "Transport via GPON",
          "Metro Ethernet",
          "IPL",
          "Cloud Direct Connect",
          "DC Express",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Manage Service - Service Package ",
    subtitle: "Features Included:",
    featureList: [
      {
        title: "Services Package Features",
        subList: ["SDWAN", "Manage Wi-fi", "DRaaS"],
      },
    ],
  },
  {
    id: "3",
    title: "Data Centers -  Product Offering",
    subtitle: "",
    featureList: [],
  },
];

export const ADD_ON_LIST = [
  {
    id: "13",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant imp.",
    title: "IP VPN",
    img: (
      <Image
        src={"/images/selling/image1.png"}
        alt="add-on-1"
        layout="fill"
        objectFit="cover"
        priority={true}
        fetchPriority="high"

      />
    ),
  },
  {
    id: "2",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant imp.",
    title: "Transport via GPON",
    img: (
      <Image
        src={"/images/selling/image2.png"}
        alt="add-on-1"
        layout="fill"
        objectFit="cover"
        priority={true}
        fetchPriority="high"

      />
    ),
  },
  {
    id: "12",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant imp.",
    title: "Metro Ethernet",
    img: (
      <Image
        src={"/images/selling/image3.png"}
        alt="add-on-1"
        layout="fill"
        objectFit="cover"
        priority={true}
        fetchPriority="high"

      />
    ),
  },
  {
    id: "9",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant imp.",
    title: "Dedicated Internet Access",
    img: (
      <Image
        src={"/images/selling/image4.png"}
        alt="add-on-1"
        layout="fill"
        objectFit="cover"
        priority={true}
        fetchPriority="high"

      />
    ),
  },
];
