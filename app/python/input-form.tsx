'use client';
import React, { useState } from 'react';
import { generatePythonScript } from '@/utils/generatePythonScript';

const InputForm = () => {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [file, setFile] = useState('');
    const [removeStrings, setRemoveStrings] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const script = generatePythonScript(string1, string2, file, removeStrings);
        console.log(script);
        // TODO: Do something with the script, e.g., display it, download it, etc.
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                String 1:
                <input type="text" value={string1} onChange={(e) => setString1(e.target.value)} />
            </label>
            <br />
            <label>
                String 2:
                <input type="text" value={string2} onChange={(e) => setString2(e.target.value)} />
            </label>
            <br />
            <label>
                File:
                <input type="text" value={file} onChange={(e) => setFile(e.target.value)} />
            </label>
            <br />
            <label>
                Remove Strings:
                <input type="checkbox" checked={removeStrings} onChange={(e) => setRemoveStrings(e.target.checked)} />
            </label>
            <br />
            <button type="submit">Generate Script</button>
        </form>
    );
};

export default InputForm;
