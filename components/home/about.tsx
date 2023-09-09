'use client';

import React from 'react';
import Heading from '@c/section-heading';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function About() {
    return (
        <motion.section
            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 font-barlow-condensed  font-medium text-xl'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <motion.h1
                className='grow mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, my name is, </span>
            </motion.h1>
            <p className='mb-3  '>
                R emco Stoeten, 26 y/o, from Lemmer, the Netherlands. I
                graduated with a graphic degree and got my first job after my
                internship where I stayed for five years building custom <div className="magent2">Magento</div>
                2{' '}
                <span className=' rotating-emoji'>
                    <span className='absolute fade-in-emoji opacity-0 animate-fade-in'>
                        🤮
                    </span>
                    <span className='absolute fade-in-emoji alternative opacity-0 animate-fade-in'>
                        🤢
                    </span>
                </span>{' '}
                such as{' '}
                <Link
                    className='underline'
                    href='https://www.qhp.nl/'
                    target='_blank'
                >
                    this
                </Link>
                or{' '}
                <Link
                    className='underline'
                    href='https://vedder-vedder.com'
                    target='_blank'
                >
                    this
                </Link>{' '}
                and have over five years of experience in frontend development,
                specifically in custom Magento 2 webshops.
            </p>
            <p className='mb-3'>
                After working at{' '}
                <Link
                    className='italic underline'
                    href='https://tickles.nl'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    an agency
                </Link>{' '}
                and then in-house at a multinational SaaS company, I joined{' '}
                <Link
                    className='underline'
                    href='https://gitlab.com/pleio'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Pleio
                </Link>
                , which exclusively operates in non-profit, contributed to
                projects like{' '}
            </p>
            <p className='mb-3'>
                <Link
                    className='underline'
                    href='https://gitlab.com/pleio/dossier/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    FSV
                </Link>
                . I have a strong passion for complex interfaces and all-round
                programming, always looking to learn new things and improve my
                skills. Currently focusing on Typescript & co. Also some Python
                and Lua on the side.
            </p>
        </motion.section>
    );
}
