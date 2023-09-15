import styles from './style.module.scss';
import { translate } from '../../anim';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Link2, Link2Off } from 'lucide-react';
import { LineUtil } from 'leaflet';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    <motion.span>
                        With{' '}
                        <motion.span
                            whileHover={{ scale: 1.15 }}
                            className='heart'
                        >
                            ❤️
                        </motion.span>
                        : from the Netherlands.
                    </motion.span>
                </motion.li>
            </ul>

            <ul>
                <motion.li
                    whileHover={{ scale: 1.06 }}
                    custom={[0.3, 0]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    <span>
                        Code I write <i>for</i> fun on:{' '}
                        <Link
                            className='text-xl font-semibold text-fuchsia-300'
                            href='https://github.com/remcostoeten'
                        >
                            Github
                        </Link>
                    </span>
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    <span>
                        Code I write for work on:{' '}
                        <Link
                            className='text-xl font-semibold text-fuchsia-300'
                            href='https://gitlab.com/remcostoeten'
                        >
                            Gitlab
                        </Link>
                    </span>
                </motion.li>
            </ul>

            <ul>
                <motion.li
                    whileHover={{ scale: 1.06 }}
                    custom={[0.3, 0]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    <span>
                    Personal blog 
                        <Link
                            className='text-xl font-semibold text-fuchsia-300'
                            href='https://snippets.remcostoeten.com'
                        >
                            / Docs & snippets
                        </Link>
                    </span>
                </motion.li>
                <motion.li
                    custom={[0.3, 0]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                >
                    <span>
        Connect on {' '}
                        <Link
                            className='text-xl font-semibold text-fuchsia-300'
                            href='https://linkedin.com/remco.stoeten'
                        >
                            LinkedIn
                        </Link>
                    </span>
                </motion.li>
            </ul>
        </div>
    );
}
