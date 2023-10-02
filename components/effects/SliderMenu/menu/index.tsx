'use client';
import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../AnimationHelpers';
import styles from './style.module.scss';
import Anchor from './Anchor';
import { useState } from 'react';
import { DiscordIcon, WhatsApp } from '@/components/core/DiscordIcon';
import Link from 'next/link';
import Router, { useRouter } from 'next/navigation';

type MenuItem = {
  title: string;
  description: string;
  images: string[];
}

const menu: MenuItem[] = [
  {
    title: "About me",
    description: "Get to know me Get to know me Get to know me ",
    images: ['projects1.jpg', 'projects2.jpg']
  },
  {
    title: "Projects",
    description: "Productivity tools and experiments",
    images: ['agence1.jpg', 'agence2.jpg']
  },
  {
    title: "Miscellaneous",
    description: "Just some random stuff",
    images: ['contact1.jpg', 'contact2.jpg']
  },

  {
    title: "Contact",
    description: "To Send a FAX",
    images: ['contact1.jpg', 'contact2.jpg']
  }
]

type Props = {
  closeMenu: () => void;
}


export default function SliderMenu({ closeMenu }: Props) {
  const router = useRouter();

  const close = () => {
    router.refresh
  }

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

      <div className={styles.header}>
        <motion.svg
          variants={slideLeft}
          {...mountAnim}
          onClick={() => { closeMenu() }}
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </motion.svg>
      </div>

      <div className={styles.body}>
        {
          menu.map((el, index) => {
            return <Anchor data={el} index={index} key={index} />
          })
        }
      </div>

      <motion.div
        variants={opacity}
        {...mountAnim}
        custom={0.5}
        className={styles.footer}>
        <Link href="https://app.discord.com/@yowremco" onClick={close} target="_blank"><DiscordIcon />
        </Link>
        <a href="https://wa.me/31636590707">

          <WhatsApp />

        </a>
      </motion.div>

    </motion.div>
  )
}
