'use client';

import { useEffect, useState } from 'react';
import { auth } from '@/utils/firebase';

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
    return <h2 className="pb-10 text-4xl font-normal">Welcome, {user.displayName}!</h2>;
  } else {
    return <div>Welcome, guest!</div>;
  }
}