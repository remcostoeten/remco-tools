'use client';;
import { useTheme } from '@/context/theme-context';

const ToggleTheme: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'>
            <div onClick={toggleTheme}>
                <input
                    id='toggle'
                    className='toggle translate-x-0.5 translate-y-1 toggle'
                    type='checkbox'
                    checked={theme === 'light'} 
                />
            </div>
        </div>
    );
};

export default ToggleTheme;
