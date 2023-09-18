import { Scale } from 'lucide-react';
import React from 'react';

/**
 * Props for the Particles component.
 * @typedef {Object} ParticlesProps
 * @property {number} [particleCount] - Number of divs to be rendered.
 */
interface ParticlesProps {
    particleCount: number;
}

export default function Particles({particleCount}: ParticlesProps) {
    const particles = [];
    for(let i = 0; i < particleCount; i++) {
        let scale = Math.random() * (2 - 0.9) + 0.9;
        let rotate = Math.random() * 360;
        let skew = Math.random() * 20 - 10; // random skew between -10 and 10
        let perspective = Math.random() * 1000 + 500; // random perspective between 500 and 1500
        particles.push(<div style={{transform: `translateY(${i * 5}px) scale(${scale}) rotate(${rotate}deg) skew(${skew}deg) perspective(${perspective}px)`}} className='particles'></div>);
    }
    return (
        <div className={`particles-container particles-container-${particleCount}`}>
            {particles}
        </div>
    );
}