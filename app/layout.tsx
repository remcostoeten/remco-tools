import '@/styles/styles.scss';
import { Roboto_Condensed } from 'next/font/google';
import { siteConfig } from '@/utils/site';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import FancyHeader from './fancy-hamburger-header/header';
import { ReactNode } from 'react';
import Cursor from '@/components/core/Cursor';
import CursorBlock from '@/components/CursorBlock';
const inter = {
    font: 'Roboto Condensed',
    subsets: ['latin'],
    weights: ['300', '600', '800'],
};

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
    manifest: `${siteConfig.url}/site.webmanifest`,
    themeColor: [{ media: '(prefers-color-scheme: dark)', color: 'black' }],
    openGraph: {
        type: 'website',
        locale: 'nl_NL',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    authors: [
        {
            name: 'remcostoeten',
            url: 'https://remcostoeten.com',
        },
    ],
};

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
 
 return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className="roboto font-sans antialiased">
                {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
                <div className="container">
                <FancyHeader />
                    <main className="page-wrapper__inner ">{children}</main>
                <CursorBlock/>
                    <Analytics />
                    <Toaster />
                    {/* </ThemeProvider> */}
                </div>
                <Cursor />
            </body>
        </html>
    );
}
