import { createContext } from 'react';

const ScriptContext = createContext({
    script: '',
    setPythonScript: (_script: string) => {},
});

export default ScriptContext;
