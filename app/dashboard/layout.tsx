import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { cn, headerSpacing } from '@/lib/utils';
import DashboardAsides from '@/components/dashboard/layout/DashboardAsides';
import DashNav from '@/components/dashboard/layout/DashNav';
import LeftAside from '@/components/dashboard/layout/LeftAside';
import Search from '@/components/dashboard/Search';
import TSearch from '../personal-panel/components/Search';
import Intro from '@/components/dashboard/layout/Intro';

interface LayoutProps {
    children: React.ReactNode;
    currentPage: string;
}

export default function Layout({ children, currentPage }: LayoutProps) {
    return (
        <>
            <div className="flex bg-[#0D0D0D] justify-end">
                {/* <DashboardAsides variant="left">
                    <LeftAside />
                </DashboardAsides> */}
                <section className='py-[28px] px-[48px] w-3/4'>
                    <div className='flex flex-col gap-[80px]'>
                        <DashNav />
                        <Intro />
                    </div>
                    {children}
                </section>
            </div>
        </>
    );
}