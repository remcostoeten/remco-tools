// IncomeNotAuthenticated.tsx

import { BorderButton } from '@/components/core/buttons/CustomButtons';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';

interface IncomeNotAuthenticatedProps {
    totalIncome: number;
    totalExpense: number;
    netWorth: number;
    expenses: { id: number; name: string; amount: number; category: string }[];
    incomes: { id: number; name: string; amount: number }[];
}

const IncomeNotAuthenticated: React.FC<IncomeNotAuthenticatedProps> = ({ totalIncome, totalExpense, netWorth, expenses, incomes }) => {
    return (
        <>
            {/* <div className="flex flex-col gap-4 blur-[4px]">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Card className="card expense p-8 ">
                            <h2 className="mb-4 text-2xl font-bold">Add Income</h2>
                            <div className="mb-4 flex items-center gap-4">
                                <Input type="number" placeholder="€ ,-" />
                                <Input type="text" placeholder="Income Name" />
                            </div>
                            <BorderButton text="Add Income" />
                        </Card>
                        <Card className="card expense p-8 ">
                            <h2 className="mb-4 text-2xl font-bold">Add Expense</h2>
                            <div className="mb-4 flex items-center gap-4">
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
                            <Card className="card expense p-8 ">
                                <h2 className="mb-4 text-2xl font-bold">Add Savings</h2>
                                <div className="mb-4 flex items-center">
                                    <Input type="number" placeholder="€ ,-" className="-300 mr-2 w-1/2 rounded-md border p-2" />
                                    <Input type="text" placeholder="Savings Name" className="-300 w-1/2 rounded-md border p-2" />
                                </div>
                                <BorderButton text="Add Savings" />
                            </Card>
                        </div>
                    </div>
                    <div className="flex w-full gap-4 ">
                        <Card className="card expense flex flex-1 flex-col p-8 ">
                            <dl className="mb-4 text-2xl font-bold">Expenses List:</dl>
                            {expenses.map((expense) => (
                                <dl className="flex w-full justify-between" key={expense.id}>
                                    <dd>Name: name</dd>
                                    <dt>Amount: -</dt>
                                </dl>
                            ))}
                        </Card>
                        <Card className="card expense flex flex-1 flex-col p-8 ">
                            <dl className="mb-4 text-2xl font-bold">Income List:</dl>
                            {incomes.map((income) => (
                                <dl className="flex w-full justify-between" key={income.id}>
                                    <dd>Name: 22</dd>
                                    <dt>Amount: €2222,-</dt>
                                </dl>
                            ))}
                        </Card>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default IncomeNotAuthenticated;
