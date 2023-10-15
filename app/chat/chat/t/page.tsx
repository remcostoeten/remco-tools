'use client';
import { useAuth } from "@/utils/useAuth";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
const YourProtectedPage = () => {
    const YourProtectedPage = () => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user as any);
            });

            return () => unsubscribe();
        }, []);

        console.log(user);

        useEffect(() => {
            if (!user) {
                return null;
            } else if (user.email !== "stoetenremco.rs@gmail.com") {
                // router.push('/unauthorized'); // or any route you want for unauthorized access
            }
        }, [user]);

        if (!user || user.email !== "stoetenremco.rs@gmail.com") {
            return null; // or a loading spinner until auth state is determined
        }

        return <div>Your protected content here...</div>;
    };

};

export default YourProtectedPage;
