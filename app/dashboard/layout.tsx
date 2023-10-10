import React from 'react';
import { Sidebar } from '@/components/dashboard/dashboard';
import Search from '@/components/dashboard/Search';
import FetchIncomes from '@/components/dashboard/FetchIndividualIncome';
import MoneyCard from '@/components/dashboard/MoneyCard';

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className=" max-w-[1280px] mx-auto  pt-48 mt-48 dash-block dash-block--parent  border-dash dash-border">
                <Search />
                <div className="fade-seperator-b"></div>
                <main className='dblock pt-8 flex justify-between items-center'>
                    <MoneyCard type='expense' />
                    <MoneyCard type='income' />
                </main>
                <div className="fade-seperator-b"></div>
                <section className='fade-border-r  w-3/6 dblock pt-8'>
                    <FetchIncomes />
                </section>

            </div>
            <div className="container mx-auto">
                <div className="uolonga flex gap-4 justify-end space-y-48 ">
                    {/* <Sidebar playlists={[]} /> */}

                    {/* <main className=' w-7/2 flex flex-col dash-block dash-block--parent dash-block--section  mx-auto  gap-4  flex flex-wrap mt-30 mt-30  flex-col mt-24'>
                        <search className=''>
                            <Search />
                        </search>
                        <section className=' flex flex-col gap-4 '>
                            {children}
                        </section>
                    </main> */}
                    {/* <aside className=' block--section block--border-left hidden sm:block 
                        w-3/12'>
                    some asides
                </aside> */}
                </div></div>
        </>
    );
}


