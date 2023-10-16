'use client';
import { useState, useEffect } from 'react';

type ArrowProps = {
    target: string;
};

export default function ArrowDown({ target }: ArrowProps) {
    const [showIndicator, setShowIndicator] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 150) {
                setShowIndicator(true);
            } else if (scrollPos < 150) {
                setShowIndicator(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        showIndicator && (
            <a title="Arrow to scroll down" aria-label="arrow to scroll down" href={target} className="scroll-down z-max">
                <span className="scroll-down__animate"></span>
            </a>
        )
    );
}
