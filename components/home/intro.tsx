'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useActiveSectionContext } from '@/context/active-section-contex';
import DownloadCV from './pdf';
import { useTheme } from '@/context/theme-context';
import ArrowDown from '../ArrowDown';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IntroButtons from './IntroButtons';
import I from '../core/Italic';
import T from '../core/GradientText';
import metadata from '@/config/metadata';
import GithubLogo from '../core/icons/GithubLogo';
import Linkedin from '../core/icons/Linkedin';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [scrollY, setScrollY] = useState(0);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        gsap.to(window, {
            ScrollToOptions: {
                y: '#home',
                autoKill: false,
                trigger: '#home',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                snap: {
                    snapTo: 2 / 4,
                    duration: { min: 0.2, max: 0.3 },
                    delay: 0.2,
                    ease: 'power1.inOut',
                },
            },
        });
    }, []);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.2, // Adjust the stagger duration as needed
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20, // Adjust the initial y position as needed
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 5,
                duration: 0.7,
            },
        },
    };

    const socialClass = 'h-[60px] p-4 border rounded-xl';

    return (
        <section id="home" className="intro padding-y relative mx-auto h-[75vh] max-w-[50rem] scroll-mt-[100rem]  text-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0,
                                rotate: 90,
                                skewY: 45,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: scrollY * 0.03,
                                rotate: 0,
                                skewY: 0,
                            }}
                            transition={{
                                type: 'spring',
                                duration: 1.7,
                                delay: 0.3,
                            }}
                        >
                            {' '}
                            <Image src="https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/0/1638502874210?e=2147483647&v=beta&t=NQAizH_x-gBtMhmn1APmsKcl9QjmasnaZ60TqG-ZhR4" alt="Remco Stoeten" width="192" height="192" quality="95" priority={true} className="mb-8 h-24  w-24 rounded-full border-[0.35rem] border-offwhite object-cover shadow-xl" />
                        </motion.div>
                        <motion.span variants={itemVariants} className="absolute text-4xl left-[-17px] top-[4rem]">
                            <span className="text-[35px] wave">👋</span>
                        </motion.span>
                    </div>
                </div>

                <motion.h1 variants={itemVariants} className="padding-y grow text-2xl font-medium leading-[40px] sm:text-4xl">
                    <span className="font-bold"> Remco, </span>a <I className="dutch" i="dutch" /> <span className="font-bold">front-end developer</span> with <span className="font-bold">7 years</span> of <T t="experience" />. I <I i="enjoy" /> building things,
                    <I i="with code" />.
                </motion.h1>

                <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium effect sm:flex-row">
                    <IntroButtons />

                    <Link data-cursor-hover className={socialClass} href={metadata.linkedinProfile} target="_blank">
                        <Linkedin />
                    </Link>
                    <Link data-cursor-hover className={socialClass} href={metadata.githubProfile} target="_blank">
                        <GithubLogo />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
