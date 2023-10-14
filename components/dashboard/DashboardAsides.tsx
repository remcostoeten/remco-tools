import React from 'react';

type DashboardAsideProps = {
    children?: React.ReactNode;
    variant?: 'left' | 'right';
    className?: string;
};

export default function DashboardAsides({
    children,
    variant,
    className,
}: DashboardAsideProps) {
    const width = variant === 'left' ? 'dashboard-left clear-header-aside w-[15%]' : 'dashboard-right w-[30%]';
    const position = variant === 'left' ? 'left-0' : 'right-0';

    return (
        <>
            <aside
                className={`bg-black ${width} ${position} ${className || 'top-0 bg-red-400 fixed min-h-screen'}`}
            >
                {children}
            </aside>
        </>
    );
}