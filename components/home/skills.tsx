'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInview';
import { skillsData } from '@/utils/data';
import SectionHeading from '../section-heading';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
        <><section
            id='skills'
            ref={ref}
            className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <h2 className='text-3xl font-medium mb-8  leading-7 tracking-wider	 text-center'>
                The tech stack I'm familiar with,<br /> or I'm currently occupied
                with.
            </h2>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section><div className="sm:hidden bg-gray-200 my-24 h-16 w-1 rounded-full dark:bg-opacity-10"></div></>

    );
}
