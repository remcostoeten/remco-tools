import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];


export interface Task {
  id: string;
  title: string;
  label: string;
  priority: string;
  task: string;
  description: string;
  createdAt: string;  
     status: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    gitlab?: string;
    github?: string;
    linkedin?: string;
    whatsapp?: string;
    email?: string;
    baseurl?: string;
  };
}
//   Types for the navigation
  export type NavItem = {
    title: string
    href?: string
  }

  export type LayoutProps = {
    children: React.ReactNode
  }

  