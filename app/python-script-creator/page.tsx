'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Checkbox, Input, Button } from '@/components/ui'; // Replace with actual imports from your chosen UI library
import { useRouter } from 'next/router';

function PythonScriptGenerator() {
    const router = useRouter();
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [fileName, setFileName] = useState('');
    const [excludeFile, setExcludeFile] = useState('');
    const [removeStrings, setRemoveStrings] = useState(false);

    const handleGenerateScript = () => {
        let script = `import os

search_string = '${string1}'
replace_string = '${string2}'
exclude_file = '${excludeFile}'

for root, dirs, files in os.walk(os.getcwd()):
    for file in files:
        if file == exclude_file:
            continue
        filepath = os.path.join(root, file)
        with open(filepath, 'r') as f:
            content = f.read()
        content = content.replace(search_string, replace_string)
        with open(filepath, 'w') as f:
            f.write(content)\n`;

        if (removeStrings) {
            script += `
for root, dirs, files in os.walk(os.getcwd()):
    for file in files:
        if file == exclude_file:
            continue
        filepath = os.path.join(root, file)
        with open(filepath, 'r') as f:
            content = f.read()
        content = content.replace(search_string, '')
        with open(filepath, 'w') as f:
            f.write(content)\n`;
        }

        // Execute generated script
        const blob = new Blob([script], { type: 'application/x-python-script' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'script.py';
        link.click();
    };

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <h1 className="text-2xl font-semibold mb-4">Python Script Generator</h1>
            <Input label="String 1" value={string1} onChange={(e) => setString1(e.target.value)} className="mb-4" />
            <Input label="String 2" value={string2} onChange={(e) => setString2(e.target.value)} className="mb-4" />
            <Input label="File Name to Exclude" value={excludeFile} onChange={(e) => setExcludeFile(e.target.value)} className="mb-4" />
            <Input label="File to Exclude from Replace" value={fileName} onChange={(e) => setFileName(e.target.value)} className="mb-4" />
            <Checkbox label="Remove Strings" checked={removeStrings} onChange={() => setRemoveStrings(!removeStrings)} className="mb-4" />
            <Button onClick={handleGenerateScript}>Generate Script</Button>
        </motion.div>
    );
}

export default PythonScriptGenerator;
