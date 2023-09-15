'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInview';
import { skillsData } from '@/config/data';

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }
    return shuffledArray;
};

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * index,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills');
    const [shuffledSkillsData, setShuffledSkillsData] = useState([]);
    const headingAnimation = useAnimation();

    useEffect(() => {
        headingAnimation.start('animate');
    }, []);

    const text =
        "The tech stack I'm familiar with,\n or I'm currently occupied with.";

    const textVariants: Variants = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.02, 
            },
        },
    };

    const letterVariants: Variants = {
        initial: {
            opacity: 0,
            x: -200,
            scale: 0.4,
            y: -40, 
            rotate: 10,
        },
        animate: {
            opacity: 1,
            scale: [0.4, 2, 0.4], 
            y: [0, -10, 0], 
            rotate: [10, 0, 10], 
            transition: {
                type: 'spring', 
                stiffness: 300,
                damping: 100,
            },
        },
    };

    useEffect(() => {
        setShuffledSkillsData(shuffleArray(skillsData));
    }, [skillsData]);

    return (
        <>
            <section
                id='skills'
                ref={ref}
                className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
            >
                <motion.h2
                    className='text-3xl font-medium mb-8  leading-7 tracking-wider text-center'
                    variants={textVariants}
                    initial='initial'
                    whileInView='animate'
                    animate=''
                >
                    {text.split('').map((letter, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {letter}
                        </motion.span>
                    ))}
                </motion.h2>

             
                <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                    {shuffledSkillsData.map((skill, index) => (
                        <motion.li
                            className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial='initial'
                            animate='animate'
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </section>
            <div className='sm:hidden bg-gray-200 my-24 h-16 w-1 rounded-full dark:bg-opacity-10'></div>
        </>
    );
}
