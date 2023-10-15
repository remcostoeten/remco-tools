'use client';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DashboardUser from "@/components/dashboard/DashboardUser";
import { useRouter } from 'next/navigation';
import Chart from '@/components/dashboard/ExpensesChart';
import Block from '@/components/core/ThemeBlock';
import MoneyCard from '@/components/core/cards/MoneyCard';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
import LoginPage from './(auth)/login/page';
import { auth } from '@/utils/firebase';

export default function Page() {
    const isAuthenticated = auth.currentUser != null;

    return (
        <>
            {isAuthenticated ? (
                <>
                    <DashboardUser />
                    <main className='flex-col sm:flex-row    flex justify-between items-center'>
                        <div className="flex w-full gap-4">
                            <MoneyCard type='expense' />
                            <MoneyCard type='income' />
                            <MoneyCard small type='Saving' />
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
                <LoginPage />
            )}
        </>
    );
}

