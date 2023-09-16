'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import I from '../core/Italic';
import T from '../core/Italic';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        let scrollThreshold = 1150;

        if (window.scrollY > scrollThreshold && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const paragraphStyles =
        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-theme-300 leading-tight sm:leading-tight md:leading-tight lg:leading-tight';

        const sectionStylesFullHeight = 'padding-y-xl   margin-y  container scroll-mt-28 hero-section flex flex-col justify-center pb-8 relative z-10 h-screen';
        const sectionStyles = 'padding-y-xl   margin-y  container scroll-mt-28 hero-section flex flex-col justify-center pb-8 relative z-10';

    return (
        <>
            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                id='about'
                className={sectionStyles}
            >
                <p
                    className={paragraphStyles}
                    style={{ opacity: 1, translate: 0 }}
                >
                    <span className='libre-italic'>I</span> am a 26 years old{' '}
                    <span className='libre-italic'>creative </span> developer
                    with a strong <span className='gradient-text'>passion</span>{' '}
                    for css, <span className='libre-italic'>complex</span> ui's,
                    and micro interactions.
                </p>
            </motion.section>

            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                id='about'
                className={sectionStylesFullHeight}
            >
                <p
                    className={paragraphStyles}
                    style={{ opacity: 1, translate: 0 }}
                >
                    currently i am{' '}<I i='focusing' /> on NextJS with Typescript
                    & co.
                </p>
            </motion.section>


            <motion.section
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 150 }}
                id='skills'
                className={sectionStyles}
            >
                <p className={paragraphStyles}>
                    Currently I am <I i='focusing' /> on NextJS with Typescript
                    & co.
                </p>
            </motion.section>
        </>
    );
}
