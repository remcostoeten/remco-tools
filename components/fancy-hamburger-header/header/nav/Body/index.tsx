'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';
import { useSelectedLink } from '@/context/SelectedLinkContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface BodyProps {
    links: { title: string; href: string }[];
}

interface SelectedLinkContextValue {
    selectedLink: { isActive: boolean; index: number };
    setSelectedLink: React.Dispatch<
        React.SetStateAction<{ isActive: boolean; index: number }>
    >;
}

function Body({ links }: BodyProps) {
    const { selectedLink, setSelectedLink } =
        useSelectedLink() as SelectedLinkContextValue;
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            // Close the menu on route change
            closeMenuOnClick();
        };

        // Listen to the popstate event, which is triggered on history changes
        window.addEventListener('popstate', handleRouteChange);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };                 
    }, []);

    const closeMenuOnClick = () => {
        setSelectedLink({ isActive: false, index: selectedLink.index });
    };

    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split('').forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    key={char + i}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <Link key={`l_${index}`} href={href}>
                        <motion.p
                            className='showAlternativeCursor text-2xl font-medium'
                            onMouseOver={() => {
                                setSelectedLink({ isActive: true, index });
                            }}
                            onMouseLeave={() => {
                                setSelectedLink({ isActive: false, index });
                            }}
                            onClick={closeMenuOnClick}
                            variants={blur}
                            animate={
                                selectedLink.isActive &&
                                selectedLink.index !== index
                                    ? 'open'
                                    : 'closed'
                            }
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
}

export default Body;
