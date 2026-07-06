import { v4 as uuidv4 } from "uuid";

const getTicketsBtn = (
  <button
    className={`font-dm-sans border border-con-custom-green bg-white text-con-custom-green hover:bg-gray-50 rounded-full px-8 py-3 text-[14px] font-normal transition-colors`}
  >
    Get Tickets
  </button>
);

export const PROMO_CARD_RESOURCE_EVENT = [
  {
    id: uuidv4(),
    title: "The Future of Tech : What to Expect in 2024",
    description: (
      <div className="font-medium">
        Explore the newest trends in tech and gadgets.
      </div>
    ),
    date: <div className="font-light">October 15, 2023</div>,
    image: "/images/resources/future-tech.png",
    buttonTitle: "Technology Innovation",
  },
  {
    id: uuidv4(),
    title: "International Summit 2025",
    description: (
      <div className="font-medium">International Telecommunication Summit</div>
    ),
    date: <div className="font-light">November 20, 2025</div>,
    image: "/images/resources/event/international.png",
    buttonTitle: "Technology Innovation",
    getTicketsButton: getTicketsBtn,
  },
  {
    id: uuidv4(),
    title: "National Retail Conference & Expo",
    description: <div className="font-medium">National Retail Expo</div>,
    date: <div className="font-light">December 20, 2025</div>,
    image: "/images/resources/event/national.png",
    buttonTitle: "Technology Innovation",
    getTicketsButton: getTicketsBtn,
  },
];

export const FEATURED_ARTICLES_RESOURCE_EVENT = [
  {
    id: uuidv4(),
    title: "Lorem Ipsum",
    description:
      "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    getTicketsButton: getTicketsBtn,
    image: "/images/resources/event/interview.png",
  },
  {
    id: uuidv4(),
    title: "Lorem Ipsum",
    description:
      "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    getTicketsButton: getTicketsBtn,
    image: "/images/resources/event/market.png",
  },
  {
    id: uuidv4(),
    title: "Lorem Ipsum",
    description:
      "Le Lorem Ipsum est simplement du faux texte employe dans la composition et la mise en page avant imp",
    getTicketsButton: getTicketsBtn,
    image: "/images/resources/event/friendly.png",
  },
];
