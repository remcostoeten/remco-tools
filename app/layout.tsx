import Trailer from '@/components/core/Cursor';
import Header from '@/components/core/header/Header';
import SliderMenu from '@/components/effects/SliderMenu/menu';
import Footer from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/toaster';
import { seoKeywords } from '@/config/keywords';
import { siteConfig } from '@/config/site';
import ActiveSectionContextProvider from '@/context/active-section-contex';
import ThemeContextProvider from '@/context/theme-context';
import '@/styles/styles.scss';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Lexend_Deca, Manrope } from 'next/font/google';
import Particles from './c/components/particles';
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
        <html lang="en" className="dark !scroll-smooth">
            <body className={`${lexend.className} bg-offblack`}>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        {/* <ScrollBorder /> */}


                        <Particles className="animate-fade-in fixed inset-0 -z-10" quantity={150} />
                        {children}
                        <Footer />
                        <Trailer />
                        <Toaster />
                        <Analytics />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
        //     <body className={`${lexend.className} relative pt-28 sm:pt-36 dark:bg-offblack dark:text-gray-50 dark:text-opacity-90`}>
        //         <ThemeContextProvider>
        //             <ActiveSectionContextProvider>
        //                 {/* <ThemeSettings /> */}
        //                 <main className="flex flex-col items-center page-wrapper__inner ">
        //                     <div className="container">{children}</div>
        //                 </main>
        //                 <Analytics />
        //                 <Toaster />
        //                 {/* <Cursor /> */}
        //             </ActiveSectionContextProvider>
        //         </ThemeContextProvider>
        //     </body>
        // </html>
    );
}
