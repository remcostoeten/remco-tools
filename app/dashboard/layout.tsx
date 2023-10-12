import React from 'react';
import Search from '@/components/dashboard/Search';
import { LeftAside } from '@/components/dashboard/LeftAside';
import { cn } from '@/lib/utils';

export default function layout({ children }: { children: React.ReactNode }) {
    const
   
    return (
        <>
            <aside className={cn("overflow-hidden hidden sm:block rounded-[0.5rem] bg-background text-cream shadow ", className)}>
                <LeftAside playlists={[]} />
            </aside>
        </aside >
            <div className="max-w-[1280px] h-max  mx-auto  pt-48 mt-48  dash-block--parent  border-dash dash-border">
                <Search />
                <main className='flex dash-block'>
                    <section>{children}</section>
                </main>
            </div>
        </>
    );
}


