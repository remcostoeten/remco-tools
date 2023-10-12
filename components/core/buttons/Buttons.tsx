
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type RoundedButtonProps = {
    onClick?: () => void;
    customClassName?: string;
    showLeftArrow?: boolean;
    showRightArrow?: boolean;
    hoverText?: string;
    text?: string;
    children?: any;
    borderRadius?: 'rounded' | 'semi-rounded' | 'none';
};


const ReadMore = ({ onClick, children, customClassName, showLeftArrow = true, showRightArrow = true, hoverText, text }: RoundedButtonProps) => {
    return (
        <button className={`cta cta--semi-rounded animbtn ${customClassName}`} onClick={onClick}>
            <span className="btn--animated btn__intro animated-arrow">
                <span className="main text-center">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                    {children}{text}
                </span>
            </span>
        </button>
    );
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


export { Button, AltButton,  ReadMore };
