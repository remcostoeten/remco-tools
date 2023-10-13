import React from 'react';
import Search from '@/components/dashboard/Search';
import { LeftAside } from '@/components/dashboard/LeftAside';
import { cn } from '@/lib/utils';
import Dashboard from '@/_app/dashboard/data/page';
import DashboardAsides from '@/components/dashboard/DashboardAsides';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardAsides variant='left'>
                <LeftAside />
            </DashboardAsides>
            <div className="max-w-[1280px] h-max  mx-auto  !mt-[10px]  dash-block--parent  border-dash dash-border">
                <Search />
                <main className='flex dash-block'>
                    <section>{children}</section>
                </main>
            </div>
            <DashboardAsides variant='right'>
                dwadawdawdwdw
            </DashboardAsides>
        </>
    );
}


