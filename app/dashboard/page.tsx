'use client';
import Totals from '@/components/dashboard/Totals';
import React from 'react';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DashboardUser from "@c/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import MoneyCard from '@/components/dashboard/MoneyCard';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
import FetchExpenses from '@/components/dashboard/FetchIndividualExpense';
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
          <div className="flex-col sm:flex-row flex gap-4 justify-end">
            <MoneyCard type={'income'} />
            <MoneyCard type={'expense'} />
            <MoneyCard useChildren small>
              Some content to go into the small card
            </MoneyCard>
          </div>
          <div className="flex-col sm:flex-row flex gap-4 justify-end">
            <FetchExpenses />
            <FetchIncomes />
          </div>
          <Totals />
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

     