
import React from 'react';
import Link from 'next/link';
import Particles from '@c/Particles'; // You should import this module if it exists

/**
 * Props for the RoundedButton component.
 * @typedef {Object} RoundedButtonProps
 * @property {() => void} [onClick] - Function to be called on button click.
 * @property {string} [customClassName] - Custom CSS class name for the button.
 * @property {boolean} [showLeftArrow=true] - Whether to show the left arrow.
 * @property {boolean} [showRightArrow=true] - Whether to show the right arrow.
 * @property {string} [hoverText] - Text to display on hover.
 * @property {string} text - The content inside the button.
 */

/**
 * RoundedButton component for displaying an animated button with arrows.
 * @param {RoundedButtonProps} props - The component props.
 */

type RoundedButtonProps = {
    onClick?: any;
    customClassName?: string;
    showLeftArrow?: boolean;
    showRightArrow?: boolean;
    hoverText?: string;
    text: string;
    borderRadius?: 'rounded' | 'semi-rounded' | 'none';
};

const Button = ({
    onClick,
    customClassName,
    showLeftArrow = true,
    showRightArrow = true,
    hoverText,
    text,
    borderRadius = 'none'
}: RoundedButtonProps) => {
    return (
        <button
            className={`cta animbtn ${customClassName}
                            ${borderRadius === 'rounded' ? 'cta--rounded' : ''}
                            ${borderRadius === 'semi-rounded' ? 'cta--semi-rounded' : ''}`}
            onClick={onClick}
        >
            <Link href="#contact" className="btn--animated btn__intro animated-arrow">
                <span className="main">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                    <span className="text">{text}</span>
                </span>
                <Particles particleCount={2} />
            </Link>
        </button>
    );
};


const ReadMore = ({ onClick, customClassName, showLeftArrow = true, showRightArrow = true, hoverText, text }: RoundedButtonProps) => {
    return (
        <button className={`cta cta--semi-rounded animbtn ${customClassName}`} onClick={onClick}>
            <span className="btn--animated btn__intro animated-arrow">
                <span className="main">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                    <span className="text">{text}</span>
                </span>
                <Particles particleCount={2} /> {/* Assuming you have the Particles component */}
            </span>
        </button>
    );
};

/**
 * Another button component example
 */
const RegularButton = ({ props }) => {
    return (
        <button onClick={props} className="button btn--regular">
            <Link href="#contact">
                <span className="button__text">Contact </span>
                <span className="button__hover-text">Contact me here</span>
                <div className="particles"></div>
            </Link>
        </button>
    );
};

export { Button, ReadMore, RegularButton };
