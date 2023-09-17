'use client';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
    return (
        <>
            <div className='flex flex-col gap-[125px] justify-between w-screen'>
                <main className='py-20 mt-4 mb-4 border effect'>
                    <button aria-label='Say Hello'>
                        <div>
                            <span className='inner'>
                                <div
                                    className='particles'
                                    aria-hidden='true'
                                ></div>
                                <span className='text'>Say hello</span>
                                <span
                                    className='halo'
                                    aria-hidden='true'
                                ></span>
                            </span>
                        </div>
                        <span className='shadow' aria-hidden='true'></span>
                    </button>
                </main>

                <div className='glowcard ' role='button'>
                    <span className='glow'></span>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default Home;
