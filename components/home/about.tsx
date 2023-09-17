'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import I from '../core/Italic';
import T from '../core/GradientText';

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

    const sectionStylesFullHeight =
        'padding-y-xl   margin-y  container scroll-mt-28 hero-section flex flex-col justify-center pb-8 relative z-10 h-screen';
    const sectionStyles =
        'padding-y-xl   margin-y  container scroll-mt-28 hero-section flex flex-col justify-center pb-8 relative z-10';

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
                    <I i='I' />{' '}am a 26 years old <I i='creative' /> developer with a strong{' '}
                    <T t='passion' /> for <I i='complex' /> ui's, and micro
                    interactions.
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
                    Currently <I i='I' /> am <I i='focusing' /> on{' '}
                    <T t='nextJS' /> with <T t='typescript' /> <I i='& co' />.{' '}
                    <br />
                    <br />
                    But my <I i='interests' /> are not limited, I am also{' '}
                    <I i='learning' /> a little <T t='python' /> & <T t='lua' />{' '}
                    and want to dive into go in the <I i='future' />.
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
