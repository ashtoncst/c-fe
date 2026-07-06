import { v4 as uuidv4 } from "uuid";

export const PRODUCT_OFFERING = [
  {
    id: "fiber-peak",
    name: "Fiber Broadband PEAK",
    description: [
      "Reliable, high-speed internet built for seamless business continuity.",
    ],
    productOffering: [
      {
        id: uuidv4(),
        title: "Fiber Broadband 120Mbps",
        description: "PHP 3,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 250Mbps",
        description: "PHP 6,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 500Mbps",
        description: "PHP 11,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 700Mbps",
        description: "PHP 15,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 1000Mbps",
        description: "PHP 21,000",
      },
    ],
  },
  {
    id: "fiber-day",
    name: "Fiber Broadband DAY",
    description: [
      "Reliable, high-speed internet built for seamless business continuity.",
    ],
    productOffering: [
      {
        id: uuidv4(),
        title: "Fiber Broadband 50-100Mbps",
        description: "PHP 2,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 100-200Mbps",
        description: "PHP 4,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 200-400Mbps",
        description: "PHP 8,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 300-600Mbps",
        description: "PHP 12,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 400-800Mbps",
        description: "PHP 15,000",
      },
      {
        id: uuidv4(),
        title: "Fiber Broadband 500-1000Mbps",
        description: "PHP 18,000",
      },
    ],
  },
  {
    id: "dedicated",
    name: "Dedicated Internet Access",
    description: [
      "Leased line internet technology with 100% committed speed and symmetric upload & download speed best for your latency sensitive applications and critical business tools.",
    ],
    productOffering: [
      {
        id: uuidv4(),
        title: "DIA Premium",
        description: "Multiple international IP Transit points",
      },
      {
        id: uuidv4(),
        title: "DIA Basic",
        description: "Best route IP Transit points",
      },
      {
        id: uuidv4(),
        title: "DIA Bandwidth-on-Demand",
        description: "Double your bandwidth instantly",
      },
      {
        id: uuidv4(),
        title: "DIA Clean Pipe",
        description: "Built-in protection with Anti-DDoS",
      },
    ],
  },
  {
    id: "ix",
    name: "IX Express",
    description: [
      "Reliable, high-speed internet built for seamless business continuity.",
    ],
    productOffering: [
      {
        id: uuidv4(),
        title: "Safe & Uninterrupted Access",
        description: "",
      },
      {
        id: uuidv4(),
        title: "Direct IXP Connectivity",
        description: "",
      },
      {
        id: uuidv4(),
        title: "Full IPL Capacity Ownership",
        description: "",
      },
    ],
  },
  {
    id: "ipt",
    name: "IPT Express",
    description: [
      "For ISPs and businesses with their own AS and IP prefixes, IPT Express offers direct and efficient IP transit.",
    ],
    productOffering: [
      {
        id: uuidv4(),
        title: "Safe & Uninterrupted Access",
        description: "",
      },
      {
        id: uuidv4(),
        title: "Direct IXP Connectivity",
        description: "",
      },
      {
        id: uuidv4(),
        title: "Full IPL Capacity Ownership",
        description: "",
      },
    ],
  },
];
