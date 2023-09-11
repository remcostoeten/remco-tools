import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import { navigationRoutes } from '@/config/navigation-routes';
import { Badge } from '@/components/ui/badge';

export default function Index() {
    const [selectedLink, setSelectedLink] = useState({
        isActive: false,
        index: 0,
    });

    return (
        <motion.div
            variants={height}
            initial='initial'
            animate='enter'
            exit='exit'
            className='w-full absolute p-8 left-0 top-0 overflow-hidden black'
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body
                        links={navigationRoutes.links}
                        selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink}
                    />
                    <Footer />
                </div>
                {/* @ts-ignore */}
                {navigationRoutes.links[selectedLink.index]?.src ? (
                    <>
                        <Badge>
                            {navigationRoutes.links[
                                selectedLink.index
                            ].labels?.map((label, idx) => (
                                <span key={idx} className='label'>
                                    {label}
                                </span>
                            ))}
                        </Badge>
                    </>
                ) : null}
            </div>
        </motion.div>
    );
}
