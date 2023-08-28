// Types for the manifest / site config
export type SiteConfig = {
    name: string
    description: string
    url: string
    links: {
      github: string
      gitlab: string
    }
  }

//   Types for the navigation
  export type NavItem = {
    title: string
    href?: string
  }