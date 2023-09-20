'use client';
import { Card } from '@/components/core/card';
import { useMouseHoverEffect } from '@/hooks/useRemcostoeten';
import React from 'react';

interface YourComponentProps {
    children: React.ReactNode;
}

export default function page() {
    const { className } = useMouseHoverEffect();

    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                    {' '}
                    <Card>
                        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16"></div>{' '}
                    </Card>
                </div>
            </div>
        </div>
    );
}
