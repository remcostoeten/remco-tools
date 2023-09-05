import "@/styles/styles.scss";
import { siteConfig } from "@/utils/site";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import FancyHeader from "./fancy-hamburger-header/header";
import { ReactNode } from "react";
import Cursor from "@/components/core/Cursor";
import ActiveSectionContextProvider from "@/context/active-section-contex";
import Header from "@/components/core/header/Header";
import ThemeContextProvider from "@/context/theme-context";
import ToggleTheme from "@/components/ToggleTheme";
import ParallaxDiv from "@/components/ParallaxBackground";
import Trailer from "@/components/Trailer";
import { seoKeywords } from "@/config/keywords";
import PageLoader from "@/components/core/PageLoader";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  author: "Remco Stoeten", 
  image: `${siteConfig.url}/images/cover.jpg`, 
  url: siteConfig.url, 
  type: "Portfolio site and SaaS", 

  openGraph: {
    // @ts-ignore
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    site_name: siteConfig.name,
    image: {
      url: `${siteConfig.url}/images/og-image.jpg`,
      alt: "Your Site's Open Graph Image",
    },
    profile: {
      username: "remco-stoeten",
    },
  },

  linkedinProfile: "https://www.linkedin.com/in/remco-stoeten/",
  githubProfile: "https://github.com/remcostoeten",
  gitlabProfile: "https://gitlab.com/remcostoeten",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [
    {
      name: "Remco Stoeten",
      url: "https://remcostoeten.com",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className="!scroll-smooth">
      <body
        // @ts-ignore
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}
      >
       <ParallaxDiv/>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Trailer/>
            <ToggleTheme />
            <FancyHeader />
            <Header />{" "}

            <div className="mx-auto container">
              <PageLoader/>
              <main className="page-wrapper__inner flex flex-col items-center px-4 ">{children}</main>
            </div>
            <Analytics />
            <Toaster />
            {/* <Cursor /> */}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
