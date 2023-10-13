import React from 'react';
import Search from '@/components/dashboard/Search';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="max-w-[1280px] h-max  mx-auto  pt-48 mt-48  dash-block--parent  border-dash dash-border">
                <Search />
                <main className='flex dash-block'>
                    <section>{children}</section>
                </main>
            </div>
        </>
    );
}


