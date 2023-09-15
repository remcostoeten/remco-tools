'use client';
'use client';
import { useState } from 'react';
import { useTheme } from '@/context/theme-context';
import { Input } from '../ui/input';
import GlowEffect from '../ParallaxBackground';
import Trailer from './Cursor';
import { Switch } from '../ui/switch';

const ThemeSettings: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [animationsOff, setAnimationsOff] = useState(() => JSON.parse(localStorage.getItem('animationsOff') || 'false'));

    const animationsOffHandler = () => {
        const newAnimationsOff = !animationsOff;
        setAnimationsOff(newAnimationsOff);
        localStorage.setItem('animationsOff', JSON.stringify(newAnimationsOff));
    };

    return (
        <>
            {animationsOff ? (
                <></> // If animations are off, render nothing (empty fragment)
            ) : (
                <>
                    <Trailer />
                    <GlowEffect />
                </>
            )}

            <div className="  flex fixed  flex-col left-2 bottom-2">
                <Switch onCheckedChange={animationsOffHandler} />
                <span className="text-sm text-slate-300 dark:text-offwhite">Turn {animationsOff ? <>on</> : <>off</>} cursor</span>
            </div>
            <div className="fixed bottom-10 right-10 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
                fwfwf
            </div>
            <div className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950">
                <div onClick={toggleTheme}>
                    <Input id="toggle" className="toggle translate-x-0.5 translate-y-1" type="checkbox" />
                </div>
            </div>
        </>
    );
};

export default ThemeSettings;
