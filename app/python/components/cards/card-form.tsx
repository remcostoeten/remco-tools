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
    label3?: string;
    value?: any;
    value2?: string;
    value3?: string;
    // disabled1?: boolean;
    // disabled2?: boolean;
    // disabled3?: boolean;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChange3?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormOptions: React.FC<FormOptionsProps> = ({ label1, label2, label3, cardTitle, cardContent, value, value2, value3, disabled1, disabled2, disabled3, onChange2, onChange3, onChange }) => {
    const options = [
        { value: 'str', id: 'str', icon: undefined, label: 'Str replace' },
        { value: 'rm', id: 'rm', disabled1, icon: undefined, label: 'Rm string' },
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
                    <RadioGroupItem value={value} className="peer sr-only" />
                    <Label className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">Str replace</Label>
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
