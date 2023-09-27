import Income from '@/components/dashboard/Income';
import SummaryCard from '@/components/dashboard/SummaryCard';
import Totals from '@/components/dashboard/Totals';
import React from 'react';

export default function page() {
    return (
        <>
            <Totals />
            <SummaryCard title="Income" data={<Income />} />
            <Income />
            <SummaryCard title="Expenses" data="wdddddddddddddddddddd" />
        </>
    );
}
