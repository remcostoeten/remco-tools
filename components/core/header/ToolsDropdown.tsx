'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function ToolsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { opacity: 1, height: 'auto', display: 'block' },
        closed: { opacity: 0, height: 0, display: 'none' },
    };

    const components = [
        {
            title: 'HTML to J/TSX Converter',
            href: '/html-to-jsx',
            description:
                'Converts any HTML to JSX with the option to generate a fully functioning functional component, with or without props.',
        },
        {
            title: 'Geolocation',
            href: '/geolocation',
            description:
                'An app that allows you to find the longitude and latitude which pairs to an address. Save the address, reverse search them, show them on the map.',
        },
        {
            title: 'Expenses Tracker',
            href: '/income',
            description: 'Life is expensive... get a grip on your expenses..',
        },
        {
            title: 'SVG to CSS',
            href: '/convert-svg',
            description:
                'Converts any SVG to CSS. Either as psuedo element or background image.',
        },
        {
            title: 'Python Script Generator',
            href: '/python',
            description: 'Visually or semantically separates content.',
        },

        {
            title: 'Convert SVG to CSS',
            href: '/convert-svg',
            description: 'Visually or semantically separates content.',
        },
    ];

    return (
        <div className="relative">
            <div
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-200 transition text-gray-400 row-reverse"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="ml-2">Tool</div>
                {isOpen ? (
                    <ChevronUpIcon className="w-5 h-5" />
                ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.3 }}
                        className="fixed left-0  w-full rounded-md shadow-lg bg-offblack     shadow-white/[0.06] backdrop-blur-[0.5rem]  text-white"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <ul className="showAlternativeCursor z-max grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                           
                            {components.map((component) => (
                                <Link
                                    key={component.href}
                                    href={component.href}
                                    title={component.title}
                                >
                                    {component.title}
                                </Link>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}