'use client';
import React, { useState } from 'react';
import { generatePythonScript } from '@/utils/generatePythonScript';
import { toast, useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const InputForm = () => {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [file, setFile] = useState('');
    const [removeStrings, setRemoveStrings] = useState(false);
    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const script = generatePythonScript(string1, string2, file, removeStrings);
        console.log(script);
        // TODO: Do something with the script, e.g., display it, download it, etc.
    };
    return (
        <>
            <Button
                onClick={() => {
                    toast({
                        title: 'Script generated',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                    });
                }}
            >
                Show Toast
            </Button>
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
        </>
    );
};

export default InputForm;
