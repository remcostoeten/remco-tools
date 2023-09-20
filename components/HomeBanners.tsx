'use client';
import React, { useEffect, useState } from 'react';

import AnimatedDiv from '@/utils/AnimatedDiv';
import ToolCard from '@/components/core/Carousel/CardComponent';
import { banners } from '@/components/core/Carousel/Carousel';
import ArrowDown from './ArrowDown';
import { Card } from './core/card';

export const HomeBanners = () => {
    const [scrollPosition, setScrollPosition] = useState(100);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(scrollPosition);

    return (
        <>
            <section id="banners" className="relative h-screen border-t border-b border-white">
                <div className="pt-8 big-container mQ3_iconsb-22">
                    <div className="grid items-center content-center grid-cols-3 col-span-3 gap-6 mx-auto justify-items-center selection:grid">
                        {banners.map((banner, index) => (
                            <Card>
                                <ToolCard title={banner.title} description={banner.description} icon={banner.icon} />
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
