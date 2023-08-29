'use client';
import React, { useState } from 'react';
import { readFile, writeFile, readdir, stat } from 'fs/promises';
import path from 'path';
import InputWithLabel, { CheckboxWithLabel } from '@/components/InputWithElement';
import { Button } from '@/components/ui/ui-imports';
import { toast } from '@/components/ui/use-toast';
import FormOptions from './cards/card-form';

const PythonScriptGenerator = () => {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [file, setFile] = useState('');
    const [exclude, setExclude] = useState(false);

    const handleGenerateScript = async () => {
        try {
            const response = await fetch('/utils/generate-python-script', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    string1,
                    string2,
                    file,
                    exclude,
                }),
            });

            const result = await response.text();
            toast({
                title: result,
            });
            console.log(result);
        } catch (error) {
            toast({
                title: 'An error occurred during Python script generation' + error,
            });
            console.error('An error occurred during Python script generation:', error);
        }
    };

    const handleChangeString1 = (e: { target: { value: React.SetStateAction<string> } }) => {
        setString1(e.target.value);
    };

    const handleChangeString2 = (e: { target: { value: React.SetStateAction<string> } }) => {
        setString2(e.target.value);
    };

    const handleChangeFile = (e: { target: { value: React.SetStateAction<string> } }) => {
        setFile(e.target.value);
    };

    const handleChangeExclude = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
        setExclude(e.target.checked);
    };

    return (
        <div className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0">
            <FormOptions cardTitle="Payment Method" label1="String one" label2="String two" label3="Filename to ignore" value={string1} value2={string2} value3={file} onChange={handleChangeString1} onChange2={handleChangeString2} onChange3={handleChangeFile} />
            <CheckboxWithLabel checked={exclude} onChange={handleChangeExclude} />
            <Button onClick={handleGenerateScript}>Generate Python Script</Button>
        </div>
    );
};

export default PythonScriptGenerator;
