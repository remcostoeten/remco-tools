'use client';

import { createContext } from 'react';

type ScriptContextType = {
    pythonScript: string;
    setPythonScript: React.Dispatch<React.SetStateAction<string>>;
};

const ScriptContext = createContext<ScriptContextType>({
    pythonScript: '', 
    setPythonScript: () => {},
});

export default ScriptContext;
