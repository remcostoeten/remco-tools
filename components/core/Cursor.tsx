'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMouseHover } from '@/hooks/useMouseHover';

function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { cursorVariant, textEnter, textLeave } = useMouseHover();

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: 'yellow',
            mixBlendMode: 'difference',
        },
    };

    return <motion.div className="cursor" variants={variants} animate={cursorVariant} />;
}

export default Cursor;
