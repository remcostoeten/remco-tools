import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import { RadioGroup } from '@ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@ui/select';
import RadioGroupOption from './radio-group-item';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import InputWithLabel from '../../../../components/InputWithElement';

interface FormOptionsProps {
    cardTitle: string;
    cardContent?: string;
    label1?: string;
    label2?: string;
    label3?: string;
    value?: any;
    value2?: string;
    value3?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormOptions: React.FC<FormOptionsProps> = ({ label1, label2, label3, cardTitle, cardContent, value, value2, value3, onChange2, onChange3, onChange }) => {
    const options = [
        { value: 'str', id: 'str', icon: undefined, label: 'Str replace' },
        { value: 'rm', id: 'rm', icon: undefined, label: 'Rm string' },
        { value: 'tba', id: 'tba', icon: undefined, label: 'TBA' },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardDescription>{cardContent}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
                <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
                    {options.map((option) => (
                        <RadioGroupOption key={option.id} value={option.value} id={option.id} icon={option.icon} label={option.label} />
                    ))}
                </RadioGroup>
                <div className="grid gap-2">
                    <InputWithLabel label={label1} value={value} onChange={onChange} />
                </div>
                <div className="grid gap-2">
                    <InputWithLabel label={label2} value={value2} onChange={onChange3} />
                </div>
                <div className="grid gap-2">
                    <InputWithLabel label={label3} value={value3} onChange={onChange2} />
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="month">Expires</Label>
                        <Select>
                            <SelectTrigger id="month">
                                <SelectValue placeholder="Month" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => (
                                    <SelectItem key={i} value={(i + 1) as any}>
                                        {new Date().toLocaleString('en-US', { month: 'long' })}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="year">Year</Label>
                        <Select>
                            <SelectTrigger id="year">
                                <SelectValue placeholder="Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {Array.from({ length: 10 }, (_, i) => (
                                    <SelectItem key={i} value={(new Date().getFullYear() + i) as any}>
                                        {new Date().getFullYear() + i}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="CVC" />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Continue</Button>
            </CardFooter>
        </Card>
    );
};

export default FormOptions;
