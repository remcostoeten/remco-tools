'use client';
import React, { useEffect, useState } from 'react';
import { motion, spring } from 'framer-motion';
import useInView from '@/hooks/useInView';
import { cubicBezier } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInview';
import { RoundedButton } from '../core/buttons/ArrowBtn';
import T from '../core/GradientText';
import I from '../core/Italic';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    const { ref } = useSectionInView('About me');

    const [reff, inView] = useInView({
        threshold: 0.1,
        freezeOnceVisible: true,
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const handleScroll = () => {
        let scrollThreshold = 1150;

        if (window.scrollY > scrollThreshold && isOpen) {
            setIsOpen(false);
        }
    };

    const paragraphStyles = ' text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-theme-300 leading-tight sm:leading-tight md:leading-tight lg:leading-tight';

    const sectionStylesFullHeight = 'padding-y-xl border-t border-white border-b  margin-y  container scroll-mt-28 hero-section flex flex-col justify-center pb-8 relative z-10 h-screen';
    const sectionStyles = 'padding-y-xl   margin-y   scroll-mt-28 hero-section flex flex-col  pb-8 relative z-10';
    const containerVariants = {
        hidden: { width: '0%' },
        visible: {
            width: '360px',
            transition: {
                duration: 0.5,
                animation: 'easeInOut',
            },
        },
    };
    const easing = cubicBezier(0.35, 0.17, 0.3, 0.86);
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };
    return (
        <>
            <div className="home-container mt-32 pt-28">
                <motion.section initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5, stiffness: 150 }} id="about" className={sectionStyles}>
                    <motion.p className={`${paragraphStyles} pt-[100px]`} initial={{ opacity: 0, rotateX: -20, scale: 0.9 }} animate={{ opacity: 1 }} whileInView={{ opacity: 1, rotateX: 0, scale: 1 }} transition={{ duration: 1.5, type: 'spring', stiffness: 150 }}>
                        <I className="text-[90px]" i="Who dis?" />
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={container}>
                        <motion.div
                            style={{
                                background: 'linear-gradient(90deg, #fbc340, #f15a29 34.37%, #f291c6 66.67%, #27aae1)',
                            }}
                            className="gradient-text h-[1px] -translate-y-6"
                            initial="hidden"
                            ref={reff}
                            animate={{ width: inView ? '360px' : '0%' }}
                            transition={{ duration: 0.85, ease: easing }}
                            variants={containerVariants}
                        ></motion.div>
                    </motion.div>
                    <motion.p className={`${paragraphStyles} pt-[100px]`} initial={{ opacity: 0, rotateX: -30, scale: 0.9 }} animate={{ opacity: 1 }} whileInView={{ opacity: 1, rotateX: 0, scale: 1 }} transition={{ duration: 1.5, type: 'spring', stiffness: 5 }}>
                        <I i="I" /> am a 26 years old <I i="creative" /> developer with a strong <I i="passion" /> for <I i="complex" /> UI's, and micro interactions.
                    </motion.p>
                    <motion.p className={`${paragraphStyles} pt-[100px]`} initial={{ opacity: 0, rotateX: 41, scale: 0.9 }} animate={{ opacity: 1 }} whileInView={{ opacity: 1, rotateX: 0, scale: 1 }} transition={{ duration: 1.5, type: 'spring', stiffness: 5 }}>
                        Currently, I am <I i="focusing" /> on <T className="libre" t="Next.js" /> with <T className="libre" t="TypeScript" /> <I i="& co" />. But my <I i="interests" /> are not limited to only those!
                    </motion.p>

                    <motion.p className={`${paragraphStyles} pt-[100px]`} initial={{ opacity: 0, rotateX: -50, scale: 0.9 }} animate={{ opacity: 1 }} whileInView={{ opacity: 1, rotateX: 0, scale: 1 }} transition={{ duration: 1.5, type: 'spring', stiffness: 5 }}>
                        <span className="swapwrapper">
                            <div className="sentence">
                                <div className="words rotate">
                                    <span>Beautiful</span>
                                    <span>Inspiring</span>
                                    <span>Fabulous</span>
                                    <span>Delightful</span>
                                    <span>Spirited</span>
                                </div>
                                <br />
                            </div>
                        </span>{' '}
                        I love exploring new technologies, currently dabbling in some <T className="libre effect" t="Python" /> & <T className="libre" t="Lua" /> and want to dive into <T t="Go" className="libre" /> and the world of <I i="devops" />.{isOpen && <motion.div initial="hidden" animate={isOpen} variants={container}></motion.div>}
                    </motion.p>
                    <RoundedButton customClassName="mt-16 w-max" onClick={() => setIsOpen(!isOpen)} text="Want to know more?" />
                </motion.section>
            </div>
        </>
    );
}
