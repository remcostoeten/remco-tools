'use client';
import { useEffect , useRef } from 'react';
import styles from '../../styles/module/sprinkle.module.scss';

type SprinkleProps = {
    t1?: string;
    t2?: string;
    t3?: string;
};

export default function Sprinkle({ t1, t2, t3 }: SprinkleProps) {
    const starRef = useRef(null);
    const starTwoRef = useRef(null);
    const starThreeRef = useRef(null);

    useEffect(() => {
        // Function to generate a random value for --star-left and --star-top
        const randomizePosition = (element) => {
            const randomTop = Math.random() * 50; // Adjust the range if needed
            const randomLeft = Math.random() * 50; // Adjust the range if needed

            element.style.setProperty('--star-top', `${randomTop}%`);
            element.style.setProperty('--star-left', `${randomLeft}%`);
        };

        // Event listener for animation iteration
        const handleAnimationIteration = (e) => {
            randomizePosition(e.target);
        };

        // Attach the event listener with a delay for each star
        starRef.current?.addEventListener('animationiteration', handleAnimationIteration);
        starRef.current?.style.setProperty('animation-delay', '0s');
        starTwoRef.current?.addEventListener('animationiteration', handleAnimationIteration);
        starTwoRef.current?.style.setProperty('animation-delay', '0.2s');
        starThreeRef.current?.addEventListener('animationiteration', handleAnimationIteration);
        starThreeRef.current?.style.setProperty('animation-delay', '0.4s');

        // Cleanup function to remove the event listeners
        return () => {
            starRef.current?.removeEventListener('animationiteration', handleAnimationIteration);
            starTwoRef.current?.removeEventListener('animationiteration', handleAnimationIteration);
            starThreeRef.current?.removeEventListener('animationiteration', handleAnimationIteration);
        };
    }, []);

    return (
        <h1 className={styles.heading}>
            {t1}
            <span className={styles.magic}>
                <span className={styles['magic-star']} ref={starRef}>
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className={styles['magic-star']} ref={starTwoRef}>
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className={styles['magic-star']} ref={starThreeRef}>
                    <svg viewBox="0 0 512 512">
                        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                    </svg>
                </span>
                <span className={styles['magic-text']}>{t2}</span>
            </span>
            {t3}
        </h1>
    );
}