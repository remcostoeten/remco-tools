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

interface NewInspirationProps {
    content?: string;
    id: string;
    userId: string;
}

const initialProjectState = {
    projectType: '',
    colors: [],
    colorScheme: '',
    style: [],
    url: '',
    preview: null,
    hasMobileDevice: null,
    animations: null,
    componentInspiration: null,
};

const initialThoughtState = {
    name: '',
    projects: [initialProjectState],
};
export function NewInspiration({ content }: newInspirationProps) {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState<Date | null>(null);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const user = auth?.currentUser;
    const [priority, setPriority] = useState<string[]>([]);
    const [Inspiration, setInspiration] = useState({
        name: '',
        projects: [
            {
                projectType: '',
                colors: [],
                colorScheme: '',
                style: [],
                url: '',
                preview: null,
                hasMobileDevice: null,
                animations: null,
                componentInspiration: null,
            },
        ],
    });
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('user', user);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleProjectChange = (key, value, projectIndex) => {
        const newProjects = [...Inspiration.projects];
        newProjects[projectIndex][key] = value;
        setInspiration({ ...Inspiration, projects: newProjects });
    };

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
                userId: user?.uid,
                createdAt: serverTimestamp(),
                selectedDate: date,
                description,
                priority,
                sort,
            };

            const docRef = await addDoc(
                collection(db, 'inspiration'),
                newThought
            );
            // @ts-ignore
            newThought.id = docRef.id;

            setInspiration(initialThoughtState);
            setDate(null);
            setDescription('');
            setPriority([]);
            setSort('');

            toast({
                title: 'Thought created successfully.',
                description: `with title ${newThought.title}`,
            });

            // Convert newThought to JSON
            const jsonThought = JSON.stringify(newThought, null, 2);
            console.log(jsonThought); // You can post this JSON to your desired endpoint
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
            <Input
                type='text'
                placeholder='Name'
                value={Inspiration.name}
                onChange={(e) =>
                    setInspiration({ ...Inspiration, name: e.target.value })
                }
            />

            {Inspiration.projects.map((project, projectIndex) => (
                <div key={projectIndex}>
                    <h2>Project {projectIndex + 1} Details</h2>

                    <Input
                        type='text'
                        placeholder='Project Type'
                        value={project.projectType}
                        onChange={(e) =>
                            handleProjectChange(
                                'projectType',
                                e.target.value,
                                projectIndex
                            )
                        }
                    />

                    <Textarea
                        placeholder='Colors (comma-separated)'
                        value={project.colors.join(', ')}
                        onChange={(e) =>
                            handleProjectChange(
                                'colors',
                                e.target.value
                                    .split(',')
                                    .map((str) => str.trim()),
                                projectIndex
                            )
                        }
                    />

                    <Input
                        type='text'
                        placeholder='Color Scheme'
                        value={project.colorScheme}
                        onChange={(e) =>
                            handleProjectChange(
                                'colorScheme',
                                e.target.value,
                                projectIndex
                            )
                        }
                    />

                    <Textarea
                        placeholder='Style (comma-separated)'
                        value={project.style.join(', ')}
                        onChange={(e) =>
                            handleProjectChange(
                                'style',
                                e.target.value
                                    .split(',')
                                    .map((str) => str.trim()),
                                projectIndex
                            )
                        }
                    />

                    <Input
                        type='text'
                        placeholder='URL'
                        value={project.url}
                        onChange={(e) =>
                            handleProjectChange(
                                'url',
                                e.target.value,
                                projectIndex
                            )
                        }
                    />

                    {/* Add fields for preview, hasMobileDevice, animations, and componentInspiration similarly */}
                </div>
            ))}

            {/* Submit button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <div className='flex items-center gap-2'>
                    <div className='cursor-hover'>
                        <Button>Submit</Button>
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
