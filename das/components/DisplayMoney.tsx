import React from "react";
import useMoney from "@/hooks/useMoney"; // Adjust the path as needed
import Image from "next/image";
import Loader from "./common/Loader";

export default function CurrentBalance() {
  const { dataSum: totalIncome, isLoading: isLoadingIncome } = useMoney("incomes", "incomeAmount");
  const { dataSum: totalExpense, isLoading: isLoadingExpense } = useMoney("expenses", "expenseAmount");

  const isLoading = isLoadingIncome || isLoadingExpense;

  if (isLoading) {
    return <Loader />;
  }

  const balance = totalIncome - totalExpense;

  return (
    <div className="current-balance-container">
      <h2>Current Balance</h2>
      <div className="balance">
        <h3>{balance}</h3>
      </div>
      <div className="details">
        <div className="income">
          <p>Total Income:</p>
          <span>{totalIncome}</span>
        </div>
        <div className="expense">
          <p>Total Expense:</p>
          <span>{totalExpense}</span>
        </div>
      </div>
      <style jsx>{`
        .current-balance-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .balance {
          font-size: 24px;
          font-weight: bold;
          margin: 20px 0;
        }
        .details {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .income, .expense {
          flex: 1;
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
