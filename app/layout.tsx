import '@/styles/styles.scss';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/utils/site';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
import { LayoutProps } from '@/utils/types';
const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className="font-sans antialiased">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <main className="page-wrapper__inner ">{children}</main>
                    <Analytics />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
