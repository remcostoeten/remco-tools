import { links } from "../config/data";

export type SectionName = (typeof links)[number]["name"];

export type ThemeBlockProps = {
  children?: React.ReactNode;
  flexDir?: "row" | "col";
  borderRadius?: string;
  gap?: string;
  width?: string;
  title?: string;
  className?: string;
};

export type iconProps = {
  fill?: string;
  size?: string;
  className?: string;
}



export interface Thought {
  id: string;
  selectedDate?: Date;
  title: string;
  description: string;
  createdAt: any;
  status: string;
  priority: string;
  label: string;
  task: string;
  subject?: string;
  userId?: string;
}


export interface Expense {
  id: string; 
  createdAt: any;
  name: string;
  expenseAmount: number;
}

export interface Income {
  createdAt: any;
  id: string;
  name: string;
  incomeAmount: number;
}

export interface Savings {
  id: string;
  name: string; createdAt: any;

  savingsAmount: number;
}

export interface IncomeProps {
  id: string;
  name: string;
  isLoading: boolean;
  expenseAmount: number;
  incomeAmount: number;
}


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

