'use client';
import React, { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';
import { Drawer } from 'vaul';
import { PlusSquare } from 'lucide-react';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { auth, auth as firebaseAuth, db } from '@/utils/firebase';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { motion } from 'framer-motion';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

interface NewTaskProps {
    content?: string;
    id?: string;
    userId?: string;
}

const initialThoughtState = {
    title: '',
    description: '',
    subject: '',
    sort: '',
};

export function NewThought({ content }: NewTaskProps) {
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState(initialThoughtState);
    const [date, setDate] = useState<Date | null>(null);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const user = auth?.currentUser;
    const [markdownContent, setMarkdownContent] = useState('');
    const [priority, setPriority] = useState<string[]>([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('user', user);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const authInstance = getAuth();

        try {
            let currentUser = authInstance.currentUser;

            if (!currentUser) {
                const anonymousUserCredential = await signInAnonymously(
                    authInstance
                );
                currentUser = anonymousUserCredential.user;
            }

            if (!currentUser) {
                throw new Error('Failed to get the user details');
            }

            const newThought = {
                ...task,
                userId: currentUser.uid,
                createdAt: serverTimestamp(),
                selectedDate: date,
                description,
                priority,
                sort,
            };

            const docRef = await addDoc(collection(db, 'todos'), newThought);
            // @ts-ignore
            newThought.id = docRef.id;

            setTask(initialThoughtState);
            setDate(null);
            setDescription('');
            setPriority([]);
            setMarkdownContent('');
            setSort('');

            toast({
                title: 'Thought created successfully.',
                description: `with title ${newThought.title}`,
            });
        } catch (error) {
            toast({
                title: 'Something went wrong.',
                description: `Your request failed. Please try again. ${error}`,
                variant: 'destructive',
            });
            console.error(error);
        } finally {
            setOpen(false);
        }
    };

    const priorityOptions = [
        {
            value: 'low',
            label: 'Low',
            icon: (
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    className='textMutedForeground mr-2 h-4 w-4'
                >
                    <path
                        d='M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                    ></path>
                </svg>
            ),
        },
        {
            value: 'medium',
            label: 'Medium',
            icon: (
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    className='textMutedForeground mr-2 h-4 w-4'
                >
                    <path
                        d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                    ></path>
                </svg>
            ),
        },
        {
            value: 'high',
            label: 'High',
            icon: (
                <svg
                    width='15'
                    height='15'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='textMutedForeground mr-2 h-4 w-4'
                >
                    <path
                        d='M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z'
                        fill='currentColor'
                        fillRule='evenodd'
                        clipRule='evenodd'
                    ></path>
                </svg>
            ),
        },
    ];

    const form = (
        <motion.form
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='flex flex-col gap-2 py-6'
            onSubmit={handleSubmit}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                    duration: 0.4,
                }}
            >
                <Input
                    type='text'
                    className='wysiwyg-input'
                    placeholder='Title'
                    value={task.title}
                    onChange={(e) =>
                        setTask({ ...task, title: e.target.value })
                    }
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                }}
            >
                <Input
                    type='text'
                    className='wysiwyg-input'
                    placeholder='Sort'
                    value={task.sort}
                    onChange={(e) => setTask({ ...task, sort: e.target.value })}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                }}
            >
                <Select>
                    <SelectTrigger className='w-[140px]'>
                        <SelectValue placeholder='Priority' />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {priorityOptions.map((option) => (
                                <SelectItem
                                    key={option.value}
                                    value={option.value}
                                    onClick={() => setPriority([option.value])}
                                >
                                    <SelectLabel>
                                        <span className='flex gap-1'>
                                            {option.label}
                                            {option.icon}
                                        </span>
                                    </SelectLabel>
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Input
                    type='text'
                    placeholder='Priority'
                    value={priority.join(', ')}
                    onChange={(e) => setPriority([e.target.value])}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1,
                }}
            >
                <Textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                }}
            >
                <div className='flex items-center gap-2'>
                    <div className='cursor-hover'>
                        <Button>New post</Button>
                    </div>
                </div>
            </motion.div>
        </motion.form>
    );

    return (
        <>
            <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild onClick={() => setOpen(true)}>
                    <span>
                        <PlusSquare className='font-2xl w-[40px]' />
                    </span>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className='fixed inset-0 bg-black/40' />
                    <Drawer.Content className='fixed bottom-0 shadow-lg bg-[#0a0a0a] p-12 left-0 right-0 mt-24 flex h-[75vh] flex-col rounded-t-[10px] rounded-2xl'>
                        <div className='flex-1 rounded-t-[10px] [text-[#5D5C63] font-notes] p-4'>
                            <div className='mx-auto w-4/12'>
                                <Drawer.Title className='mb-4 font-medium text-4xl font-serif'>
                                    Add whatever is on your mind.
                                </Drawer.Title>
                                {form}
                                <Drawer.Trigger onClick={() => setOpen(false)}>
                                    <span>Close</span>
                                </Drawer.Trigger>
                            </div>
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    );
}
