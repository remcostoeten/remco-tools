'use client';
import React from 'react';
import Search from '@/components/dashboard/Search';
import { cn, headerSpacing } from '@/lib/utils';
import DashboardAsides from '@/components/dashboard/layout/DashboardAsides';
import LeftAside from '@/components/dashboard/layout/LeftAside';
import { NextUIProvider } from '@nextui-org/react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <DashboardAsides variant='left'>
                <LeftAside />
            </DashboardAsides>
            <div className={`${headerSpacing} clear-header clear-fixed-sidebar w-full h-max flex-col gap-20px dash-block--parent border-dash dash-border dash-block--section mr-auto`}>
                <Search />
                <section className=''>{children}</section>
            </div>
        </>
    );
}