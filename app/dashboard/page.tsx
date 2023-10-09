'use client';
import Totals from '@/components/dashboard/Totals';
import React from 'react';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DashboardUser from "@c/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import MoneyCard from '@/components/dashboard/MoneyCard';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
import FetchExpenses from '@/components/dashboard/FetchIndividualExpense';
import CombinedExpenses from './tables/page';
import ExpensesByCategoryChart from '@/components/dashboard/ExpensesChart';
import ExpenseChart from '@/components/dashboard/ExpensesChart';
import Chart from '@/components/dashboard/ExpensesChart';
const correctPassword = process.env.ADMIN_PASSWORD || '';

export default function Page() {
  const isLocal = process.env.NODE_ENV === 'development';
  const router = useRouter();
  const { isAuthenticated, password, setPassword, handlePasswordSubmit } = usePasswordProtection(isLocal ? '' : correctPassword);

  return (
    <>
      {isAuthenticated ? (
        <>
          <DashboardUser />
          <div className="flex-col sm:flex-row flex gap-4 justify-start w-full">
            <div className="flex gap-4 w-full">

              <MoneyCard hoverCard={true} type={'income'} />
              <MoneyCard hoverCard={true} type={'expense'} />
            </div>
          </div>
          <div className="flex gap-4">
            <CombinedExpenses />
            <Chart />
          </div>

        </>
      ) : (
        !isLocal && (
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button type="submit">Submit</button>
          </form>
        )
      )}
    </>
  );
}

