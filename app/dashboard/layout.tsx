import Sidebar from '@/components/dashboard/dashboard';
import { TooltipProvider } from '@/components/ui/tooltip';
import React from 'react';

export default function layout({ children }) {
    return (
        <>
            <TooltipProvider delayDuration={500}>
                <Sidebar />

                {children}
            </TooltipProvider>
        </>
    );
}
