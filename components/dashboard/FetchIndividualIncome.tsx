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
            <div className='w-full  mt-8 relative rounded-md'>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="absolute bar  h-1/6 bar [#fff] z-10  rounded-md">

                            </div>
                        </TooltipTrigger>
                        <div className="relative">


                            <div
                                className='absolute bg-[#1A221A] w-[29vw] h-1/6 bar'
                            ></div>

                            <div
                                className={`absolute h-full bar bg-[#8ab829] w-[29vw]   `}
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
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
            toast.success('Income deleted successfully!');
        } catch (error) {
            console.error('Error deleting document: ', error);
            toast.error('Error deleting income');
        }
    };


    return (
        <div>
            <span className='flex flex-col gap-4 bord   text-cream text-2xl pb-8'>Incoming expenses</span>
            {visibleIncomes.map((income, index) => (
                <div className='pr-4  gap-1 pb-12 mb-6 w-full individual' key={income.id}>
                    <div className='mr-4 pr-4 flex flex-col align-baseline items-start w-full'>
                        <div className="flex justify-between items-center w-full">
                            <div className=" pr-4 flex items-w-full justify-start w-full">
                                <span>
                                    <ExpenseIconWrapper>
                                        <ShoppingCartIcon color='white' width={20} height={20} />
                                    </ExpenseIconWrapper>
                                </span>
                                <span className='flex  flex-col  text-cream   pl-7'>
                                    <p>€{income.incomeAmount},-</p>
                                    <p>{income.name}</p>
                                    <p>{income.createdAt ? income.createdAt.toLocaleDateString() : ' '}</p>
                                </span>
                            </div>
                            <div className="flex items-center justify-center" onClick={() => handleDelete(income.id)}>
                                <AltButton><TrashIcon color='white' width={20} />
                                </AltButton>
                            </div>
                        </div>
                        <div className="flex">

                            <div className='flex gap-1 relative w-full'>
                                <span className='flex w-full relative text-cream gap-2 '>
                                    <p>{income.createdAt ? income.createdAt.toLocaleDateString() : ''}</p>
                                </span>
                            </div>
                        </div>

                    </div>
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