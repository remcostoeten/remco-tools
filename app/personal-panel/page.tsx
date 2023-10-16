import Search from "@/components/dashboard/Search";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import * as React from "react";
import RevenueGrowthComponent from "./components/RevenuGrowth";
import ProjectionsChart from "./components/RevenuGrowth";

export default function DashboardComponent() {
    return (
        <>
            <RevenueGrowthComponent /> <ProjectionsChart />

        </>
    );
}