'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInview';
import { skillsData } from '@/utils/data';
import SectionHeading from '../section-heading';
import AnimatedText from './animtext';

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
                staggerChildren: 0.03, 
            },
        },
    };

    const letterVariants: Variants = {
        initial: {
            opacity: 0,
            x: -20,
            scale: .4,
            y: 50,
            rotate: 10,
        },
        animate: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                type: 'easeOut',
                stiffness: 300,
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
                    className='text-3xl font-medium mb-8  leading-7 tracking-wider	 text-center'
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

                <div className='sm:hidden mx-auto justify-center text-center flex '>
                    <AnimatedText
                        // @ts-ignore
                        text='My techstack'
                        className='inline mx-auto text-3xl font-medium mb-8  leading-7 tracking-wider text-center'
                        threshold={150}
                        mobileThreshold={150}
                    />
                </div>
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
