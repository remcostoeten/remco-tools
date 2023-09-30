import styles from './style.module.scss'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { mountAnim, rotateX } from '../AnimationHelpers';

type AnchorProps = {
  data: {
    title: string;
    description: string;
    images: string[];
  };
  index: number;
};

export default function Anchor({ data, index }: AnchorProps) {
  const { title, description, images } = data;
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.set(outer.current, { top: '-100%' });
      gsap.set(inner.current, { top: '100%' });
    } else {
      gsap.set(outer.current, { top: '100%' });
      gsap.set(inner.current, { top: '-100%' });
    }
    gsap.to(outer.current, { top: '0%', duration: 0.3 });
    gsap.to(inner.current, { top: '0%', duration: 0.3 });
  };

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    if (e.clientY < bounds.top + bounds.height / 2) {
      gsap.to(outer.current, { top: '-100%', duration: 0.3 });
      gsap.to(inner.current, { top: '100%', duration: 0.3 });
    } else {
      gsap.to(outer.current, { top: '100%', duration: 0.3 });
      gsap.to(inner.current, { top: '-100%', duration: 0.3 });
    }
  };

  return (
    <motion.div
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      variants={rotateX}
      {...mountAnim}
      custom={index}
      className={styles.el}
    >
      <Link href="/">{title}</Link>
      <div ref={outer} className={styles.outer}>
        <div ref={inner} className={styles.inner}>
          {[...Array(2)].map((_, index) => {
            return (
              <div key={index} className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[0]}`} fill alt="image" />
                </div>
                <p>{description}</p>
                <div className={styles.imageContainer}>
                  <Image src={`/images/${images[1]}`} fill alt="image" />
                </div>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
