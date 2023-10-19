'use client'
import React, { useState, useEffect } from 'react';
import BezierEasing from 'bezier-easing';

interface CountingNumberProps {
    start: number;
    end: number | string;
    duration: number;
    className?: string;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ start, end, duration, className }) => {
    const [currentNumber, setCurrentNumber] = useState(start);

    const easing = BezierEasing(0.985, 0.9, 0.9, 1);
    const totalSteps = duration * 60;
    let currentStep = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            currentStep += 1;
            const t = currentStep / totalSteps;
            const easedT = easing(t);

            const nextValue = start + (Number(end) - start) * easedT;

            if (currentStep >= totalSteps) {
                clearInterval(interval);
                setCurrentNumber(Number(end));
            } else {
                setCurrentNumber(nextValue);
            }
        }, (duration * 1000) / totalSteps);

        return () => {
            clearInterval(interval);
        };
    }, [start, end, duration]);

    return <span className={className}>{Math.round(currentNumber)}</span>;
};

export default CountingNumber;
