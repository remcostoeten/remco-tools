'use client';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/utils/firebase';

interface Income {
    id: string;
    amount: number;
    name: string;
}

export default function Income() {
    const [incomes, setIncomes] = useState<Income[]>([]);

    useEffect(() => {
        // Initialize the subscription to real-time updates
        const unsubscribe = onSnapshot(collection(db, 'incomes'), (querySnapshot) => {
            const incomeData: Income[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                incomeData.push({
                    id: doc.id,
                    amount: data.amount,
                    name: data.name,
                });
            });
            setIncomes(incomeData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            {incomes.map((income) => (
                <div key={income.id}>
                    <p>Name: {income.name}</p>
                    <p>Amount: {income.amount}</p>
                </div>
            ))}
        </>
    );
}
