'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './header/nav';
import RemcoLogoIcon from '../../components/icons/remcostoeten-logo-icon';

export default function FancyHeader() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div   onClick={() => {
            setIsActive(!isActive);
        }} className={`${styles.header} ${isActive ? 'is-open' : 'is-closed'}`}>
            <div className={styles.bar}>
            <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.el}
                    // <div className={`menu__item--doner ${isActive ? 'open' : 'closed'}`} tabIndex={2}>

                >
                <Link href="/">
                    <RemcoLogoIcon />
                </Link>
                </div>

                <motion.div variants={opacity} animate={!isActive ? 'open' : 'closed'} className={styles.shopContainer}>
                    <p className={styles.shop}>Shop</p>
                    <div className={styles.el}></div>
                </motion.div>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.el}
                    // <div className={`menu__item--doner ${isActive ? 'open' : 'closed'}`} tabIndex={2}>

                >
                 
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? 'open' : 'closed'} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </div>
    );
}
