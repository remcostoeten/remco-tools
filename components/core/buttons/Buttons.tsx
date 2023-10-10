
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
// import Particles from '../../Particles';
/**
 * Props for the RoundedButton component.
type RoundedButtonProps = {
    onClick?: () => void;
    customClassName?: string;
    showLeftArrow?: boolean;
    showRightArrow?: boolean;
    hoverText?: string;
    children?: any;
    borderRadius?: 'rounded' | 'semi-rounded' | 'none';
};

const Button = ({
    onClick,
    customClassName,
    hoverText,
    children,
    borderRadius = 'none'
}: RoundedButtonProps) => {
    return (
        <button
            className={`cta animbtn ${customClassName}
                            ${borderRadius === 'rounded' ? 'cta--rounded' : ''}
                            ${borderRadius === 'semi-rounded' ? 'cta--semi-rounded' : ''}`}
            onClick={onClick}
        >
            <Link href="" className="btn--animated btn__intro animated-arrow">
                <span className="main">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                </span>
            </Link>
        </button>
    );
};

const ReadMore = ({
    onClick,
    children,
    customClassName,
    hoverText,
    text
}: RoundedButtonProps) => {
    const [showAll, setShowAll] = useState(false);
    return (
        <button
            className={`cta cta--semi-rounded animbtn ${customClassName}`}
            onClick={() => setShowAll(true)}
        >
            <span className="btn--animated btn__intro animated-arrow">
                <span className="main text-center">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                    {children}
                    {showAll && text}
                </span>
                import React, { useState } from 'react';
                import Link from 'next/link';
                import { motion } from 'framer-motion';

                /**
                 * Props for the RoundedButton component.
                 */
type RoundedButtonProps = {
    onClick?: () => void;
    customClassName?: string;
    showLeftArrow?: boolean;
    showRightArrow?: boolean;
    hoverText?: string;
    children?: any;
    borderRadius?: 'rounded' | 'semi-rounded' | 'none';
};

const Button = ({
    onClick,
    customClassName,
    hoverText,
    children,
    borderRadius = 'none'
}: RoundedButtonProps) => {
    return (
        <button
            className={`cta animbtn ${customClassName}
                                            ${borderRadius === 'rounded' ? 'cta--rounded' : ''}
                                            ${borderRadius === 'semi-rounded' ? 'cta--semi-rounded' : ''}`}
            onClick={onClick}
        >
            <Link href="" className="btn--animated btn__intro animated-arrow">
                <span className="main">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                </span>
            </Link>
        </button>
    );
};

/**
 * Another button component example
 */
const RegularButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick} className="button btn--regular">
            <Link href="#contact">
                <span className="button__text">Contact </span>
                <span className="button__hover-text">Contact me here</span>
                <div className="particles"></div>
            </Link>
        </button>
    );
};

const AltButton = ({
    onClick,
    children
}: {
    onClick?: () => void;
    children?: React.ReactNode;
}) => {
    return (
        <motion.button
            onClick={onClick} className="text-[#B6B9B7] px-3 py-2 text-xs bg-dash-alt bg-dash-alt-border flex rounded-lg w-max justify-end border"
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
        >
            {children}
        </motion.button>
    );
};


export { Button, AltButton, RegularButton };
