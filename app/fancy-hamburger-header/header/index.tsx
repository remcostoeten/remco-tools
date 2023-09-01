'use client';
import HamburgerRing from '@/components/icons/HamburgerRing';
import RemcoLogoIcon from '@/components/icons/remcostoeten-logo-icon';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import { useState } from 'react';
import { opacity } from './anim';
import styles from './style.module.scss';

interface NavProps {
    handleCloseMenu: () => void;
}

interface NavProps {
    handleCloseMenu: () => void;
}

export default function Nav(props: NavProps) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.header}>
            <div id="hamburger" className={`hamburglar ${!isActive ? 'is-open' : 'is-closed'}`}></div>
       
            <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`} />
                <div className={styles.label}>
                    <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>
                        {/* Content for first paragraph */}
                    </motion.p>
                    <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>
                        Close
                    </motion.p>
                </div>
            </div>
            <motion.div variants={opacity} animate={!isActive ? 'open' : 'closed'} className={styles.shopContainer}>
                <p className={styles.shop}>Shop</p>
                <div className={styles.el}>
                    <HamburgerRing />
                </div>
            </motion.div>
        </div>
    );
}
