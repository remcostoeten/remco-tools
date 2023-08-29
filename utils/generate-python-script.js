// pages/api/generate-python-script.js
import { readFile, writeFile, readdir, stat } from 'fs/promises';
import path from 'path';

export default async (req, res) => {
    const { string1, string2, file, exclude } = req.body;

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

        res.status(200).send('Python script generation completed.');
    } catch (error) {
        res.status(500).send('An error occurred during Python script generation.');
    }
};
