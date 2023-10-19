'use client';
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandGroup, CommandList } from "@/components/ui/command";
import * as React from "react";
import RevenueGrowth from "./components/RevenuGrowth";
import ProjectionsChart from "./components/Graph";
import LeftAside from "@/components/dashboard/layout/LeftAside";
import DashboardAsides from "@/components/dashboard/layout/DashboardAsides";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import Intro from '@/components/dashboard/layout/Intro';

export default function DashboardComponent() {
    return (
        <>
            <body className="bg-[#0D0D0D]">

                <main className="flex">
                    <DashboardAsides variant="left">
                        <LeftAside />
                    </DashboardAsides>
                    <main className="p-[24px]"></main>
                    <Intro />
                </main>
            </body>
        </>
    );
}