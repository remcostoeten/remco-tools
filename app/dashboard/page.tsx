'use client';
import Income from '@/components/dashboard/Income';
import SummaryCard from '@/components/dashboard/SummaryCard';
import Totals from '@/components/dashboard/Totals';
import SectionSpacer from '@/components/ui/SectionSpacer';
import React from 'react';
import DisplayCategories from '../(nocontainer)/data/DisplayCategory';
import { NewCategory } from '../(nocontainer)/data/NewCategory';
import { NewItemInCategory } from '../(nocontainer)/data/NewItemInCategory';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import Savings from '@/components/dashboard/Savings';

const correctPassword = process.env.ADMIN_PASSWORD || ''; 

export default function Page() {
  const isLocal = process.env.NODE_ENV === 'development';
  const { isAuthenticated, password, setPassword, handlePasswordSubmit } = usePasswordProtection(isLocal ? '' : correctPassword);

  return (
    <>
      <div className='border cats border-white r bg-zinc-300 text-black p-4'>
        {isAuthenticated ? (
          <>
            {/* <h1>Add New Category</h1>
            <NewCategory />

            <h1>Add New Item in Category</h1>
            <NewItemInCategory />

            <h1>Display Categories and Items</h1>
            <DisplayCategories /> */}
            <Totals />
            <SummaryCard title="Income" data={<Income />} />
            <Income />
            <SummaryCard title="Expenses" data="wdddddddddddddddddddd" />
            <SummaryCard title="Savings" data={<Savings />} />
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
      </div>
    </>
  );
}