'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function UiElementsDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { opacity: 1, height: 'auto', display: 'block' },
        closed: { opacity: 0, height: 0, display: 'none' },
    };

    const components = [
        {
            title: '3D Text',
            href: 'ui-elements//3d-text',
        },
        {
            title: 'Buttons',
            href: 'ui-elements//buttons',
        },
        {
            title: 'Layout',
            href: 'ui-elements//layout',
        },
        {
            title: 'Loading',
            href: 'ui-elements//loading',
        },
        {
            title: 'Mouse Trailer',
            href: 'ui-elements//mouse-trailer',
        },
        {
            title: 'Perspective Panning',
            href: 'ui-elements//perspective-panning',
        },
        {
            title: 'Reveal Animations',
            href: 'ui-elements//reveal-animations',
        },
        {
            title: 'UI Links',
            href: 'ui-elements//ui-links',
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
                <div className="ml-2">Ui elements</div>
                {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                        transition={{ duration: 0.3 }}
                        className="fixed left-0  w-full rounded-md shadow-lg bg-offblack      shadow-lg shadow-white/[0.06] backdrop-blur-[0.5rem]  text-white"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <ul className="showAlternativeCursor z-max grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {components.map((component) => (
                                <Link key={component.href} href={component.href} title={component.title}>
                                    {component.title}
                                </Link>
                            ))}
                            <Link href="/playground" title="Playground"></Link>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}