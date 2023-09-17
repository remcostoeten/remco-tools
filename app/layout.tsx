import '@/styles/styles.scss';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import FancyHeader from '../components/fancy-hamburger-header/header';
import ActiveSectionContextProvider from '@/context/active-section-contex';
import Header from '@/components/core/header/Header';
import ThemeContextProvider from '@/context/theme-context';
import ThemeSettings from '@/components/core/ToggleTheme';
import { seoKeywords } from '@/config/keywords';
import { Inter, Manrope, Lexend_Deca } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const rope = Manrope({ subsets: ['latin'] });
const lexend = Lexend_Deca({ subsets: ['latin'] });

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: seoKeywords,
    author: 'Remco Stoeten',
    image: `${siteConfig.url}/images/cover.jpg`,
    url: siteConfig.url,
    type: 'Portfolio site and SaaS',

    openGraph: {
        // @ts-ignore
        type: 'website',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        site_name: siteConfig.name,
        image: {
            url: `${siteConfig.url}/images/og-image.jpg`,
            alt: "Your Site's Open Graph Image",
        },
        profile: {
            username: 'remco-stoeten',
        },
    },

    linkedinProfile: 'https://www.linkedin.com/in/remco-stoeten/',
    githubProfile: 'https://github.com/remcostoeten',
    gitlabProfile: 'https://gitlab.com/remcostoeten',

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    authors: [
        {
            name: 'Remco Stoeten',
            url: 'https://remcostoeten.com',
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='!scroll-smooth dark'>
            <body
                className={`${lexend.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#151817] dark:text-gray-50 dark:text-opacity-90`}
            >
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <ThemeSettings />
                        <FancyHeader />
                        <Header />
                        <main className='flex flex-col items-center page-wrapper__inner '>
                            <div className='container'>{children}</div>
                        </main>
                        <Analytics />
                        <Toaster />
                        {/* <Cursor /> */}
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
