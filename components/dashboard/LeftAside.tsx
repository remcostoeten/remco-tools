'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoIcon from '../core/icons/remcostoeten-logo-icon';
import { AltButtonTextOutside } from '../core/buttons/Buttons';
import { LeftAsideProps } from '@/utils/types';
import { DashmenuMap, DashmenuMapSub, DashmenuMapSubSub } from '@/config/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import { linkVariants, leftSlideIn } from '@/utils/animations';

export function LeftAside({ }: LeftAsideProps) {
  const currentRoute = usePathname().toLowerCase();
  return (
    <motion.div className='flex flex-col justify-between h-screen'>
      <motion.div className="text-cream mt-[50px] mb-[40px] flex flex-col" initial="hidden" animate="visible">
        <div className="logo-section">
          <LogoIcon fill="#92C52A" />
        </div>
        {DashmenuMap.map((section, index) => (
          <div key={index} className="sub">
            <ul className="space-y-1 sub grandparent">
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <motion.li key={item.text} variants={linkVariants} custom={index}>
                      <AltButtonTextOutside icon={item.icon}>
                        <Link href={`dashboard/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
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
          <div key={index} className="sub ">
            <ul className="space-y-1 sub-sub parent">
              <h2 className="title pl-[10px]">Settings</h2>
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <motion.li key={item.text} variants={linkVariants} custom={index}>
                      <Link href={`dashboard/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
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
          <div key={index} className="sub ">
            <ul className="space-y-1 sub-sub child ">
              <h2 className="title pl-[10px]">Settings</h2>
              {section.items.map((item: { text?: string; icon?: React.ReactNode; title?: string }, index: number) => {
                if (item.text) {
                  return (
                    <motion.li key={item.text}  custom={index}>
                      <Link href={`dashboard/${item.text.toLowerCase()}`} className={currentRoute === `/${item.text.toLowerCase()}`
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
      <motion.div variants={leftSlideIn} className='footer flex flex-col justify-end gap-[24px]'>
        <div className='flex gap flex-col'>
          <h3>Got a question?</h3>
          <p className='text-xs leading-5'>Or just want to share some feedback? I'd be happy to hear. </p></div>
        <motion.button variants={leftSlideIn} className='cta'>
          <Link className='relative' href='#'>
            <Pencil color='#8BB928' />
            <span>Contact</span></Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
