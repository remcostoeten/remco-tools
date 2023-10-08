'use client';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import { toast } from '../ui/use-toast';
import { HiUserRemove } from 'react-icons/hi';
import { Expense } from '@/utils/types';
import MoneyCard from './MoneyCard';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarTrigger } from '../ui/menubar';

export default function FetchExpenses() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

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
                });
            });
            setExpenses(expenseData);
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
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                    <MenubarContent>
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Edit...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Profile...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            {expenses.map((expense) => (
                <MoneyCard useChildren key={expense.id}>
                    dawdawd    <p>Name: {expense.name}</p>
                    <p>Amount: {expense.expenseAmount}</p>
                    <p>Created at: {expense.createdAt.toLocaleString()}</p>
                    <button className='aaaaa' onClick={() => handleDelete(expense.id)}>Delete</button>
                </MoneyCard>
            ))}
        </>
    );
}