import React from 'react';
import DashNav from '@/components/dashboard/layout/DashNav';
import Intro from '@/components/dashboard/layout/Intro';
import Banner from '@/components/dashboard/Banner';
import RevenueGrowth from '../personal-panel/components/RevenuGrowth';
import YearlyBreakup from '@/components/dashboard/YearlyRevenue';

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
                        <RevenueGrowth />
                        <YearlyBreakup />
                    </div>
                    {children}
                </section>
            </div>
        </>
    );
}