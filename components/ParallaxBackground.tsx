'use client';
import { useEffect } from 'react';

const GlowEffect: React.FC = () => {
    useEffect(() => {
        const blob = document.getElementById('blob');
        const parallaxContainer = document.getElementById('parallax');

        const handlePointerMove = (event: PointerEvent) => {
            const { clientX, clientY } = event;

            blob?.animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 3000, fill: 'forwards' }
            );
        };

        window.onpointermove = handlePointerMove;

        return () => {
            // Cleanup function to remove the event listener when the component unmounts
            window.onpointermove = null;
        };
    }, []);

    return (
        <>
            <div className='hidden md:block'>
                <div id='blob'></div>
                <div id='blur'></div>
            </div>
            <div className='md:hidden' id="parallax" style={{ position: 'fixed', top: '0', left: '0' }}>
                <div className='bg-[#1a1a1a] top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25r1em] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1a1a1a]'></div>
                <div className='bg-[#dbd7fb] left-[-35rem] h-[31.25rem] -bottom-[100px] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#292736]'></div>
            </div>
        </>
    );
};

export default GlowEffect;
