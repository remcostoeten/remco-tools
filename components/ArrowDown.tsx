'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ArrowDown(): JSX.Element {
    const [showIndicator, setShowIndicator] = useState<boolean>(true);
    let scrollPos: number;

    useEffect(() => {
        const handleScroll = () => {
            scrollPos = window.scrollY;
            if (scrollPos > 150) {
                setShowIndicator(false);
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
            <div>
                <span className='scroll-down'>
                    <Link href='#' className='scroll-down__animate'></Link>
                </span>
            </div>
        )
    );
}
