import React from 'react';
import Link from 'next/link';
import Particles from '@c/Particles';
import { MenuArrowProps } from '@radix-ui/react-dropdown-menu';
/**
 * Props for the RoundedButton component.
 * @typedef {Object} ButtonProps
 * @property {() => void} [onClick] - Function to be called on button click.
 * @property {string} [customClassName] - Custom CSS class name for the button.
 * @property {boolean} [showLeftArrow=true] - Whether to show the left arrow.
 * @property {boolean} [showRightArrow=true] - Whether to show the right arrow.
 * @property {string} [hoverText] - Text to display on hover.
 * @property {React.ReactNode} children - The content inside the button.
 */

/**
 * RoundedButton component for displaying an animated button with arrows.
 * @param {ButtonProps} props - The component props.
 */

type RoundedButtonProps = {
    onClick?: () => void;
    customClassName?: string;
    showLeftArrow?: boolean;
    showRightArrow?: boolean;
    hoverText?: string;
    text: string;
};

const RoundedButton = ({ onClick, customClassName, showLeftArrow = true, showRightArrow = true, hoverText, text }: RoundedButtonProps) => {
    return (
        <button className={`cta animbtn ${customClassName}`} onClick={onClick}>
            <Link href="" className="btn--animated btn__intro animated-arrow">
                <span className="main">
                    {hoverText && <span className="btn__hover-text">{hoverText}</span>}
                    <span className="text">{text}</span>
                </span>{' '}
                <Particles particleCount={} />
            </Link>
        </button>
    );
};

export default RoundedButton;
