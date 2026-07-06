import { v4 as uuidv4 } from "uuid";
import { Wifi, ShieldCheck, Compass } from "lucide-react";

export const SUGGESTED_TOPICS = [
  { id: "internet-connectivity", label: "Internet & Connectivity", icon: Wifi, prompt: "Internet & Connectivity" },
  { id: "security-solutions", label: "Security Solutions", icon: ShieldCheck, prompt: "Security Solutions" },
  { id: "help-me-choose", label: "Help me choose", icon: Compass, prompt: "Help me choose" },
];

export const AI_ASSISTANT_QUESTIONS = [
  {
    id: uuidv4(),
    title: "Lorem ipsum?",
    content:
      "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
  },
  {
    id: uuidv4(),
    title: "Le Lorem Ipsum est simplement du faux texte?",
    content:
      "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
  },
  {
    id: uuidv4(),
    title: "Le Lorem Ipsum est simplement du faux texte ?",
    content:
      "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
  },
  {
    id: uuidv4(),
    title: "Le Lorem Ipsum est simplement du faux texte ?",
    content:
      "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
  },
  {
    id: uuidv4(),
    title: "texte employé dan?",
    content:
      "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
  },
];
// export const AI_ASSISTANT_RESPONSE = [
//   {
//     id: uuidv4(),
//     title: "Le Lorem Ipsum est simplement du faux texte.",
//     content:
//       "111Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
//   },
//   {
//     id: uuidv4(),
//     title: "Le Lorem Ipsum est simplement du faux texte.",
//     content: <AIResponseImage />,
//   },
//   {
//     id: uuidv4(),
//     title: "Le Lorem Ipsum est simplement du faux texte.",
//     content:
//       "333Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
//   },
//   {
//     id: uuidv4(),
//     title: "Le Lorem Ipsum est simplement du faux texte.",
//     content:
//       "Managed WiFi is a fully outsourced solution where we design, deploy, monitor, and maintain your wireless network, ensuring optimal performance, security, and scalability. Our service includes fiber-to-the-room setups, 24/7 NOC monitoring, and flexible pricing models (OPEX) to suit your needs.",
//   },
// ];

export const AI_ASSISTANT = [
  {
    role: "ME",
    message: "Hello",
    uuid: uuidv4(),
  },
  {
    role: "AI",
    message: "Hello",
    uuid: uuidv4(),
  },
  {
    role: "ME",
    message: "How can I help you?",
    uuid: uuidv4(),
  },
  {
    role: "AI",
    message: "I'm here to help you",
    uuid: uuidv4(),
  },
  {
    role: "ME",
    message: "Hummm",
    uuid: uuidv4(),
  },
  {
    role: "AI",
    message: "Hummm",
    uuid: uuidv4(),
  },
  {
    role: "ME",
    message: "Check",
    uuid: uuidv4(),
  },
  {
    role: "AI",
    message: "Yes, I can help you",
    uuid: uuidv4(),
  },
];
