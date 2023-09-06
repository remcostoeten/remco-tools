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

interface newInspirationProps {
    content?: string;
    id: string;
    userId: string;
}

const initialThoughtState = {
    title: '',
    description: '',
    subject: '',
    sort: '',
};

export function newInspiration({ content }: newInspiration) {
    const [open, setOpen] = useState(false);
    const [Inspiration, setInspiration] = useState(initialThoughtState);
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
                ...Inspiration,
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

            setInspiration(initialThoughtState);
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
                    value={Inspiration.title}
                    onChange={(e) =>
                        setInspiration({ ...Inspiration, title: e.target.value })
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
                    value={Inspiration.sort}
                    onChange={(e) =>
                        setInspiration({ ...Inspiration, sort: e.target.value })
                    }
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                }}
            >
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
