'use client';
import useMousePosition from '@/hooks/useMousePosititon';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function MouseHookExamplePage() {
    const [showExample1, setShowExample1] = useState(false);
    const [showExample2, setShowExample2] = useState(false);
    const [showExample3, setShowExample3] = useState(false);
    const { x: mouseX, y: mouseY } = useMousePosition();

    const [circleX, setCircleX] = useState(0);
    const [circleY, setCircleY] = useState(0);

    useEffect(() => {
        const updateCirclePosition = () => {
            const delayFactor = 0.1;
            const deltaX = (mouseX - circleX) * delayFactor;
            const deltaY = (mouseY - circleY) * delayFactor;
            setCircleX(circleX + deltaX);
            setCircleY(circleY + deltaY);
            requestAnimationFrame(updateCirclePosition);
        };

        requestAnimationFrame(updateCirclePosition);
    }, [mouseX, mouseY, circleX, circleY]);

    return (
        <div className='flex flex-col items-center place-items-start pt-[100px]  h-screen'>
            <div className='flex flex-col gap-1'>
                <h1 className='mb-4 text-4xl font-bold'>
                    useMousePosition.ts hook example
                </h1>
                <Link
                    className='underline text-sm'
                    href='https://github.com/remcostoeten/remco-tools/blob/dev/hooks/useMousePosition.ts'
                    target='_blank'
                    aria-label='Github  remcostoeten github repo'
                    title='github remcostoeten github repo'
                >
                    code here
                </Link>
            </div>
            <p className='text-lg'>
                Mouse position: {mouseX}, {mouseY}
            </p>
            <button
                className='mt-4'
                onClick={() => {
                    setShowExample1(!showExample1);
                    setShowExample2(false);
                    setShowExample3(false);
                }}
            >
                Toggle Example 1
            </button>
            {showExample1 && (
                <div className='p-4 mt-4 border border-gray-300'>
                    <h2 className='mb-2 text-xl font-bold'>Example 1</h2>
                    <p>This is example 1 content.</p>
                </div>
            )}
            <button
                className='mt-4'
                onClick={() => {
                    setShowExample2(!showExample2);
                    setShowExample1(false);
                    setShowExample3(false);
                }}
            >
                Toggle Example 2
            </button>
            {showExample2 && (
                <div className='p-4 mt-4 border border-gray-300'>
                    <h2 className='mb-2 text-xl font-bold'>Example 2</h2>
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: 'blue',
                            position: 'absolute',
                            top: `${circleY}px`,
                            left: `${circleX}px`,
                        }}
                    ></div>
                </div>
            )}
            <button
                className='mt-4'
                onClick={() => {
                    setShowExample3(!showExample3);
                    setShowExample1(false);
                    setShowExample2(false);
                }}
            >
                Toggle Example 3
            </button>
            {showExample3 && (
                <div className='p-4 mt-4 border border-gray-300'>
                    <h2 className='mb-2 text-xl font-bold'>About Me</h2>
                    <p>
                        Hi, I'm [Your Name], and this is my About Me page. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. ...
                    </p>
                    <button
                        className='px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700'
                        style={{
                            transform: `translate(${mouseX / 10}px, ${mouseY / 10
                                }px)`,
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

export default MouseHookExamplePage;
