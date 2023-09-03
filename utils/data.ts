import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "HTML to (T/J)SX",
    hash: "html-to-jsx",
  },
  {
    name: "Geolocation",
    hash: "geolocation",
  },
  {
    name: "Todo",
    hash: "todo",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "HTML to (T/J)SX Converter / FC ",
    description:
      "A live HTML to JSX/TSX converter which also allows to convert raw HTML to a fully functionng component with or without props. ",
    tags: ["TypeScript", "Next.js", "TailwindCSS", "Monaco editor", "ShadCNui"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Geolocation app",
    description:
      "Convert any address whether it's a  address, city or postalcode. Also reversesearch location, save locations and more",
    tags: ["WiP","NextJS", "TypeScript", "Localtorage", "Tailwind", "Googleservices", "ShadCNui"],
    
    imageUrl: rmtdevImg,
  },
  {
    title: "Kanban Board",
    description:
      "A kanban board with user authentication and actual drag and drop functionallity like Jira or any other PM service..",
    tags: ["Firebase", "TypeScript", "NextJS", "TailwindCSS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
