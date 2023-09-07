'use client';
import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import BackgroundVariantOne from '@/components/misc/BackgroundVariantOne';

export default function ComboboxDemo() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [activeVariant, setActiveVariant] = React.useState(1);

    const handleVariantToggle = (variantNumber: number) => {
        setActiveVariant(variantNumber);
    };

    const variants = [
        { label: 'Variant 1', value: 'Variant', onClick: () => handleVariantToggle(1) },
        { label: 'Variant 2', value: 'Variant', onClick: () => handleVariantToggle(2) },
        { label: 'Variant 3', value: 'Variant', onClick: () => handleVariantToggle(3) },
        { label: 'Variant 4', value: 'Variant', onClick: () => handleVariantToggle(4) },
    ];

    return (
        <div className="grid w-screen h-screen place-items-center">
            <button onClick={() => handleVariantToggle(1)}>Variant 1</button>
            <button onClick={() => handleVariantToggle(2)}>Variant 2</button>
            <button onClick={() => handleVariantToggle(3)}>Variant 3</button>
            <button onClick={() => handleVariantToggle(4)}>Variant 4</button>

            {/* @ts-ignore */}
            {activeVariant === 1 && <BackgroundVariantOne className="hidden: activeVariant !== 1" />}
            {/* @ts-ignore */}
            {activeVariant === 2 && <BackgroundVariantTwo className="hidden: activeVariant !== 2" />}
            {/* @ts-ignore */}
            <Popover open={open} onOpenChange={setOpen} className="...">
                {' '}
                {/* Fix the className typo */}
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                        {value ? variants.find((variants) => variants.value === value)?.label : 'Select variants...'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search variants..." />
                        <CommandEmpty>No variants found.</CommandEmpty>
                        <CommandGroup>
                            {variants.map((variants) => (
                                <CommandItem
                                    key={variants.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? '' : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <Check className={cn('mr-2 h-4 w-4', value === variants.value ? 'opacity-100' : 'opacity-0')} />
                                    {variants.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
