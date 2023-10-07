'use client';
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import MiniSpinner from "../effects/MiniSpinner";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

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

interface CurrentBalanceProps {
    type: "income" | "expense";
}

export default function MoneyCard({ type }: CurrentBalanceProps) {
    const [total, setTotal] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        async function fetchData() {
            console.log(`Fetching ${type}s...`);
            const collectionName = type === "income" ? "incomes" : "expenses";
            const dataCollection = collection(db, collectionName);
            const dataSnapshot = await getDocs(dataCollection);
            let totalAmount = 0;
            dataSnapshot.forEach((doc: QueryDocumentSnapshot<Income | Expense>) => {
                const data = doc.data();
                console.log(`${type}:`, data);
                if (type === "income" && "incomeAmount" in data) {
                    totalAmount += data.incomeAmount;
                } else if (type === "expense" && "expenseAmount" in data) {
                    totalAmount += data.expenseAmount;
                }
            });
            console.log(`Total ${type}:`, totalAmount);
            setTotal(totalAmount);
            setTotalItems(dataSnapshot.size);
            setIsLoading(false);
        }
        fetchData();
    }, [type]);

    if (isLoading) {
        return <MiniSpinner />;
    }

    return (
        <>
            <div className="black-block black-block--section rounded-md flex flex-col gap-4 w-5/12">
                <h4 className="text-5xl font-medium tracking-wider">{type === "income" ? "Income" : "Expense"}</h4>
                <span className="text-5xl font-medium tracking-wider">€{total},-</span>
                <div className="flex gap-1"></div>
                <p>Tota l of {totalItems} {type}s</p>
            </div>
        </>
    );
}