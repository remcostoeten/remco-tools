import '@/styles/styles.scss';
import { siteConfig } from '@/utils/site';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import FancyHeader from './fancy-hamburger-header/header';
import { ReactNode } from 'react';
import Cursor from '@/components/core/Cursor';
import ActiveSectionContextProvider from '@/context/active-section-contex';
import Header from '@/components/core/header/Header';
import ThemeContextProvider from '@/context/theme-context';
import ToggleTheme from '@/components/ToggleTheme';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                // @ts-ignore
                className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}>
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#333]"></div>
                {/* <div className="bg-[#513970] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#513970]"></div> */}

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <div className="mx-auto  w-[1280px] container">
                            <ToggleTheme />
                            <FancyHeader />
                            <Header />
                            <main className="page-wrapper__inner ">{children}</main>
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
