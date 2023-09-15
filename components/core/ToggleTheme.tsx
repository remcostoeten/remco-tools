'use client';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/theme-context';
import { Input } from '../ui/input';
import GlowEffect from '../ParallaxBackground';
import Trailer from './Cursor';
import { Switch } from '../ui/switch';

const ThemeSettings: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const [animationsOff, setAnimationsOff] = useState(false);

    useEffect(() => {
        const storedValue = localStorage.getItem('animationsOff');
        setAnimationsOff(JSON.parse(storedValue || 'false'));
    }, []);

    const animationsOffHandler = () => {
        const newAnimationsOff = !animationsOff;
        setAnimationsOff(newAnimationsOff);
        localStorage.setItem('animationsOff', JSON.stringify(newAnimationsOff));
    };
    return (
        <>
            <div className='hidden sm:block'>
                {animationsOff ? (
                    <></>
                ) : (
                    <>
                        <Trailer />
                        <GlowEffect />
                    </>
                )}
            </div>
            <div className='flex fixed  flex-col left-2 bottom-2'>
                <Switch onCheckedChange={animationsOffHandler} />
                <span className='text-sm text-slate-300 dark:text-offwhite'>
                    Turn {animationsOff ? <>on</> : <>off</>} cursor
                </span>
            </div>

            <div
                onClick={animationsOffHandler}
                className={`fixed bottom-[80px] right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
                    animationsOff ? 'red-shadow' : 'green-shadow '
                }`}
            >
                <svg
                    // @ts-ignore
                    style={{ scale: 0.5, translateY: -4 }}
                    width='45'
                    height='90'
                    viewBox='0 0 45 45'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g filter='url(#filter0_d_2_646)'>
                        <path
                            d='M22.5 51L15 12L48 31.5L31.5 36L22.5 51Z'
                            fill={theme === 'dark' ? '#fff' : '#000'}
                        />
                        <path
                            d='M15.7631 10.7086L12.8987 9.01599L13.527 12.2833L21.027 51.2832L21.7679 55.1358L23.7863 51.7716L32.4762 37.2885L48.3948 32.9472L51.8178 32.0136L48.7632 30.2085L15.7631 10.7086Z'
                            stroke='white'
                            strokeLinecap='square'
                        />
                    </g>
                </svg>
            </div>

            <div
                className={`fixed bottom-5 right-5  backdrop-blur-[0.5rem] border  rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all ${
                    theme === 'dark' ? 'green-shadow' : 'red-shadow red-pulse'
                }`}
            >
                {' '}
                <div onClick={toggleTheme}>
                    <Input
                        id='toggle'
                        className='toggle translate-x-0.5 translate-y-1'
                        type='checkbox'
                    />
                </div>
            </div>
        </>
    );
};

export default ThemeSettings;
