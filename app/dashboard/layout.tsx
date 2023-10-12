import React from 'react';
import Search from '@/components/dashboard/Search';
import { Sidebar } from '@/components/dashboard/LeftAside';
import DashboardBody from '@/components/effects/DashboardBody';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
    <DashboardBody/>    
            <div className="max-w-[1280px] h-max  mx-auto  pt-48 mt-48  dash-block--parent  border-dash dash-border">
                <Search />
                <main className='flex dash-block'>
                    <Sidebar playlists={[]} />
                    <section>{children}</section>
                </main>
            </div>
        </>
    );
}


