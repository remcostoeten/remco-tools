'use client';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';
import Link from 'next/link';
import AddIncomeExpenseForm from './components/IncomeExpenseForm';
import { Button } from '@/components/ui/button';
import IncomeNotAuthenticated from './components/IncomeNotAutthenticated';
import Totals from '@/components/dashboard/Totals';

// Define the Income interface
interface Income {
    id: string;
    amount: number;
    name: string;
}

export default function IncomePage() {
    const [incomes, setIncomes] = useState<Income[]>([]);

    const user = auth.currentUser;
    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'incomes'));

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
            } catch (error) {
                console.error('Error fetching incomes:', error);
            }
        };

        const unsubscribe = onSnapshot(collection(db, 'incomes'), () => {
            // This is the callback for real-time updates, you can use it if needed.
            // For the initial data fetch, you can use fetchIncomes directly.
        });

        fetchIncomes(); // Fetch initial data

        // Cleanup function to unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);

    return (
        <>
            <Totals />
            {user ? (
                <>

                </>
            ) : (
                <>
                    <Button>Submit</Button>
                </>
            )}
        </>
    );
}
