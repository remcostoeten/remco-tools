import Trailer from '@c/core/Cursor';
import ThemeSettings from '@c/core/ToggleTheme';
import InteractiveDots from '@c/effects/InteractiveDots';
import SliderNavigation from '@c/effects/SliderMenu/SlideNavigation';
import Header from "@c/core/header/Header";
import Footer from '@c/landing/Footer';
import { Toaster } from '@c/ui/toaster';
import { seoKeywords } from '@/config/keywords';
import { siteConfig } from '@/config/site';
import ActiveSectionContextProvider from '@/context/active-section-contex';
import ThemeContextProvider from '@/context/theme-context';
import '@/styles/styles.scss';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Lexend_Deca, Manrope } from 'next/font/google';
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
        <html lang="en" className="dark !scroll-smooth">
            <body className={`${lexend.className} bg-offblack`}>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <ThemeSettings/>
                        <Header />
                        <SliderNavigation />
                        <InteractiveDots dotSize={200}/>
                        {children}
                        <Footer />
                        <Trailer />
                        <Toaster />
                        <Analytics />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
