import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';
import DashboardWrapper from '@/lib/theme';
import { Sidebar } from '@/components/dashboard/dashboard';
            
export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardWrapper>
                <TooltipProvider delayDuration={500}>
                    <div className="guolong flex gap-4 justify-end">
                        <Sidebar playlists={[]} />
                        <main className='black-block black-block--section black-block--no-border sm:w-7/12 w-full'>
                            {children}
                        </main>
                        <aside className='black-block black-block--section black-block--border-left hidden sm:block 
                        w-3/12'>
                            some asides
                        </aside>
                    </div>
                </TooltipProvider>
            </DashboardWrapper>
        </>
    );
}
