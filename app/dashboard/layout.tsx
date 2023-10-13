import React from 'react';
import Search from '@/components/dashboard/Search';
import { cn, headerSpacing } from '@/lib/utils';
import DashboardAsides from '@/components/dashboard/DashboardAsides';
import LeftAside from '@/components/dashboard/LeftAside';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardAsides variant='left'>
                <LeftAside />
            </DashboardAsides>
            <div className={`${headerSpacing} clear-fixed-sidebar max-w-[1280px] h-max mx-auto  dash-block--parent border-dash dash-border`}>
                <Search />
                <main className='flex dash-block'>
                    <section>{children}</section>
                </main>
            </div >
            <DashboardAsides variant='right'>
                Some sidebar
            </DashboardAsides>
        </>
    );
}


