import React from 'react';
import Search from '@/components/dashboard/Search';
import { cn, headerSpacing } from '@/lib/utils';
import DashboardAsides from '@/components/dashboard/layout/DashboardAsides';
import LeftAside from '@/components/dashboard/layout/LeftAside';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardAsides variant='left'>
                <LeftAside />
            </DashboardAsides>
            <div className={`${headerSpacing} clear-fixed-sidebar w-full sm:w-7/12  h-max mx-auto flex-col gap-20px  dash-block--parent border-dash dash-border dash-block--section`}>
                <Search />
                <section>{children}</section>
            </div >
        </>
    );
}


