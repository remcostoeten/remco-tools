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

const inter = {
  font: "Roboto Condensed",
  subsets: ["latin"],
  weights: ["300", "600", "800"],
};

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "black" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  authors: [
    {
      name: "remcostoeten",
      url: "https://remcostoeten.com",
    },
  ],
};

interface LayoutProps {
  children: ReactNode;
}

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
            <ToggleTheme />
            <FancyHeader />
            <Header />{" "}
            <div className="mx-auto container">
              <main className="page-wrapper__inner flex flex-col items-center px-4 ">{children}</main>
            </div>
            <Analytics />
            <Toaster />
            <Cursor />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
