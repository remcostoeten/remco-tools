'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface SelectedLinkContextType {
  selectedLink: SelectedLink;
  setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLink>>;
}

const SelectedLinkContext = createContext<SelectedLinkContextType | undefined>(undefined);

interface SelectedLinkProviderProps {
  children: ReactNode;
}

export function SelectedLinkProvider({ children }: SelectedLinkProviderProps) {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: -1 });

  return (
    <SelectedLinkContext.Provider value={{ selectedLink, setSelectedLink }}>
      {children}
    </SelectedLinkContext.Provider>
  );
}

export function useSelectedLink() {
  const context = useContext(SelectedLinkContext);
  if (context === undefined) {
    throw new Error('useSelectedLink must be used within a SelectedLinkProvider');
  }
  return context;
}
