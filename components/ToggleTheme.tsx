'use client';
import { useTheme } from '@/context/theme-context';
import { SunIcon } from '@radix-ui/react-icons';
import { SunDim, SunMedium, Sunrise, Sunset, SunSnow } from 'lucide-react';
import { LuMoon } from 'react-icons/lu';

const ToggleTheme: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className='fixed cursor-pointer right-10 bottom-7 scale-150' onClick={toggleTheme}>
            <input id="toggle" className="toggle" type="checkbox" />
        </div>
    );
    
};

export default ToggleTheme;
