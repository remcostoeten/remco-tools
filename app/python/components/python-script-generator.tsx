'use client';

import { CheckboxWithLabel } from '@/components/InputWithElement';
import { Button } from '@/components/ui/ui-imports';
import { toast } from '@/components/ui/use-toast';
import ScriptContext from '@/context/ScriptContext';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import { TabsContent } from '@radix-ui/react-tabs';
import React, { useContext, useState } from 'react';
import FormOptions from './cards/card-form';

export default function generatePythonScript() {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [file, setFile] = useState('');
    const [exclude, setExclude] = useState(false);
    const { setPythonScript } = useContext(ScriptContext);
    const [toggleScript, setToggleScript] = useState(false);
    let [newScript, setNewScript] = useState('');

    const handleGenerateScript = () => {
        const newScript = `
import os
import { generatePythonScript } from '@/utils/generatePythonScript';

def replace_in_file(file_path, old_string, new_string):
    with open(file_path, 'r') as file:
        filedata = file.read()
    new_filedata = filedata.replace(old_string, new_string)
    with open(file_path, 'w') as file:
        file.write(new_filedata)

def replace_in_directory(directory_path, old_string, new_string):
    for root, _, files in os.walk(directory_path):
        for file_name in files:
            if file_name.endswith('.txt'):  # Adjust the file extension as needed
                file_path = os.path.join(root, file_name)
                replace_in_file(file_path, old_string, new_string)

if __name__ == '__main__':
    target_directory = '.'  # Current directory
    old_string = '${string1}'
    new_string = '${string2}'
    replace_in_directory(target_directory, old_string, new_string)
    print(f'Replacement complete in {target_directory} directory.')
        `;
        setNewScript(newScript);
        setPythonScript(newScript);
        toast({
            title: 'Python script generation completed.',
        });
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

    const handleToggle = () => {
        setToggleScript(!toggleScript);
    };

    return (
        <TabsContent value="insert" className="mt-0 border-0 p-0">
            <div className="flex flex-col space-y-4 border rounded-[4px] p-4">
                <div className="grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
                    <div className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0">
                        <FormOptions cardTitle="Payment Method" label1="String one" label2="String two" label3="Filename to ignore" value={string1} value2={string2} value3={file} onChange={handleChangeString1} onChange2={handleChangeString2} onChange3={handleChangeFile} handleGenerateScript={handleGenerateScript} />
                        <CheckboxWithLabel checked={exclude} onChange={handleChangeExclude} />
                        <Button onClick={handleGenerateScript} className="w-full">
                            Generate Python Script
                        </Button>
                    </div>
                    <pre id="highlight-area">{newScript}</pre>
                </div>
                <div className="flex items-center space-x-2">
                    <Button onClick={handleGenerateScript} className="w-full">
                        Generate Script
                    </Button>
                    <Button onClick={handleToggle} variant="secondary">
                        Toggle Script
                    </Button>
                </div>
                <div className="flex items-center space-x-2">
                    <Button>Submit</Button>
                    <Button variant="secondary">
                        <span className="sr-only">Show history</span>
                        <CounterClockwiseClockIcon className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </TabsContent>
    );
}
