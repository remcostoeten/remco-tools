'use client';
import { useEffect, useState } from 'react';

const ScrollBorder: React.FC = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.scrollY;
            const heightPercentage = (scrollPosition / totalHeight) * 100;

            setScrollHeight(heightPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <div id="scrollBorder" style={{ height: `${scrollHeight}%`, position: 'absolute', right: ' 0px', zIndex: '999', background: 'linear-gradient(90deg, #fbc340, #f15a29 34.37%, #f291c6 66.67%, #27aae1)', animation: ' gradienText 5s ease infinite', width: '10px' }}></div>;
};

export default ScrollBorder;
