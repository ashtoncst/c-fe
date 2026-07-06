import { v4 as uuidv4 } from "uuid";

export const DATA_CENTER_CARD = [
  {
    title: (
      <span>
        J3 Caloocan
        <br className="hidden md:block" /> Data Center
      </span>
    ),
    subtitle: "METRO MANILA Q4 2024",
    content: (
      <p>
        DC RFS: June 2025
        <br /> No. of Racks: 241 Rack Space <br />
        IT Capacity: 15MW Expandable
      </p>
    ),
    img: "/images/colocation/data-center.png",
    mobileImg: "/images/colocation/data-center.svg",
  },
  {
    title: (
      <span>
        Angeles <br />
        Data Center
      </span>
    ),
    subtitle: "METRO MANILA Q4 2024",
    content: (
      <p>
        DC RFS: Q4 2025 <br /> No. of Racks: 1106 Rack Space <br />
        IT Capacity: 5.6MW Expandable
      </p>
    ),
    img: "/images/colocation/data-center.png",
    mobileImg: "/images/colocation/data-center.svg",
  },
];

export const DATA_CENTER_LOCATION = [
  {
    name: "Data Sheet",
  },
  {
    name: "Technical Specification",
  },
];
export const DATA_CENTER_SERVICE_SOLUTION = [
  {
    id: uuidv4(),
    title: "Upcoming",
    image: "/images/colocation/Colocation2.png",
    desc: ["Pagudpud Cable Landing Station"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/la-union-dc.png",

    desc: ["La Union Cable Landing Station"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/angeles-data-center.jpg",

    desc: ["Angeles Data Center"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/Colocation5.png",

    desc: ["Clark Data Center"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/caloocan-data-center.png",

    desc: ["Caloocan Data Center"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/pasig-reliance-dc.jpg",

    desc: ["Pasig Data Center"],
  },
  {
    id: uuidv4(),
    title: "Up and running",
    image: "/images/colocation/davao-cls.png",

    desc: ["Davao Cable Landing Station"],
  },
];
export const PARAMETERS = [
  "Facility Name",
  "Location",
  "Redudancy",
  "Tier Classification",
  "Scalability",
  "Certification & Compliance",
  "Data Center Type",
  "Carriers",
  "Target Annualized PUE",
  "Data Hall - Area, sqm",
  "Data Hall - IT Capacity, kW",
  "Data Hall - Rack Capacity, Nos.",
  "Design Ave. Rack Density, kW",
  "Ultimate - No of Data Halls",
  "Ultimate - Data Hall Area, sqm",
  "Ultimate - IT Capacity, kW",
  "Ultimate - Rack Capacity, Nos.",
  "Day 1 - No. of Data Halls (Warm Shell)",
  "Day 1 - No. of Data Halls (Ready Shell)",
  "Day 1 - Data Hall Area, sqm",
  "Day 1 - IT Capacity, kW",
  "Day 1 - Rack Capacity, Nos",
  "Construction Type",
  "GFA, sqm",
  "Nos. of Floors - Technical Block",
  "Nos. of Floors - Admin Building",
  "Total Building Height",
];
export const DESCRIPTION = [
  "J3 Caloocan Data Center Project",
  "Barrio Bagombong, Caloocan, Metro Manila, Philippines",
  "Concurrently Maintanable",
  "Uptime Tier III",
  "Modular | Plug & Play",
  "TCDD, TCFF (on-going), UL 1440 Salt Spray Test, Seismic Zone 4 Certification",
  "Colocation - Cloud, AI Adaptability",
  "Diversified and Carrier Neutral",
  "< 1.6",
  "190",
  "375",
  "68",
  "5.5 kW / RACK",
  "4",
  "760",
  "1500 (1.5 MW)",
  "266 + 8 Future AI Racks",
  "1",
  "3",
  "760",
  "1500 (1.5 MW)",
  "241",
  "Containerized Modular Data Center",
  "1,500",
  "G + 2 + R",
  "N/A",
  "Approx. 13.45 meters",
];
