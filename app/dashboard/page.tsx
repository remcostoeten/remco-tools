'use client';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DashboardUser from "@/components/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import CombinedExpenses from './tables/page';
import Chart from '@/components/dashboard/ExpensesChart';
import Block from '@/components/core/ThemeBlock';
import MoneyCard from '@/components/dashboard/MoneyCard';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
const correctPassword = process.env.ADMIN_PASSWORD || '';

export default function Page() {
  const isLocal = process.env.NODE_ENV === 'development';
  const router = useRouter();
  const { isAuthenticated, password, setPassword, handlePasswordSubmit } = usePasswordProtection(isLocal ? '' : correctPassword);

  return (
    <>


      {!isAuthenticated ? (
        <>
          <DashboardUser />

          <main className='flex-col  w-7/12 sm:flex-row    flex justify-between items-center'>
            <div className="flex w-full">
              <MoneyCard type='expense' />
              <div className="fade-seperator-brotate"></div>
              <MoneyCard type='income' />
            </div>
          </main>
          <div className="fade-seperator-b-l"></div>
          <FetchIncomes />
          {/* <Totals /> */}
          <div className="flex gap-4 w-full">
            {/* <MoneyCard hoverCard={true} type={'income'} />
              <MoneyCard hoverCard={true} type={'expense'} /> */}
            <Block>
              <h2>dwa</h2>
            </Block>
          </div>
          * <div className="flex gap-4">
            {/* <CombinedExpenses /> */}
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

