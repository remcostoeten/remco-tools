'use client';

import React, { useState } from 'react';
import ScriptContext from '@/context/ScriptContext';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [pythonScript, setPythonScript] = useState('');
    return (
        <ScriptContext.Provider value={{ pythonScript, setPythonScript }}>
            <section>
                <nav></nav>
                {children}
            </section>
        </ScriptContext.Provider>
    );
}
