'use client';
/**
 * Context for managing the active section in the application.
 */
import { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

/**
 * Context for managing the active section in the application.
 */
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

/**
 * Provider component for the ActiveSectionContext.
 * @param {ActiveSectionContextProviderProps} props - The provider props.
 */
export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

/**
 * Custom hook for accessing the ActiveSectionContext.
 * @returns {ActiveSectionContextType} The active section context.
 * @throws {Error} Throws an error if used outside of ActiveSectionContextProvider.
 */
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }

    return context;
}
