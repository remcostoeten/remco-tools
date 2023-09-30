'use client';
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/utils/firebase";

const AuthContext = createContext(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
