import Head from 'next/head'
import CustomStatusBadge from "@/components/core/StatusBadge"
import {
  PageHeader,
  PageHeaderDescription
} from "@/components/ui/page-nav"
import Typewriter from "./components/alternating-text"
import { LayoutProps } from '@/utils/types'

const metadata = {
  title: {
    default: "HTML to JSX Converter",
    template: "HTML to JSX Converter",
  },
  description: "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
  keywords: [
    "HTML",
    "JSX",
    "TSX",
    "Next.js",
    "TypeScript",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remcostoeten.nl/html-to-jsx",
    title: "HTML to JSX Converter",
    description: "Convert your HTML code to JSX or TSX with ease. Simply paste your HTML and get the JSX/TSX version. Additional features include prefixing the output with 'use client' for Next.js and TypeScript type inclusion.",
    siteName: "HTML to JSX Converter",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://remcostoeten.nl/site.webmanifest",
}

export default function ConverterLayout({ children }: LayoutProps) {
  return (
    <>
      <div className='black-block relative container section black-block--section rounded-sm'>
        <div style={{ position: 'absolute', right: '0', top: '0', zIndex: 9999 }}>
          <CustomStatusBadge title="beta" emojiKey="rocket" index={0} />
          <CustomStatusBadge title="wip" emojiKey="fire" index={1} />
          <PageHeader>
            <span className="inline-block  space-y-4 font-heading text-4xl sm:mb-0 lg:text-5xl">
              Convert your HTML to <Typewriter />
            </span>
            <PageHeaderDescription>
              <span className="cursor-hover ">
                Simply paste in your HTML and get the JSX/TSX version. When you
                want to prefix the output with{" "}
                <pre className="inline-block"> 'use client '</pre> for NextJS
                simply toggle the switch. When using TypeScript you can also get
                a version with the types included by filling in the props but they are not required.
              </span>
            </PageHeaderDescription>
          </PageHeader>
          <main>
            {children}
          </main></div></div>
    </>
  )
}
