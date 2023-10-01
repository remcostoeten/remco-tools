'use client';
import React, { useState } from 'react';
import useMousePosition from '@/hooks/useMousePosititon';

function LandingPage() {
    const [showExample1, setShowExample1] = useState(false);
    const [showExample2, setShowExample2] = useState(false);
    const [showExample3, setShowExample3] = useState(false);
    const { x, y } = useMousePosition();

    // State for CTA button position
    const [ctaButtonPosition, setCtaButtonPosition] = useState({ x: 0, y: 0 });

    // Calculate the distance between mouse pointer and CTA button
    const distanceX = x - ctaButtonPosition.x;
    const distanceY = y - ctaButtonPosition.y;

    // Update CTA button position
    const updateCtaButtonPosition = () => {
        setCtaButtonPosition({ x, y });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <h1 className="mb-4 text-4xl font-bold">Landing Page 1</h1>
            <p className="text-lg">
                Mouse position: {x}, {y}
            </p>
            <button className="mt-4" onClick={() => setShowExample1(!showExample1)}>
                Toggle Example 1
            </button>
            {showExample1 && (
                <div className="p-4 mt-4 border border-gray-300">
                    <h2 className="mb-2 text-xl font-bold">Example 1</h2>
                    <p>This is example 1 content.</p>
                </div>
            )}
            <button className="mt-4" onClick={() => setShowExample2(!showExample2)}>
                Toggle Example 2
            </button>
            {showExample2 && (
                <div className="p-4 mt-4 border border-gray-300">
                    <h2 className="mb-2 text-xl font-bold">Example 2</h2>
                    <p>This is example 2 content.</p>
                </div>
            )}
            <button className="mt-4" onClick={() => setShowExample3(!showExample3)}>
                Toggle Example 3
            </button>
            {showExample3 && (
                <div className="p-4 mt-4 border border-gray-300">
                    <h2 className="mb-2 text-xl font-bold">About Me</h2>
                    <p>Hi, I'm [Your Name], and this is my About Me page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
                    <button
                        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                        style={{
                            transform: `translate(${distanceX}px, ${distanceY}px)`,
                            transition: 'transform 0.2s',
                        }}
                    >
                        Contact Me
                    </button>
                </div>
            )}
        </div>
    );
}

export default LandingPage;
