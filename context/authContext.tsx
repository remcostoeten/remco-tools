'use client';
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/utils/firebase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Listen authenticated user
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
