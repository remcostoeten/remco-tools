import { Scale } from 'lucide-react';
import React from 'react';

/**
 * @typedef {Object} ParticlesProps
 * @description Props for the Particles component.
 * @property {number} [particleCount] - Number of divs to be rendered.
 */
interface ParticlesProps {
    particleCount: number;
}

/**
 * @function Particles
 * @description A functional component that generates a specified number of particles.
 * Each particle is a div with random scale, rotation, skew, and perspective.
 * @param {ParticlesProps} {particleCount} - The number of particles to generate.
 * @returns {JSX.Element} A div containing all the generated particles.
 */
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