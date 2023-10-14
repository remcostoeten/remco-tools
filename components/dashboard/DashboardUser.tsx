'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/utils/firebase';
import Link from 'next/link';

export default function DashboardUser() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    if (user) {
        return (
            <div className='pt-[40px] pb-[40px]'>
                <h2 className="pb-10 text-4xl font-normal">Welcome, {user.displayName}!</h2>
            </div>
        );
    } else {
        return (
            <div className='p-4'>
                <div className='text-cream text-md'>
                    Welcome, guest! <Link className='underline' href='/dashboard/login'>login please</Link>
                </div>
            </div>
        );
    }
}