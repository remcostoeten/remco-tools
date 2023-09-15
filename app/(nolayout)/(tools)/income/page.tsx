'use client';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';
import Link from 'next/link';
import AddIncomeExpenseForm from './components/IncomeExpenseForm';
import { Button } from '@/components/ui/button';
import IncomeNotAuthenticated from './components/IncomeNotAutthenticated';

// Define the Income interface
interface Income {
    id: string;
    amount: number;
    name: string;
}

export default function IncomePage() {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const user = auth?.currentUser;

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
            {user ? (
                <>
                    <h1>Incomes</h1>
                    <Link href="/add-income">Add Income</Link>
                    <div>
                        {incomes.map((income) => (
                            <div key={income.id}>
                                <p>Name: {income.name}</p>
                                <p>Amount: {income.amount}</p>
                            </div>
                        ))}
                    </div>
                    <AddIncomeExpenseForm id="" name="" isLoading={false} expenseAmount={undefined} incomeAmount={undefined} />
                </>
            ) : (
                <>
                    <p className="mb-8 flex flex-col items-baseline justify-start gap-2 border p-5 pl-12 pt-8 align-baseline text-xl">
                        In order to use this feature, you have to be logged in.{' '}
                        <Button>
                            <Link href="/sign-up">Login</Link>
                        </Button>
                    </p>
                    <IncomeNotAuthenticated totalIncome={0} totalExpense={0} netWorth={0} expenses={[]} incomes={[]} />
                    <Button>Submit</Button>
                </>
            )}
        </>
    );
}
