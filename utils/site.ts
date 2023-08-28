import { SiteConfig } from "@/lib/types";

interface Links {
  gitlab?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  email?: string;
  baseurl?: string;
}

export const siteConfig: SiteConfig = {
  name: "remcostoeten",
  description: "...",
  url: "https://remcostoeten.com",
  links: {
    gitlab: "https://gitlab.com/remcostoeten",
    github: "https://github.com/remcostoeten",
    linkedin: "https://www.linkedin.com/in/remcostoeten/",
    whatsapp: "https://api.whatsapp.com/send?phone=yourphonenumber",
    email: "mailto:youremail@example.com",
    baseurl: "https://remcostoeten.com",
  },
};
