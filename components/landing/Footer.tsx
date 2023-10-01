'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import MetaData from '@/config/metadata';
import AnchorIcon from '../icons/Anchor';
import { motion } from 'framer-motion';

type FooterProps = {
    linkedIn?: string;
    github?: string;
    gitlab?: string;
};

export default function Footer(props: FooterProps): JSX.Element {
    const hoverContainerRef = useRef(null);
    const [hoveredItem, setHoveredItem] = useState('');
    const footerItems = {
        linkedin: MetaData.linkedinProfile,
        github: MetaData.githubProfile,
        gitlab: MetaData.gitlabProfile,

    };

    useEffect(() => {
        const handleScroll = () => {
            const container = hoverContainerRef.current;
            if (container) {
                const { scrollTop, scrollHeight, clientHeight } = container;
                const isNearBottom = scrollTop + clientHeight > scrollHeight - 50; // 50 is a threshold, can be adjusted

                if (isNearBottom) {
                    container.scrollTop = 0; // reset scroll to the top
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
        for (let i = 0; i < 60; i++) { // Increase count to make it seem long
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
                    <Link
                        href={footerItems[key]}
                        onMouseEnter={() => setHoveredItem(key)}
                        onMouseLeave={() => setHoveredItem('')}
                    >
                        <span className={`footer__item footer__item--${key}`}>
                            <span className="flex justify-between items-center">
                                <span className="anchor regular grow link-props">{key}</span>
                                <span className="grow">
                                    <AnchorIcon />
                                </span>
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