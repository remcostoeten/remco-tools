'use client';
import { Command, CommandDialog, CommandEmpty, CommandInput, CommandItem, CommandGroup, CommandList } from "@/components/ui/command";
import * as React from "react";
import RevenueGrowth from "./components/RevenuGrowth";
import ProjectionsChart from "./components/Graph";

export default function DashboardComponent() {
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <body className="bg-[#0D0D0D]">

                <main className="flex">
                    <RevenueGrowth />
                </main >
            </body >
        </>
    );
}