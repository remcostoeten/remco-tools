'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInview';
import { skillsData } from '@/utils/data';
import SectionHeading from '../section-heading';

const Skills: React.FC = () => {
    const { ref } = useSectionInView('Skills');
    const headingAnimation = useAnimation();

    useEffect(() => {
        headingAnimation.start('animate');
    }, []);

    const text = "The tech stack I'm familiar with,\n or I'm currently occupied with.";

    const textVariants: Variants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.1, // Adjust the delay between letters
            },
        },
    };

    const letterVariants: Variants = {
        initial: {
            opacity: 0,
            x: -20, // Start from the left
            y: 20, // Start from the bottom
        },
        animate: {
            opacity: 1,
            x: 0, // End at the original position
            y: 0, // End at the original position
            transition: {
                type: 'spring', // You can adjust the animation type and stiffness
                stiffness: 100,
            },
        },
    };

    const fadeInAnimationVariants: Variants = {
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

    return (
        <section
            id='skills'
            ref={ref}
            className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <motion.h2
                className='text-3xl font-medium mb-8  leading-7 tracking-wider	 text-center'
                variants={textVariants}
                initial='initial'
                animate='animate'
            >
                {text.split('').map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h2>
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
        </section>
    );
}

export default Skills;