import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { RadioGroup, RadioGroupItem } from '@ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';
import RadioGroupOption from './radio-group-item';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InputWithLabel from '../../../../components/InputWithElement';

interface FormOptionsProps {
    cardTitle: string;
    cardContent?: string;
    label1?: string;
    label2?: string;
    selectedOption?: string;
    onOptionChange?: (value: string) => void;
    label3?: string;
    value?: any;
    value2?: string;
    value3?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleGenerateScript: () => void; // Add the new prop for the function
}

const FormOptions: React.FC<FormOptionsProps> = ({
    label1,
    label2,
    label3,
    cardTitle,
    cardContent,
    value,
    value2,
    value3,
    onChange,
    onChange2,
    onChange3,
    handleGenerateScript,
    selectedOption,
    onOptionChange,
}) => {
    const options = [
        { value: 'str', id: 'str', icon: undefined, label: 'Str replace' },
        { value: 'rm', id: 'rm', icon: undefined, label: 'Rm string' },
        { value: 'tba', id: 'tba', icon: undefined, label: 'TBA' },
    ];

    return (
        <Card>
            <CardHeader>
                <h2 className="text-[32px] font-semibold">{cardTitle}</h2>
                <CardDescription>{cardContent}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
            <RadioGroup defaultValue="option-one" value={selectedOption} onValueChange={onOptionChange}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label className="text-white" htmlFor="option-one">Str replace One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label className="text-white" htmlFor="option-two">Option Two</Label>
                    </div>
                </RadioGroup>
                <div className="grid gap-2">
                    <InputWithLabel label={label1} value={value} onChange={onChange} />
                </div>
                <div className="grid gap-2">
                    <InputWithLabel label={label2} value={value2} onChange={onChange2} />
                </div>
                <div className="grid gap-2">
                    <InputWithLabel label={label3} value={value3} onChange={onChange3} />
                </div>
            </CardContent>
        </Card>
    );
};

export default FormOptions;
