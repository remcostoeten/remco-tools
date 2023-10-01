'use client';
import { useEffect, useRef } from 'react';

export default function ParallaxEffect() {
    const parallaxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const parallaxContainer = parallaxRef.current;

        const handleScroll = () => {
            if (parallaxContainer) {
                const scrollY = window.scrollY;
                const parallaxOffset = scrollY * 0.5; // Adjust the parallax effect speed as needed
                parallaxContainer.style.transform = `translateY(${parallaxOffset}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            // Cleanup function to remove the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="md:top:[-100px] -z-10" id="parallax" style={{ position: 'fixed', top: '0', left: '0' }} ref={parallaxRef}>
            <div className="top-[-6rem ] dark:bg-[#1e1e1e ] right-[11rem] h-[31.25rem] w-[31.25r1em] rounded-full bg-[#1a1a1a] blur-[15rem] sm:w-[68.75rem]"></div>
            <div className="-bottom-[100px] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[15rem] dark:bg-[#292736] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        </div>
    );
}
