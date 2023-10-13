'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoIcon from '../core/icons/remcostoeten-logo-icon';
import { AltButtonTextOutside } from '../core/buttons/Buttons';
import { LeftAsideProps } from '@/utils/types';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  initial: {
    opacity: 0,
    y: 202,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export function LeftAside({ }: LeftAsideProps) {
  const currentRoute = usePathname().toLowerCase();
  return (
    <motion.div className="text-cream mt-[132px]" variants={containerVariants} initial="hidden" animate="visible">
      <div className="logo-section">
        <LogoIcon fill="#92C52A" />
      </div>
      {DashmenuMap.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub">
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
              if (item.text) {
                return (
                  <motion.li key={item.text} variants={linkVariants} custom={index}>
                    <AltButtonTextOutside icon={item.icon}>
                      <Link href={`/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
                        ? "active"
                        : ""}>
                        {item.text}
                      </Link>
                    </AltButtonTextOutside>
                  </motion.li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      ))}

      {DashmenuMapSub.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub-sub">
            <h2 className="title pl-[20px]">Settings</h2>
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
              if (item.text) {
                return (
                  <motion.li key={item.text} variants={linkVariants} custom={index}>
                    <Link href={`/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
                      ? "active"
                      : ""}>
                      {item.text}
                    </Link>
                  </motion.li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      ))}
      {DashmenuMapSubSub.map((section, index) => (
        <div key={index} className="sub">
          <ul className="space-y-1 sub-sub">
            <h2 className="title pl-[20px]">Settings</h2>
            {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
              if (item.text) {
                return (
                  <motion.li key={item.text} variants={linkVariants} custom={index}>
                    <Link href={`/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
                      ? "active"
                      : ""}>
                      {item.text}
                    </Link>
                  </motion.li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      ))}
    </motion.div>
  );
}