import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import Notification from '@c/Notification';
import { Toast } from '../ui/toast';
import { toast, useToast } from '../ui/use-toast';
import { HiUserRemove } from 'react-icons/hi';

interface Income {
    id: string;
    amount: number;
    name: string;
}

export default function Income() {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [showNotification, setShowNotification] = useState(false);
    const { toasts, toast, dismiss, positionStyles } = useToast('top-right');

    useEffect(() => {
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
                    <p>Namea: {income.name}</p>
                    <p>Amount: {income.amount}</p>
                    <button onClick={() => handleDelete(income.id)}>Delete</button>
                </div>
            ))}

        </>
    );
}