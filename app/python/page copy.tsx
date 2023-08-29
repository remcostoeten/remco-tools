import React, { useState } from 'react';
import { generatePythonScript } from '@/utils/generatePythonScript';
import InputWithLabel, { CheckboxWithLabel } from '../../components/InputWithElement';
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputWithLabel label="String 1" value={string1} onChange={(e) => setString1(e.target.value)} />
            <InputWithLabel label="String 2" value={string2} onChange={(e) => setString2(e.target.value)} />
            <InputWithLabel label="File" value={file} onChange={(e) => setFile(e.target.value)} />
            <CheckboxWithLabel label="Remove Strings" checked={removeStrings} onChange={(e) => setRemoveStrings(e.target.checked)} />
            <Button type="submit">Generate Script</Button>
        </form>
    );
};

export default InputForm;
