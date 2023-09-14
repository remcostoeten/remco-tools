'use client';
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/utils/firebase';
import { Input } from '@/components/ui/input';
import React from 'react';
import Link from 'next/link';

import {
    BlobButton,
    RoundedGlowButton,
} from '@/components/core/buttons/CustomButtons';
import AddIncomeExpenseForm from './components/IncomeExpenseForm';
import { Button } from '@/components/ui/button';
import IncomeNotAuthenticated from './components/IncomeNotAutthenticated';

interface IncomeProps {
    id: string;
    amount: number;
    name: string;
}

export default function IncomePage({}: IncomeProps) {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const user = auth?.currentUser;

    useEffect(() => {
        const fetchIncomes = async () => {
            const incomeData: Income[] = [];
            try {
                const querySnapshot = await onSnapshot(
                    collection(db, 'incomes')
                );
                querySnapshot.forEach((doc) => {
                    incomeData.push({
                        id: doc.id,
                        amount: doc.data().amount,
                        name: doc.data().name,
                    });
                });
                setIncomes(incomeData);
            } catch (error) {
                console.error('Error fetching incomes:', error);
            }
        };

        fetchIncomes();
    }, []);

    return (
        <>
            {user ? (
                <>
                    <h1>Incomes</h1>
                    <Link href='/add-income'>Add Income</Link>
                    <div>
                        {incomes.map((income) => (
                            <div key={income.id}>
                                <p>Name: {income.name}</p>
                                <p>Amount: {income.amount}</p>
                            </div>
                        ))}
                    </div>
                    <AddIncomeExpenseForm />
                </>
            ) : (
                <>
				<p className='flex flex-col align-baseline items-baseline justify-start gap-2 text-xl p-5 border pl-12 pt-8 mb-8'>In order to use this feature you have to be logged in. <Button><Link href='sign-up'>Login</Link></Button></p>
                    <IncomeNotAuthenticated
                        totalIncome={0}
                        totalExpense={0}
                        netWorth={0}
                        expenses={[]}
                        incomes={[]}
                    />
                    <Button>Submit</Button>
                </>
            )}
        </>
    );
}
