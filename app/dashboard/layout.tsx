import React from 'react';
import { Sidebar } from '@/components/dashboard/dashboard';
import Search from '@/components/dashboard/Search';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="guolong flex gap-4 justify-end container">
                <Sidebar playlists={[]} />

                <main className='mx-auto container gap-4  flex flex-wrap black-block black-block--section pt-30 mt-30 black-block--no-border flex-col mt-24'>
                    <search className=''>
                        <Search />
                    </search>
                    <section className='gap-4  flex flex-wrap black-block black-block--section  black-block--no-border   w-full flex-col mt-24'>
                        {children}
                    </section>
                </main>
                <aside className='black-block black-block--section black-block--border-left hidden sm:block 
                        w-3/12'>
                    some asides
                </aside>
            </div>
        </>
    );
}


