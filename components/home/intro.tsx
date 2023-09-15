'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-contex';
import DownloadCV from './pdf';
import { useTheme } from '@/context/theme-context';

export default function Intro() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [scrollY, setScrollY] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2, // Adjust the stagger duration as needed
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Adjust the initial y position as needed
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 5,
                duration: 0.7,
            },
        },
    };

    return (
        <section
            id='home'
            className='intro padding-y mx-auto max-w-[50rem] text-center scroll-mt-[100rem]'
        >
            <motion.div
                variants={containerVariants}
                initial='hidden'
                animate='visible'
            >
                <div className='flex items-center justify-center'>
                    <div className='relative'>
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                rotate: 90,
                                skewY: 45,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: scrollY * 0.03,
                                rotate: 0,
                                skewY: 0,
                            }}
                            transition={{
                                type: 'spring',
                                duration: 1.7,
                                delay: 0.3,
                            }}
                        >
                            {' '}
                            <Image
                                src='https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/0/1638502874210?e=2147483647&v=beta&t=NQAizH_x-gBtMhmn1APmsKcl9QjmasnaZ60TqG-ZhR4'
                                alt='Remco Stoeten'
                                width='192'
                                height='192'
                                quality='95'
                                priority={true}
                                className='h-24 mb-8  w-24 rounded-full object-cover border-[0.35rem] border-offwhite shadow-xl'
                            />
                        </motion.div>

                        <motion.span
                            variants={itemVariants}
                            className='absolute bottom-0 right-0 text-4xl'
                        >
                            <motion.span
                                variants={itemVariants}
                                className='wave'
                            >
                                👋
                            </motion.span>
                        </motion.span>
                    </div>
                </div>

                <motion.h1
                    variants={itemVariants}
                    className='grow text-2xl font-medium padding-y !leading-[1.5] sm:text-4xl'
                >
                    <span className='font-bold'> My name is Remco, </span>a{' '}
                    <span className='italic dutch'>dutch</span>{' '}
                    <span className='font-bold'>front-end developer</span> with{' '}
                    <span className='font-bold'>7 years</span> of experience. I
                    enjoy building things,{' '}
                    <span className='italic'>with code</span>.
                </motion.h1>

                <motion.div
                    variants={itemVariants}
                    className='flex   flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                >
                    <div className='animbtn'>
                        <Link
                            className='border-black border flex animbutton p-2.5 bg-transparent rounded-xl w-max flex align-middle items-center gap-4 justify-center  text-offwhite  px-10 dark:shadow-lg shadow-neutral-900 mt-2 animated-arrow'
                            href='#contact'
                            onClick={() => {
                                setActiveSection('Contact');
                                setTimeOfLastClick(Date.now());
                            }}
                        >
                            <span className='the-arrow -left'>
                                <span className='shaft'></span>
                            </span>
                            <span className='main'>
                                <span className='text'>Contact me here</span>
                                <span className='the-arrow -right'>
                                    {' '}
                                    <span className='shaft'></span>
                                </span>
                            </span>
                        </Link>
                    </div>

                    <DownloadCV />
                    <div className='flex gap-4 '>
                        <Link
                            data-cursor-hover
                            className={`border-black border p-2.5 bg-transparent rounded-xl h-[50px] w-[50px] text-offwhite   dark:shadow-lg shadow-neutral-900 mt-2 flex items-center justify-center gap-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack   ${
                                theme === 'light'
                                    ? 'text-black'
                                    : 'dark:text-offwhite/60'
                            }`}
                            href='https://github.com/remcostoeten'
                            target='_blank'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                style={{ mixBlendMode: 'difference' }}
                            >
                                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
                            </svg>
                        </Link>

                        <Link
                            data-cursor-hover
                            className='border-black border p-2.5 bg-transparent rounded-xl h-[50px] w-[50px] text-offwhite   dark:shadow-lg shadow-neutral-900 mt-2 flex items-center justify-center gap-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack   dark:text-offwhite/60'
                            href='https://github.com/remcostoeten'
                            target='_blank'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                                style={{ mixBlendMode: 'difference' }}
                            >
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
