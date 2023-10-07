'use client'
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import MiniSpinner from "../effects/MiniSpinner";
import Image from "next/image";
import { collection, getDocs, QueryDocumentSnapshot } from "firebase/firestore";

interface Expense {
    id: string;
    name: string;
    expenseAmount: number;
}

export default function CurrentExpenses() {
    const [totalExpense, setTotalExpense] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchExpenses() {
            console.log("Fetching Expenses...");
            const expensesCollection = collection(db, 'expenses');
            const expensesSnapshot = await getDocs(expensesCollection);
            let total = 0;
            expensesSnapshot.forEach((doc: QueryDocumentSnapshot<Expense>) => {
                const expense = doc.data();
                console.log("Expense:", expense);
                total += expense.expenseAmount;
            });
            console.log("Total expense:", total);
            setTotalExpense(total);
            setIsLoading(false);
        }
        fetchExpenses();
    }, []);

    if (isLoading) {
        return <MiniSpinner />;
    }

    return (
        <>
            <div className="current-balance">
                <div className="wallet">
                    <img
                        className="wallet-2"
                        alt="Wallet"
                        src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/wallet@2x.png"
                    />
                    <div className="wallet-income">
                        <div className="text-wrapper-2">€{totalExpense},-</div>
                        <div className="text-wrapper-3">Total expense</div>
                    </div>
                </div>
                <div className="current-balance-2">CURRENT BALANCE</div>
                <div className="decoration">
                    <div className="overlap-group-4">
                        <Image
                            className="vector-3"
                            alt="Vector"
                            fill
                            src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/vector-13.svg"
                        />
                        <img
                            className="vector-4"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/vector-14.svg"
                        />
                        <div className="text-wrapper-4">+</div>
                        <div className="text-wrapper-5">+</div>
                        <div className="text-wrapper-6">+</div>
                        <div className="text-wrapper-7">+</div>
                    </div>
                </div>
            </div>
        </>
    );
}