'use client';
import { motion } from 'framer-motion';

export default function AboutTwo() {
    const pargraphClasses = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-theme-300 leading-tight sm:leading-tight md:leading-tight lg:leading-tight';

    return (
        <>
            <motion.section className="hero-section flex flex-col justify-center pb-8 relative z-10">
                <p className={pargraphClasses}>
                    I'm a <span className="libre-italic">creative</span> front-end developer with 7 years of <span className="gradient-text">experience</span>. I enjoy building things,{' '}
                </p>
            </motion.section>
        </>
    );
}
