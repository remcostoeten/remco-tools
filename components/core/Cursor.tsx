'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Icons } from '../icons';

export default function Trailer() {
    const trailer = useRef(null);
    const customCursor = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const hide = e.target.closest('.showAlternativeCursor');

            if (hide) {
                setHovered(true);
                trailer.current.style.opacity = 0;
                customCursor.current.style.opacity = 1;

                customCursor.current.style.left = `${e.clientX}px`;
                customCursor.current.style.top = `${e.clientY}px`;
            } else {
                setHovered(false);
                trailer.current.style.opacity = 1;
                customCursor.current.style.opacity = 0;
            }

            const interactable = e.target.closest('.grow');
            const interacting = interactable !== null;

            animateTrailer(e, interacting);
            trailer.current.dataset.type = interacting
                ? interactable.dataset.type
                : '';
        };

        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.current.offsetWidth / 2,
                y = e.clientY - trailer.current.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${
                    interacting ? 8 : 1
                })`,
            };

            trailer.current.animate(keyframes, {
                duration: 800,
                fill: 'forwards',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='hidden md:block z-[999]'>
            <div ref={trailer} id='trailer'>
                {/* Your trailer content */}
            </div>
            <div
                className='z-[999]'
                ref={customCursor}
                id='custom-cursor'
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: 0,
                    left: 0,
                }}
            >
                <svg
                    className='z-[999]'
                    width='28'
                    height='35'
                    viewBox='0 0 48 55'
                    fill='none'
                    style={{zIndex: 9999}}
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g filter='url(#filter0_d_2_682)'>
                        <path
                            d='M13.5 45L6 6L39 25.5L22.5 30L13.5 45Z'
                            fill='#EE46D3'
                        />
                        <path
                            d='M6.76308 4.70864L3.89868 3.01601L4.527 6.28328L12.027 45.2832L12.7679 49.1358L14.7863 45.7716L23.4762 31.2885L39.3948 26.9472L42.8178 26.0136L39.7632 24.2085L6.76308 4.70864Z'
                            stroke='white'
                            stroke-linecap='square'
                        />
                    </g>
                    <defs>
                        <filter
                            id='filter0_d_2_682'
                            x='0.198242'
                            y='0.0213318'
                            width='46.8921'
                            height='54.4931'
                            filterUnits='userSpaceOnUse'
                            color-interpolation-filters='sRGB'
                        >
                            <feFlood
                                flood-opacity='0'
                                result='BackgroundImageFix'
                            />
                            <feColorMatrix
                                in='SourceAlpha'
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                result='hardAlpha'
                            />
                            <feOffset dy='1' />
                            <feGaussianBlur stdDeviation='1.5' />
                            <feColorMatrix
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0'
                            />
                            <feBlend
                                mode='normal'
                                in2='BackgroundImageFix'
                                result='effect1_dropShadow_2_682'
                            />
                            <feBlend
                                mode='normal'
                                in='SourceGraphic'
                                in2='effect1_dropShadow_2_682'
                                result='shape'
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
