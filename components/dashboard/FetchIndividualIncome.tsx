import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import Notification from '@c/Notification';
import { Toast } from '../ui/toast';
import { toast, useToast } from '../ui/use-toast';
import { HiUserRemove } from 'react-icons/hi';
import { Income } from '@/utils/types';

export default function FetchIncomes() {
    const [incomes, setIncomes] = useState<Income[]>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'incomes'), (querySnapshot) => {
            const incomeData: Income[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                incomeData.push({
                    id: doc.id,
                    incomeAmount: data.incomeAmount,
                    name: data.name,
                    createdAt: data.createdAt.toDate(),
                });
            });
            setIncomes(incomeData);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'incomes', id));
            toast({
                title: 'Income deleted',
                description: 'Income deleted successfully',
                icon: <HiUserRemove />
            });
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <>
            {incomes.map((income) => (
                <div key={income.id}>
                    <p>Name: {income.name}</p>
                    <p>Amount: {income.incomeAmount}</p>
                    <p>Created at: {income.createdAt.toLocaleString()}</p>
                    <button className='aaaaa' onClick={() => handleDelete(income.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}