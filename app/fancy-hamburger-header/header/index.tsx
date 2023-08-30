import React, { useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import HamburgerRing from '../../../components/icons/HamburgerRing';
import RemcoLogoIcon from '@/components/icons/remcostoeten-logo-icon';
export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
      <div className={styles.header}>
          <div id="hamburger" className={`hamburglar ${open ? 'is-open' : 'is-closed'}`}>
    <div className="burger-icon">
      <div className="burger-container">
        <span className="burger-bun-top"></span>
        <span className="burger-filling"></span>
        <span className="burger-bun-bot"></span>
      </div>
    </div>

    {/* svg ring container */}
<HamburgerRing/>
    <div className="path-burger">
      <div className="animate-path">
        <div className="path-rotation"></div>
      </div>
    </div>
  </div>
          <div className={styles.bar}>
              <Link href="/"><RemcoLogoIcon/>
              <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                  <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                  <div className={styles.label}>
                      <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>

:p

                      </motion.p>
                      <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                  </div>
              </div>
              <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                  <p className={styles.shop}>Shop</p>
                  <div className={styles.el}>
                    <HamburgerRing/>
                  </div>
              </motion.div>
          </div>
          <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
          <AnimatePresence mode="wait">
              {isActive && <Nav/>}
          </AnimatePresence>
      </div>
  )
}
