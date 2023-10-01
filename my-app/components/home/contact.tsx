'use client';

import { useSectionInView } from '@/hooks/useSectionInview';
import { sendEmail } from '@/utils/sendEmail';
import { motion } from 'framer-motion';
import React from 'react';
import SectionHeading from '../section-heading';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';
import SubmitBtn from './submit-btn';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

    return (
        <motion.section
            id='contact'
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
        >
            <form className='flex flex-col gap-4 mt-10 dark:text-black'>
                <Input
                    name='senderEmail'
                    type='email'
                    required
                    maxLength={500}
                    className='theme-background text-slate-500 theme-background--inputs'
                    placeholder='ronnypickering@gmail.com'
                />
                <Textarea
                    className='theme-background text-slate-500  h-[400px] theme-background--inputs'
                    name='message'
                    style={{ minHeight: '120px' }}
                    placeholder='Your message goes here.'
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
            {/* <form
                className='flex flex-col gap-4 mt-10 dark:text-black'
                // @ts-ignore
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast({
                            title: error,
                            variant: 'destructive',
                        });
                    }
                    toast({
                        title: 'Email sent successfully!',
                    });
                }}
            >
                    <Input
                        name='senderEmail'
                        type='email'
                        required
                        maxLength={500}
                        className='theme-background text-slate-500 theme-background--inputs'
                        placeholder='ronnypickering@gmail.com'
                    />
                    <Textarea
                        className='theme-background text-slate-500  h-[400px] theme-background--inputs'
                        name='message'
                        style={{ minHeight: '120px' }}
                        placeholder='Your message goes here.'
                        required
                        maxLength={5000}
                    />
                    <SubmitBtn />
            </form> */}
        </motion.section>
    );
}
