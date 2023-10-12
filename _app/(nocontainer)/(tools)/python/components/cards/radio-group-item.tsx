import React from 'react';
import { RadioGroupItem } from '@ui/radio-group';
import { Label } from '@ui/label';
import { Icons } from '@/components/core/icons/icons';

interface RadioGroupOptionProps {
    value: string;
    id: string;
    icon?: any;
    disabled?: boolean;
    label: string;
}

const RadioGroupOption: React.FC<RadioGroupOptionProps> = ({ value, id, icon, disabled, label }) => {
    return (
        <>
            <RadioGroupItem disabled={disabled} value={value} id={id} className="peer sr-only" />
            <Label htmlFor={id} className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
                {/* @ts-ignore */}
                {icon && <icon name={icon} />}
                {label}
            </Label>
        </>
    );
};

export default RadioGroupOption;
