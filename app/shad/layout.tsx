"use client"
import { Inter } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

const inter = Inter({ subsets: ['latin'] })

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <body className={inter.className}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <div className="dash-container">
                        <aside className="left bg-black"></aside>
                        <main className="flex-1 bg-[#071001] p-8 m-8 rounded-lg">{children}</main>
                        <aside className="right  bg-black"></aside>
                    </div>
                </ThemeProvider>
            </body>
        </>
    );
}