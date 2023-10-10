import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

interface ExpenseIconProps {
    children?: React.ReactNode;
    className?: string;
    color?: string;
}

function  ExpenseIconWrapper({ children, className = '', color = 'primary' }: ExpenseIconProps) {
    return (
        <section className={`dblock pl-4 ${className}`}>
            <div className={`w-12 h-12 bg-dash-alt flex items-center justify-center rounded-md text-${color}`}>
                {children}
            </div>
        </section>
    );
}

export default ExpenseIconWrapper;