'use client'
// components/OffCanvasMenu.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const OffCanvasMenu = ({ isOpen, onClose }) => {
    const controls = useAnimation();

    useEffect(() => {
        if (isOpen) {
            controls.start({ x: 0 });
        } else {
            controls.start({ x: '-100%' });
        }
    }, [isOpen]);

    return (
        <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-gray-800 p-4"
            initial={{ x: '-100%' }}
            animate={controls}
        >
            {/* Your menu content goes here */}
            <button onClick={onClose}>Close</button>
        </motion.div>
    );
};

export default OffCanvasMenu;
