import { useEffect, useState } from 'react';
import { auth } from './firebase';
export const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    return user;
};
