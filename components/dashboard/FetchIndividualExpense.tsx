'use client';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { toast } from '../ui/use-toast';
import { HiUserRemove } from 'react-icons/hi';
import { Expense } from '@/utils/types';
import MoneyCard from '../core/cards/MoneyCard';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarTrigger } from '../ui/menubar';
import { tr } from 'date-fns/locale';
import Block from '../core/ThemeBlock';
import MiniSpinner from '../effects/MiniSpinner';

export default function FetchExpenses() {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'expenses'), (querySnapshot) => {
            const expenseData: Expense[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                expenseData.push({
                    id: doc.id,
                    expenseAmount: data.expenseAmount,
                    name: data.name,
                    createdAt: data.createdAt.toDate(),
                    category: '',
                    userId: ''
                });
            });
            setExpenses(expenseData);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'expenses', id));
            toast({
                title: 'Expense deleted',
                description: 'Expense deleted successfully',
                icon: <HiUserRemove />
            });
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <>
            {isLoading ? (
                <><h1>test</h1><div className="flex w-full gap-4">
                    <Block className='w-5/12'>
                        <MiniSpinner /></Block>
                    <Block className='w-5/12'>
                        <MiniSpinner /></Block>
                    <Block className='w-2/12'>
                        <MiniSpinner /></Block>
                </div></>
            ) : (
                <><h1>test</h1>{

                    expenses.map((expense) => (
                        <MoneyCard useChildren key={expense.id}>
                            dawdawd    <p>Name: {expense.name}</p>
                            <p>Amount: {expense.expenseAmount}</p>
                            <p>Created at: {expense.createdAt.toLocaleString()}</p>
                            <button className='aaaaa' onClick={() => handleDelete(expense.id)}>Delete</button>
                        </MoneyCard>
                    ))
                }</>

            )}
        </>
    );
}