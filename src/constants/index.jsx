import { Building2 } from "lucide-react";
import { Facebook } from "lucide-react";
import { TextSearch } from "lucide-react";
import { Instagram } from "lucide-react";
import { Youtube } from "lucide-react";
import { Handshake } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Home", href: "Home" },
  // { label: "Features", href: "Features" },
  { label: "Workflow", href: "Workflow" },
  // { label: "Testimonials", href: "Testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Building2 />,
    text: "Local Business Marketing",
    description:
      "Local business marketing involves promoting products or services to a specific community, using targeted strategies like local SEO, social media, and events.",
  },
  {
    icon: <TextSearch />,
    text: "Search Engine Optimisation",
    description:
      "Search Engine Optimization (SEO) improves a website's visibility on search engines to drive organic traffic through optimized content and strategies.",
  },
  {
    icon: <Instagram />,
    text: "Instagram Marketing",
    description:
      "Instagram marketing leverages the platform’s visual content and features to promote brands, engage audiences, and drive sales through posts, stories, and ads.",
  },
  {
    icon: <Facebook />,
    text: "Facebook Marketing",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <Youtube />,
    text: "Youtube Marketing",
    description:
      "Facebook marketing uses the platform's features like posts, ads, and groups to promote brands, engage audiences, and drive business growth.",
  },
  {
    icon: <Handshake />,
    text: "Dedicated Teams",
    description:
      "Dedicated teams are specialized groups of professionals assigned exclusively to a project, providing focused expertise and long-term collaboration for optimal results.",
  },
];

export const checklistItems = [
  {
    title: "Soil Analysis",
    description:
      "We provide in-depth soil analysis to help farmers understand their land's potential and make informed crop decisions.",
  },
  {
    title: "Crop Recommendations",
    description:
      "Our platform offers tailored crop recommendations based on environmental conditions to maximize yield and profitability.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "We leverage data analytics to deliver actionable insights, empowering farmers to optimize their farming practices.",
  },
  {
    title: "Personalized Support",
    description:
      "Our dedicated support team is here to assist farmers with tailored advice and strategies, ensuring successful crop management.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
