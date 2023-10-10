'use client';
import { db } from '@/utils/firebase';
import { Income } from '@/utils/types';
import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/solid';
import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AltButton } from '../core/buttons/Buttons';
import ExpenseIconWrapper from './ExpenseIconWrapper';
import { toast } from 'sonner';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function FetchIncomes() {
    const [incomes, setIncomes] = useState<Income[]>([]);
    const [showAll, setShowAll] = useState(false);
    const visibleIncomes = showAll ? incomes : incomes.slice(0, 6);

    const bar = (income: Income) => {
        const totalIncome = incomes.reduce((acc, income) => acc + income.incomeAmount, 0);
        const percentage = Math.round((income.incomeAmount / totalIncome) * 100);

        return (
            <div className='w-full h-[10px] px-8 bg-[#121d12] rounded-md'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="bar border border-grey h-[20px] -translate-x-14 grid place-items-center p-12 w-[200px] ">

                            </div>
                        </TooltipTrigger>
                        <div
                            className={`h-full bar bg-[#8BB929] pb-[24px] rounded-md`}
                            style={{ width: `${percentage}%` }}
                        ></div>
                        <TooltipContent>
                            <p>{percentage}% of total income</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        );
    };

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'incomes'), (querySnapshot) => {
            const incomeData: Income[] = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const createdAt = data.createdAt ? data.createdAt.toDate() : null;
                incomeData.push({
                    id: doc.id,
                    incomeAmount: data.incomeAmount,
                    name: data.name,
                    createdAt,
                });
            });
            setIncomes(incomeData);
        });

        return () => unsubscribe();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'incomes', id));
            toast('Hello World!');
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    };

    return (
        <div>
            <span className='flex flex-col gap-4 text-cream text-lg pb-4'>Incoming expenses</span>
            {visibleIncomes.map((income, index) => (
                <div className='px-4  gap-1 mb-6 w-full' key={income.id}>
                    <ExpenseIconWrapper>
                        <ShoppingCartIcon color='white' width={20} height={20} />
                    </ExpenseIconWrapper>
                    <div className='ml-4 flex flex-col align-baseline items-start w-full'>
                        <div className='flex gap-1 relative w-full'>
                            <span className='flex w-full relative text-cream gap-2 '>
                                <p>{income.name}</p>
                            </span>
                        </div>
                        <p>{income.createdAt ? income.createdAt.toLocaleDateString() : ''}</p>
                    </div>
                    <button className='flex justify-end w-full' onClick={() => handleDelete(income.id)}>
                        <TrashIcon color='white' width={20} />
                    </button>
                    {bar(income)}
                </div>
            ))}

            {!showAll && incomes.length > 6 && (
                <div className='flex justify-center'>
                    <AltButton onClick={() => setShowAll(true)}>Read more</AltButton>
                </div>
            )}

            {showAll && (
                <div className='flex justify-center'>
                    <AltButton onClick={() => setShowAll(false)}>Read Less</AltButton>
                </div>
            )}
        </div>
    );
}