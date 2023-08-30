import { createContext } from 'react';

type ScriptContextType = {
    pythonScript: string; // Add this line
    setPythonScript: React.Dispatch<React.SetStateAction<string>>;
};

const ScriptContext = createContext<ScriptContextType>({
    pythonScript: '', // Provide an initial value
    setPythonScript: () => {},
});

export default ScriptContext;
