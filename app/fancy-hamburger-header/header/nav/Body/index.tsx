import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../anim';

interface BodyProps {
    links: { title: string; href: string }[];
    selectedLink: { isActive: boolean; index: number };
    setSelectedLink: React.Dispatch<React.SetStateAction<{ isActive: boolean; index: number }>>;
}

function Body({ links, selectedLink = { isActive: false, index: -1 }, setSelectedLink }: BodyProps) {
    const setIsActive = () => {
        setSelectedLink({ isActive: !selectedLink.isActive, index: selectedLink.index });
    };

    const closeMenuOnClick = () => {
        setSelectedLink({ isActive: false, index: selectedLink.index });
    };

    const getChars = (word: string) => {
        let chars: JSX.Element[] = [];
        word.split('').forEach((char, i) => {
            chars.push(
                <motion.span custom={[i * 0.02, (word.length - i) * 0.01]} variants={translate} initial="initial" animate="enter" exit="exit" key={char + i}>
                    {char}
                </motion.span>,
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
                            onMouseOver={() => {
                                setSelectedLink({ isActive: true, index });
                            }}
                            className="showAlternativeCursor"
                            onMouseLeave={() => {
                                setSelectedLink({ isActive: false, index });
                            }}
                            onClick={closeMenuOnClick}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
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
