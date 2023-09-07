import { Metadata } from 'next';
import { DataTable } from '@/components/data-tables/data-table';
import { DisplayTasks } from '@/components/data-tables/DisplayTasks';

export const metadata: Metadata = {
    title: 'Tasks',
    description: 'A task and issue tracker built using Tanstack Table.',
};

export default function TaskPage() {
    return (
        <>
            <div className='todos  h-full flex-1 flex-col space-y-8 p-8 flex'>
                <div className='flex items-center flex-col gap-2 md:flex-row justify-between space-y-2'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-tight'>
                            Todos for my self!
                        </h2>
                        <p className='text-muted-foreground'>
                            Just some tasks I want to do for this site.
                        </p>
                    </div>
                </div>
                {/* @ts-ignore */}
                <DataTable columns={DisplayTasks} />
            </div>
        </>
    );
}
