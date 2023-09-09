'use client';

import React, { useState } from 'react';
import Heading from '@c/section-heading';
import Link from 'next/link';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            className='container mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 font-barlow-condensed font-medium text-xl'
            id='about'
        >
            <p className='mb-3 text-left'>
                Remco Stoeten, 26 years old, creative developer from the
                Netherlands. I have a strong passion for {''}
                <Link
                    href='https://github.com/remcostoeten/own-scss-structure'
                    target='_blank'
                className='underline'
               >
                    CSS
                </Link>{' '}
                {''}, complex UI's, and micro interactions.
            </p>
            <p className='mb-3 text-left'>
                Currently I'm focusing on NextJS with Typescript & co. But I'm
                also learning some Python & Lua, in the future I want to dive
                into Go.
            </p>

            <div
                style={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? '270px' : '0',
                    overflow: 'hidden',
                    transition: 'opacity 2.5s, height .7s',
                }}
            >
                <p className='mb-3 text-left'>
                    I've studied graphic design and during my internship I got
                    offered a job at an{' '}
                    <Link
                        className='underline hover:text-blue-800'
                        href='https://tickles.nl'
                        target='_blank'
                    >
                        agency
                    </Link>{' '}
                    where I build custom designed{' '}
                    <span className='magento2'> Magento 2</span> webshops.
                </p>
                <p className='mb-3 text-left'>
                    After five years I moved to an international wholesaler and
                    SaaS provider where I rebuilt the FE off their webshop.
                </p>
                <p className='mb-3 text-left'>
                    Currently I'm employed at
                    {'   '}{' '}
                    <Link
                        className='underline hover:text-blue-800'
                        target='_blank'
                        href='https://gitlab.com/pleio'
                    >
                        Pleio
                    </Link>{' '}
                    which is fully open source. I work mostly on FSV, a
                    government project which can be seen
                    <Link
                        className='underline hover:text-blue-800'
                        href='https://gitlab.com/pleio/dossier'
                        target='_blank'
                    >
                        here
                    </Link>
                    .
                </p>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className='border p-2.5 bg-transparent rounded-full w-max text-offwhite  px-10 shadow-lg shadow-neutral-900 mt-2'
            >
                {isOpen ? 'Read Less' : 'Read More'}
            </button>
        </section>
    );
}
