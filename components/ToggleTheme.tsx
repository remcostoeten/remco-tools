'use client';;
import { useTheme } from '@/context/theme-context';
import { SunMedium } from 'lucide-react';
import { LuMoon } from 'react-icons/lu';

const ToggleTheme: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            className='fixed cursor-pointer right-2 bottom-2 '
            onClick={toggleTheme}
        >
            {theme === 'light' ? (
                <LuMoon color='#111' fontSize={20} />
            ) : (
                <SunMedium color='#fff' fontSize={20} />
            )}
        </div>
    );
};

export default ToggleTheme;
