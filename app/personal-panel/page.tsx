'use client';
import React from "react";
import Search from "@/components/dashboard/Search";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import RevenueGrowthComponent from "./components/RevenuGrowth";
import ProjectionsChart from "./components/RevenuGrowth";
import RevenueGrowth from "./components/RevenuGrowth";
import { auth } from "@/utils/firebase";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import MiniSpinner from "@/components/effects/MiniSpinner";
import MoneyCard from "@/components/core/cards/MoneyCard";
import TransactionsList from "./components/Transactions";
import Graph from "@/components/dashboard/Graph";
import ChartOne from "@/components/dashboard/Charts/ChartOne";
import Totals from "@/components/dashboard/Totals";

export default function DashboardComponent() {
    const [user, setUser] = useState<User | null>(null); 3
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            <div className="pt-8 flex flex-col pb-9">
                <h1 className="text-2   xl">
                    Welcome back{" "}
                    {loading ? (
                        <MiniSpinner />
                    ) : (
                        <>
                            {user?.displayName}
                        </>
                    )}
                </h1 >
                <span className="text-xs text-white/40">Here are a couple of your metrics!</span>
            </div >

            <div className="flex flex-col gap-4">
                <div className="grid gap-x-4 gap-y-4 grid-cols-3">
                    <div><MoneyCard type="expense" /></div>
                    <div><MoneyCard type="income" /> </div>
                    <div><MoneyCard type="saving" /> </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="pb-2">Latest expenses</h2>
                    <div className='grid gap-4 grid-cols-2'>
                        <TransactionsList />
                    </div>
                </div>
                <div className="flex gap-4 ">
                    <Totals />
                </div>
            </div>
        </>
    );
}