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
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>

            <p className='text-gray-700 -mt-6 dark:text-white/80'>
                Please contact me directly at{' '}
                <a className='underline' href='mailto:remcostoeten@hotmail.com'>
                    remcostoeten@hotmail.com{' '}
                </a>{' '}
                or through this form.
            </p>

            <form
                className='mt-10 flex flex-col dark:text-black'
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
                <div className='flex gap-2 flex-col`'>
                    <Input
                        name='senderEmail'
                        type='email'
                        required
                        maxLength={500}
                        placeholder='Your email'
                    />
                    <Textarea
                        className='mb-4'
                        name='message'
                        placeholder='Your message'
                        required
                        maxLength={5000}
                    />
                    <SubmitBtn />
                </div>
            </form>
        </motion.section>
    );
}
