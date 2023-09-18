import React from 'react';
import Link from 'next/link';
import Particles from '@c/Particles';
/**
 * Props for the ArrowButton component.
 * @typedef {Object} ButtonProps
 * @property {() => void} [onClick] - Function to be called on button click.
 * @property {string} [customClassName] - Custom CSS class name for the button.
 * @property {boolean} [showLeftArrow=true] - Whether to show the left arrow.
 * @property {boolean} [showRightArrow=true] - Whether to show the right arrow.
 * @property {string} [hoverText] - Text to display on hover.
 * @property {React.ReactNode} children - The content inside the button.
 */

/**
 * ArrowButton component for displaying an animated button with arrows.
 * @param {ButtonProps} props - The component props.
 */
const ArrowButton = ({
    onClick,
    customClassName,
    showLeftArrow = true,
    showRightArrow = true,
    hoverText,
    children,
}) => {
    return (
        <button className={`btn animbtn ${customClassName}`} onClick={onClick}>
            <Link href='' className='btn--animated btn__intro animated-arrow'>
                {showLeftArrow && (
                    <span className='the-arrow -left'>
                        <span className='shaft'></span>
                    </span>
                )}
                <span className='main'>
                    {hoverText && (
                        <span className='btn__hover-text'>{hoverText}</span>
                    )}
                    <span className='absolute text particles'>{children}</span>
                    {showRightArrow && (
                        <span className='the-arrow -right'>
                            <span className='shaft'></span>
                        </span>
                    )}
                </span>
                <Particles particleCount={3}/>
            </Link>
        </button>
    );
};

export default ArrowButton;
