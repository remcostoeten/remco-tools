'use client'

import React, { useEffect, useState } from "react";

export default function CurrentBalance() {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [totalExpense, setTotalExpense] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const expenseResponse = await fetch('/api/expenses');
            const expenseData = await expenseResponse.json();
            setExpenses(expenseData);

            const incomeResponse = await fetch('/api/incomes');
            const incomeData = await incomeResponse.json();
            setIncomes(incomeData);

            await calculateTotalExpense();

            setIsLoading(false);
        };

        fetchData();
    }, []);

    const calculateTotalExpense = async () => {
        const totalExpense = expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0);
        setTotalExpense(totalExpense);
    };

    const currentBalance = 55569 - totalExpense;

    return (
        <>
            <div className="current-balance">
                <div className="wallet">
                    <img
                        className="wallet-2"
                        alt="Wallet"
                        src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/wallet@2x.png"
                    />
                    <div className="wallet-expense">
                        <div className="text-wrapper-2">€{totalExpense},-</div>
                        <div className="text-wrapper-3">Total Expense</div>
                    </div>
                </div>
                <div className="current-balance-2">CURRENT BALANCE</div>
                <div className="decoration">
                    <div className="overlap-group-4">
                        <img
                            className="vector-3"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/vector-13.svg"
                        />
                        <img
                            className="vector-4"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/64c183a1cc30c096864cfffd/releases/652063e7a68dc888fc265c00/img/vector-14.svg"
                        />
                        <div className="text-wrapper-4">+</div>
                        <div className="text-wrapper-5">+</div>
                        <div className="text-wrapper-6">+</div>
                        <div className="text-wrapper-7">+</div>
                    </div>
                </div>
            </div>
        </>
    );
}