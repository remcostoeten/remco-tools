import PageLoader from '@/components/core/PageLoader';
import Spinner from '@/components/core/Spinner';
import React from 'react';

export default function page() {
    return (
        <>
            <div className='flex flex-col gap-4 '>
                <h2>Spiner/</h2>
                <Spinner />
            </div>
            <div className='flex flex-col gap-4 '>
                <h2>Page loader</h2>
                <PageLoader />
            </div>
        </>
    );
}
