"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./header/nav";

export default function FancyHeader() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsActive(prev => !prev);
  };

  return (
    <>
      <div
        className={`${styles.header} ${isActive ? "is-open" : "is-closed"}`}
      >
        <div className={styles.bar}>
          <motion.div
            variants={opacity}
            animate={!isActive ? "open" : "closed"}
            className={styles.shopContainer}
          >
            <p className={styles.shop}>Shop</p>
            <div className={styles.el}></div>
          </motion.div>

          {/* Anchor style toggle */}
          <a 
            href="#" 
            className={`showAlternativeCursor btn--menu ${isActive ? 'actived' : ''}`} 
            id="btn-menu" 
            onClick={handleToggle}
          >
            <span className="btn-mobile--menu-icon">Menu</span>
          </a>

        </div>
        <motion.div
          variants={background}
          initial="initial"
          animate={isActive ? "open" : "closed"}
          className={styles.background}
        ></motion.div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
