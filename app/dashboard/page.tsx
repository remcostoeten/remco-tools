'use client';
import Income from '@/components/dashboard/Income';
import SummaryCard from '@/components/dashboard/SummaryCard';
import Totals from '@/components/dashboard/Totals';
import SectionSpacer from '@/components/ui/SectionSpacer';
import React from 'react';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import Savings from '@/components/dashboard/Savings';
import DashboardUser from "@c/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import MoneyCard from '@/components/dashboard/MoneyCard';
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
          <div className="flex gap-4 justify-end">
            <MoneyCard  type={'income'} />
            <MoneyCard type={'expense'} />
            <MoneyCard useChildren small  
            >
            </MoneyCard>
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