'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';
import { doc, deleteDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { labels } from './data/data';
import { db, deleteTodo } from '@/utils/firebase';
import { toast } from '../ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';

interface DataTableRowActionsProps<TData extends { id: string }> {
    row: Row<TData>;
}

export function DataTableRowActions<
    TData extends {
        [x: string]: any;
        id: string;
    }
>({ row }: DataTableRowActionsProps<TData>) {
    const task = row.original;
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopover = () => {
        setIsPopoverOpen((prevState) => !prevState);
    };

    const [editedTask, setEditedTask] = useState({
        label: task.label,
    });

    const handleEditSubmit = async () => {
        // Update the task in Firestore (as an example)
        const taskRef = doc(collection(db, 'tasks'), task.id);
        await updateDoc(taskRef, editedTask);

        // Close the popover
        setIsPopoverOpen(false);

        // Optionally show a toast or notification for success
        toast({ title: 'Task updated successfully!' });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    // @ts-ignore
                    variant='ghost'
                    className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
                >
                    <DotsHorizontalIcon className='h-4 w-4' />
                    <span className='sr-only'>Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-[160px]'>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                <DropdownMenuItem>Favorite</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        {/* @ts-ignore */}
                        <DropdownMenuRadioGroup value={task.label}>
                            {labels.map((label) => (
                                <DropdownMenuRadioItem
                                    key={label.value}
                                    value={label.value}
                                >
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => deleteTodo(task.id)}>
                    Deletee
                    <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
                {isPopoverOpen && (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant='outline'>Open popover</Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-80'>
                            <div className='grid gap-4'>
                                <div className='space-y-2'>
                                    <h4 className='font-medium leading-none'>
                                        Edit Task
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                        Update the task details.
                                    </p>
                                </div>
                                <div className='grid gap-2'>
                                    {/* Field for label */}
                                    <div className='grid grid-cols-3 items-center gap-4'>
                                        <Label htmlFor='label'>Label</Label>
                                        <Input
                                            id='label'
                                            value={editedTask.label}
                                            onChange={(e) =>
                                                setEditedTask((prev) => ({
                                                    ...prev,
                                                    label: e.target.value,
                                                }))
                                            }
                                            className='col-span-2 h-8'
                                        />
                                    </div>
                                    {/* Add more fields as required */}
                                </div>
                                <div className='mt-4'>
                                    <Button onClick={handleEditSubmit}>
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
