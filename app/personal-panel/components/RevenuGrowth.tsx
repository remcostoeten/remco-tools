'use client';

import React, { useEffect, useState } from "react";
import GrowthCard from "./GrowthCard";
import StonksUpIcon from "@/components/icons/StonksUpIcon";
import { QueryDocumentSnapshot } from "firebase/firestore";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/utils/firebase";
import MiniSpinner from "@/components/effects/MiniSpinner";
import Bar from "@/components/Bar";

interface Income {
    id: string;
    name: string;
    incomeAmount: number;
}

interface Expense {
    id: string;
    name: string;
    expenseAmount: number;
}

export default function RevenueGrowth() {
    const [incomeTotal, setIncomeTotal] = useState<number>(0);
    const [expenseTotal, setExpenseTotal] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const incomeCollection = collection(db, "incomes");
        const expenseCollection = collection(db, "expenses");

        const unsubscribeIncome = onSnapshot(incomeCollection, (snapshot) => {
            let totalAmount = 0;
            snapshot.forEach((doc: QueryDocumentSnapshot<Income>) => {
                const data = doc.data();
                totalAmount += data.incomeAmount;
            });
            setIncomeTotal(totalAmount);
        });

        const unsubscribeExpense = onSnapshot(expenseCollection, (snapshot) => {
            let totalAmount = 0;
            snapshot.forEach((doc: QueryDocumentSnapshot<Expense>) => {
                const data = doc.data();
                totalAmount += data.expenseAmount;
            });
            setExpenseTotal(totalAmount);
            setIsLoading(false);
        });

        return () => {
            unsubscribeIncome();
            unsubscribeExpense();
        };
    }, []);

    if (isLoading) {
        return <><MiniSpinner /></>;
    }

    return (
        <>
            <main className="w-full  items-start content-start flex-wrap flex flex-col">
                <div className="flex gap-5 w-full flex-wrap ">
                    <section className="self-stretch   flex gap-4 max-md:max-w-full w-full">
                        <GrowthCard
                            title="Income"
                            variant="sky-100"
                            percentage="12.11"
                            rotate={0}
                            directionIcon={<StonksUpIcon />}
                            value={incomeTotal.toString()}
                        />
                        <GrowthCard
                            title="Expense"
                            variant="[#282828]"
                            percentage="12.11"
                            rotate={0}
                            directionIcon={<StonksUpIcon />}
                            value={expenseTotal.toString()}
                        />
                    </section>
                    <section className="self-stretch   flex gap-4 max-md:max-w-full w-full">
                        <GrowthCard
                            title="Income"
                            variant="sky-100"
                            percentage="12.11"
                            rotate={0}
                            directionIcon={<StonksUpIcon />}
                            value={incomeTotal.toString()}
                        />
                        <GrowthCard
                            title="Expense"
                            variant="[#282828]"
                            percentage="12.11"
                            rotate={0}
                            directionIcon={<StonksUpIcon />}
                            value={expenseTotal.toString()}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}