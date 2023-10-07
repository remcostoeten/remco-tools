'use client';


import React, { useState, useEffect } from 'react';
import { ReadMore } from '../core/buttons/Buttons';

const easingStyles: Record<string, string> = {
    '--ease-in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    '--ease-out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    '--ease-in-out-sine': 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    '--ease-in-quad': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    '--ease-out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    '--ease-in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    '--ease-in-cubic': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    '--ease-out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    '--ease-in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    '--ease-in-quart': 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    '--ease-out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    '--ease-in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
    '--ease-in-quint': 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    '--ease-out-quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
    '--ease-in-out-quint': 'cubic-bezier(0.86, 0, 0.07, 1)',
    '--ease-in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    '--ease-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    '--ease-in-out-expo': 'cubic-bezier(1, 0, 0, 1)',
    '--ease-in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    '--ease-out-circ': 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    '--ease-in-out-circ': 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    '--ease-out-bounce': 'cubic-bezier(0.22, 1.45, 0.36, 1)',
};

const handleCopy = (value: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
};


const EasingExample: React.FC = () => {
    const [animationActive, setAnimationActive] = useState(false);

    return (
        <div className="p[40px] bg-[#0E1112] p-4 text-cream easing-demo">
            <ReadMore onClick={() => setAnimationActive(!animationActive)}>
                {animationActive ? 'Stop Animation' : 'Start Animation'}
            </ReadMore>
            <div className="flex flex-col w-max animation-container">
                {Object.entries(easingStyles).map(([propertyName, easingValue]) => (
                    <div className='flex gap-1'><span className='text-underline p-4' onClick={() => handleCopy(easingValue)}>Copy</span><div
                        key={propertyName}
                        className="animated-element bg-black shadow-white/20 shadow-sm"
                        style={{
                            animationTimingFunction: easingValue,
                            animationPlayState: animationActive ? 'running' : 'paused',
                        }}
                    >
                        {propertyName.replace('--', '')}
                    </div></div>
                ))}
            </div>
        </div>
    );
};

export default EasingExample;
