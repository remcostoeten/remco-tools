'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionSpacerProps {
    variant: 'extra-large' | 'large' | 'small' | 'medium';
}

export default function SectionSpacer({ variant }: SectionSpacerProps) {
    let height = 'h-32';
    let margin = 'my-48';

    switch (variant) {
        case 'extra-large':
            height = 'h-48';
            margin = 'my-64';
            break;
        case 'large':
            height = 'h-32';
            margin = 'my-48';
            break;
        case 'small':
            height = 'h-16';
            margin = 'my-24';
            break;
        case 'medium':
            height = 'h-24';
            margin = 'my-36';
            break;
    }

    return (
        <motion.div
            className={`hiddenw-1 ${height} ${margin} opacity-0`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        >
        </motion.div>
    );
}
