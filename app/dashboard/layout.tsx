import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';
import DashboardWrapper from '../../lib/theme';
import Intro from '@/components/dashboard/Intro';
import { Sidebar } from '@/components/dashboard/dashboard';
import MoneyCard from '@/components/dashboard/MoneyCard';
import SmallMoneyCard from '@/components/dashboard/SmallMoneyCard';

export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <DashboardWrapper>
                <TooltipProvider delayDuration={500}>
                    <div className="guolong flex gap-4 justify-end">
                        <Sidebar playlists={[]} />
                        <main className='black-block black-block--section black-block--no-border w-7/12'>
                            {children}
                        </main>
                        <aside className='black-block black-block--section black-block--border-left w-3/12'>
                            <SmallMoneyCard type={'savings'} />
                        </aside>
                    </div>
                </TooltipProvider>
            </DashboardWrapper>
        </>
    );
}
