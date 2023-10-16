'use client';
import MetaData from '@/config/metadata';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AnchorIcon from '../icons/Anchor';
type FooterProps = {
    linkedIn?: string;
    github?: string;
    gitlab?: string;
    whatsapp?: string;
};

export default function Footer(props: FooterProps): JSX.Element {
    const hoverContainerRef = useRef(null);
    const [hoveredItem, setHoveredItem] = useState('');
    const footerItems = {
        linkedin: MetaData.linkedinProfile,
        github: MetaData.githubProfile,
        gitlab: MetaData.gitlabProfile,
        whatsapp: MetaData.whatsapp,
    };

    useEffect(() => {
        const handleScroll = () => {
            const container = hoverContainerRef.current;
            if (container) {
                const { scrollTop, scrollHeight, clientHeight } = container;
                const isNearBottom = scrollTop + clientHeight > scrollHeight - 50;

                if (isNearBottom) {
                    container.scrollTop = 0;
                }
            }
        };

        const container = hoverContainerRef.current;
        container && container.addEventListener('scroll', handleScroll);

        return () => {
            container && container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderHoverItems = (key: string) => {
        const items = [];
        for (let i = 0; i < 120; i++) {
            items.push(
                <span className="footer__inner-hover hover" key={i}>
                    <span className="anchor link-props pr-8">{key}</span>
                    <AnchorIcon />
                </span>
            );
        }
        return items;
    };

    return (
        <motion.div className="footer">
            {Object.keys(footerItems).map((key) => (
                <span className="footer__inner" key={key}>
                    <Link target='_blank'
                        href={footerItems[key]}
                        onMouseEnter={() => setHoveredItem(key)}
                        onMouseLeave={() => setHoveredItem('')}
                    >
                        <span className={`footer__item footer__item--${key}`}>
                            <span className="anchor regular grow link-props">{key}</span>
                            <span className="grow flex justify-end">
                                <AnchorIcon />
                            </span>
                            {hoveredItem === key && (
                                <div className="hover-wrapper absolute left-0" ref={hoverContainerRef} style={{ overflowY: 'auto', maxHeight: '200px' }}>
                                    {renderHoverItems(key)}
                                </div>

                            )}
                        </span>
                    </Link>
                </span>
            ))}
        </motion.div>
    );
}