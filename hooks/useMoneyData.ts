// useMoneyData.ts
import { auth, db } from '@/utils/firebase';
import { Expense, Income } from '@/utils/types';
import { QueryDocumentSnapshot, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

type MoneyData = {
    expenses: Expense[];
    incomes: Income[];
    isLoading: boolean;
};

const useMoneyData = (): MoneyData => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const user = auth?.currentUser;

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const expenseQuerySnapshot = await getDocs(collection(db, 'expenses'));
            const fetchedExpenses = expenseQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                expenseAmount: doc.data().expenseAmount,
                createdAt: doc.data().createdAt,
            }));
            setExpenses(fetchedExpenses);

            const incomeQuerySnapshot = await getDocs(collection(db, 'incomes'));
            const fetchedIncomes = incomeQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().name,
                incomeAmount: doc.data().incomeAmount,
                createdAt: doc.data().createdAt,
            }));
            setIncomes(fetchedIncomes);

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return { expenses, incomes, isLoading };
};

export default useMoneyData;