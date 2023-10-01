'use client';
import Particles from '@/components/particles';
import React, { useEffect } from 'react';

export default function DashboardWrapper({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        document.body.classList.add('dashboard');

        return () => {
            document.body.classList.remove('dashboard');
        };
    }, []);

    return (
        <div className="dashboard h-screen bg-[#09090b]">
            <Particles className="animate-fade-in fixed inset-0 -z-10" quantity={150} />

            {children}
        </div>
    );
}
