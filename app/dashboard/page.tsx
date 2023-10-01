import Income from '@/components/dashboard/Income';
import SummaryCard from '@/components/dashboard/SummaryCard';
import Totals from '@/components/dashboard/Totals';
import SectionSpacer from '@/components/ui/SectionSpacer';
import React from 'react';
import { DisplayCategories } from '../(nocontainer)/data/DisplayCategory';
import { NewCategory } from '../(nocontainer)/data/NewCategory';
import { NewItemInCategory } from '../(nocontainer)/data/NewItemInCategory';

export default function page() {
    return (
        <><SectionSpacer
            variant="small" />
            <div className='border cats border-white home-container bg-zinc-300 text-black p-4'><h1>Add New Category</h1>
                <NewCategory />

                <h1>Add New Item in Category</h1>
                <NewItemInCategory />

                <h1>Display Categories and Items</h1>
                <DisplayCategories /></div>
            <Totals />
            <SummaryCard title="Income" data={<Income />} />
            <Income />
            <SummaryCard title="Expenses" data="wdddddddddddddddddddd" />
        </>
    );
}
