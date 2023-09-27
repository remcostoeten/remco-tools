import Sidebar from '@/components/dashboard/dashboard';
import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';
import DashboardWrapper from '../../lib/theme';
import Intro from '@/components/dashboard/Intro';

export default function layout({ children }) {
    return (
        <>
            <DashboardWrapper>
                <TooltipProvider delayDuration={500}>
                    <Sidebar />
                    <main className="ml-[140px] flex flex-col gap-4 p-5 ">
                        <Intro />
                        {children}
                    </main>
                </TooltipProvider>
            </DashboardWrapper>
        </>
    );
}
