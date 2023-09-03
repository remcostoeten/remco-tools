'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/hooks/useSectionInview';
import { useActiveSectionContext } from '@/context/active-section-contex';
import AnimatedTextWord from '../../../../components/AnimateTextWord';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 mx-auto max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}>
                        <Image
                            src="https://media.licdn.com/dms/image/C5603AQFIlU2oV2JEgg/profile-displayphoto-shrink_800_800/0/1638502874210?e=2147483647&v=beta&t=NQAizH_x-gBtMhmn1APmsKcl9QjmasnaZ60TqG-ZhR4"
                            alt="Remco Stoeten"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>
                        <span className="wave">👋</span>
                    </motion.span>
                </div>
            </div>

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">
                    <AnimatedTextWord text=" Hello, I'm Remco." direction={undefined} />
                </span>{' '}
                I'm a <span className="font-bold">front-end developer</span> with <span className="font-bold">~7 years</span> of experience. I enjoy building things,{' '}
                <span className="italic">with scode</span>. My current focus is <span className="underline">Next.js</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}>
                <Link
                    href="#contact"
                    className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    data-cursor-hover
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}>
                    Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                    data-cursor-hover
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack black border"
                    href="/CV.pdf"
                    download>
                    Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </Link>

                <Link
                    data-cursor-hover
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack black border dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank">
                    <BsLinkedin />
                </Link>

                <Link
                    data-cursor-hover
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer black border dark:text-white/60"
                    href="https://github.com"
                    target="_blank">
                    <FaGithubSquare />
                </Link>
            </motion.div>
        </section>
    );
}
