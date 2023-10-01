'use client';
import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '@/context/theme-context';
import { useSectionInView } from '@/hooks/useSectionInview';
import { experiencesData } from '@/config/data';
import { motion } from 'framer-motion';
import SectionHeading from '../section-heading';

export default function Experience() {
    const { ref } = useSectionInView('experience');
    const { theme } = useTheme();
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            id='experience'
            ref={ref}
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <motion.div
                variants={fadeInAnimationVariants}
                initial='initial'
                animate='animate'
                whileInView='animate'
            >
                <SectionHeading>My experience</SectionHeading>
            </motion.div>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    // @ts-ignore
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === 'light'
                                        ? '#f3f4f6'
                                        : 'rgba(255, 255, 255, 0.05)',
                                boxShadow: 'none',
                                border: '1px solid rgba(0, 0, 0, 0.05)',
                                textAlign: 'left',
                                padding: '1.3rem 2rem',
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    theme === 'light'
                                        ? '0.4rem solid #9ca3af'
                                        : '0.4rem solid rgba(255, 255, 255, 0.5)',
                            }}
                            className='showAlternativeCursor'
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background:
                                    theme === 'light'
                                        ? 'white'
                                        : 'rgba(255, 255, 255, 0.15)',
                                fontSize: '1.5rem',
                            }}
                        >
                            <h3 className='font-semibold capitalize'>
                                {item.title}
                            </h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                        {/* @ts-ignore */}
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    );
}
