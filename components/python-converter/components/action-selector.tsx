'use client';

import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { PopoverProps } from '@radix-ui/react-popover';
import * as React from 'react';

import { useMutationObserver } from '@/hooks/use-mutation-observer';
import { cn } from '@/utils/lib';
import { Button } from '@ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@ui/command';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ui/hover-card';
import { Label } from '@ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@ui/popover';
import { Action, ActionType } from '../data/actions';

interface ActionselectorProps extends PopoverProps {
    types: readonly ActionType[];
    Actions: any;
}

export function Actionselector({ Actions, types, ...props }: ActionselectorProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedActions, setSelectedActions] = React.useState(Actions[0]);
    const [peekedActions, setPeekedActions] = React.useState(Actions[0]);

    return (
        <div className="grid gap-2">
            <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                    <Label htmlFor="Actions">Actions</Label>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-[260px] text-sm" side="left">
                    The Actions which will generate the completion. Some Actions are suitable for natural language tasks, others specialize in code. Learn more.
                </HoverCardContent>
            </HoverCard>
            <Popover open={open} onOpenChange={setOpen} {...props}>
                <PopoverTrigger asChild>
                    <Button variant="outline" role="combobox" aria-expanded={open} aria-label="Select a Actions" className="w-full justify-between">
                        {selectedActions ? selectedActions.name : 'Select a Actions...'}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="w-[250px] p-0">
                    <HoverCard>
                        <HoverCardContent side="left" align="start" forceMount className="min-h-[280px]">
                            <div className="grid gap-2">
                                <h4 className="font-medium leading-none">{peekedActions.name}</h4>
                                <div className="text-sm text-muted-foreground">{peekedActions.description}</div>
                                {peekedActions.strengths ? (
                                    <div className="mt-4 grid gap-2">
                                        <h5 className="text-sm font-medium leading-none">Strengths</h5>
                                        <ul className="text-sm text-muted-foreground">{peekedActions.strengths}</ul>
                                    </div>
                                ) : null}
                            </div>
                        </HoverCardContent>
                        <Command loop>
                            <CommandList className="h-[var(--cmdk-list-height)] max-h-[400px]">
                                <CommandInput placeholder="Search Actions..." />
                                <CommandEmpty>No Actions found.</CommandEmpty>
                                <HoverCardTrigger />
                                {types.map((type) => (
                                    <CommandGroup key={type} heading={type}>
                                        {Actions.filter((Actions: { type: string }) => Actions.type === type).map((Actions: { id: React.Key | null | undefined }) => (
                                            <ActionsItem
                                                key={Actions.id}
                                                // @ts-ignore
                                                isSelected={selectedActions?.id === Actions.id}
                                                onPeek={(Actions) => setPeekedActions(Actions)}
                                                onSelect={() => {
                                                    setSelectedActions(Actions);
                                                    setOpen(false);
                                                }}
                                                Actions={undefined}
                                            />
                                        ))}
                                    </CommandGroup>
                                ))}
                            </CommandList>
                        </Command>
                    </HoverCard>
                </PopoverContent>
            </Popover>
        </div>
    );
}

interface ActionsItemProps {
    Actions: any;
    isSelected: boolean;
    onSelect: () => void;
    onPeek: (Actions: Action) => void;
}

function ActionsItem({ Actions, isSelected, onSelect, onPeek }: ActionsItemProps) {
    const ref = React.useRef<HTMLDivElement>(null);

    useMutationObserver(ref, (mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'attributes') {
                if (mutation.attributeName === 'aria-selected') {
                    onPeek(Actions);
                }
            }
        }
    });

    return (
        <CommandItem key={Actions.id} onSelect={onSelect} ref={ref} className="aria-selected:bg-primary aria-selected:text-primary-foreground">
            {Actions.name}
            <CheckIcon className={cn('ml-auto h-4 w-4', isSelected ? 'opacity-100' : 'opacity-0')} />
        </CommandItem>
    );
}
