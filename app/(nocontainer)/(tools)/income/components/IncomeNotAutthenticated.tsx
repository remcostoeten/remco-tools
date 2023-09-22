// IncomeNotAuthenticated.tsx

import { BlobButton, BorderButton } from '@/components/core/buttons/ Buttons';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@react-email/components';
import { Link } from 'lucide-react';
import React from 'react';

interface IncomeNotAuthenticatedProps {
    totalIncome: number;
    totalExpense: number;
    netWorth: number;
    expenses: { id: number; name: string; amount: number; category: string }[];
    incomes: { id: number; name: string; amount: number }[];
}

const IncomeNotAuthenticated: React.FC<IncomeNotAuthenticatedProps> = ({
    totalIncome,
    totalExpense,
    netWorth,
    expenses,
    incomes,
}) => {
    return (
        <>
            <div className="flex flex-col gap-4 blur-[4px]">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Card className="p-8 card expense ">
                            <h2 className="mb-4 text-2xl font-bold">Add Income</h2>
                            <div className="flex items-center gap-4 mb-4">
                                <Input type="number" placeholder="€ ,-" />
                                <Input type="text" placeholder="Income Name" />
                            </div>
                            <BorderButton text="Add Income" />
                        </Card>
                        <Card className="p-8 card expense ">
                            <h2 className="mb-4 text-2xl font-bold">Add Expense</h2>
                            <div className="flex items-center gap-4 mb-4">
                                <Input type="number" placeholder="€ ,-" />
                                <Input type="text" placeholder="Expense Name" />
                                <select>
                                    <option value="Food">Food</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Utilities">Utilities</option>
                                </select>
                            </div>
                            <BorderButton text="Add Expense" />
                        </Card>
                        <div className="flex flex-col gap-4">
                            <Card className="p-8 card expense ">
                                <h2 className="mb-4 text-2xl font-bold">Add Savings</h2>
                                <div className="flex items-center mb-4">
                                    <Input type="number" placeholder="€ ,-" className="w-1/2 p-2 mr-2 border rounded-md -300" />
                                    <Input type="text" placeholder="Savings Name" className="w-1/2 p-2 border rounded-md -300" />
                                </div>
                                <BorderButton text="Add Savings" />
                            </Card>
                        </div>
                    </div>
                    <div className="flex w-full gap-4 ">
                        <Card className="flex flex-col flex-1 p-8 card expense ">
                            <dl className="mb-4 text-2xl font-bold">Expenses List:</dl>
                            {expenses.map((expense) => (
                                <dl className="flex justify-between w-full" key={expense.id}>
                                    <dd>Name: name</dd>
                                    <dt>Amount: -</dt>
                                </dl>
                            ))}
                        </Card>
                        <Card className="flex flex-col flex-1 p-8 card expense ">
                            <dl className="mb-4 text-2xl font-bold">Income List:</dl>
                            {incomes.map((income) => (
                                <dl className="flex justify-between w-full" key={income.id}>
                                    <dd>Name: 22</dd>
                                    <dt>Amount: €2222,-</dt>
                                </dl>
                            ))}
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IncomeNotAuthenticated;
