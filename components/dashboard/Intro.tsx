'use client';
import { auth } from '@/utils/firebase';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Intro() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    }, []);

    if (!user) {
        return null;
    }

    console.log(user);
    return (
        <>
            <div className="mb-4 text-4xl border-b p5">Welcome {user.email} </div>
        </>
    );
}

