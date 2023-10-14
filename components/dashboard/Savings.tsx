'use client';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/utils/firebase';

interface Savings {
    id: string;
    amount: number;
    name: string;
}

export default function Savings() {
    const [Savingss, setSavingss] = useState<Savings[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'savings'), (querySnapshot) => {
            const SavingsData: Savings[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                SavingsData.push({
                    id: doc.id,
                    amount: data.amount,
                    name: data.name,
                });
            });
            setSavingss(SavingsData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <>
            {Savingss.map((savings) => (
                <div key={savings.id}>
                    <p>Name: {savings.name}</p>
                    <p>Amount: {savings.amount}</p>
                </div>
            ))}
        </>
    );
}
