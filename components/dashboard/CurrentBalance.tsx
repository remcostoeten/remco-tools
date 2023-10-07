
'use client'
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import MiniSpinner from "../effects/MiniSpinner";
import Image from "next/image";

export default function CurrentBalance() {
    const [totalIncome, setTotalIncome] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchIncomes() {
            console.log("Fetching incomes...");
            const incomesCollection = collection(db, "incomes");
            const incomesSnapshot = await getDocs(incomesCollection);
            let total = 0;
            incomesSnapshot.forEach((doc) => {
                const income = doc.data();
                console.log("Income:", income);
                total += income.incomeAmount;
            });
            console.log("Total income:", total);
            setTotalIncome(total);
            setIsLoading(false);
        }
        fetchIncomes();
    }, []);

    if (isLoading) {
        return <MiniSpinner/>;
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
                        <div className="text-wrapper-2">€{totalIncome},-</div>
                        <div className="text-wrapper-3">Total Income</div>
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