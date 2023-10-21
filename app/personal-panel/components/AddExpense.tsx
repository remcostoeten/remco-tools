'use client'

import InputWithLabel from "@/components/core/icons/InputWithElement";
import { toast } from "@/components/ui/use-toast";
import { db, auth } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Button } from "react-day-picker";



export const AddExpense = () => {
    interface Expense {
        id: string;
        name: string;
        expenseAmount: number;
        category: Category;
        userId: string | undefined;
        createdAt: Date;
    }

    type Category = 'Food' | 'Housing' | 'Transportation' | 'Utilities' | 'Insurance' | 'Medical' | 'Debt' | 'Personal' | 'Entertainment' | 'Other';

    const [expenseAmount, setExpenseAmount] = useState<number>(0);
    const [expenseName, setExpenseName] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<Category>('Food');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [incomes, setIncomes] = useState([]);
    const [savingsAmount, setSavingsAmount] = useState<number>(0);
    const [savingsName, setSavingsName] = useState<string>('');

    const handleAddExpense = async () => {
        try {
            const handleAddExpense = async () => {
                try {
                    setIsLoading(true);
                    const docRef = await addDoc(collection(db, 'expenses'), {
                        name: expenseName,
                        expenseAmount,
                        category: selectedCategory,
                        userId: auth.currentUser?.uid,
                        createdAt: new Date(),
                    });
                    setExpenseAmount(0);
                    setExpenseName('');
                    setSelectedCategory('Food');
                    setExpenses([
                        ...expenses,
                        {
                            id: docRef.id,
                            name: expenseName,
                            expenseAmount,
                            category: selectedCategory,
                            userId: auth.currentUser?.uid,
                            createdAt: new Date(),
                        },
                    ]);
                    toast.success('Expense added!');
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error adding expense:', error);
                    toast.error('Error adding expense');
                }
            };

            const handleAddSavings = async () => {
                try {
                    setIsLoading(true);
                    const docRef = await addDoc(collection(db, 'savings'), {
                        name: savingsName,
                        savingsAmount,
                        userId: auth.currentUser?.uid,
                        createdAt: new Date(),
                    });
                    setSavingsAmount(0);
                    setSavingsName('');
                    toast.success(`${savingsAmount} for ${savingsName} added!`);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error adding savings:', error);
                    toast.error('Error adding savings');
                }
            };

            return (
                <>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="black-block black-blockt--content p-8">
                                    <h2 className="mb-4 text-2xl font-bold">Add Income</h2>
                                    <div className="mb-4 flex flex-col items-center gap-1">
                                        <InputWithLabel
                                            type="number"
                                            placeholder="€ ,-"
                                            value={incomeAmount}
                                            onChange={(e) => setIncomeAmount(Number(e.target.value))}
                                        />
                                        <InputWithLabel
                                            type="text"
                                            placeholder="Income Name"
                                            value={incomeName}
                                            onChange={(e) => setIncomeName(e.target.value)}
                                        />
                                    </div>
                                    <Button onClick={handleAddIncome}>Add income</Button>
                                </div>
                                <div className="black-block black-blockt--content p-8">
                                    <h2 className="mb-4 text-2xl font-bold">Add Expense</h2>
                                    <div className="mb-4 flex items-start gap-4">
                                        <div className="flex flex-col gap-1">
                                            <InputWithLabel
                                                type="number"
                                                placeholder="€ ,-"
                                                value={expenseAmount}
                                                onChange={(e) => setExpenseAmount(Number(e.target.value))}
                                            />
                                            <InputWithLabel
                                                type="text"
                                                placeholder="Expense Name"
                                                value={expenseName}
                                                onChange={(e) => setExpenseName(e.target.value)}
                                            />
                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                            >
                                                <option value="Food">Food</option>
                                                <option value="Transport">Transport</option>
                                                <option value="Utilities">Utilities</option>
                                            </select>
                                        </div>
                                        <Button onClick={handleAddExpense}>Add expense</Button>
                                    </div>
                                </div>
                                <div className="black-block black-blockt--content p-8">
                                    <h2 className="mb-4 text-2xl font-bold">Add Savings</h2>
                                    <div className="mb-4 flex flex-col items-center gap-1">
                                        <InputWithLabel
                                            type="number"
                                            placeholder="€ ,-"
                                            value={savingsAmount}
                                            onChange={(e) => setSavingsAmount(Number(e.target.value))}
                                        />
                                        <InputWithLabel
                                            type="text"
                                            placeholder="Savings Name"
                                            value={savingsName}
                                            onChange={(e) => setSavingsName(e.target.value)}
                                        />
                                    </div>
                                    <Button onClick={handleAddSavings}>Add savings</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }