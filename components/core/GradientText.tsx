import React from 'react';
import useInView from '@/hooks/useInView'; 

interface TProps {
    t: string;
    italic?: boolean;
    className?: string;
}

const T: React.FC<TProps> = ({ t, className, italic = false }) => {
    const [ref, inView] = useInView({
        threshold: 0.1, // adjust this value as you see fit
        freezeOnceVisible: true,
    });

    return (
        <span ref={ref} className={`gradient-text ${inView ? 'animate' : ''} ${italic ? 'libre-italic' : ''} ${className}`}>
            {t}
        </span>
    );
};

export default T;