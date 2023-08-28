import { useState } from 'react';
import { readFile, writeFile, readdir, stat } from 'fs/promises';
import path from 'path';
import InputWithLabel, { CheckboxWithLabel } from '@/components/InputWithElement';
import { Button } from '@/components/ui/ui-imports';

const PythonScriptGenerator = () => {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [file, setFile] = useState('');
    const [exclude, setExclude] = useState(false);

    const handleGenerateScript = async () => {
        try {
            const files = await readdir('.');

            // Filter out the file to exclude if specified
            const filteredFiles = exclude ? files.filter((f) => f !== file) : files;

            // Loop through the files and perform search & replace or removal
            for (const file of filteredFiles) {
                const filePath = path.join(process.cwd(), file);
                const fileStat = await stat(filePath);

                if (fileStat.isDirectory()) {
                    // Skip directories
                    continue;
                }

                // Read the file contents
                let content = await readFile(filePath, 'utf-8');

                if (content.includes(string1)) {
                    if (exclude) {
                        // Remove string1 and string2 from the file
                        content = content.replace(new RegExp(string1, 'g'), '');
                        content = content.replace(new RegExp(string2, 'g'), '');
                    } else {
                        // Replace string1 with string2 in the file
                        content = content.replace(new RegExp(string1, 'g'), string2);
                    }

                    // Write the modified content back to the file
                    await writeFile(filePath, content, 'utf-8');
                }
            }

            console.log('Python script generation completed.');
        } catch (error) {
            console.error('An error occurred during Python script generation:', error);
        }
    };

    return (
        <>
            <InputWithLabel value={string1} onChange={(e) => setString1(e.target.value)} />
            <InputWithLabel value={string2} onChange={(e) => setString2(e.target.value)} />
            <InputWithLabel value={file} onChange={(e) => setFile(e.target.value)} />
            <CheckboxWithLabel checked={exclude} onChange={(e) => setExclude(e.target.checked)} />
            <Button onClick={handleGenerateScript}>Generate Python Script</Button>
        </>
    );
};

export default PythonScriptGenerator;
