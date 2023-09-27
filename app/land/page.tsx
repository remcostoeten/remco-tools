'use client';
import InteractiveDots from '@/components/effects/InteractiveDots';
import { Slider } from '@/components/ui/slider';
import React, { useState } from 'react';

export default function Page() {
    const [sliderValue, setSliderValue] = useState<number>(33);
    const [dotSize, setDotSize] = useState<number>(150);

    const handleSliderChange = (event: React.FormEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        setSliderValue(value);
        setDotSize(value); // Update dotSize directly
    };

    const increaseDotSize = () => {
        setDotSize(dotSize + 1);
    }

    const decreaseDotSize = () => {
        setDotSize(dotSize - 1);
    }

    return (
        <>
            <div className='w-96 h-96 absolute top-[100px] left-[100px] text-white z-max'>
                <button onClick={increaseDotSize}>Increase dot size</button>
                <button onClick={decreaseDotSize}>Decrease dot size</button>
                <input type='range' min={10} max={100} value={sliderValue} onChange={handleSliderChange} />
                <div>Current dot size: {dotSize}</div>
            </div>

            <div className='w-screen h-[100px] bg-white z-max'>
                <div className='absolute z-max top-[100px] left-[100px]'></div>
            </div>
            <main>
                <InteractiveDots size={10} dotSize={dotSize} />
            </main>
        </>
    )
}
