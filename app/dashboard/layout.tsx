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
            <div className={`${headerSpacing} clear-fixed-sidebar w-full sm:w-7/12  h-max mx-auto  dash-block--parent border-dash dash-border`}>
                <Search />
                <section>{children}</section>
            </div >
            <DashboardAsides variant='right'>
                Some sidebar
            </DashboardAsides>
        </>
    );
}


