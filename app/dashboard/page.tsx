'use client';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DashboardUser from "@/components/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import CombinedExpenses from './tables/page';
import Chart from '@/components/dashboard/ExpensesChart';
import Block from '@/components/core/ThemeBlock';
import MoneyCard from '@/components/dashboard/MoneyCard';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
import Cards from '@/components/misc/Cards';
import { CardTitle, CardDescription } from '@/components/ui/card';
import CardWithGraph from '@/shad-dashboard-components/pages/home/cardWithGraph';
import { Overview } from '@/shad-dashboard-components/pages/home/overview';
import { Recents } from '@/shad-dashboard-components/pages/home/recents';
import ThemeToggle from '@/shad-dashboard-components/theme-toggle';
import { Card, CardHeader } from '@mui/material';
import { Menu } from 'lucide-react';
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

          <main className="min-h-full min-w-full container py-6">
            <div className='flex items-center justify-between'>
              <div className='flex space-x-6'>
                <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>/Dashboard</h1>
                <Menu className={`max-md:hidden`} />
              </div>
              <ThemeToggle />
            </div>
            <Cards />
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2'>
              <Card>
                <Overview />
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    Vendas recentes
                  </CardTitle>
                  <CardDescription>
                    no total foram <b className='underline underline-offset-2'>15</b> vendas esse mês.
                  </CardDescription>
                </CardHeader>
                <Recents />
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-4 items-center">
              <CardWithGraph />
              <CardWithGraph />
              <CardWithGraph />
              <CardWithGraph />
            </div>
          </main>

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

