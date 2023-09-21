'use client';
import { motion } from 'framer-motion';

import { defaultAnimate, defaultInitial, getDefaultTransition } from '@/hooks/motionHelper';

interface AnimatedDivProps {
    children: React.ReactNode;
    delay?: string;
    className?: string;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, delay = '1', className }) => {
    return <motion.div className={className} initial={defaultInitial} animate={defaultAnimate} transition={getDefaultTransition(parseFloat(delay))}></motion.div>;
};

export default AnimatedDiv;
