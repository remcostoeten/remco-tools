import '@/styles/styles.scss';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { seoKeywords } from '@/config/keywords';
import { Inter, Manrope, Lexend_Deca } from 'next/font/google';
import ThemeContextProvider from '@/context/ThemeContextProvider';
import ActiveSectionContextProvider from '@/context/ActiveSectionContext';
import Header from '@/components/header/Header';
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
    robots: {
        index: true,

        follow: true,
        googleBot: {
            'index': true,
            'follow': true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    authors: [
        {
            name: 'Remco Stoeten',
            url: 'https://remcostoeten.com',
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="!scroll-smooth dark">
            <body className="relative pt-20 sm:pt-36 dark:bg-offblack dark:text-gray-50 dark:-text-opacity-90">
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {/* <FancyHeader /> */}
                        {/* <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={150} /> */}
                        {children}
                        {/* <Trailer /> */}
                        {/* <Toaster /> */}
                        <Analytics />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
