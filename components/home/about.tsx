'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className=" padding-y-xl   margin-y  container scroll-mt-28 " id="about">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-theme-300 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
                    interactions.
                </motion.p>
                A 26 <div className="italic inline">years old</div> old <div className="inline gradient-text">creative developer</div> from the Netherlands. I have a strong passion for CSS, complex
                UI's, and micro
                <motion.p className="mb-3 text-left" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }}>
                    Currently I'm focusing on NextJS with Typescript & co. But I'm also learning some Python & Lua, in the future I want to dive into Go.
                </motion.p>
                <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="mb-3 text-left pb-[32px]">
                    I've studied graphic design, and during my internship I got {isOpen ? null : '...'}
                </motion.p>
                <div
                    className="content-wrapper"
                    style={{
                        position: 'relative',
                        boxShadow: !isOpen ? '0 -15px 15px -15px inset' : 'none',
                    }}>
                    <div
                        style={{
                            opacity: isOpen ? 1 : 0,
                            height: isOpen ? '200px' : '0',
                            overflow: 'hidden',
                            transition: 'opacity 1s, height .7s',
                        }}>
                        <p className="mb-3 text-left">
                            offered a job at an{' '}
                            <Link className="skew-x-10 underline hover:text-blue-800" href="https://tickles.nl" target="_blank">
                                agency
                            </Link>{' '}
                            where I build custom designed Magento 2 🤮 webshops like{' '}
                            <Link className="underline" href="https://vedder-vedder.com" target="_blank">
                                such
                            </Link>
                            . After five years I moved to an international wholesaler and SaaS provider where I rebuilt the FE off their webshop.
                        </p>
                        <p className="mb-3 text-left">
                            Currently I'm employed at{' '}
                            <Link className="underline hover:text-blue-800" target="_blank" href="https://gitlab.com/pleio">
                                Pleio
                            </Link>{' '}
                            which is fully open source. I work mostly on FSV, a government project which can be found{' '}
                            <Link className="underline" href="https://gitlab.com/pleio/dossier" target="_blank">
                                here
                            </Link>
                            .
                        </p>
                    </div>

                    {!isOpen && (
                        <div
                            className="blur-overlay"
                            style={{
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                filter: 'blur(50px)',
                                zIndex: 9999,
                                height: '150px',
                                background: 'linear-gradient(to bottom, transparent, black)',
                                pointerEvents: 'none',
                            }}></div>
                    )}
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="showAlternativeCursor margin-y margin-y border p-2.5 bg-transparent rounded-full w-max text-offwhite px-10 shadow-lg shadow-neutral-900 mt-2">
                    <span className="translate-y-4">{isOpen ? 'Read Less' : 'Read More'}</span>
                </button>
            </motion.section>

            <div className="sm:hidden bg-gray-200 my-24 h-16 w-1 rounded-full dark:bg-opacity-10"></div>
        </>
    );
}
