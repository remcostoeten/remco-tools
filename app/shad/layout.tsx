"use client"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <body className={inter.className}>
                <aside className="dashboard-left bg-black"></aside>
                <div className="dash-container">
                    <main className="flex-1 bg-[#071001] p-8 m-8 rounded-lg">{children}</main>
                    <aside className="right  bg-black"></aside>
                </div>
            </body>
        </>
    );
}